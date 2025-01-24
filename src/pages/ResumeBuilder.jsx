import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download } from 'lucide-react';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const { templateId } = useParams();
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
    },
    education: [{
      school: '',
      degree: '',
      year: '',
    }],
    experience: [{
      company: '',
      position: '',
      duration: '',
      description: '',
    }],
    skills: '',
  });

  const handleInputChange = (section, field, value, index = null) => {
    setFormData(prev => {
      if (index !== null) {
        const newSection = [...prev[section]];
        newSection[index] = { ...newSection[index], [field]: value };
        return { ...prev, [section]: newSection };
      }
      return {
        ...prev,
        [section]: typeof prev[section] === 'object' && !Array.isArray(prev[section])
          ? { ...prev[section], [field]: value }
          : value
      };
    });
  };

  const addSection = (section) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], section === 'education' 
        ? { school: '', degree: '', year: '' }
        : { company: '', position: '', duration: '', description: '' }
      ]
    }));
  };

  const handleDownload = () => {
    // Implement PDF download functionality
    console.log('Downloading resume...');
  };

  return (
    <div className="resume-builder">
      <div className="container resume-builder-content">
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.personalInfo.name}
              onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={formData.personalInfo.email}
              onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone"
              value={formData.personalInfo.phone}
              onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              value={formData.personalInfo.location}
              onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
            />
          </div>

          <h2>Education</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="section-item">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="School/University"
                  value={edu.school}
                  onChange={(e) => handleInputChange('education', 'school', e.target.value, index)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) => handleInputChange('education', 'year', e.target.value, index)}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-secondary" onClick={() => addSection('education')}>
            Add Education
          </button>

          <h2>Experience</h2>
          {formData.experience.map((exp, index) => (
            <div key={index} className="section-item">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Duration"
                  value={exp.duration}
                  onChange={(e) => handleInputChange('experience', 'duration', e.target.value, index)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Description"
                  value={exp.description}
                  onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-secondary" onClick={() => addSection('experience')}>
            Add Experience
          </button>

          <h2>Skills</h2>
          <div className="form-group">
            <textarea
              placeholder="Enter your skills (separated by commas)"
              value={formData.skills}
              onChange={(e) => handleInputChange('skills', null, e.target.value)}
            />
          </div>
        </div>

        <div className="preview-section">
          <div className="preview-actions">
            <button className="btn btn-primary" onClick={handleDownload}>
              <Download size={20} />
              Download PDF
            </button>
          </div>
          <div className="resume-preview">
            {/* Resume preview will be implemented based on selected template */}
            <h3>Preview</h3>
            <p>Template: {templateId}</p>
            {/* Add preview content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;