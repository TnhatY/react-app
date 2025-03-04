import TableUser from "./TableUser"

const Dashboard = (props) => {
    const { listUser } = props;
    return (
        <TableUser listUser={listUser} />
    )
}

export default Dashboard
