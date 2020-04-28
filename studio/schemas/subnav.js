export default {
  name: "subnav",
  title: "SubNav",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
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
      name: "subNav",
      type: "array",
      of: [{ type: "reference", to: [{ type: "subnav" }] }],
    },
    {
      title: "Articles",
      name: "articles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "article" }] }],
    },
  ],
};
