import { useState } from "react";
import { ProjectList, ProjectDetail } from "../Components/Project";
import SEO from "../Components/SEO";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-fit bg-[var(--bg-primary)] p-4 md:p-8 font-inter relative">

      
      <div className="max-w-7xl mx-auto">
        <SEO 
          title="Engineering & Innovation Projects" 
          description="Explore our portfolio of engineering, IoT, Robotics, and AgriTech systems developed by Naziyah Creed."
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
