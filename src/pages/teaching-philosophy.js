import Layout from "../components/Layout";

export default function Philosophy() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold text-red-700 mb-4">Teaching Philosophy</h2>
      <img
        src="/placeholder-teaching.jpg"
        alt="Teaching in action"
        className="w-full max-w-2xl mx-auto mb-6 rounded shadow"
      />
      <p className="text-lg leading-relaxed whitespace-pre-line">
        To me, teaching is more than just delivering lessons... [Full text]
      </p>
    </Layout>
  );
}