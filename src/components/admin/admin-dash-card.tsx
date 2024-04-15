import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Icons } from "@/components/icons";

type Props = {
  title?: string;
  icon?: keyof typeof Icons;
  amount?: string;
  content?: string;
};

export const AdminDashCard: FC<Props> = ({ title, icon, amount, content }) => {
  const Icon = Icons[icon || "chevronDown"];
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        <p className="text-xs text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
};
