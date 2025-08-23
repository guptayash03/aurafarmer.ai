import Header from "@/components/Header";
import PostDetails from "@/components/PostDetails";
import PostPreview from "@/components/PostPreview";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row">
        <PostDetails />
        <PostPreview />
      </div>
      <Footer />
    </div>
  );
}
