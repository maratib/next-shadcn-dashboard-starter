import React, { FC } from "react";

type Props = {
  name?: string;
};

export const Footer: FC<Props> = ({ name }) => {
  return (
    <div className="bg-gray-400 text-white w-full py-4">
      <div className="container mx-auto text-sm font-semibold">Footer</div>
    </div>
  );
};
