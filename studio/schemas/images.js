export default {
    name: 'images',
    title: 'Image',
    type: 'image',
    description: 'Upload image from your computer, TAB, or paste image fom clipboard',
    options: {
      hotspot: true
    },
    fields: [
      {
        name: 'alt',
        title: 'Accessibility Requirement: Please describe the image',
        type: 'string',
        validation: (Rule) => Rule.required(),
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'imagecaption',
        title: 'Caption',
        description:'Name or description of image',
        type: 'string',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'imagetabID',
        title: 'tabID',
        description:'Leave blank if image is not from TAB',
        type: 'string',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'imagecredit',
        title: 'Credit',
        description:'Leave blank if image is from TAB',
        type: 'string',
        options: {
          isHighlighted: true
        }
      },
    ]
  }