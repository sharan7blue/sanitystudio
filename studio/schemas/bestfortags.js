export default {
  name: 'bestfortags',
  title: 'Tags',
  type: 'document',
  description: 'Type relevant tags',
  fields: [
    {
      name: 'bestfortags',
      title: 'Tags',
      type: 'string',
      description: 'Enter relevant tags',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: `The slug used in the generation of the URL of the page`,
      options: {
        source: "bestfortags",
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'Tags',
    },
  },
  
}