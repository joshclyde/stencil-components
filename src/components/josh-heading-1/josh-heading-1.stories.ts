export default {
  title: 'Components/JoshHeading1',
};

const Template = (args: { slot: any }) => `<josh-heading-1>${args.slot}</josh-heading-1>`;
export const Example = Template.bind({})
Example.args = {
  slot: 'Hey'
}
