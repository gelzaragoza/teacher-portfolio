import Layout from "../components/Layout";

export default function CV() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold text-red-700 mb-4">Curriculum Vitae</h2>
      <div className="text-center">
        <img
          src="/placeholder-cv.jpg"
          alt="Curriculum Vitae"
          className="mx-auto w-64 rounded shadow-md mb-4"
        />
        <a
          href="https://docs.google.com/document/d/1RmbcoBAUqDF5aeXkVJaXWB5JKQyQnvhZ5bV2q6ymP14/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-red-700 text-yellow-100 px-6 py-2 rounded hover:bg-red-800 transition-colors"
        >
          View My CV (PDF)
        </a>
      </div>
    </Layout>
  );
}
