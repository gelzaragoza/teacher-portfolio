// src/pages/index.js
import { useEffect } from "react";
import {
  FaUserGraduate,
  FaBook,
  FaChalkboardTeacher,
  FaSchool,
  FaFileAlt,
  FaFolderOpen,
} from "react-icons/fa";
import Accordion from "../components/Accordion";

const sections = [
  { id: "home", title: "Home", icon: <FaUserGraduate /> },
  { id: "about", title: "About Me", icon: <FaUserGraduate /> },
  {
    id: "philosophy",
    title: "Teaching Philosophy",
    icon: <FaChalkboardTeacher />,
  },
  { id: "research", title: "Research", icon: <FaBook /> },
  { id: "materials", title: "Materials", icon: <FaFileAlt /> },
  { id: "artifacts", title: "Artifacts", icon: <FaFolderOpen /> },
  { id: "acknowledgement", title: "Acknowledgement", icon: <FaBook /> },
];

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-yellow-50 scroll-smooth">
      <header className="bg-red-700 text-yellow-100 fixed w-full z-50 shadow-lg">
        <nav className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 p-4">
          {sections.map(({ id, title, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-2 hover:text-yellow-300 transition-all duration-300 text-sm font-semibold relative group"
            >
              {icon}
              <span className="group-hover:underline transition-all duration-300">
                {title}
              </span>
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-28 max-w-4xl mx-auto px-6 space-y-20">
        <section id="home" className="text-center animate-fade-in">
          <img
            src="/kirsteen-main.JPG"
            alt="Profile"
            className="mx-auto w-48 h-48 rounded-full mb-6 object-cover border-4 border-yellow-300 shadow-lg hover:shadow-xl transition duration-300"
          />
          <h1 className="text-4xl font-extrabold text-red-700 mb-3 tracking-wide">
            Artifacts of Odyssey
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Kirsteen Mae Zaragoza</span> <br />
            Bachelor of Secondary Education, Major in English <br />
            Cebu Normal University
          </p>
          <a
            href="https://drive.google.com/file/d/1cXPZ9gR9HMupZWFVMCuOKwr1OYG1re7S/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-300 text-red-700 font-bold px-6 py-2 rounded-full hover:bg-yellow-400 hover:scale-105 transition transform duration-200 shadow"
          >
            View My CV
          </a>
        </section>

        <section
          id="about"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-red-700 mb-4">About Me</h2>
          <p className="mb-4 text-justify leading-relaxed">
            <span className="font-bold text-red-700">
              Kirsteen Mae Zaragoza
            </span>{" "}
            is a 22-year-old pre-service educator and a{" "}
            <span className="font-semibold">
              Bachelor of Secondary Education major in English
            </span>{" "}
            at <span className="font-semibold">Cebu Normal University</span>.
            She believes that{" "}
            <span className="italic">
              “a great teacher not only teaches, but touches lives forever.”
            </span>
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            Inspired by her mother, Kirsteen found her passion for teaching
            through tutoring her nieces and nephews. She sees each child as
            naturally curious and full of potential. Her classroom approach is
            rooted in creativity, using game-based learning to make lessons
            engaging, relevant, and enjoyable.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            Kirsteen’s vision for education is centered on warmth, inclusivity,
            and empowerment. She strives to create a space where students feel
            supported and excited to grow into their best selves—academically
            and personally.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            Beyond teaching, Kirsteen is grounded in{" "}
            <span className="font-semibold">academic research</span>. She has
            published a research article in the{" "}
            <span className="italic">
              International Journal of Advanced Multidisciplinary Research and
              Studies
            </span>{" "}
            (2023), and presented at the{" "}
            <span className="font-semibold">Education Research Conference</span>{" "}
            at <span className="font-semibold">CNU</span> in the same year. She
            also completed a <span className="font-semibold">TESDA course</span>{" "}
            on{" "}
            <span className="italic">
              “Exercising Sustainable Development in the Workplace.”
            </span>
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            Her research projects span{" "}
            <span className="font-semibold">flexible seating</span>,{" "}
            <span className="font-semibold">multimodal digital reading</span>,{" "}
            <span className="font-semibold">academic anxiety</span>, and{" "}
            <span className="font-semibold">
              media influence on articulation
            </span>
            . Her teaching experience includes student teaching at{" "}
            <span className="font-semibold">
              Don Vicente Rama Memorial National High School
            </span>
            ,{" "}
            <span className="font-semibold">
              Cebu Normal University–Integrated Laboratory School
            </span>
            , and <span className="font-semibold">Einstein School Cebu</span>.
          </p>
          <p className="text-justify leading-relaxed">
            Through <span className="font-semibold">hands-on teaching</span> and{" "}
            <span className="font-semibold">continuous learning</span>, Kirsteen
            has developed skills in{" "}
            <span className="font-semibold">classroom management</span> and{" "}
            <span className="font-semibold">lesson planning</span>. As a future
            educator, she is committed to bringing out the best in every learner
            she meets.
          </p>
        </section>

        <section
          id="acknowledgement"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Acknowledgement
          </h2>
          <p className="mb-4 text-justify leading-relaxed">
            With heartfelt gratitude, I give all glory and praise to{" "}
            <span className="font-semibold">God Almighty</span> for His
            unwavering guidance, strength, and grace that carried me through
            every challenge and triumph of this journey.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            I extend my deepest appreciation to{" "}
            <span className="font-semibold">Dr. Monique Cordova</span>, my
            mentor at{" "}
            <span className="font-semibold">Cebu Normal University</span>, for
            her thoughtful feedback, gentle guidance, and steady encouragement
            throughout my internship.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            I am sincerely thankful to{" "}
            <span className="font-semibold">Dr. Feleeh Enanoza</span> and{" "}
            <span className="font-semibold">Miss Mary Flor Villaruel</span> for
            their leadership and dedication during our internship and{" "}
            <span className="font-semibold">BLEPT REAP</span> review sessions.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            A special thank you goes to{" "}
            <span className="font-semibold">Miss Vanessa Pagorogon</span>, my
            mentor at{" "}
            <span className="font-semibold">Einstein School Cebu</span>, whose
            genuine support, kindness, and belief in me made a lasting impact on
            my journey.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            To my <span className="font-semibold">students</span>—thank you for
            being the reason I strive to improve each day. Your energy and
            curiosity reaffirmed my purpose in teaching.
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            To my <span className="font-semibold">family</span>,{" "}
            <span className="font-semibold">friends</span>, and{" "}
            <span className="font-semibold">partner</span>—your love, support,
            and belief in me carried me through every step. I am deeply grateful
            for your presence in my life.
          </p>
          <p className="text-justify leading-relaxed">
            Lastly, I thank my <span className="font-semibold">past self</span>{" "}
            for holding on and my{" "}
            <span className="font-semibold">future self</span> for dreaming
            boldly. This milestone is a tribute to everyone who walked beside me
            on this journey. Thank you.
          </p>
        </section>

        <section
          id="philosophy"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Teaching Philosophy & Deployment
          </h2>

          <Accordion title="About the Schools">
            <p>
              <strong className="text-red-700">
                CEBU NORMAL UNIVERSITY - INTEGRATED LABORATORY SCHOOL
              </strong>
            </p>
            <p>
              The <strong>CNU-ILS</strong> serves as a training ground for
              pre-service educators. It provides academic and practical teaching
              opportunities across multiple grade levels.
            </p>
            <p>
              Vision:{" "}
              <span className="font-semibold">SMART campus by 2027</span>
            </p>
            <p>
              Mission: Equipping graduates for{" "}
              <span className="font-semibold">DVUCAD</span> conditions with
              strong academic relevance.
            </p>
            <p>
              <strong className="text-red-700">EINSTEIN SCHOOL CEBU</strong>
            </p>
            <p>
              Founded in <strong>2004</strong>, Einstein School Cebu promotes
              scientific thinking and compassion with the motto
              <em>“Every Child a Scientist with a Heart.”</em>
            </p>
          </Accordion>

          <Accordion title="About My Mentors">
            <p>
              <strong className="text-red-700">Dr. Monique Cordova</strong>{" "}
              guided my on-campus internship. Her mentorship shaped how I design
              authentic, relevant learning experiences.
            </p>
            <p>
              <strong className="text-red-700">Ms. Vanessa Pagorogon</strong>{" "}
              mentored me during off-campus deployment. Her calm confidence and
              trust empowered me to step into teaching with courage and
              independence.
            </p>
          </Accordion>

          <Accordion title="About the Students">
            <p>
              <strong>Grade 10-R (CNU-ILS)</strong>: Energetic, reflective, and
              empathetic class of 47.
            </p>
            <p>
              <strong>Grade 11 HUMSS Piety</strong>: Emotionally intelligent,
              expressive, and curious learners.
            </p>
            <p>
              <strong>Grade 11 STEM Temperance</strong>: Calm, respectful, and
              focused students.
            </p>
            <p>
              <strong>Grade 11 STEM Perseverance</strong>: Most lively and
              collaborative group. A joy to teach.
            </p>
          </Accordion>

          <Accordion title="Pre-deployment">
            <p>
              <strong>Orientation & Pinning Week</strong>: A milestone that
              introduced me to my mentors and students. I delivered my first
              teaching demo with full support.
            </p>
            <p>
              <strong>Unexpected Delay</strong>: An earthquake and SCUAA week
              postponed my lesson. I adapted it into an online demo, which
              turned out to be a fulfilling and growth-filled experience.
            </p>
          </Accordion>

          <Accordion title="Off-Campus Deployment">
            <p>
              <strong>Einstein School</strong> welcomed me warmly. With{" "}
              <strong>Ms. Van’s</strong> mentorship, I built confidence and
              applied what I had learned.
            </p>
            <p>
              <strong>Valentine’s Demo</strong>: A themed lesson with lollipops
              and interactive activities. Students loved the creative approach.
            </p>
            <p>
              <strong>Last Week Reflections</strong>: Emotional goodbyes, proud
              moments, and lasting memories with students and mentors.
            </p>
          </Accordion>
        </section>
      </main>

      <footer className="text-center text-xs text-red-700 py-6 bg-yellow-100 mt-20">
        © {new Date().getFullYear()} Kirsteen Mae Zaragoza — All rights
        reserved.
      </footer>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
