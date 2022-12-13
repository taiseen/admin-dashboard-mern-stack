const adminColumns = [
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

export default adminColumns;