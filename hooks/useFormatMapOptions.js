import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useFormatMapOptions = (stateInfo, sortByField) => {
  const router = useRouter();

  const [mapOptions, setMapOptions] = useState(null);

  useEffect(() => {
    const sortByValues = stateInfo.map((state) => state[sortByField]);
    const max = Math.max(...sortByValues);
    const min = Math.min(...sortByValues);

    const options = stateInfo.reduce((acc, state) => {
      const sortByValue = state[sortByField];
      const percentile = ((sortByValue - min) / (max - min)) * 100;

      return {
        ...acc,
        [state.state]: {
          fill: `hsl(0, 100%, ${(100 - percentile) / 2 + 50}%)`,
          clickHandler: (event) => router.push(`/state/${state.state}`),
        },
      };
    }, {});

    setMapOptions(options);
  }, [sortByField]);

  return { mapOptions };
};
