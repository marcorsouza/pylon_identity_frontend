import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Avatar } from "primereact/avatar";
export default function UserProfileMenu() {
  const menu = useRef<Menu>(null);

  const items = [
    {
      label: "Privacy",
      icon: "pi pi-lock",
      command: () => console.log("Privacy Settings"),
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
      command: () => console.log("Account Settings"),
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => console.log("Logging out"),
    },
  ];

  // Função para abrir o menu
  const showMenu = (event: any) => {
    if (menu.current && menu.current.toggle) {
      menu.current.toggle(event);
    } else {
      console.log("Menu ref not initialized or toggle method not available");
    }
  };

  return (
    <>
      <Avatar
        image="/images/avatar-m-1.png"
        size="large"
        shape="circle"
        className="user-avatar"
        onClick={showMenu}
      />
      <Menu model={items} className="profile-item" popup ref={menu} />
    </>
  );
}
