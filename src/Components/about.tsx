function About() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>About Website</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Organize your tasks effortlessly with our intuitive to-do website.
              Streamline your day, boost productivity, and stay on top of your
              goals. This user-friendly platform is designed to make task
              management a breeze. Prioritize, categorize, and track your
              progress seamlessly.
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Built with React
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Built with React</strong>, our website combines a sleek
              interface with powerful functionality. Enjoy a responsive and
              dynamic user experience as you navigate through your tasks.
              React's efficiency ensures a smooth and fast-loading environment,
              enhancing your productivity without compromising on user
              satisfaction. Experience the next level of task management with
              our React-powered to-do website. Stay organized, focused, and in
              control of your schedule.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
