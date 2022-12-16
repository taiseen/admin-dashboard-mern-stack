import { useGetUserPerformanceQuery } from "reduxToolkit/api";
import { performanceColumns } from "constants/columnsData";
import { Header, CustomColumnMenu } from "components";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";


const Performance = () => {

  const theme = useTheme();
  const userId = useSelector(state => state.theme.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId); // ✅ REST API Call By RTK Query


  return (
    <Box m="1.5rem 2.5rem">

      <Header
        title="PERFORMANCE"
        subtitle="Track your Affiliate Sales Performance Here"
      />

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
          rows={(data && data.sales) || []}
          columns={performanceColumns}
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

export default Performance;
