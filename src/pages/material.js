import Layout from "../components/Layout";

export default function Materials() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold text-red-700 mb-4">Instructional Materials</h2>
      <img
        src="/placeholder-materials.jpg"
        alt="Instructional material"
        className="w-full rounded shadow-md mb-6"
      />
      <p className="text-lg leading-relaxed whitespace-pre-line">
        [Paste your instructional descriptions here]
      </p>
    </Layout>
  );
}