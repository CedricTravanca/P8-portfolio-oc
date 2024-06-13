import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, difficulties, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  difficulties={difficulties}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
