import Layout from "../components/Layout";

export default function Research() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold text-red-700 mb-4">Research Paper</h2>
      <img
        src="/placeholder-research.jpg"
        alt="Research journal"
        className="w-full max-w-2xl mx-auto mb-6 rounded shadow"
      />
      <p className="text-lg leading-relaxed whitespace-pre-line">
        [Paste your BLEPT-REAP and research content here]
      </p>
    </Layout>
  );
}