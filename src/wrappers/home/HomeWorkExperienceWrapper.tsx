import { useEffect, useState } from "react";
import { WorkExperience } from "../../types/type";
import axios from "axios";
import { ENDPOINTS, getStorageUrl } from "../../config/api";

export default function HomeWorkExperienceWrapper() {
  const [WorkExperience, setWorkExperience] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<{ data: WorkExperience[] }>(ENDPOINTS.WORK_EXPERIENCE)
      .then((response) => {
        setWorkExperience(response.data.data);
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
    <div className='card'>
      <div className='card-body work-experiance-card'>
        <h3 className='card-title'>Work Experience</h3>
        <div className='work-experiance-main'>
          <ul className='work-experiance-slider list-unstyled'>
            {WorkExperience.map((experience) => (
              <li key={experience.id}>
                <div className='date'>
                  <p>
                    {new Date(experience.start_date).toLocaleDateString(
                      "en-GB",
                      { month: "2-digit", year: "2-digit" }
                    )}{" "}
                    -{" "}
                    {new Date(experience.end_date).toLocaleDateString("en-GB", {
                      month: "2-digit",
                      year: "2-digit",
                    })}
                  </p>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <img
                      src={getStorageUrl(experience.company_logo)}
                      alt={experience.company_name}
                    />
                  </div>
                  <div className='text'>
                    <h4 className='title'>{experience.company_name}</h4>
                    <h6 className='subtitle'>{experience.position}</h6>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className='work-experiance-slider list-unstyled'>
            {WorkExperience.map((experience) => (
              <li key={experience.id}>
                <div className='date'>
                  <p>
                    {new Date(experience.start_date).toLocaleDateString(
                      "en-GB",
                      { month: "2-digit", year: "2-digit" }
                    )}{" "}
                    -{" "}
                    {new Date(experience.end_date).toLocaleDateString("en-GB", {
                      month: "2-digit",
                      year: "2-digit",
                    })}
                  </p>
                </div>
                <div className='info'>
                  <div className='icon'>
                    <img
                      src={getStorageUrl(experience.company_logo)}
                      alt={experience.company_name}
                    />
                  </div>
                  <div className='text'>
                    <h4 className='title'>{experience.company_name}</h4>
                    <h6 className='subtitle'>{experience.position}</h6>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
