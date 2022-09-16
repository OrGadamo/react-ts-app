const USERS_API: string =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users";
export default async function getUsers(): Promise<any> {
  try {
    return await fetch(USERS_API).then((res) => res.json());
  } catch (err) {
    console.log(err);
  }
}
