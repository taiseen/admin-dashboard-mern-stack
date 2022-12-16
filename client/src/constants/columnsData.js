export const dashboardColumns = [
    {
        field: "_id",
        headerName: "ID",
        flex: 1,
    },
    {
        field: "userId",
        headerName: "User ID",
        flex: 1,
    },
    {
        field: "createdAt",
        headerName: "CreatedAt",
        flex: 1,
    },
    {
        field: "products",
        headerName: "# of Products",
        flex: 0.5,
        sortable: false,
        renderCell: (params) => params.value.length,
    },
    {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
];


export const adminColumns = [
    {
        field: "_id",
        headerName: "ID",
        flex: 1,
    },
    {
        field: "name",
        headerName: "Name",
        flex: 0.5,
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    {
        field: "phoneNumber",
        headerName: "Phone Number",
        flex: 0.5,
        renderCell: (params) => {
            return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        },
    },
    {
        field: "country",
        headerName: "Country",
        flex: 0.4,
    },
    {
        field: "occupation",
        headerName: "Occupation",
        flex: 1,
    },
    {
        field: "role",
        headerName: "Role",
        flex: 0.5,
    },
];

export const customersColumns = [
    {
        field: "_id",
        headerName: "ID",
        flex: 1,
    },
    {
        field: "name",
        headerName: "Name",
        flex: 0.5,
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    {
        field: "phoneNumber",
        headerName: "Phone Number",
        flex: 0.5,
        renderCell: (params) => {
            return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        },
    },
    {
        field: "country",
        headerName: "Country",
        flex: 0.4,
    },
    {
        field: "occupation",
        headerName: "Occupation",
        flex: 1,
    },
    {
        field: "role",
        headerName: "Role",
        flex: 0.5,
    },
];

export const performanceColumns = [
    {
        field: "_id",
        headerName: "ID",
        flex: 1,
    },
    {
        field: "userId",
        headerName: "User ID",
        flex: 1,
    },
    {
        field: "createdAt",
        headerName: "CreatedAt",
        flex: 1,
    },
    {
        field: "products",
        headerName: "# of Products",
        flex: 0.5,
        sortable: false,
        renderCell: (params) => params.value.length,
    },
    {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
];