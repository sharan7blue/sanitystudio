export default {
    name: "sections",
    title: "Sections",
    type: "document",
    fields: [
      {
        name: "sectionname",
        title: "Section Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "sectionname",
          maxLength: 96,
        },
      },
      {
        name: "heroImage",
        title: "Section Image",
        type: "images",
        options: {
          hotspot: true,
        },
      },
    ],
  };