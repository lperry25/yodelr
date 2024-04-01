import Image from "next/image";

export default function Home() {
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
