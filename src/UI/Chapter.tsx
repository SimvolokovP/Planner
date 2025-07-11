export function Chapter({ title }: { title: string }) {
  return (
    <div className="py-4 border-b-1 border-white">
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
}
