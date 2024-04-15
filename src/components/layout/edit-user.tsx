import { User } from "@/lib/types";
import { Button, Dialog } from "@radix-ui/themes";
import React, { FC } from "react";

type Props = {
  user: User;
};

export const EditUser: FC<Props> = ({ user }) => {
  const { id, name, role, email } = user;
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Trigger</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        How is it going.... {name} <br />
        {id} - {name} - {role} - {email}
      </Dialog.Content>
    </Dialog.Root>
  );
};
