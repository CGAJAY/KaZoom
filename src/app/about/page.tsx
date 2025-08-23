import { Hero } from "@/components/about/Hero";
import { MissionVision } from "@/components/about/MissionVission";

export const metadata = {
    title: "About Us - E-books Gurus",
    description:
        "Learn more about E-books Gurus, our mission, vision, and the team dedicated to bringing you the best e-books.",
};

export default function About() {
    return (
        <div>
            <Hero />
            <MissionVision />
        </div>
    );
}
