import { adminColumns } from "constants/columnsData";
import { useGetAdminsQuery } from "reduxToolkit/api";
import { CustomColumnMenu } from "components";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Header } from "components";


const Admin = () => {

  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();
  
  
  return (
    <Box m="1.5rem 2.5rem">

      <Header title="ADMINS" subtitle="Managing admins and list of admins" />

      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >

        <DataGrid
          rows={data || []}
          columns={adminColumns}
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />

      </Box>
    </Box>
  );
};

export default Admin;
