// components/Sidebar.tsx
import { PanelMenu } from "primereact/panelmenu";

const menuItems = [
  {
    label: "Dashboard",
    icon: "pi pi-fw pi-desktop",
    items: [{ label: "Home", icon: "pi pi-fw pi-home" }],
  },
  {
    label: "Admin",
    icon: "pi pi-fw pi-user-edit",
    items: [
      { label: "User", icon: "pi pi-fw pi-user" },
      { label: "Roles", icon: "pi pi-fw pi-users" },
      { label: "Tasks", icon: "pi pi-fw pi-list" },
      { label: "Applications", icon: "pi pi-fw pi-briefcase" },
    ],
  },
  {
    label: "Utils",
    icon: "pi pi-fw pi-cog",
    items: [{ label: "Logs", icon: "pi pi-fw pi-file" }],
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="app-logo">
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ width: "64px", height: "64px" }}
        />
        <span>Pylon</span>
      </div>
      <PanelMenu
        model={menuItems}
        className="menu-item"
        style={{ flex: "1" }}
      />
    </div>
  );
}
