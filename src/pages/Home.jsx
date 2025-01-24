import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import './Home.css';

const templates = [
  {
    id: 1,
    name: "Professional",
    description: "Clean and modern design for corporate roles",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Creative",
    description: "Vibrant layout for creative positions",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Simple",
    description: "Minimalist design for any role",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Executive",
    description: "Sophisticated design for senior positions",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Modern",
    description: "Contemporary layout for tech roles",
    image: "/placeholder.svg"
  }
];

const Home = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId) => {
    navigate(`/resume-builder/${templateId}`);
  };

  return (
    <div className="container">
      <section className="hero">
        <h1>Create Your Professional Resume</h1>
        <p>Choose from our professionally designed templates and build your dream resume</p>
      </section>

      <section className="templates-grid">
        {templates.map((template) => (
          <div key={template.id} className="template-card" onClick={() => handleTemplateSelect(template.id)}>
            <div className="template-image">
              <img src={template.image} alt={template.name} />
            </div>
            <div className="template-info">
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <button className="btn btn-primary">
                <FileText size={18} />
                Use Template
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;