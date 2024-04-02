import Image from "next/image";

export function Loading() {
  return (
    <div className="m-auto animate-pulse">
      <Image
        src="/img/yodelrLogo.png"
        alt="Yodler Logo"
        className="h-auto w-full object-contain"
        width={400}
        height={300}
        priority
      />
    </div>
  );
}
