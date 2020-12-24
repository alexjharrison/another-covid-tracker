import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { useFormatMapOptions } from "../hooks/useFormatMapOptions";

import Map from "../components/Map";

export default function Home({ data }: { data: any }) {
  const [sortByField, setSortByField] = useState("positive");

  const { mapOptions } = useFormatMapOptions(data, sortByField);

  return (
    <main>
      <h1>Click a state</h1>
      <Map mapConfig={mapOptions} />
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    "https://api.covidtracking.com/v1/states/current.json"
  ).then((res) => res.json());
  return { props: { data } };
};
