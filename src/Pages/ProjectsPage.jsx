import { useState } from "react";
import { ProjectList, ProjectDetail } from "../Components/Project";
import SEO from "../Components/SEO";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-fit bg-[var(--bg-primary)] p-4 md:p-8 font-inter relative">
      <div className="absolute top-0 left-0 w-full h-[4px] golden-line"></div>
      <div className="absolute bottom-0 left-0 w-full h-[4px] golden-line"></div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <SEO 
          title="Our Projects" 
          description="Explore our portfolio of innovative IoT and Robotics projects for engineering students."
        />
        {selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <ProjectList onSelectProject={setSelectedProject} />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
