export default {
    title: 'Content Block',
    name: 'content_block',
    type: 'object',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Body',
        name: 'body',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Image',
        name: 'image',
        type: 'figure',
      },
    ],
  };
  