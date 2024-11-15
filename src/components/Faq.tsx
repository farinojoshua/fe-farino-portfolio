import { useEffect, useState } from "react";
import { Faqs } from "../types/type";
import axios from "axios";
import { ENDPOINTS } from "../config/api";

export default function Faq() {
  const [faqs, setFaqs] = useState<Faqs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<{ data: Faqs[] }>(ENDPOINTS.FAQS)
      .then((response) => {
        setFaqs(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='frequently-asked-questions'>
      <h2 className='main-common-title'>Frequently Asked Questions</h2>
      <div className='frequently-asked-questions-main'>
        <div className='accordion' id='accordionExample'>
          {faqs.map((faq, index) => (
            <div className='accordion-item' key={faq.id}>
              <h4 className='accordion-header' id={`heading${faq.id}`}>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#collapse${faq.id}`}
                  aria-expanded={index === 0} // Expanded only for the first item
                  aria-controls={`collapse${faq.id}`}
                >
                  {faq.question}
                  <span className='ms-auto'>
                    <span className='icon ms-4'>
                      <img
                        className='icon-plus'
                        src='/assets/img/icons/plus.svg'
                        alt='plus'
                      />
                      <img
                        className='icon-minus d-none'
                        src='/assets/img/icons/minus.svg'
                        alt='minus'
                      />
                    </span>
                  </span>
                </button>
              </h4>
              <div
                id={`collapse${faq.id}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                aria-labelledby={`heading${faq.id}`}
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
