import Image from "next/image";
import MainImage from "@/app/snake.png";

export default function Home() {
  return (
    <div>
      <br />
      <br />
      <Image
        src={MainImage}
        className="mainImage"
        width={250}
        height={250}
        alt="This is the Logo"
      />
    </div>
  );
}
