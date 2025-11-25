"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Projectcard() {
  const projects = [
    {
      title: "Restaurant Menu",
      img: "/img/project1.png",
      desc: "A modern restaurant menu UI with categories and cart system.",
      link: "https://monabill211.github.io/menuu/#/",
    },
    {
      title: "Portfolio",
      img: "/img/project2.png",
      desc: "Animated portfolio with smooth scroll and responsive UI.",
      link: "https://monabill211.github.io/portfolio/",
    },
    {
      title: "E-Commerce",
      img: "/img/project3.png",
      desc: "Full e-commerce shop with cart, favorites, and filtering.",
      link: "https://piockio.vercel.app/",
    },
    {
      title: "مواقيت الصلاة",
      img: "/img/project-salat.png",
      desc: "تطبيق يظهر مواقيت الصلاة بشكل ديناميكي.",
      link: "https://monabill211.github.io/time/",
    },
    {
      title: "Matel Line – تجهيزات فندقية",
      img: "/img/project-hotel.png",
      desc: "موقع تعريفي لشركة تجهيزات فندقية.",
      link: "https://monabill211.github.io/matel-line/",
    },
    {
      title: "Landing Page – Tempalet-JS",
      img: "/img/project-landing.png",
      desc: "Landing page بسيطة مبنية بـ HTML/CSS/JS.",
      link: "https://monabill211.github.io/Tempalet-js/",
    },
    {
      title: "Landing Page – Tempalet 2",
      img: "/img/project-landing2.png",
      desc: "Landing page لتسويق خدمة/منتج.",
      link: "https://monabill211.github.io/Tempalet-2/",
    },
  ];

  const animations = [
    { x: -50, y: 0 }, // من الشمال
    { x: 50, y: 0 },  // من اليمين
    { x: 0, y: -50 }, // من فوق
  ];

  return (
    <Wrapper>
      <h1 className="title">
        My <span>Projects</span>
      </h1>

      <div className="grid">
        {projects.map((item, i) => {
          const anim = animations[i % 3];

          return (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, ...anim }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank">View Project</a>
            </motion.div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 60px 20px;
  background: #0f0f0f;
  min-height: 100vh;
  color: white;

  .title {
    text-align: center;
    font-size: 40px;
    margin-bottom: 40px;
  }

  .title span {
    color: #3aa39a;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  }

  .card {
    background: #1a1a1a;
    padding: 20px;
    border-radius: 15px;
    transition: 0.3s;
    border: 1px solid transparent;
  }

  .card:hover {
    transform: translateY(-5px);
    border-color: #3aa39a;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h2 {
    color: #3aa39a;
    font-size: 22px;
  }

  p {
    opacity: 0.7;
    margin: 10px 0 15px;
  }

  a {
    padding: 8px 15px;
    background: #3aa39a;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.2s;
    display: inline-block;
  }

  a:hover {
    opacity: 0.8;
  }
`;
