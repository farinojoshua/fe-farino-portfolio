import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
import AboutInfo from "../wrappers/about/AboutInfo";

export default function About() {
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
                    <AboutInfo></AboutInfo>
                    <Skills></Skills>
                    <Testimonial></Testimonial>
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
