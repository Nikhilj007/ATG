import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Audio from "./components/Audio";
import Dance from "./components/Dance";

export default function Home() {
  return (
    <div className="mb-5">
    <Hero />
    <Features/>
    <Testimonial/>
    <Audio/>
    <Dance/>
    </div>
  );
}
