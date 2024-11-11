import { useEffect, useState } from "react";
import { Skill } from "../../types/type";
import axios from "axios";

export default function HomeSkillWrapper() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL = "http://127.0.0.1:8000/storage/";

  useEffect(() => {
    axios
      .get<{ data: Skill[] }>("http://127.0.0.1:8000/api/skills")
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
              <div className='col-xl-4 col-md-4 col-sm-6 col-6'>
                <div className='expertise-item'>
                  <div className='image text-center'>
                    <img src={baseURL + skill.icon} alt={skill.name} />
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
