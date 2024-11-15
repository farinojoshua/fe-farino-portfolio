import { useEffect, useState } from "react";
import { Skill } from "../../types/type";
import axios from "axios";
import { ENDPOINTS, getStorageUrl } from "../../config/api";

export default function HomeSkillWrapper() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<{ data: Skill[] }>(ENDPOINTS.SKILLS)
      .then((Response) => {
        setSkills(Response.data.data);
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
    <div className='card expertise-card'>
      <div className='card-body'>
        <h3 className='card-title'>My Expert Area</h3>
        <div className='expertise-main mt-24'>
          <div className='row g-3'>
            {skills.map((skill) => (
              <div className='col-xl-4 col-md-4 col-sm-6 col-6' key={skill.id}>
                <div className='expertise-item'>
                  <div className='image text-center'>
                    <img src={getStorageUrl(skill.icon)} alt={skill.name} />
                  </div>
                  <div className='text'>
                    <h4 className='title'>{skill.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
