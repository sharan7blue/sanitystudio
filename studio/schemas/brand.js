import { MdBrandingWatermark } from 'react-icons/md';

export default {
    name: 'brand',
    title: 'Brand',
    type: 'document',
    icon: MdBrandingWatermark,
    fields: [
      {
        name: 'brandname',
        title: 'Brand Name',
        type: 'string'
      },
      {
        name: 'brandimage',
        title: 'Brand Image',
        type: "images",
        options: {
          hotspot: true,
        },
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'brandname',
          maxLength: 96
        }
      },
    ]
  }
  