import { FaPrescriptionBottle } from 'react-icons/fa';

export default {
    name: "tools",
    title: "Tools",
    type: "document",
    icon:FaPrescriptionBottle,
    fields: [
      {
        name: "toolname",
        title: "Tool Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "toolslug",
        title: "Slug",
        type: "slug",
        options: {
          source: "toolname",
          maxLength: 96,
        },
      },
      {
        name: "toolImage",
        title: "Tool Image",
        type: "images",
        options: {
          hotspot: true,
        },
      },
    ]
}
   