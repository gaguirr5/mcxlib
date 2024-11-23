import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

//faker for dummy data

const createDataObject = (name:string, group:string, email:string, active:boolean, roles:string[]) => {
  return {name, group, email, active, roles}
}

const dataList = [
  createDataObject('John Doe', 'Amazon Business', 'jd@email.com', true, ['approver, superAdmin']),
  createDataObject('Jane Doe', 'Walmart', 'JaneDoe@mail.com', false, ['vendor']),
  createDataObject('Josh Maple', 'Target', 'jmt@realmail.com', true, ['vendor, approver, vendorAdmin'])
]

const meta: Meta<typeof Example> = {
  title: "UsersList",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    listData:dataList
  },
};

