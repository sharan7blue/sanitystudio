import { GiBeerBottle } from 'react-icons/gi';

export default {
  title: 'Products',
  icon: GiBeerBottle,
  name: 'products',
  type: 'document',
  fields: [
    {
      name: "brands",
      title: "Brand",
      type: "reference",

      to: {
        type: "brand",
      },
      description: "Select Brand",
    },
    {
      title: 'Product Name',
      name: 'productname',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: "Enter product name",
    },
    {
      name: 'productimage',
      title: 'Product Image',
      type: "images",
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Product Details',
      name: 'product_details',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'How it use',
      name: 'how_it_works',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bestfor",
      title: "Tags",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'bestfortags' },],
        },
      ],
      description: "Select tags",
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Product ID',
      name: 'productid',
      type: 'string',
      description: "BIN Solution (if Available)",
    },
    {
      title: 'Buy Now',
      name: 'buynow',
      type: 'url',
      description: "Link to Ecommerce site",
      
    },
    {
      title: 'Learn More',
      name: 'Learnmore',
      type: 'url',
      description: "Link to brand site ",
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'productname',
      },
    },
  ],
  preview: {
    select: {
      title: 'brand',
      media: 'productimage',
    },
  },
};
