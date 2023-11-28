import React from 'react'
import Title from '../layouts/Title'
import { newsone, newsTow } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="بدقيقة"
          des="آخر الأخبار"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="عنوان الخبر "
          des=" شرح بسيط عن الخبر  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!  "
          src={newsone}
        />
        <ProjectsCard
          title="عنوان الخبر  "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={newsTow}
        />
        <ProjectsCard
          title="عنوان الخبر "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={newsone}
        />
        <ProjectsCard
          title="عنوان الخبر "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={newsTow}
        />
        <ProjectsCard
          title="عنوان الخبر "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={newsone}
        />
        <ProjectsCard
          title="عنوان الخبر "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={newsTow}
        />
      </div>
    </section>
  );
}

export default Projects