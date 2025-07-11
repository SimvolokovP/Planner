interface StaticticCardProps {
  item: { value: string; label: string };
}

export function StaticticCard({ item }: StaticticCardProps) {
  return (
    <div
      key={item.label}
      className="bg-card rounded-xl border-1 border-border py-6 px-2 w-full flex flex-col gap-[6] items-center hover:-translate-y-1 transition-transform duration-200"
    >
      <div className="text-[18px]">{item.label}</div>
      <div className="text-[16px] text-primary">{item.value}</div>
    </div>
  );
}
