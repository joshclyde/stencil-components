export default {
  title: 'Components/JoshText',
};

const Template = (args: { slot: any }) => `<josh-text>${args.slot}</josh-text>`;
export const Example = Template.bind({})
Example.args = {
  slot: 'Hey'
}
