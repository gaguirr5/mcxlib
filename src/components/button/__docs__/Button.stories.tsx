import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: 'Button',
    primary: true,
    disabled: false,
    size: 'small',
    onClick: () => console.log('Button clicked'),
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button',
    primary: false,
    disabled: false,
    size: 'medium',
    onClick: () => console.log('Secondary button clicked'),
  },
};
