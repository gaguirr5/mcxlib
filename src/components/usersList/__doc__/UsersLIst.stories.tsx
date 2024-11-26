import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import { UsersListDummyData } from '../../../lib/dummyData';


const meta: Meta<typeof Example> = {
  title: 'UsersList',
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    listData: UsersListDummyData(69),
  },
};

export const Sample: Story = {
  args: {
    listData: UsersListDummyData(3),
  },
};
