import Header from "@/components/Header";
import PostDetails from "@/components/PostDetails";
import PostPreview from "@/components/PostPreview";
import Footer from "@/components/Footer";
import CreatePost from "@/components/CreatePost";
import Squares from "@/backgrounds/Squares";

export default function Page() {
  return (
    <div className="flex flex-col bg-black min-h-screen text-white h-full">

      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" 
        borderColor="#fff"
        hoverFillColor="#222"
      />
      <CreatePost />
    </div>
  );
}
