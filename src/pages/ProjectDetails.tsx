import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import { Project } from "../types/type";
import axios from "axios";
import { ENDPOINTS, getStorageUrl } from "../config/api";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<{ data: Project }>(ENDPOINTS.PROJECT_DETAIL(id))
      .then((response) => {
        setProject(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div id='page-content'>
        <header className='header-area'>
          <Navbar />
        </header>
        <main>
          <section className='content-box-area mt-4'>
            <div className='container'>
              <div className='flex items-center justify-center min-h-[400px]'>
                <p>Loading...</p>
              </div>
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
              <div className='text-center'>
                <p>Error: {error}</p>
                <Link
                  to='/projects'
                  className='inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Back to Projects
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div id='page-content'>
        <header className='header-area'>
          <Navbar />
        </header>
        <main>
          <section className='content-box-area mt-4'>
            <div className='container'>
              <div className='text-center'>
                <p>Project not found</p>
                <Link
                  to='/projects'
                  className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                >
                  Back to Projects
                </Link>
              </div>
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
                    <div className='portfolio-details-area'>
                      <div className='main-image'>
                        <img
                          src={getStorageUrl(project.main_image)}
                          alt={project.name}
                        />
                      </div>
                      <div className='portfolio-details-text'>
                        <div className='short-info'>
                          <div className='info-item'>
                            <p className='subtitle'>Client For:</p>
                            <h4 className='card-title'>{project.client}</h4>
                          </div>
                          <div className='info-item'>
                            <p className='subtitle'>Services:</p>
                            <h4 className='card-title'>
                              {project.services
                                .map((service) => service.name)
                                .join(", ")
                                .replace(/, ([^,]*)$/, " and $1")}
                            </h4>
                            <a href={project.project_url} className='website'>
                              {project.project_url.replace(
                                /^https?:\/\/(www\.)?/,
                                ""
                              )}
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
                          <p>{project.description}</p>
                          <p>
                            <b>Research:</b> Before starting the design, it's
                            essential to understand the target audience, their
                            needs, and the goals of the website.
                          </p>
                          <p>
                            <b>Information Architecture:</b> Organize and
                            structure the content to ensure a logical flow for
                            users.
                          </p>
                          <p>
                            {" "}
                            <b>Wireframing and Prototyping:</b> Create skeletal
                            outlines and interactive prototypes to visualize the
                            layout and functionality.
                          </p>
                        </div>
                      </div>
                      <div className='inner-images'>
                        <div className='row g-3'>
                          {project.images.map((image, index) => (
                            <div className='col-md-6' key={index}>
                              <div className='image-item'>
                                <img
                                  src={getStorageUrl(image.image_url)}
                                  alt={project.name}
                                  className='img-fluid w-100'
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='working-with-area'>
                        <h2 className='main-common-title'>
                          Technologies Used in This Project
                        </h2>
                        <div className='working-with-main'>
                          {project.skills.map((skill) => (
                            <>
                              <div className='items mb-3' key={skill.id}>
                                <img
                                  src={getStorageUrl(skill.icon)}
                                  alt={skill.name}
                                />
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                      <div className='more-info-block'>
                        <h3 className='more-info-title'>Challenges</h3>
                        <p>
                          Web design comes with its own set of challenges,
                          ranging from technical issues to user experience
                          considerations. Here are some common challenges faced
                          by web designers. Web design encompasses the process
                          of creating and designing websites It involves a
                          combination of different skills and disciplines to
                          produce a visually appealing and user-friendly
                          website. Here's an overview of key aspects of web
                          design.
                        </p>
                        <h5 className='more-info-subtitle'>
                          Responsive Design:
                        </h5>
                        <ul className='list-unstyled'>
                          <li>
                            <b>Challenge:</b> Ensuring that a website looks and
                            functions well on various devices and screen sizes.
                          </li>
                          <li>
                            <b>Solution:</b> Use responsive design techniques,
                            such as flexible grids and media queries.
                          </li>
                        </ul>
                        <h5 className='more-info-subtitle'>
                          Browser Compatibility:
                        </h5>
                        <ul className='list-unstyled'>
                          <li>
                            <b>Challenge:</b> Different browsers may interpret
                            code differently, leading to inconsistencies in the
                            website's appearance.
                          </li>
                          <li>
                            <b>Solution:</b> Test the website on multiple
                            browsers and use compatibility libraries or
                            polyfills when necessary.
                          </li>
                        </ul>
                        <h5 className='more-info-subtitle'>
                          User Experience (UX):
                        </h5>
                        <ul className='list-unstyled'>
                          <li>
                            <b>Challenge:</b> Creating a seamless and intuitive
                            user experience that keeps visitors engaged.
                          </li>
                          <li>
                            <b> Solution:</b>
                            Conduct user testing, design user-friendly
                            interfaces, and prioritize accessibility to ensure a
                            positive user experience
                          </li>
                        </ul>
                        <h5 className='more-info-subtitle'>
                          Compliance and Accessibility:
                        </h5>
                        <ul className='list-unstyled'>
                          <li>
                            <b>Challenge:</b> Creating a seamless and intuitive
                            user experience that keeps visitors engaged.
                          </li>
                          <li>
                            <b>Solution:</b> Conduct user testing, design
                            user-friendly interfaces, and prioritize
                            accessibility to ensure a positive user experience
                          </li>
                        </ul>
                        <h3 className='more-info-title'>Results/Conclusion:</h3>
                        <p>
                          The website design and development for FlexiFlow
                          successfully achieved its objectives, leading to
                          increased user engagement, improved conversion rates,
                          and positive feedback from the target audience. The
                          combination of user-centric design, modern visuals,
                          and a seamless shopping experience resulted in a more
                          competitive and appealing online presence for the
                          company. Ongoing monitoring and potential iterative
                          improvements will be crucial to maintaining and
                          enhancing.
                        </p>
                      </div>
                      <div className='prev-and-next-btn'>
                        <button className='btn btn-prev'>Previous</button>
                        <button className='btn btn-next'>Next</button>
                      </div>
                    </div>
                    <div className='work-together-slider'>
                      <div className='slider-main d-flex gap-4 align-items-center'>
                        <div className='slider-item'>
                          <Link to='/contact'>Let's 👋 Work Together</Link>
                          <Link to='/contact'>Let's 👋 Work Together</Link>
                        </div>
                        <div className='slider-item'>
                          <Link to='/contact'>Let's 👋 Work Together</Link>
                          <Link to='/contact'>Let's 👋 Work Together</Link>
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
            <img src='assets/img/bg/banner-shape-1.png' alt='banner-shape-1' />
          </div>
          <div className='shape-2 common-shape'>
            <img src='assets/img/bg/banner-shape-1.png' alt='banner-shape-1' />
          </div>
          <div className='threed-shape-1 move-with-cursor' data-value={1}>
            <img src='assets/img/bg/object-3d-1.png' alt='object-3d-1' />
          </div>
          <div className='threed-shape-2 move-with-cursor' data-value={1}>
            <img src='assets/img/bg/object-3d-2.png' alt='object-3d-2' />
          </div>
        </div>
        {/* background shape area end */}
      </main>
      {/* main area part end */}
      {/* footer part start */}
      <footer className='footer-area'>
        <div className='container'>
          <div className='text text-center'>
            <p>
              @ BentoFolio 2024, Design By <a href='#'>MarvelTheme</a>
            </p>
          </div>
        </div>
      </footer>
      {/* footer part end */}
    </div>
  );
}
