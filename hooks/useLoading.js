import Router from "next/router";
import { useState, useEffect } from "react";

function useLoading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const end = () => {
        setLoading(false);
      };
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);
      return () => {
        Router.events.off("routeChangeComplete", end);
        Router.events.off("routeChangeError", end);
      };
  }, []);

  return {loading, setLoading};
}

export default useLoading;