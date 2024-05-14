import React from "react";
import { useUserStore } from "../../../store/userStore";
import UserList from "@/users/UserList";

const UsersPage: React.FC = () => {
  const { users } = useUserStore();

  return (
    <div>
      <UserList users={users ?? []} />
    </div>
  );
};

export default UsersPage;
