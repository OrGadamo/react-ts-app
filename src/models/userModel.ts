export default interface IUser {
  _id: string;
  age: number;
  name: { last: string; first: string };
  email: string;
  phone: string;
  picture: string;
  index: number;
}
