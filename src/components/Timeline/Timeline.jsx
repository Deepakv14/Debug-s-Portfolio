import React, { useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
    useEffect(() => {
        const timelineBlocks = document.querySelectorAll('.timeline-item');
        const offset = 0.8;

        // Hide timeline blocks initially
        hideBlocks(timelineBlocks, offset);

        const handleScroll = () => {
            if (!window.requestAnimationFrame) {
                setTimeout(() => showBlocks(timelineBlocks, offset), 100);
            } else {
                window.requestAnimationFrame(() => showBlocks(timelineBlocks, offset));
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup scroll listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const hideBlocks = (blocks, offset) => {
        blocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (blockTop > windowHeight * offset) {
                block.querySelectorAll('.timeline-icon, .timeline-content').forEach(el => {
                    el.classList.add('is-hidden');
                });
            }
        });
    };

    const showBlocks = (blocks, offset) => {
        blocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (blockTop <= windowHeight * offset) {
                const icon = block.querySelector('.timeline-icon');
                if (icon.classList.contains('is-hidden')) {
                    block.querySelectorAll('.timeline-icon, .timeline-content').forEach(el => {
                        el.classList.remove('is-hidden');
                        el.classList.add('animate-it');
                    });
                }
            }
        });
    };

    return (
        <div className=' timeline flex flex-col items-center justify-center p-4 w-full max-w-screen-xl bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200'>
            <div class="timeline-container">
                <h1 className='project-name text-3xl  text-[#32012F] font-bold font-serif'>Debug's Timeline</h1>
                <div id="timeline">
                    <div class="timeline-item">
                        <div class="timeline-icon">
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                        </div>
                        <div class="timeline-content right">
                            <h2>IFFCO-Tokio General Insurance Company Limited</h2>
                            <p><i>Senior Executive<br />(Information Technology)<br /> Backend: Java Frameworks - Springboot, Struts <br />Frontend: Angular</i></p>
                            <span class="time-stamp"><i class="fa fa-calendar" aria-hidden="true"></i> June, 2024 ~ Present</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">
                            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        </div>
                        <div class="timeline-content">
                            <h2>Indian Institute of Technology (BHU) Varanasi</h2>
                            <p>
                                <i>Graduated from the prestigious IIT Varanasi. <br />B.Tech. in Chemical Engineering & Technology. <br />CGPA: 8.74/10 <br /> Highlights: Masquerades (The Dramatics Society), Students' Parliament, Photography Club, Outreach Club, Media Club
                                </i></p>
                            <span class="time-stamp"><i class="fa fa-calendar" aria-hidden="true"></i> Oct, 2020 ~ May, 2024</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">
                            <i class="fa fa-university" aria-hidden="true"></i>
                        </div>
                        <div class="timeline-content right">
                            <h2>St. Antony's  Inter  College, Lucknow</h2>
                            <p>
                                <i>Class-12, ISC Board <br />Score: 98.25% (Zone Topper)<br />PCM + Computer Science<br /> Highlights: Inter-School Events, Cricket, <br />Patel House Captain and Vice-captain
                                </i></p>
                            <span class="time-stamp"><i class="fa fa-calendar" aria-hidden="true"></i> March, 2018 ~ April, 2019</span>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-icon">
                            <i class="fa fa-university" aria-hidden="true"></i>
                        </div>
                        <div class="timeline-content">
                            <h2>St. Antony's  Inter  College, Lucknow</h2>
                            <p>
                                <i>Class-10, ICSE Board <br />Score: 96.6%<br />PCMB + Computer Science<br /> Highlights: Inter-School Events, Cricket, <br />Patel House Captain and Vice-captain
                                </i></p>
                            <span class="time-stamp"><i class="fa fa-calendar" aria-hidden="true"></i> March, 2016 ~ April, 2017</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Timeline;