import React from 'react'
import Typical from 'react-typical'

export default function profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='#'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href='#'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href='#'>
                        <i className="fa-brands fa-facebook"></i>
                    </a>  
                    <a href='#'>
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    </div>
                </div>
                <div className='profile-detail-name'>
                    {" "}
                    <span className='primary-text'>
                        Hello I'm <span className='highlighted-text'>Sopan</span>
                    </span>
                </div>
                <div className='primary-details role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                           Software Developer
                        </h1>
                        <span className='profile-role-tagline'>
                            knock of building application with front end and backend operations...
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {" "}
                            Hire me{" "}
                    </button>
                    <a href='#' download='#' >
                        {" "}
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}
