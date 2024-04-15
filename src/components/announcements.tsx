import React, { FC } from "react";

type Props = {
  name?: string;
};

export const Announcements: FC<Props> = ({ name }) => {
  return (
    <div className="bg-black text-white w-full py-1">
      <div className="container mx-auto text-sm font-semibold">
        Announcements
      </div>
    </div>
  );
};
