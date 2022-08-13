
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const userRows = [
    {
        id: 1,
        username: "Kamau",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "kamau@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Roselin",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "roselin@gmail.com",
        status: "passive",
        age: 42,
    },
    {
        id: 3,
        username: "Apondo",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "apondo@gmail.com",
        status: "pending",
        age: 45,
    },
    {
        id: 4,
        username: "Valarie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "valarie@gmail.com",
        status: "active",
        age: 16,
    },
    {
        id: 5,
        username: "Philip",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "philip@gmail.com",
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "Reagan",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "reagan@gmail.com",
        status: "active",
        age: 15,
    },
    {
        id: 7,
        username: "Christine",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "christine@gmail.com",
        status: "passive",
        age: 44,
    },
    {
        id: 8,
        username: "Francis",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "francis@gmail.com",
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Partrick",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "patrick@gmail.com",
        status: "pending",
        age: 65,
    },
    {
        id: 10,
        username: "Muriithi",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "muriithi@gmail.com",
        status: "active",
        age: 65,
    },
]