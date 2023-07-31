import { useRouter } from "next/router";
import useLoading from "./useLoading";

function useSearch() {
    const router = useRouter();
    const {setLoading} = useLoading()

    const randomSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Fetch Random Word 
        const randomTerm = await fetch(
          "https://random-word-api.herokuapp.com/word?number=1"
        ).then((resp) => resp.json());
        // If fetch fails return 
        if (!randomTerm) return;
        // Navigate with random term query 
        router.push(`/search?term=${randomTerm}&searchType=`);
      };
      const search = (e, searchQuery) => {
        setLoading(true)
        e.preventDefault();
        // If no input return 
        if (!searchQuery.trim()) return;
        // Navigate with user search query 
        router.push(`/search?term=${searchQuery.trim()}&searchType=`);
      };
  return {randomSearch, search}
}

export default useSearch
