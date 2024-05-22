import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DeleteAll from "../../components/DeleteAll";
import UpdateData from "../../components/Updatedata";
import SingleDataView from "../../components/SingleDataView";
import InserData from "../../components/InsertData";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    // { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "Comapny_Name",
      headerName: "Company Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: " Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "gstin",
      headerName: "GSTIN",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
       <Routes>
       <Route path="/delete-all" component={DeleteAll} />
        <Route path="/update/:id" component={UpdateData} />
        <Route path="/insert" component={InserData} />
        <Route path="/data" component={DataView} />
        <Route path="/data/:id" component={SingleDataView} />

       </Routes>
          
        {/* <Link to={`/data/${id}`}>View Data</Link> */}
        {/* <Link to="/data/new">Add New Data</Link> */}
        {/* <Route path="/data" component={DataView} /> */}
        {/* <Link to="/insert">Insert Data</Link> */}
{/* <Link to="/delete-all">Delete All Data</Link> */}
      </Box>
    </Box>
  );
};

export default Contacts;