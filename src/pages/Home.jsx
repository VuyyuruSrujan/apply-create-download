import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const templates = [
  {
    id: 'modern',
    name: 'Modern Minimal',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300'
  },
  {
    id: 'professional',
    name: 'Professional Classic',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300'
  },
  {
    id: 'creative',
    name: 'Creative Designer',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300'
  },
  {
    id: 'tech',
    name: 'Tech Professional',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300'
  },
  {
    id: 'executive',
    name: 'Executive Elite',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=300'
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <div className="container hero-content">
          <h1>Create Your Professional Resume</h1>
          <p>Choose from our professionally designed templates and build your dream resume in minutes</p>
        </div>
      </div>
      
      <div className="container templates-section">
        <h2>Select Your Template</h2>
        <div className="templates-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-card" onClick={() => navigate(`/resume-builder/${template.id}`)}>
              <div className="template-image">
                <img src={template.image} alt={template.name} />
              </div>
              <h3>{template.name}</h3>
              <button className="btn btn-primary">Use Template</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;