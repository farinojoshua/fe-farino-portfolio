import { Link } from "react-router-dom";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
import ServiceList from "../wrappers/services/ServiceList";

export default function Services() {
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
                  <div className='card-body'>
                    <div className='top-info'>
                      <div className='text'>
                        <h1 className='main-title'>
                          Services I <span>Offered</span>
                        </h1>
                        <p>
                          Transforming Ideas into Scalable Solutions, Elevate
                          Your Projects with My Expert
                          <b>Backend and Full Stack Development</b> Services!
                        </p>
                      </div>
                      <div className='available-btn'>
                        <span>
                          <i className='fas fa-circle' /> Available For Hire
                        </span>
                      </div>
                    </div>
                    <div className='services'>
                      <ServiceList></ServiceList>
                      <div className='block-image'>
                        <img
                          src='/assets/img/blog/blog-img-1.jpg'
                          alt='blog-img-1'
                          className='img-fluid w-100'
                        />
                      </div>
                    </div>
                    <Skills></Skills>
                    <Testimonial></Testimonial>
                    <Faq></Faq>
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
