import PageHeader from "../Components/PageHeader";
import SocialLinks from "../Components/SocialLinks";

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Let’s connect" title="Thanks for visiting.">
        I appreciate you taking the time to learn about my work. If an idea,
        role, or challenge comes to mind, I’d be glad to hear from you.
      </PageHeader>
      <section className="section">
        <div className="container">
          <div className="contact-card">
            <div>
              <p className="eyebrow dark">Contact details</p>
              <h2>Start a conversation</h2>
              <p>
                Open to conversations about AI, engineering, technology,
                intelligent automation, product leadership, and
                consulting—especially opportunities in the Kerrville area or
                remote roles.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:keith10199@gmail.com">
                <i className="bi bi-envelope" />
                <span>
                  <small>Email</small>keith10199@gmail.com
                </span>
              </a>
              <a href="tel:+18304961895">
                <i className="bi bi-telephone" />
                <span>
                  <small>Phone</small>830-496-1895
                </span>
              </a>
              <div className="contact-address">
                <i className="bi bi-geo-alt" />
                <span>
                  <small>Address</small>102 Elm Way
                  <br />
                  Kerrville, TX 78028
                </span>
              </div>
              <div className="contact-social">
                <small>Find me online</small>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
