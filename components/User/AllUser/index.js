import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Button from "../../UI/Button";
import Table from "../../UI/Table";

const columns = [
  {
    id: "fullName",
    numeric: false,
    disablePadding: true,
    label: "Full Name",
  },
  { id: "email", numeric: false, disablePadding: false, label: "Email" },
  {
    id: "phoneNo",
    numeric: false,
    disablePadding: false,
    label: "Phone Number",
  },
  { id: "action", numeric: false, disablePadding: false, label: "Action" },
];

const AllUser = () => {
  const router = useRouter();
  const userList = useSelector((state) => state.user);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} lg={8} xl={6}>
        <div className="whiteContainer">
          <h1>All User</h1>
          <Button
            style={{ float: "right" }}
            label="Create New User"
            onClick={() => router.push("/create-user")}
          />
          <Table title="All User" columns={columns} rows={userList} />
        </div>
      </Grid>
    </Grid>
  );
};

export default AllUser;
