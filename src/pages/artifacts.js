import Layout from "../components/Layout";

export default function Artifacts() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold text-red-700 mb-4">Additional Artifacts</h2>
      <img
        src="/placeholder-artifacts.jpg"
        alt="Portfolio artifacts"
        className="w-full rounded shadow-md mb-6"
      />
      <p className="text-lg leading-relaxed whitespace-pre-line">
        [Paste additional uploads, media, and links here]
      </p>
    </Layout>
  );
}
