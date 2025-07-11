import { Loader as LoaderIcon } from "lucide-react";

interface LoaderProps {
  size: number;
}

export function Loader({ size }: LoaderProps) {
  return (
    <div className="flex justify-center items-center">
      <LoaderIcon className={`h-${size} w-${size} animate-spin text-white`} />
    </div>
  );
}
