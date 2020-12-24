import React, { SyntheticEvent, useState } from "react";
import USAMap from "react-usa-map";
import { useRouter } from "next/router";

interface Props {
  mapConfig: any;
}

export default function Map({ mapConfig }: Props) {
  const router = useRouter();

  const onStateClicked = (event: SyntheticEvent) => {
    const target = event.target as SVGElement;
    const state = target.dataset.name;

    router.push("/state/" + state);
  };

  return (
    <div>
      <USAMap customize={mapConfig} onClick={onStateClicked} />
      <style jsx global>{`
        .us-state-map path {
          pointer-events: all;
        }
        .us-state-map path:hover {
          opacity: 0.5;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
