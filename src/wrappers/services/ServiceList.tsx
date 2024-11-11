import { useEffect, useState } from "react";
import { Service } from "../../types/type";
import axios from "axios";

export default function ServiceList() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL = "http://127.0.0.1:8000/storage/";

  useEffect(() => {
    axios
      .get<{ data: Service[] }>("http://127.0.0.1:8000/api/services")
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
      {services.map((service) => (
        <div className='col-md-3 col-sm-6 col-6' key={service.id}>
          <div className='services-item text-center'>
            <div className='image'>
              <img src={baseURL + service.icon} alt={service.name} />
            </div>
            <div className='text'>
              <h3 className='title'>{service.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
