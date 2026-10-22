
import { useState } from "react";
import "./CSCApplicationForm.css";

const SCRIPT_URL = "[https://script.google.com/macros/s/AKfycbywFE3OKiVXMMQ0CzjWmArY0o09IRAFfueTYxlzvd_uUgGlRS55oFHIv_a18TR1lMVa/exec](https://script.google.com/macros/s/AKfycbywFE3OKiVXMMQ0CzjWmArY0o09IRAFfueTYxlzvd_uUgGlRS55oFHIv_a18TR1lMVa/exec)";

const initialForm = {
  name: "",
  mobile: "",
  village: "Machanpalli",
  service: "",
  details: "",
  website: "",
};

export default function CSCApplicationForm() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!form.name.trim() || !form.service) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (!SCRIPT_URL.startsWith("https://script.google.com/macros/s/")) {
      setMessage("Admin setup pending: add the Apps Script URL first.");
      return;
    }

    setSending(true);

    try {
      const body = new URLSearchParams(form);

      // no-cors prevents browser CORS errors, but the response
      // cannot confirm whether Google Sheets saved the row.
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setMessage(
        "Request sent. Please contact the CSC centre if you need confirmation."
      );
      setForm(initialForm);
    } catch {
      setMessage(
        "Could not send the request. Please check your internet and try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="csc-application" id="online-application">
      <div className="csc-form-heading">
        <span className="csc-form-tag">MACHANPALLI CSC</span>
        <h2>Online Service Request</h2>
        <p>
          Fill in your details. Our centre will contact you
          regarding your service request.
        </p>
      </div>

      <form className="csc-form" onSubmit={handleSubmit}>
        <label>
          Applicant Name *
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            maxLength={100}
            autoComplete="name"
            required
          />
        </label>

        <label>
          Mobile Number *
          <input
            name="mobile"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            value={form.mobile}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="10-digit mobile number"
            required
          />
        </label>

        <label>
          Village *
          <input
            name="village"
            value={form.village}
            onChange={handleChange}
            maxLength={100}
            required
          />
        </label>

        <label>
          Service Required *
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option>PAN Card</option>
            <option>Aadhaar Service Information</option>
            <option>Voter ID</option>
            <option>Student Services</option>
            <option>Government Schemes</option>
            <option>Village Services</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Application Details
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            maxLength={1000}
            rows={4}
            placeholder="Briefly explain what help you need"
          />
        </label>

        <div className="csc-honeypot" aria-hidden="true">
          <label>
            Leave this field empty
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <button type="submit" disabled={sending}>
          {sending ? "Sending..." : "Submit Application"}
        </button>

        {message && (
          <p className="csc-form-message" role="status">
            {message}
          </p>
        )}

        <p className="csc-form-note">
          Do not enter OTPs, passwords, banking PINs, or unnecessary
          identity-document details in this form.
        </p>
      </form>
    </section>
  );
}
