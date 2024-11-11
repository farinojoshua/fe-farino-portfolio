import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import { Project } from "../types/type";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const baseURL = "http://127.0.0.1:8000/storage/";

  useEffect(() => {
    axios
      .get<{ data: Project }>(`http://127.0.0.1:8000/api/project/${id}`)
      .then((response) => {
        setProject(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  // if (!project) {
  //   return <p>Project not found</p>;
  // }

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
                    <div className='portfolio-details-area'>
                      <div className='main-image'>
                        <img
                          src={baseURL + project?.main_image}
                          alt={project?.name}
                        />
                      </div>
                      <div className='portfolio-details-text'>
                        <div className='short-info'>
                          <div className='info-item'>
                            <p className='subtitle'>Client For:</p>
                            <h4 className='card-title'>{project?.client}</h4>
                          </div>
                          <div className='info-item'>
                            <p className='subtitle'>Services:</p>
                            <h4 className='card-title'>{project?.service}</h4>
                            <a href={project?.project_url} className='website'>
                              {project?.project_url}
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
                                ></path>
                                <path
                                  d='M4.66699 4.5835H9.91699V9.8335'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className='overview'>
                          <h4 className='card-title'>Description</h4>
                          <p>{project?.description}</p>
                        </div>
                      </div>
                      <div className='inner-images'>
                        <div className='row g-3'>
                          {project?.images.map((image, index) => (
                            <div className='col-md-6' key={index}>
                              <div className='image-item'>
                                <img
                                  src={baseURL + image.image_url}
                                  alt={project.name}
                                  className='img-fluid w-100'
                                />
                              </div>
                            </div>
                          ))}
                        </div>
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
