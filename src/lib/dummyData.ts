
import { faker } from '@faker-js/faker';
import { IUserList } from '../components/usersList/UsersList';

function randArrayFromPool(pool: string[]) {
  const result = [];
  const poolCopy = [...pool];

  // Randomly decide the size of the resulting array (from 0 to pool.length)
  const size = Math.floor(Math.random() * (pool.length + 1));

  // Randomly pick elements from the poolCopy to fill the result
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * poolCopy.length);
    result.push(poolCopy.splice(randomIndex, 1)[0]); // Remove and add to result
  }

  return result;
}

export const UsersListDummyData = (numOfEntries: number = 0) => {
  const createObject = (id: string, name: string, group: string, email: string, active: boolean, roles: string[]) => {
    return { id, name, group, email, active, roles };
  };

  const pool = ['vendor', 'vendorAdmin', 'approver', 'admin', 'superadmin'];

  const list: IUserList[] = [];
  for (let x = 0; x < numOfEntries; x++) {
    list.push(
      createObject(
        faker.string.nanoid(),
        faker.person.fullName(),
        faker.company.name(),
        faker.internet.email(),
        faker.datatype.boolean(),
        randArrayFromPool(pool),
      ),
    );
  }
  return list
};
