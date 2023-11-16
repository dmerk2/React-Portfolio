import isValidEmail from "../utils/helpers";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get the values from the form
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Validate email
    if (!isValidEmail(email)) {
      // Handle invalid email
      alert("Please enter valid email address");
      return;
    }

    // Process the form data (you can add your logic here)
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Contact Me</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
