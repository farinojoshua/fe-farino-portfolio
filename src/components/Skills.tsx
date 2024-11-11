import { useEffect, useState } from "react";
import { Skill } from "../types/type";
import axios from "axios";

export default function Skills() {
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
    <div className='working-with-area'>
      <h2 className='main-common-title'>
        Experience With Various Technologies
      </h2>
      <div className='working-with-main'>
        {skills.map((skill) => (
          <div className='items' key={skill.id}>
            <img src={baseURL + skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
