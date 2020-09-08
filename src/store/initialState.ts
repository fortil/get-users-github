interface IUser { avatar_url: string; location: string; name: string; }
const user = {} as IUser;
const USERS = [] as IUser[];

const INISTIAL_STATE = {
  USERS,
  user,
  userName: '',
};
export default INISTIAL_STATE;