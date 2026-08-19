import { useEffect, useRef, useState } from "react";
import "../AiChatPage.css";

/**
 * Expected API contract:
 * POST {apiUrl}
 * body: { message: string, conversationId?: string }
 * response: { reply: string, conversationId?: string }
 */
function AiChatPage({ apiUrl, headers = {} }) {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      text: "Hello! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState();
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const abortControllerRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  useEffect(() => {
    return () => abortControllerRef.current?.abort();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const message = input.trim();
    if (!message || isSending) return;

    if (!apiUrl) {
      setError("The chatbot API URL has not been configured.");
      return;
    }

    const userMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      text: message,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setIsSending(true);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify({ message, conversationId }),
        signal: controller.signal,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || `Request failed (${response.status})`);
      }

      if (typeof data.reply !== "string" || !data.reply.trim()) {
        throw new Error("The chatbot returned an invalid response.");
      }

      setConversationId(data.conversationId || conversationId);
      setMessages((current) => [
        ...current,
        {
          id: `${Date.now()}-assistant`,
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch (requestError) {
      if (requestError.name !== "AbortError") {
        setError(requestError.message || "Unable to reach the chatbot.");
      }
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
        setIsSending(false);
      }
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <main className="ai-chat-page">
      <section className="ai-chat-card" aria-labelledby="chat-heading">
        <header className="ai-chat-header">
          <p className="ai-chat-eyebrow">AI ASSISTANT</p>
          <h1 id="chat-heading">How can I help?</h1>
        </header>

        <div
          className="ai-chat-messages"
          aria-live="polite"
          aria-busy={isSending}
        >
          {messages.map((message) => (
            <div
              className={`ai-chat-message ai-chat-message--${message.role}`}
              key={message.id}
            >
              <span className="ai-chat-role">
                {message.role === "user" ? "You" : "Assistant"}
              </span>
              <p>{message.text}</p>
            </div>
          ))}

          {isSending && (
            <div className="ai-chat-message ai-chat-message--assistant">
              <span className="ai-chat-role">Assistant</span>
              <p className="ai-chat-thinking">Thinking…</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="ai-chat-form" onSubmit={handleSubmit}>
          <label htmlFor="chat-message">Message</label>
          <textarea
            id="chat-message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything…"
            rows={4}
            maxLength={4000}
            disabled={isSending}
          />

          <div className="ai-chat-form-footer">
            <span>Enter to send · Shift + Enter for a new line</span>
            <button type="submit" disabled={isSending || !input.trim()}>
              {isSending ? "Sending…" : "Send message"}
            </button>
          </div>

          {error && (
            <p className="ai-chat-error" role="alert">
              {error}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default AiChatPage;
