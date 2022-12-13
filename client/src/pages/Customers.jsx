import customersColumns from "constants/customersColumns";
import { useGetCustomersQuery } from "reduxToolkit/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Header } from "components";


const Customers = () => {

  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();

  return (
    <Box m="1.5rem 2.5rem">

      <Header title="CUSTOMERS" subtitle="List of Customers" />

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
          columns={customersColumns}
          loading={isLoading || !data}
          getRowId={(row) => row._id}
        />

      </Box>
    </Box>
  );
};

export default Customers;
