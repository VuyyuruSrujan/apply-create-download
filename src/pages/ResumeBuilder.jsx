import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const { templateId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement resume generation and download
  };

  return (
    <div className="resume-builder">
      <div className="container">
        <h2>Build Your Resume</h2>
        <p>Template Selected: {templateId}</p>
        
        <form onSubmit={handleSubmit} className="resume-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="summary">Professional Summary</label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Work Experience</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="education">Education</label>
            <textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Generate Resume
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeBuilder;