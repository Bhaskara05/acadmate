import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onLogout, onNavigate }) => {
  const cycles = [
    {
      id: 'physics',
      title: 'Physics Cycle',
      icon: '⚛️',
      subjects: ['Engineering Mathematics', 'Engineering Physics', 'Elective1- Mechanical Engineering',
         'Elements of Electrical Engineering', 'Elective2- Introduction to Programming',
         'Innovation & Design thinking'
        ],
      color: '#f4b30c'
    },
    {
      id: 'chemistry',
      title: 'Chemistry Cycle',
      icon: '⚗️',
      subjects: ['Engineering Mathematics', 'Engineering Chemistry', 'Engineering Mechanics',
         'Elective3- Electronics Engineering', 'Engineering Graphics and Design',
         'Elective3- Sustainability/Skill','Communication English'
        ],
      color: '#1a1200'
    }
  ];

  const materialTypes = [
    { id: 'syllabus', title: 'Syllabus Copy', icon: '📋', description: 'Official curriculum and course outline' },
    { id: 'textbook', title: 'Textbook', icon: '📚', description: 'Reference books and study materials' },
    { id: 'notes', title: 'Notes', icon: '📝', description: 'Lecture notes and study guides' },
    { id: 'pyqs', title: "PYQ's", icon: '📄', description: 'Previous year question papers' }
  ];

  return (
    <div className="dashboard-page">

      <main className="dashboard-main">
        <div className="container">
          <div className="dashboard-header">
            <h2>Study Materials</h2>
            <p>Access all your course materials organized by semester cycles</p>
          </div>

          <div className="cycles-grid">
            {cycles.map(cycle => (
              <div key={cycle.id} className="cycle-card">
                <div className="cycle-header">
                  <div className="cycle-icon">{cycle.icon}</div>
                  <h3>{cycle.title}</h3>
                </div>

                <div className="subjects-list">
                  <h4>Subjects:</h4>
                  <div className="subjects-tags">
                    {cycle.subjects.map(subject => (
                      <span key={subject} className="subject-tag">{subject}</span>
                    ))}
                  </div>
                </div>

                <div className="materials-grid">
                  {materialTypes.map(material => {
                    const handleClick = () => {
                      if (material.id === 'syllabus') {
                        // Syllabus link opens in new tab
                        window.open('https://drive.google.com/file/d/1MCHK2uif5hiptlESsN6Ta6XQvYY3tEuS/view?usp=sharing', '_blank');
                      } else if (material.id === 'pyqs') {
                        // PYQs link goes directly to the PDF list page
                        onNavigate('pdfList', { 
                          cycle: cycle.id, 
                          type: material.id, 
                          subjectId: 'all' 
                        });
                      } else {
                        // Textbook and Notes links go to the subject selection page
                        onNavigate('subjects', { 
                          cycle: cycle.id, 
                          type: material.id 
                        });
                      }
                    };

                    return (
                      <button
                        key={material.id}
                        onClick={handleClick}
                        className="material-card"
                      >
                        <div className="material-icon">{material.icon}</div>
                        <h5>{material.title}</h5>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
