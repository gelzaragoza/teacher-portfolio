import Layout from "../components/Layout";

export default function Deployment() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold text-red-700 mb-4">School Deployment Profiles</h2>
      <img
        src="/placeholder-deployment.jpg"
        alt="Deployment photo"
        className="w-full rounded-lg shadow mb-6"
      />
      <p className="text-lg leading-relaxed whitespace-pre-line">
        [Paste all your deployment, school, mentor, and student content here]
      </p>
    </Layout>
  );
}