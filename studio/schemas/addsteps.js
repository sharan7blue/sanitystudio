export default {
    name: "addsteps",
    title: "Step",
    type: "document",
    fields: [
      {
        name: "instructionname",
        title: "Instruction Name",
        description: `Instruction Title`,
        validation: (Rule) => Rule.required(),
        rows: 1,
        type: "array",
        of: [
           {type: 'block'},
        ]
      },
      {
        name: "directions",
        title: "Directions",
        description: `Instruction Details`,
        validation: (Rule) => Rule.required(),
        type: "array",
        of: [
           {type: 'block'},
        ]
      },

      {
        name: "heroImage",
        title: "instructionimages",
        type: "images",
        description: `Instruction Image`,
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        imageUrl: 'asset.url'
      }
    }
  };
  
