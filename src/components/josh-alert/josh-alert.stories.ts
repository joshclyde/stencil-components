export default {
  title: 'Components/JoshAlert',
};

const Template = (args: { slot: any; kind: any }) => `<josh-alert kind=${args.kind}>${args.slot}</josh-alert>`;
export const Success = Template.bind({});
Success.args = {
  slot: 'Message goes here.',
  kind: 'success',
};

export const Error = Template.bind({});
Error.args = {
  slot: "Message goes here.",
  kind: 'error'
}