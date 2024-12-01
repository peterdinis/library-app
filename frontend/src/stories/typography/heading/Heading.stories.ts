import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { HeadingComponent } from './heading.component';

export default {
  title: 'Components/Heading',
  component: HeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [HeadingComponent], // Use `imports` instead of `declarations`
    }),
  ],
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    fontSize: {
      control: {
        type: 'select',
        options: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl'],
      },
    },
    color: { control: 'color' },
  },
} as Meta<HeadingComponent>;

type Story = StoryObj<HeadingComponent>;

export const Default: Story = {
  args: {
    level: 'h1',
    fontSize: 'text-4xl',
    color: '#000000',
  },
};
