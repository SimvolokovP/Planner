import { Loader } from "@/UI/Loader";

export function LoaderScreen() {
  //   const isMutating = useIsMutating();
  //   const isFetching = useIsFetching();

  return (
    <div className="fixed inset-0 z-[10] flex h-screen w-screen flex-col items-center justify-center darkBack">
      <div className="rounded-xl bg-background p-4">
        <Loader size={12} />
      </div>
    </div>
  );
}
