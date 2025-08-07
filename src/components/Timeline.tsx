import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFlask, faRobot } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history" className="timeline-section">
      <div className="items-container">
        <div className="section-header">
          <h1>Professional Experience</h1>
          <p className="section-subtitle">My journey in AI-driven healthcare research</p>
        </div>
        <VerticalTimeline lineColor="#5000ca">
          <VerticalTimelineElement
            className="vertical-timeline-element--work modern-card"
            contentStyle={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(80, 0, 202, 0.3)',
              border: 'none'
            }}
            contentArrowStyle={{ borderRight: '15px solid #667eea' }}
            iconStyle={{ 
              background: 'linear-gradient(135deg, #5000ca, #667eea)', 
              color: 'white',
              boxShadow: '0 8px 20px rgba(80, 0, 202, 0.4)'
            }}
            icon={<FontAwesomeIcon icon={faFlask} />}
          >
            <div className="date-badge">September 2023 - Present</div>
            <h3 className="timeline-title">Researcher</h3>
            <h4 className="timeline-company">Health System Data Science Lab, Seoul National University</h4>
            <div className="timeline-description">
              {/* <p className="intro-text">Leading AI-driven healthcare research under <span className="highlight">Dr. Sang Min Park</span></p> */}
              <div className="expertise-grid">
                <div className="expertise-item">
                  <span className="expertise-text">Disease screening from medical imaging (X-ray, CT)</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-text">Survival analysis with national health databases</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-text">Explainable AI for clinical decision support</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-text">Predictive modeling for disease risk assessment</span>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work modern-card"
            contentStyle={{ 
              background: 'linear-gradient(135deg, #cc87d3ff 0%, #b448a3ff 100%)',
              color: 'white',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(240, 147, 251, 0.3)',
              border: 'none'
            }}
            contentArrowStyle={{ borderRight: '15px solid #cc87d3ff' }}
            iconStyle={{ 
              background: 'linear-gradient(135deg, #cc87d3ff, #b448a3ff)', 
              color: 'white',
              boxShadow: '0 8px 20px rgba(240, 147, 251, 0.4)'
            }}
            icon={<FontAwesomeIcon icon={faRobot} />}
          >
            <div className="date-badge">January 2021 - July 2023</div>
            <h3 className="timeline-title">AI Research Engineer</h3>
            <h4 className="timeline-company">HealthHub.kr, Seoul</h4>
            <div className="timeline-description">
              {/* <p className="intro-text">Developed <span className="highlight">cutting-edge AI solutions</span> for medical diagnostics</p> */}
              <div className="expertise-grid">
                <div className="expertise-item">
                  <span className="expertise-text">State-of-the-art ML/DL algorithm implementation</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-text">Computer vision for medical image analysis</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-text">AI system integration with DICOMLINK platform</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-text">Team mentoring and technical leadership</span>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;