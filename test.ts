interface Account {
  id: number;
  createdDate: Date;
  updatedDate?: Date;
}

interface User extends Account {
  email: string;
}

interface Manager extends Account {
  phone: string;
}

export const user: User = {
  id: 1,
  email: 'asasdasd',
  createdDate: new Date(),
}

const manager: Manager = {
  id: 1,
  phone: '123123',
  createdDate: new Date(),
  updatedDate: undefined,
}

function printData(data: Account) {
  if(isUser(data)) {
    console.log(data.email);
  }
  console.log(data.id);
}

printData(user);

function isUser(person: Account): person is User {
  return (person as User).email !== undefined;
}