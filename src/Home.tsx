import { useEffect, useState } from "react";
import IUser from "./models/userModel";
import getUsers from "./services/userService";

export default function Home() {
  const [users, setUsers] = useState<IUser[]>([]);
  const APICall = () => {
    getUsers().then((res: IUser[]) => setUsers(res));
  };
  const createTableHead = () => {
    if (!users[0]) return;
    return Object.keys(users[0]).map((key) => <th>{key}</th>);
  };
  const createTableBody = () => {
    return users?.map((user) => (
      <tr>
        {/* <td>{user._id}</td>
        <td>{user.age}</td>
        <td>{`${user.name.first} ${user.name.last}`}</td>
        <td>{user.email}</td>
        <td>{user.index}</td>
        <td>{user.phone}</td>
        <td>{user.picture}</td> */}
        {Object.values(user).map((value) =>
          typeof value === "object" ? (
            <td>
              {value.first} {value.last}
            </td>
          ) : (
            <td>{value}</td>
          )
        )}
      </tr>
    ));
  };
  return (
    <div>
      Home {getMessageByNumbers(1, 12)}
      <button onClick={APICall}>Press for API call</button>
      <table>
        <thead>{createTableHead()}</thead>
        <tbody>{createTableBody()}</tbody>
      </table>
    </div>
  );
}
const getMessageByNumbers = (number1: number, number2: number): string => {
  if (number1 !== number2) return "Hello World";
  return "Hello World";
};
