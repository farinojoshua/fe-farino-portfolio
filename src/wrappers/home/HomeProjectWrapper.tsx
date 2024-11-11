import { useEffect, useState } from "react";
import { Project } from "../../types/type";
import axios from "axios";

export default function HomeProjectWrapper() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL = "http://127.0.0.1:8000/storage/";

  useEffect(() => {
    axios
      .get<{ data: Project[] }>("http://127.0.0.1:8000/api/projects")
      .then((response) => {
        setProjects(response.data.data);
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
    return <p>{error}</p>;
  }
  return (
    <div className='card card-projects'>
      <div className='card-body'>
        <h3 className='card-title'>
          Recent Projects
          <a className='link-btn' href='/projects'>
            All Projects
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
        <div className='projects-main mt-24'>
          <div className='row g-4 parent-container'>
            {projects.slice(0, 2).map((project) => (
              <div className='col-lg-12'>
                <div className='project-item'>
                  <div className='image'>
                    <img
                      src={baseURL + project.main_image}
                      alt={project.name}
                      className='img-fluid w-100'
                    />
                    <a
                      href={baseURL + project.main_image}
                      className='gallery-popup full-image-preview parent-container'
                    >
                      <svg
                        className='icon'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                      >
                        <path d='M10 4.167v11.666M4.167 10h11.666' />
                      </svg>
                    </a>
                    <div className='info'>
                      <span className='category'>{project.service}</span>
                    </div>
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
