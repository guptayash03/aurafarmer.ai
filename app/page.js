import Navbar from "@/components/Navbar";
import Prism from "@/components/Prism";

export default function Home() {
  return (
    <div className="font-Orbitron flex flex-col items-center gap-5  bg-black   border  min-h-screen w-full">
      <div className="w-full h-[600px] relative">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>
      <Navbar />
    </div>
  );
}
