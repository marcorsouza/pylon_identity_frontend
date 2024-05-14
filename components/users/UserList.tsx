// UserList.tsx
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";
import { useSession } from "next-auth/react";

import { AuthSession } from "../../types/AuthData";
import { useUserStore } from "@/userStore";
import formatDateTime from "../../utils/date_utils";

interface UserListProps {
  users: any[]; // Adjust the type based on your user type
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const router = useRouter();
  const { setToken, getUsers } = useUserStore();
  const { data: session } = useSession();
  const props = session as AuthSession;

  useEffect(() => {
    if (props) {
      setToken(props.accessToken); // Assuming accessToken is available
      getUsers();
    }
  }, [props, setToken, getUsers]);

  const deleteUser = (id: number) => {
    confirmDialog({
      message: "Are you sure you want to delete this user?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        // Logic to call deletion API here
      },
    });
  };

  const responsiveTemplate = (
    data: any,
    props: { field: any; header: string },
  ) => (
    <span data-label={props.header}>
      {["creation_date", "last_login_date", "last_change"].includes(props.field)
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

export default UserList;
