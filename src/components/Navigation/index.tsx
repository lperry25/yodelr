import Image from "next/image";
import Link from "next/link";
import CampaignIcon from "@mui/icons-material/Campaign";
import TagIcon from "@mui/icons-material/Tag";
import WavingHandIcon from "@mui/icons-material/WavingHand";

export function Navigation({}) {
  const desktopLogo = (
    <Image
      src="/img/yodelrLogo.png"
      alt="Yodler Logo"
      className="h-auto w-[100px] mx-auto p-3 object-contain hidden lg:block invert brightness-0"
      width={400}
      height={300}
      priority
    />
  );
  const mobileLogo = (
    <Image
      src="/img/yodelrIcon.png"
      alt="Yodler Icon"
      className="h-auto w-[30px] mx-auto mt-4 object-contain block lg:hidden invert brightness-0"
      width={400}
      height={300}
      priority
    />
  );
  return (
    <div className="bg-purple justify-between h-screen flex flex-col w-1/5">
      <div className="h-fit">
        {desktopLogo}
        {mobileLogo}
      </div>
      <div className="flex flex-col gap-4 p-6">
        <Link href="/yodelr/trending" className="inline-flex">
          <TagIcon />
          <span className="hidden lg:block ml-2">Trending Yodels</span>
        </Link>
        <Link href="/yodelr/mine" className="inline-flex">
          <CampaignIcon />
          <span className="hidden lg:block ml-2">My Yodels</span>
        </Link>
        <Link
          href="/"
          className="inline-flex mt-8"
          onClick={() => localStorage.removeItem("token")}
        >
          <WavingHandIcon />
          <span className="hidden lg:block ml-2">Log out</span>
        </Link>
      </div>
    </div>
  );
}
