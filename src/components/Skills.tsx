import { useEffect, useState } from "react";
import { Skill } from "../types/type";
import axios from "axios";
import { ENDPOINTS, getStorageUrl } from "../config/api";

export default function Skills() {
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
    <div className='working-with-area'>
      <h2 className='main-common-title'>
        Experience With Various Technologies
      </h2>
      <div className='working-with-main'>
        {skills.map((skill) => (
          <div className='items' key={skill.id}>
            <img src={getStorageUrl(skill.icon)} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
