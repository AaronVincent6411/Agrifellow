import Image from "next/image";
import bg_image from "../public/assets/bg_image.webp";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main
      className="w-full h-screen flex"
      style={{
        backgroundImage: `url(${bg_image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <Navbar />
    </main>
  );
}
