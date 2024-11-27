import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';
import { faker } from '@faker-js/faker';

const meta: Meta<typeof Example> = {
  title: 'UserProfile',
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    username: faker.person.fullName(),
    userEmail: faker.internet.email(),
  },
};
