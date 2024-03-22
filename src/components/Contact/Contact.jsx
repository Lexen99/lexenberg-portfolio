import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Get In Touch</h2>
        <p>
          If you're looking for someone passionate about coding and eager to
          tackle new challenges, please feel free to contact me via email or on{" "}
          <span>
            <a href="https://www.linkedin.com/in/oliver-lexenberg-411788264/">
              Linkedin
            </a>
          </span>
          . I'm excited to discuss how I can contribute to your team's success
        </p>

        <a className="cta-link" href="mailto:lexenbergoliver@gmail.com">
            Reach Out
        </a>
      </div>
    </section>
  );
};

export default Contact;
