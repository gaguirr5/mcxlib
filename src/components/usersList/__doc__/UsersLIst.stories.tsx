import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import { IUserList } from '../UsersList';
import { faker } from '@faker-js/faker';
//faker for dummy data

const createDataObject = (id: string, name: string, group: string, email: string, active: boolean, roles: string[]) => {
  return { id, name, group, email, active, roles };
};

const pool = ['vendor', 'vendorAdmin', 'approver', 'admin', 'superadmin'];

function getFakeRoles(pool: string[]) {
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

const createFakeData = () => {
  const listData: IUserList[] = [];
  for (let x = 0; x < 101; x++) {
    listData.push(
      createDataObject(
        faker.string.nanoid(),
        faker.person.fullName(),
        faker.company.name(),
        faker.internet.email(),
        faker.datatype.boolean(),
        getFakeRoles(pool),
      ),
    );
  }
  return listData;
};

const meta: Meta<typeof Example> = {
  title: 'UsersList',
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    listData: createFakeData(),
  },
};
