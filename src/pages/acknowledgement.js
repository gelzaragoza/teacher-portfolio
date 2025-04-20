// src/pages/index.js
import { useEffect } from "react";
import { FaUserGraduate, FaBook, FaChalkboardTeacher, FaSchool, FaFileAlt, FaFolderOpen } from "react-icons/fa";

const sections = [
  { id: "home", title: "Home", icon: <FaUserGraduate /> },
  { id: "about", title: "About Me", icon: <FaUserGraduate /> },
  { id: "acknowledgement", title: "Acknowledgement", icon: <FaBook /> },
  { id: "cv", title: "Curriculum Vitae", icon: <FaFileAlt /> },
  { id: "philosophy", title: "Teaching Philosophy", icon: <FaChalkboardTeacher /> },
  { id: "deployment", title: "Deployment", icon: <FaSchool /> },
  { id: "research", title: "Research", icon: <FaBook /> },
  { id: "materials", title: "Materials", icon: <FaFileAlt /> },
  { id: "artifacts", title: "Artifacts", icon: <FaFolderOpen /> },
];

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-yellow-50">
      <header className="bg-red-700 text-yellow-100 fixed w-full z-50 shadow-lg">
        <nav className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 p-4">
          {sections.map(({ id, title, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-1 hover:text-yellow-300 transition-all duration-200 text-sm font-semibold"
            >
              {icon}
              {title}
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-28 max-w-4xl mx-auto px-6 space-y-20">
        <section id="home" className="text-center animate-fade-in">
          <img
            src="/placeholder-hero.jpg"
            alt="Profile"
            className="mx-auto w-32 h-32 rounded-full mb-4 object-cover border-4 border-yellow-300 shadow-md"
          />
          <h1 className="text-3xl font-bold text-red-700 mb-2">
            Artifacts of Odyssey
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Kirsteen Mae Zaragoza • Cebu Normal University • English Major
          </p>
          <a
            href="#cv"
            className="bg-yellow-300 text-red-700 font-bold px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            View My CV
          </a>
        </section>

        <section id="about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-red-700 mb-4">About Me</h2>
          <p className="mb-4 text-justify leading-relaxed">
            <span className="font-semibold text-red-700">Kirsteen Mae Zaragoza</span> is a 22-year-old pre-service educator and a Bachelor of Secondary Education major in English at Cebu Normal University. She believes that <span className="italic">“a great teacher not only teaches, but touches lives forever.”</span>
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            Inspired by her mother, Kirsteen found her passion for teaching through tutoring her nieces and nephews. She sees each child as naturally curious and full of potential. Her classroom approach is rooted in creativity, using game-based learning to make lessons engaging, relevant, and enjoyable.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            Kirsteen’s vision for education is centered on warmth, inclusivity, and empowerment. She strives to create a space where students feel supported and excited to grow into their best selves—academically and personally.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            Beyond teaching, Kirsteen is grounded in academic research. She has published a research article in the <span className="italic">International Journal of Advanced Multidisciplinary Research and Studies</span> (2023), and presented at the Education Research Conference at CNU in the same year. She also completed a TESDA course on “Exercising Sustainable Development in the Workplace.”
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            Her research projects span flexible seating, multimodal digital reading, academic anxiety, and media influence on articulation. Her teaching experience includes student teaching at Don Vicente Rama Memorial National High School, Cebu Normal University–Integrated Laboratory School, and Einstein School Cebu.
          </p>
          <p className="text-justify leading-relaxed">
            Through hands-on teaching and continuous learning, Kirsteen has developed skills in classroom management and lesson planning. As a future educator, she is committed to bringing out the best in every learner she meets.
          </p>
        </section>

        <section id="acknowledgement" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Acknowledgement</h2>
          <p className="mb-4 text-justify leading-relaxed">
            With heartfelt gratitude, I give all glory and praise to God Almighty for His unwavering guidance, strength, and grace that carried me through every challenge and triumph of this journey.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            I extend my deepest appreciation to Dr. Monique Cordova, my mentor at Cebu Normal University, for her thoughtful feedback, gentle guidance, and steady encouragement throughout my internship.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            I am sincerely thankful to Dr. Feleeh Enanoza and Miss Mary Flor Villaruel for their leadership and dedication during our internship and BLEPT REAP review sessions.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            A special thank you goes to Miss Vanessa Pagorogon, my mentor at Einstein School Cebu, whose genuine support, kindness, and belief in me made a lasting impact on my journey.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            To my students—thank you for being the reason I strive to improve each day. Your energy and curiosity reaffirmed my purpose in teaching.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            To my family, friends, and partner—your love, support, and belief in me carried me through every step. I am deeply grateful for your presence in my life.
          </p>
          <p className="text-justify leading-relaxed">
            Lastly, I thank my past self for holding on and my future self for dreaming boldly. This milestone is a tribute to everyone who walked beside me on this journey. Thank you.
          </p>
        </section>

        {sections.slice(3).map(({ id, title }) => (
          <section id={id} key={id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-red-700 mb-4">{title}</h2>
            <img
              src={`/placeholder-${id}.jpg`}
              alt={`${title} visual`}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <p className="whitespace-pre-line leading-relaxed">
              [Insert {title} content here...]
            </p>
          </section>
        ))}
      </main>

      <footer className="text-center text-xs text-red-700 py-6 bg-yellow-100 mt-20">
        © {new Date().getFullYear()} Kirsteen Mae Zaragoza — All rights reserved.
      </footer>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
