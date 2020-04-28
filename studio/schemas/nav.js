export default {
  name: "nav",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "SubNav",
      name: "subnav",
      type: "array",
      of: [{ type: "reference", to: [{ type: "subnav" }] }],
    },
  ],
};
