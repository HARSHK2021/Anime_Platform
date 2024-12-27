import React from "react";
import {
 HoverCard,
 HoverCardContent,
 HoverCardTrigger,}
 from "@/components/ui/hover-card"
import { FaPlay } from "react-icons/fa";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const JikanCard = ({ anime }) => {
const navigate= useNavigate()
const handlePlay = ()=>{
  navigate(`/watch/${anime.mal_id}`)
  
}

 return (
   <HoverCard openDelay={0} closeDelay={0}>
     <div className="group w-[220.73px]">
       <HoverCardTrigger className="cursor-pointer w-[220.73px]">
         <div className="w-[220.73px] h-[367.74px] bg-purple-900 card rounded-lg shadow-lg relative">
           <div className="poster relative p-2 w-[220.73px] h-[309.01px]">
             <img
               className="object-cover w-full h-full rounded-lg transition duration-300 group-hover:blur-sm group-data-[state=open]:blur-sm"
               src={anime.images.webp.large_image_url}
               alt="Purgatory Walkers"
             />
             <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-green-400 text-xs font-semibold px-2 py-1 rounded">
               {anime.rank || "NA"}
             </div>
             <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold px-2 py-1 rounded">
               {anime.episodes}
             </div>
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 transition-opacity duration-300">
               <button onClick={handlePlay}>
               <FaPlay className="text-white text-3xl z-50" />
               </button>
             </div>
           </div>
           <div className="lowerpanel p-2 text-white">
             <h3 className="line-clamp-1 text-lg font-medium">{anime.title}</h3>
             <div className="flex gap-10">
               <h3 className="font-medium">{anime.type}</h3>
               <h2 className="text-gray-200">{anime.duration}</h2>
             </div>
           </div>
         </div>
       </HoverCardTrigger>
       <HoverCardContent
         className="w-[350px] rounded-2xl bg-purple-700/30 backdrop-blur-md border-none" 
         side="bottom"
         align="start"
         alignOffset={110}
         sideOffset={-180}
       >
         <div className="p-4 space-y-3 text-white">
           <h4 className="  font-bold text-lg border-b border-white/20 pb-2">{anime.title}</h4>
           <div className="space-y-2">
             <div className="flex justify-between">
               <span className="text-white/70">Rating:</span>
               <span className="font-medium">{anime.score}/10 ⭐</span>
             </div>
             <div className="flex justify-between">
               <span className="text-white/70">Episodes:</span>
               <span className="font-medium">{anime.episodes}</span>
             </div>
             <div className="flex justify-between">
               <span className="text-white/70">Status:</span>
               <span className="font-medium">{anime.status}</span>
             </div>
             <div className="flex justify-between">
               <span className="text-white/70">Year:</span>
               <span className="font-medium">{anime.year}</span>
             </div>
             <div className="flex justify-between">
               <span className="text-white/70">Genre:</span>
               <span className="font-medium">{anime.genres?.map(g => g.name).join(', ')}</span>
             </div>
             <div className="pt-2 text-sm text-white">
               <p className="line-clamp-3">{anime.synopsis}</p>
             </div>
           </div>
           <div className="flex justify-center ">
            <Button onClick={handlePlay} className="bg-pink-300 text-lg text-black w-full rounded-full hover:bg-pink-300"> <FaPlay />  Watch Now </Button>
           </div>
         </div>
       </HoverCardContent>
     </div>
   </HoverCard>
 );
} ;
export default JikanCard;