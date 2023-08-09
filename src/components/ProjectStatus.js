import React from 'react';
import './style.css';

const ProjectStatus = () => {
    return (
        <div className="container">
            <div className="project-status-container">
                <div className="status-section">
                    <h3>Project Status: <span className="status-highlight">Still In Development</span></h3>
                </div>
                <div className="last-updated-section">
                    <p>The project was last updated by <span className="updated-by">muratyanasoglu</span> project member 1 day ago</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectStatus;
