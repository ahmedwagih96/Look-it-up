import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import useLoading from "../hooks/useLoading";
import Loading from "../components/Loading";

function Search({ results }) {
  const router = useRouter();
  const {loading} = useLoading();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Lookitup Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (<Loading/>) : null}
      <SearchHeader />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";
  const { term, searchType } = context.query;
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${term}${searchType && "&searchType=image"}&start=${startIndex}`
  ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
