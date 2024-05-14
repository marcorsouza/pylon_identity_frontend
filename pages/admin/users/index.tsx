import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

import { useSession } from "next-auth/react";

import { useUserStore } from "../../../store/userStore";
import { AuthSession } from "../../../types/AuthData";
import { UserPublic } from "../../../types/UserTypes";
import { DateTime } from "luxon";

interface ColumnProps {
  field: keyof UserPublic;
  header: string;
}

const ListUsers: React.FC = () => {
  const { data: session } = useSession();
  const props = session as AuthSession;
  //props.accessToken;

  const { getUsers, setToken, users } = useUserStore();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      setToken(props.accessToken); // Defina o token se você estiver gerenciando isso no store
      getUsers();
    }
  }, [props, setToken, getUsers]);

  const deleteUser = (id: number) => {
    confirmDialog({
      message: "Are you sure you want to delete this user?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        //        setUsers(users.filter(user => user.id !== id));
        // Logic to call deletion API here
      },
    });
  };

  const formatDateTime = (dateString: string | null | undefined) => {
    if (!dateString) return "—";

    // Tentando converter a string ISO para DateTime
    const date = DateTime.fromISO(dateString);

    // Checa se a conversão foi bem-sucedida e formata a data
    return date.isValid ? date.toFormat("dd/LL/yyyy HH:mm") : "—";
  };

  const responsiveTemplate = (data: UserPublic, props: ColumnProps) => (
    <span data-label={props.header}>
      {props.field === "creation_date" ||
      props.field === "last_login_date" ||
      props.field === "last_change"
        ? formatDateTime(data[props.field])
        : data[props.field].toString()}
    </span>
  );

  return (
    <div>
      <Button
        label="Create User"
        icon="pi pi-plus"
        className="p-button-success"
        style={{ marginBottom: "10px" }}
        onClick={() => router.push("/admin/users/create")}
      />
      <DataTable className="crud-grid" value={users ?? []} paginator rows={10}>
        <Column
          field="id"
          header="ID"
          body={(data) =>
            responsiveTemplate(data, { field: "id", header: "ID" })
          }
        />
        <Column
          field="name"
          header="Name"
          body={(data) =>
            responsiveTemplate(data, { field: "name", header: "Name" })
          }
        />
        <Column
          field="email"
          header="Email"
          body={(data) =>
            responsiveTemplate(data, { field: "email", header: "Email" })
          }
        />
        <Column
          field="username"
          header="Username"
          body={(data) =>
            responsiveTemplate(data, { field: "username", header: "Username" })
          }
        />
        <Column
          field="is_locked_out"
          header="Is Locked Out?"
          body={(data) =>
            responsiveTemplate(data, {
              field: "is_locked_out",
              header: "Is Locked Out?",
            })
          }
        />
        <Column
          field="creation_date"
          header="Creation Date"
          body={(data) =>
            responsiveTemplate(data, {
              field: "creation_date",
              header: "Creation Date",
            })
          }
        />
        <Column
          field="last_login_date"
          header="Last Login Date"
          body={(data) =>
            responsiveTemplate(data, {
              field: "last_login_date",
              header: "Last Login Date",
            })
          }
        />
        <Column
          field="last_change"
          header="Last Change"
          body={(data) =>
            responsiveTemplate(data, {
              field: "last_change",
              header: "Last Change",
            })
          }
        />
        <Column
          header="Actions"
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
        />
      </DataTable>
    </div>
  );
};

export default ListUsers;
