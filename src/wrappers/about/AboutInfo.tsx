import { useEffect, useState } from "react";
import { Profile } from "../../types/type";
import axios from "axios";
import { ENDPOINTS } from "../../config/api";

export default function AboutInfo() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<{ data: Profile }>(ENDPOINTS.PROFILE)
      .then((response) => {
        setProfile(response.data.data);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Extract only the first name
  const firstName = profile?.name.split(" ")[0];

  return (
    <>
      <div className='top-info'>
        <div className='text'>
          <h1 className='main-title'>
            Hi, This Is <span>{firstName}</span> 👋
          </h1>
          <p>{profile?.bio}</p>
        </div>
        <div className='available-btn'>
          {profile?.available_for_work ? (
            <span>
              <i className='fas fa-circle' /> Available For Hire
            </span>
          ) : (
            <span>
              <i className='fas fa-circle' style={{ color: "red" }} /> Not
              Available
            </span>
          )}
        </div>
      </div>
      <div className='counter-area'>
        <div className='counter'>
          <div className='counter-item'>
            <h3 className='number'>{profile?.years_experience}+</h3>
            <p className='subtitle'>Year of Experience</p>
          </div>
          <div className='counter-item'>
            <h3 className='number'>{profile?.projects_completed}+</h3>
            <p className='subtitle'>Project Completed</p>
          </div>
          <div className='counter-item'>
            <h3 className='number'>{profile?.happy_clients}+</h3>
            <p className='subtitle'>Happy Client</p>
          </div>
        </div>
        <div className='circle-area'>
          <div className='circle-text'>
            <img
              className='circle-image'
              src='/assets/img/about-us/circle-text.svg'
              alt='circle-text'
            />
            <img
              className='circle-image circle-image-light d-none'
              src='/assets/img/about-us/circle-text-light.svg'
              alt='circle-text'
            />
            <span className='arrow-down'>
              <svg
                width={40}
                height={40}
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20 5V35'
                  stroke='white'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M15 30L20 35L25 30'
                  stroke='white'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
