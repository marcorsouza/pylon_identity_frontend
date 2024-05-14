// pages/ListUsers.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const lockedOutOptions = [
  { label: "All", value: null },
  { label: "Yes", value: true },
  { label: "No", value: false },
];

export default function ListUsers() {
  const router = useRouter();

  const exampleUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      username: "johndoe",
      isLockedOut: false,
      creationDate: "2023-05-01",
      lastLoginDate: "2023-05-05",
      lastChange: "2023-05-03",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      username: "janedoe",
      isLockedOut: true,
      creationDate: "2023-04-01",
      lastLoginDate: "2023-04-05",
      lastChange: "2023-04-03",
    },
  ];

  const [users, setUsers] = useState(exampleUsers);

  const deleteUser = (id: number) => {
    confirmDialog({
      message: "Are you sure you want to delete this user?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        setUsers(users.filter((user) => user.id !== id));
        // Lógica para chamar API de deleção aqui
      },
    });
  };

  return (
    <div>
      <Button
        label="Create User"
        icon="pi pi-plus"
        className="p-button-success"
        style={{ marginBottom: "10px" }}
        onClick={() => router.push("/admin/users/create")}
      />
      <DataTable
        className="crud-grid"
        value={users}
        paginator
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        rows={1}
      >
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="email" header="Email" />
        <Column field="username" header="Username" />
        <Column field="isLockedOut" header="Is Locked Out?" />
        <Column field="creationDate" header="Creation Date" />
        <Column field="lastLoginDate" header="Last Login Date" />
        <Column field="lastChange" header="Last Change" />
        <Column
          body={(rowData) => (
            <span className="grid-actions">
              <Button
                icon="pi pi-pencil"
                className="p-button-rounded p-button-primary p-mr-2"
                onClick={() => router.push(`/admin/users/update/${rowData.id}`)}
              />
              <Button
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger"
                onClick={() => deleteUser(rowData.id)}
              />
            </span>
          )}
          header="Actions"
        />
      </DataTable>
    </div>
  );
}
