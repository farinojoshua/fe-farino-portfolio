import { useEffect, useState } from "react";
import { Testimonials } from "../types/type";
import axios from "axios";
import { ENDPOINTS } from "../config/api";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<{ data: Testimonials[] }>(ENDPOINTS.TESTIMONIALS)
      .then((response) => {
        setTestimonials(response.data.data);
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

  const renderStars = (rating: number) => {
    return (
      <>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <i
              key={index}
              className={index < rating ? "fas fa-star" : "far fa-star"}
            />
          ))}
      </>
    );
  };

  return (
    <div className='client-feedback'>
      <h2 className='main-common-title'>Trusted By 1200+ Clients</h2>
      <div className='row client-feedback-slider'>
        {testimonials.map((testimonial) => (
          <div className='col-lg-6' key={testimonial.id}>
            <div className='feedback-item'>
              <div className='feedback-top-info'>
                <div className='rating'>{renderStars(testimonial.rating)}</div>
                <div className='website'>
                  <a href={testimonial.project_url}>
                    Visit Site
                    <svg
                      className='arrow-up'
                      width={14}
                      height={15}
                      viewBox='0 0 14 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9.91634 4.5835L4.08301 10.4168'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M4.66699 4.5835H9.91699V9.8335'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className='details'>
                <p>{testimonial.testimonial}</p>
              </div>
              <div className='designation'>
                <p>
                  <span>{testimonial.client_name}</span> -{" "}
                  {testimonial.client_position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
