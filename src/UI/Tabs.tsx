interface TabsProps {
  tabsList: { value: string; label: string }[];
  activeTab: string;
  onTabChange: (v: string) => void;
  disabled?: boolean;
}

export function Tabs({
  tabsList,
  activeTab,
  onTabChange,
  disabled = false,
}: TabsProps) {
  return (
    <div className="bg-muted rounded-lg inline-flex h-9 w-fit items-center justify-center py-[3px] px-[5px] gap-[4px]">
      {tabsList.map((tab) => (
        <button
          disabled={disabled}
          onClick={() => onTabChange(tab.value)}
          key={tab.value}
          className={`${
            activeTab === tab.value
              ? "border-border cursor-not-allowed"
              : "border-transparent cursor-pointer opacity-50"
          } border-1 px-2 py-1 text-sm font-medium disabled:pointer-events-none disabled:opacity-50 rounded-md`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
