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
              <h2>Want to have a conversation?</h2>
              <p>
                Open to conversations about AI, engineering, technology,
                intelligent automation, product leadership, and
                consulting—especially in the Austin, San Antonio or other south
                Texas Areas. Always open to opportunities to further my
                interests and career.
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
              <a
                href="https://www.google.com/maps/place/Bandera,+TX/@28.973493,-99.156084,13z/data=!3m1!4b1!4m5!3m4!1s0x8662c7c8c8c8c8c8:0x8c8c8c8c8c8c8c8c!8m2!3d28.973493!4d-99.156084"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-geo-alt" />
                <span>
                  <small>Address</small>6760 Whartons Dock Rd
                  <br />
                  Bandera, TX 78003
                </span>
              </a>
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
