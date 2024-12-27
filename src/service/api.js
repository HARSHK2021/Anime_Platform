import axios from  'axios'


const JIKAN_API_BASE = "https://api.jikan.moe/v4";

/// fetch anime by name with optional filters
 export const searchAnime = async(query,filters)=>{
    try{
        const params = {
            q: query, // Search query (anime name)
            type: filters.type || undefined, // Filter by anime type (e.g., TV, movie)
            status: filters.status || undefined, // Filter by status (e.g., airing, completed)
            genres_exclude: filters.genres || undefined, // Filter by genre (e.g., action, comedy)
            order_by: filters.order_by || 'rank', // Order by title or other attributes
            sfw:false, 
          };
          const response = await axios.get(`${JIKAN_API_BASE}/anime`, { params });
          return response.data; 


    }catch(error){
        console.error('Error fetching anime:', error);
        throw error;

    }
 }

 export const getTopAnime = async()=>{
    try {
        const response = await axios.get(`${JIKAN_API_BASE}/top/anime?page=1&limit=20`);
        return response.data;
        
    } catch (error) {
        console.error("Error fetching top anime:", error);
        throw error;
        
    }
 }



// fetch upcoming  , airing and complete  anime 
export const getUpcomingAnime= async()=>{
    try {
        const response = await axios.get(`${JIKAN_API_BASE}/anime?status=upcoming&limit=20`);
        return response.data;
        
    } catch (error) {
        console.error("Error fetching upcoming anime:", error);
        throw error;
        
    }

}

export const getAiringAnime = async()=>{
    try {
        const response = await axios.get(`${JIKAN_API_BASE}/anime?status=airing`);
        return response.data;
        
        
    } catch (error) {
        console.error("Error fetching airing anime:", error);
        throw error;
        
    }
}

export const getCompleteAnime = async()=>{
    try {
        const response = await axios.get(`${JIKAN_API_BASE}/anime?status=complete`);
        return response.data;
        
    } catch (error) {
        console.error("Error fetching completed anime:", error);
        throw error;
        
    }
}


//////////









//  import { toast } from 'react-toastify';