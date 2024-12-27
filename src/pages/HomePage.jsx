import React from "react";
import { HeroSection } from "../components/HeroSection";
import { FeaturedAnime } from "../components/FeaturedAnime";
import { NewsSection } from "../components/NewsSection";
import { Navigation } from "../components/Navigation";
import UpcomingAnime from "@/components/UpcomingAnime";
import JikanCard from "@/components/JikanCard";

export function HomePage(){
 
  return (
    <>
      <Navigation />
      <HeroSection />
      <FeaturedAnime />
      <UpcomingAnime/>
      <NewsSection />
      
    </>
  );
}
