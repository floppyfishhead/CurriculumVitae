import PageHeader from "../Components/PageHeader";
import Avatar from "../Components/Avatar";

function Biography() {
  return (
    <>
      <PageHeader eyebrow="A little more personal" title="Biography">
        A brief example you can replace with your own story.
      </PageHeader>
      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-4 d-flex justify-content-center">
              <Avatar />
            </div>
            <div className="col-lg-8 bio-copy">
              <p className="eyebrow dark">Example biography</p>
              <h2>Curious by nature. Practical by training.</h2>
              <p>
                Brian Turner is an electrical engineer, business leader, and
                lifelong learner who enjoys making complex technology useful.
                His career has moved through automotive systems, manufacturing,
                renewable energy, product strategy, and artificial
                intelligence—always with a focus on connecting people, ideas,
                and execution.
              </p>
              <p>
                Today, Brian is especially interested in the thoughtful
                application of AI and intelligent automation to real engineering
                and business challenges. Away from the whiteboard, add a
                sentence here about family, hobbies, community, or the
                unexpected interests that make you, you.
              </p>
              <div className="notice mt-4">
                <i className="bi bi-lightbulb" />
                <div>
                  <strong>Make it yours</strong>
                  <br />A memorable biography usually includes one personal
                  detail, one guiding belief, and one sentence about what you
                  hope to build next.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Biography;
