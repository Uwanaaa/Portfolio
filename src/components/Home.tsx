import '../App.css'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';



const Home: React.FC = () => {

    const moveToAbout = () => {
        const nextPage = document.getElementById('about-container');
        if (nextPage) {
            nextPage.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const moveToProject = () => {
        const nextPage = document.getElementById('project-container');
        if (nextPage) {
            nextPage.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const moveToTop = () => {
        const topPage = document.querySelector('.parent-container');
        if (topPage) {
            topPage.scrollIntoView({ behavior: 'smooth' });
        }
    }

    

    return (
        <>

            <div className="parent-container">
                
                
                    <div
                        className="avatar"
                        onClick={moveToTop}
                        style={{
                            position: 'sticky',
                            top: '2rem',
                            float: 'right',
                            marginRight: '2rem',
                            marginLeft: '2rem',
                            marginBottom: 0,
                            zIndex: 2,
                        }}
                    >
                    
                            <svg width="100" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                                {/* Petals */}
                                <ellipse cx="75" cy="30" rx="20" ry="35" fill="#f7b6d2" stroke="#b76e79" strokeWidth="2"/>
                                <ellipse cx="120" cy="60" rx="18" ry="32" fill="#f7b6d2" stroke="#b76e79" strokeWidth="2" transform="rotate(30 120 60)"/>
                                <ellipse cx="30" cy="60" rx="18" ry="32" fill="#f7b6d2" stroke="#b76e79" strokeWidth="2" transform="rotate(-30 30 60)"/>
                                <ellipse cx="110" cy="110" rx="15" ry="28" fill="#f7b6d2" stroke="#b76e79" strokeWidth="2" transform="rotate(60 110 110)"/>
                                <ellipse cx="40" cy="110" rx="15" ry="28" fill="#f7b6d2" stroke="#b76e79" strokeWidth="2" transform="rotate(-60 40 110)"/>
                                {/* Face */}
                                <circle cx="75" cy="75" r="35" fill="#f2cfa3" stroke="#000" strokeWidth="2"/>
                                {/* Eyes */}
                                <circle cx="65" cy="70" r="4" fill="#000"/>
                                <circle cx="85" cy="70" r="4" fill="#000"/>
                                {/* Mouth (Curved Smile) */}
                                <path d="M65 85 Q75 95, 85 85" stroke="#000" strokeWidth="2" fill="transparent"/>
                            </svg>
                        
                    </div>

                    <div className="hero-container">

                    <h1 className='header-text'>Unwana Udofia</h1>
                    <TypeAnimation
                        className="animated-text"
                        sequence={[
                            'Software Engineer...', 1000,
                            '', 500,
                            'Fullstack Developer...', 1000,
                            '', 500,
                            'Machine Learning Engineer...', 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />

                    <button className="button" onClick={moveToAbout}>
                        <svg className="svgIcon" viewBox="0 0 384 512">
                            <path
                                d="M207.5 384.6c-6.2 6.2-16.4 6.2-22.6 0l-112-112c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L176 329.4V64c0-8.8 7.2-16 16-16s16 7.2 16 16v265.4l80.5-79.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-112 112z"
                            />
                        </svg>
                    </button>
                </div>
            

            


         <div id='about-container' className="about-container"> 
            <div className="about-flex">
                <img
                    src="/girl.gif"
                    alt="Animated girl"
                    className="about-gif"
                />
                <div className="content">
                    <h1 style={{marginBottom: '3rem'}}>About Me</h1>
                    <p>
                        Hi, I am Unwana Udofia — a passionate full-stack developer with 2+ years focused on building practical, scalable solutions. I specialize in Django, ExpressJS and React, and enjoy creating applications that solve real-world problems, from smart school systems to AI-powered chatbots.
                        <br /><br />
                        With a strong foundation in both backend and frontend development, I turn ideas into intuitive, high-performing web experiences. I am also expanding my skills in areas like machine learning, WebSockets, and API design.
                        <br /><br />
                        Let us build something impactful!
                    </p>
                    {/* <h2>Contact</h2>
                    <p>Email: <a href="mailto:uwanaudofia8@gmail.com">uwanaudofia8@gmail.com</a></p> */}
                </div>
            </div>
        

            <button className="button" onClick={moveToProject}>
            <svg className="svgIcon" viewBox="0 0 384 512">
                <path
                    d="M207.5 384.6c-6.2 6.2-16.4 6.2-22.6 0l-112-112c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L176 329.4V64c0-8.8 7.2-16 16-16s16 7.2 16 16v265.4l80.5-79.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-112 112z"
                />
            </svg>
            </button>
         </div>

           <div id='project-container' className="project-container">
                <h2>Projects</h2>
                <div className="list-container">
                    <div className="project-list">
                        <article className="card">
                        <section className="card__hero">
                            <p className="card__job-title">Senior Backend Engineer</p>
                        </section>

                        <footer className="card__footer">
                            <div className="card__job-summary">
                            <div className="card__job">
                            <p className="card__job-title"> EventTick </p>
                            </div>
                            </div>
                            <button className="card__btn"><a href="https://github.com/Uwanaaa/EventTick">View</a></button>
                        </footer>
                        </article>
                    </div>

                    <div className="project-list">
                        <article className="card">
                        <section className="card__hero">
                            <p className="card__job-title">Senior Backend Engineer</p>
                        </section>

                        <footer className="card__footer">
                            <div className="card__job-summary">
                            <div className="card__job">
                            <p className="card__job-title"> SmartInvent </p>
                            </div>
                            </div>
                            <button className="card__btn"><a href="https://github.com/Uwanaaa/SmartInvent2">View</a></button>
                        </footer>
                        </article>
                    </div>
                </div>

                <button className="button">
                <svg className="svgIcon" viewBox="0 0 384 512">
                    <path
                        d="M207.5 384.6c-6.2 6.2-16.4 6.2-22.6 0l-112-112c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L176 329.4V64c0-8.8 7.2-16 16-16s16 7.2 16 16v265.4l80.5-79.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-112 112z"
                    />
                </svg>
                </button>
           </div>

            <div className="footer">
                <p>© 2025 Unwana Udofia. All rights reserved.</p>
            </div>

        </div>
        </>
    );
};

export default Home;