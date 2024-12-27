import { getUpcomingAnime } from "@/service/api";
import React, { useEffect, useState } from "react";
import { AnimeCard } from "./AnimeCard";
import Marquee from "./ui/marquee";

const UpcomingAnime = () => {
  const [upcoming, setUpcoming] = useState([]);

  // Fetch upcoming anime data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await getUpcomingAnime();
        setUpcoming(response.data);
        
      } catch (error) {
        console.error("Error fetching Upcoming anime data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <div className=" w-full">
        <h2 className=" px-5 text-3xl font-bold text-white "> Upcoming Anime :</h2>

        <div className="flex items-center justify-between gap-4 p-6  ">
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {upcoming.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />
          ))}
           </Marquee>
        </div>
      </div>
    </section>
  );
};

export default UpcomingAnime;
