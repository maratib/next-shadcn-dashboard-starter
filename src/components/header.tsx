import React, { FC } from "react";

type Props = {
  name?: string;
};

export const Header: FC<Props> = ({ name }) => {
  return (
    <div className="bg-red-600 text-white w-full py-4">
      <div className="container mx-auto text-4xl font-semibold">LOGO</div>
    </div>
  );
};
