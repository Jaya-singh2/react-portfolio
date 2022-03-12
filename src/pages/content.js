import React from 'react'
import Typical from 'react-typical';
const Content = () => {
  return (
    <div className="content" id="home">
      <div className='typical'>
        <h5>Hello, I am <strong className='text-warning'>Jaya singh</strong></h5>
        <Typical
          steps={['Enthusiastic developer', 1000, 'Reactjs Developer', 1000, 'Nodejs Developer', 1000, 'Spring boot Developer', 1000]}
          loop={Infinity}
          wrapper="h3"
        />
        <div className="mt-4">
          <button className="btn mr-2 btn-outline-warning">Hire me</button>
          <button className="btn">Resume</button>
        </div>
      </div>
      {/* <div className="picture">
        </div> */}
    </div>
  );
}

export default Content;