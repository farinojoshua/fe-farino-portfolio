import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { ENDPOINTS } from "../config/api";
import {
  ContactFormData,
  ValidationErrors,
  SubmitStatus,
  ContactResponse,
} from "../types/type";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errors[name as keyof ValidationErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await axios.post<ContactResponse>(
        ENDPOINTS.CONTACTS,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 201) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          budget: "",
          message: "",
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        // Validation errors
        setErrors(error.response.data.errors);
        setSubmitStatus({
          type: "error",
          message: "Please correct the errors in the form.",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: "An error occurred. Please try again later.",
        });
        console.error("Error submitting form:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='leave-comments-area'>
      <div className='comments-box'>
        {submitStatus.message && (
          <div
            className={`alert ${
              submitStatus.type === "success" ? "alert-success" : "alert-danger"
            } mb-4`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='row gx-3'>
            <div className='col-md-6'>
              <div className='mb-4'>
                <label className='form-label'>Name</label>
                <input
                  name='name'
                  type='text'
                  className={`form-control shadow-none ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder='Enter your name'
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className='invalid-feedback'>{errors.name[0]}</div>
                )}
              </div>
            </div>

            <div className='col-md-6'>
              <div className='mb-4'>
                <label className='form-label'>Email</label>
                <input
                  name='email'
                  type='email'
                  className={`form-control shadow-none ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className='invalid-feedback'>{errors.email[0]}</div>
                )}
              </div>
            </div>

            <div className='col-md-6'>
              <div className='mb-4'>
                <label className='form-label'>Subject</label>
                <input
                  name='subject'
                  type='text'
                  className={`form-control shadow-none ${
                    errors.subject ? "is-invalid" : ""
                  }`}
                  placeholder='Subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <div className='invalid-feedback'>{errors.subject[0]}</div>
                )}
              </div>
            </div>

            <div className='col-md-6'>
              <div className='mb-4'>
                <label className='form-label'>Budget</label>
                <select
                  name='budget'
                  className={`form-select shadow-none ${
                    errors.budget ? "is-invalid" : ""
                  }`}
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value=''>Select budget...</option>
                  <option value='$5000'>$5000</option>
                  <option value='$5000 - $10000'>$5000 - $10000</option>
                  <option value='$10000 - $20000'>$10000 - $20000</option>
                  <option value='$20000'>$20000+</option>
                </select>
                {errors.budget && (
                  <div className='invalid-feedback'>{errors.budget[0]}</div>
                )}
              </div>
            </div>

            <div className='col-md-12'>
              <div className='mb-4'>
                <label className='form-label'>Message</label>
                <textarea
                  name='message'
                  className={`form-control shadow-none ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  rows={4}
                  placeholder='Type details about your inquiry'
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <div className='invalid-feedback'>{errors.message[0]}</div>
                )}
              </div>
            </div>

            <div className='col-md-12'>
              <button
                className='submit-btn'
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <svg
                  className='icon'
                  width={20}
                  height={20}
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17.5 11.6665V6.6665H12.5'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17.5 6.6665L10 14.1665L2.5 6.6665'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
