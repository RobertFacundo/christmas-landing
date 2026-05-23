# 🎄 Christmas Landing

An immersive Christmas-themed landing page built with Next.js, focused on cinematic scroll-based storytelling, smooth animations, and atmospheric winter visuals.

This project is an evolving experimental landing page focused on cinematic UI and real-time visual effects.

---

## 🧠 About the Project

This landing page is designed as a modular and cinematic experience, where each section represents a different part of a visual story.

The main idea is to combine smooth motion, clean UI structure, and atmospheric effects to create an engaging winter-themed experience.

The project focuses on:

- Scroll-based section storytelling  
- Smooth transitions between components  
- Modular feature-based architecture  
- Cinematic UI composition  
- Winter atmosphere and snowfall effects  
- Scalable animation system (GSAP + Scroll-based logic)

---

## 🏗️ Structure

The page is built using a simple section-based layout:

- NavBar (global navigation)
- Hero section
- About section
- Products section
- Gallery section
- Contact section

Each section is treated as an independent feature to keep the project clean and scalable.

---

## ⚙️ Tech Stack

- Next.js  
- React  
- TypeScript  
- Tailwind CSS  
- React Icons  
- WebGL (via Three.js)

---

## ✨ Features 

- Cinematic scroll-based experience  
- Smooth transitions between sections  
- Modular feature architecture  
- Real-time snowfall system (Three.js particles)
- Interactive cinematic background layer
- Layered visual composition (UI + WebGL canvas) 
- Scroll-based effects  
- Responsive design  

---

## ✨ Visual Systems

- Custom Snow particle system built with Three.js
- GPU-based instanced rendering (PointsMaterial)
- Procedural wind simulation using sin(time)
- Infinite loop snowfall with world bounds reset
- Optimized WebGL canvas overlay


## 🧩 Snow Effect Architecture

The project is structured using a feature-based modular architecture:

- useThreeRenderer → initializes WebGL context (scene, camera, renderer)
- useSnowParticles → particle system generation
- useSnowAnimation → simulation loop & physics
- UI features isolated per section (Hero, Gallery, Contact)

👉 This separation allows visual systems to scale independently from UI components.

---

This project explores the separation between UI composition and real-time visual simulation, allowing both systems to evolve independently while sharing a unified cinematic experience.

## 📬 Contact

- Email: robertf.coder@gmail.com  
- LinkedIn: https://www.linkedin.com/in/robertfacundodev/  
- Portfolio: https://facundorobert.vercel.app/  
- GitHub: https://github.com/RobertFacundo  