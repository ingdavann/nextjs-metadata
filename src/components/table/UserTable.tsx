"use client"
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component"
import LoadingCom from "../LoadingCom";
import { Input } from "@nextui-org/react";

const columns: TableColumn<userType>[] = [
  {
    name: "ID",
    selector: row => row.id,
    sortable: true
  },
  {
    name: 'First Name',
    selector: row => row.firstName,
    sortable: true
  },
  {
    name: 'Last Name',
    selector: row => row.lastName,
    sortable: true
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true
  },
  {
    name: 'Profile',
    selector:(row): any  => <img src={row.image} width={50} height={50} className="rounded"/>,
  }
]
const handleChange = ({} ) => { };
export default function UserTable() {
  const url = "https://dummyjson.com/users";
  const [getUser, setUser] = useState<userType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [getSearch, setSearch] = useState<string>("");
  const [getFileter, setFilter] = useState<userType[]>([]);
  const fetchUser = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setUser(result.users);
    setLoading(false);
  }
  useEffect(() => {
    fetchUser();
  }, [])

  useEffect(() => {
    if (!getSearch) {
      setFilter(getUser);
      return;
    }
    const result = getUser.filter((item) => {
      // return item.toLowerCase().includes(getSearch.toLowerCase());
      return item.firstName.toLowerCase().includes(getSearch.toLowerCase());
    });
    setFilter(result);
  }, [getSearch, getUser])

  const paginationComponent = {
    rowsPerPageText: "Rows per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "ទាំងអស់",
  };
  return (
    <>
      <DataTable
        progressComponent={<LoadingCom />}
        progressPending={isLoading}
        pagination
        selectableRows
        onSelectedRowsChange={handleChange}
        columns={columns}

        subHeader
        subHeaderComponent={
          <Input type="text" className="rounded"
          label="Search"
          isClearable
          radius="lg"
          value={getSearch}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search..."
          />
        }
        paginationComponentOptions={paginationComponent}
        data={getFileter}
      />
    </>

  )
}