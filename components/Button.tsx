import React from "react";

interface Props {
  text: string;
  size?: number;
  color?: string;
  [x: string]: any;
}

export default function Button({
  text = "",
  size = 16,
  color = "orange",
  ...rest
}: Props) {
  return (
    <button {...rest}>
      {text}

      <style jsx>{`
        padding: 10px;
        border-radius: 5px;
        font-size: ${size}px;
        background-color: ${color};
      `}</style>
    </button>
  );
}
