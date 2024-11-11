import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import { Project } from "../types/type";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Projects() {
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

  // Conditional rendering for loading and error states
  if (loading) {
    return (
      <div id='page-content'>
        <header className='header-area'>
          <Navbar />
        </header>
        <main>
          <section className='content-box-area mt-4'>
            <div className='container'>
              <p>Loading...</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div id='page-content'>
        <header className='header-area'>
          <Navbar />
        </header>
        <main>
          <section className='content-box-area mt-4'>
            <div className='container'>
              <p>Error: {error}</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div id='page-content'>
      {/* header part start */}
      <header className='header-area'>
        <Navbar></Navbar>
      </header>
      {/* header part end */}
      {/* main area part start */}
      <main>
        <section className='content-box-area mt-4'>
          <div className='container'>
            <div className='row g-4'>
              <div className='col-xl-4'>
                <ProfileCard></ProfileCard>
              </div>
              <div className='col-xl-8'>
                <div className='card content-box-card'>
                  <div className='card-body portfolio-card'>
                    <div className='top-info'>
                      <div className='text'>
                        <h1 className='main-title'>
                          Check Out My Latest <span>Projects</span>
                        </h1>
                        <p>
                          I'm here to help if you're searching for a product
                          designer to bring your idea to life or a design
                          partner to help take your business to the next level.
                        </p>
                      </div>
                    </div>
                    <div className='portfolio-area'>
                      <div className='row g-4 parent-container'>
                        {projects.map((project) => (
                          <div className='col-lg-12' key={project.id}>
                            <div className='portfolio-item'>
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
                              </div>
                              <div className='text'>
                                <div className='info'>
                                  <Link
                                    to={`/project/${project.id}`}
                                    className='title'
                                  >
                                    {project.name}
                                  </Link>
                                  <p className='subtitle'>{project.service}</p>
                                </div>
                                <div className='visite-btn'>
                                  <a
                                    href={project.project_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                  >
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
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className='pagination'>
                        <ul className='list-unstyled'>
                          <li className='prev'>
                            <button>
                              <svg
                                className='icon'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                                />
                              </svg>
                            </button>
                          </li>
                          <li>
                            <button>1</button>
                          </li>
                          <li>
                            <button>2</button>
                          </li>
                          <li>
                            <button>3</button>
                          </li>
                          <li>
                            <button className='next-page-btn'>
                              <span className='dots'>
                                <i className='fas fa-ellipsis-h' />
                              </span>
                              <span className='next-page'>
                                <svg
                                  className='icon icon-arrow-right'
                                  xmlns='http://www.w3.org/2000/svg'
                                  width={24}
                                  height={24}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='currentColor'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <path d='m6 17 5-5-5-5' />
                                  <path d='m13 17 5-5-5-5' />
                                </svg>
                              </span>
                              <span className='next-page-number'>
                                Next 4 pages
                              </span>
                            </button>
                          </li>
                          <li>
                            <button>100</button>
                          </li>
                          <li className='next'>
                            <button>
                              <svg
                                className='icon'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                                />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='work-together-slider'>
                      <div className='slider-main d-flex gap-4 align-items-center'>
                        <div className='slider-item'>
                          <a href='contact.html'>Let's 👋 Work Together</a>
                          <a href='contact.html'>Let's 👋 Work Together</a>
                        </div>
                        <div className='slider-item'>
                          <a href='contact.html'>Let's 👋 Work Together</a>
                          <a href='contact.html'>Let's 👋 Work Together</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* background shape area start */}
        <div className='background-shapes'>
          <div className='shape-1 common-shape'>
            <img src='/assets/img/bg/banner-shape-1.png' alt='banner-shape-1' />
          </div>
          <div className='shape-2 common-shape'>
            <img src='/assets/img/bg/banner-shape-1.png' alt='banner-shape-1' />
          </div>
          <div className='threed-shape-1 move-with-cursor' data-value={1}>
            <img src='/assets/img/bg/object-3d-1.png' alt='object-3d-1' />
          </div>
          <div className='threed-shape-2 move-with-cursor' data-value={1}>
            <img src='/assets/img/bg/object-3d-2.png' alt='object-3d-2' />
          </div>
        </div>
        {/* background shape area end */}
      </main>
      {/* main area part end */}
      {/* footer part start */}
      <Footer></Footer>
      {/* footer part end */}
    </div>
  );
}
