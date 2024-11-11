import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import HomeProjectWrapper from "../wrappers/home/HomeProjectWrapper";
import HomeServiceWrapper from "../wrappers/home/HomeServiceWrapper";
import HomeSkillWrapper from "../wrappers/home/HomeSkillWrapper";
import HomeWorkExperienceWrapper from "../wrappers/home/HomeWorkExperienceWrapper";

export default function Home() {
  return (
    <div id='page-content'>
      {/* header part start */}
      <header className='header-area'>
        <Navbar></Navbar>
      </header>
      {/* header part end */}
      {/* main area part start */}
      <main>
        <section className='home-area'>
          <div className='container'>
            <div className='row g-4'>
              <div className='col-xl-4'>
                <ProfileCard></ProfileCard>
              </div>
              <div className='col-xl-4'>
                <div className='row g-4'>
                  <div className='col-lg-12'>
                    <HomeWorkExperienceWrapper></HomeWorkExperienceWrapper>
                  </div>
                  <div className='col-lg-12'>
                    <HomeSkillWrapper></HomeSkillWrapper>
                  </div>
                </div>
              </div>
              <div className='col-xl-4'>
                <HomeProjectWrapper></HomeProjectWrapper>
              </div>
            </div>
            <div className='services-area mt-24'>
              <HomeServiceWrapper></HomeServiceWrapper>
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
