export default {
    name: "taxonomies",
    title: "Taxonomies",
    type: "document",
    fields: [
      {
        name: "categoryname",
        title: "Category",
        type: "string",
        validation: (Rule) => Rule.required(),
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
    ]
}
   