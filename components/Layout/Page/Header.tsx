// components/Header.tsx
import { Button } from "primereact/button";
import { BreadCrumb } from "primereact/breadcrumb";
import UserProfileMenu from "./UserProfileMenu";

export default function Header() {
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Calendar", icon: "pi pi-fw pi-calendar" },
  ];

  const menuItems = [
    { label: "File", icon: "pi pi-file" },
    { label: "Edit", icon: "pi pi-pencil" },
  ];

  const start = (
    <Button
      icon="pi pi-bars"
      className="p-button-rounded p-button-text"
      onClick={toggleSidebar}
    />
  );

  const end = <Button icon="pi pi-fw pi-user" />;

  function toggleSidebar() {
    // Toggle sidebar logic here
    console.log("Toggle sidebar");
  }

  return (
    <div className="header">
      {start}
      <BreadCrumb
        model={items}
        home={{ icon: "pi pi-home" }}
        className="header-breadcrumb"
      />
      <UserProfileMenu />
    </div>
  );
}
