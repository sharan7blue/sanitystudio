export default {
    name: 'productrichtext',
    title: 'Products',
    type: "reference",
    validation: (Rule) => Rule.required(),
      to: {
        type: "products",
      },
  }