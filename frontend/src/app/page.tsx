import CardsAndFilters from "@/components/CardsAndFilters";
import SearchBar from "@/components/SearchBar";

const getRooms  = async () : Promise<any> => {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/rooms`)
    const data =  res.json()
   if(!res.ok){
    throw Error()
   } 
   return data;
    
  } catch (error) {
    return null;
    
  }
};

export default async function Home() {
  const roomsData = await getRooms()
  return (
    <>
      <SearchBar />
      <CardsAndFilters rooms={roomsData} />
    </>
  );
}
