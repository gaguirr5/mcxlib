import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Pages/UserProfile",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    username:'John Doe',
    userEmail:'john@doe.com'
  },
};


// import type { Meta, StoryObj } from "@storybook/react";
// import UserProfile from "../UserProfile";

// const meta: Meta<typeof UserProfile> = {
//   title: "UserProfile", // Organized under "Components" in Storybook
//   component: UserProfile,
//   parameters: {
//     layout: "centered", // Centers the component in the viewport
//   },
// };

// export default meta;

// type Story = StoryObj<typeof UserProfile>;

// export const Default: Story = {
//   args: {}, // Provide default props for your component here if needed
// };
