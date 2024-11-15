import { useEffect, useState } from "react";
import { Service } from "../../types/type";
import axios from "axios";
import { ENDPOINTS, getStorageUrl } from "../../config/api";
import { Link } from "react-router-dom";

export default function HomeServiceWrapper() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<{ data: Service[] }>(ENDPOINTS.SERVICES)
      .then((response) => {
        setServices(response.data.data);
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
    <div className='row g-4'>
      <div className='col-xl-8'>
        <div className='card services-card'>
          <div className='card-body'>
            <h3 className='card-title'>
              Services I Offered
              <a className='link-btn' href='/services'>
                See All Services
                <svg
                  className='icon'
                  width={20}
                  height={20}
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.16699 10H15.8337'
                    stroke='#4770FF'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10.833 15L15.833 10'
                    stroke='#4770FF'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10.833 5L15.833 10'
                    stroke='#4770FF'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </h3>
            <div className='services-main mt-24'>
              <div className='row g-4'>
                {services.slice(0, 4).map((service) => (
                  <div key={service.id} className='col-md-3 col-sm-6 col-6'>
                    <div className='services-item text-center'>
                      <div className='image'>
                        <img
                          src={getStorageUrl(service.icon)}
                          alt={service.name}
                        />
                      </div>
                      <div className='text'>
                        <h3 className='title'>{service.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-xl-4'>
        <div className='card lets-talk-together-card'>
          <div className='card-body'>
            <div className='scrolling-info'>
              <div className='slider-item'>
                <p>
                  Available For Hire 🚀 Let's Create Something Amazing Together!
                  👨‍💻 Available For Hire 🚀 Let's Create Something Amazing
                  Together! 👨‍💻
                </p>
              </div>
            </div>
            <h3 className='card-title'>
              Let's👋
              <span className='d-block'>Work Together</span>
            </h3>
            <Link className='link-btn' to='/contact'>
              Let's Talk
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
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M17.5 6.6665L10 14.1665L2.5 6.6665'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
