export default function AdviceCard({ advice }) {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded-lg">
      <p className="italic">“{advice}”</p>
    </div>
  );
}
