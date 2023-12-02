import React from 'react'
import Title from '../layouts/Title'
import {portfolioone,portfoliotwo,portfoliothree } from "../../assets/index";
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
    <section
      id="Portfolio"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="يمكنك الاطلاع على أبرز النشاطات "
          des=" معرض الأعمال"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <PortfolioCard
          title="عنوان العمل "
          des=" شرح بسيط عن الخبر  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!  "
          src={portfolioone}
        />
        <PortfolioCard
          title="عنوان العمل  "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={portfoliotwo}
        />
        <PortfolioCard
          title="عنوان العمل "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={portfoliothree}
        />

      </div>
    </section>
  );
}

export default Portfolio