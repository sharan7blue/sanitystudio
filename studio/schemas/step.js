import { AiOutlineOrderedList } from 'react-icons/md'
import { array } from 'prop-types';
export default {
  name: "step",
  title: "How To's",
  type: "document",
  icon: AiOutlineOrderedList,
  fields: [
    {
      name: "title",
      title: "Headline",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "subtitle",
      title: "Subheading",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "image",
      title: "Hero",
      type: "images",
      description:'Main image used for thumbnail in SEO and Social Shares',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'Time',
      title: 'Duration',
      type: 'number',
      description: "Time In Minutes",
      validation: Rule => Rule.required()
    },
    {
      title: 'Skill level',
      name: 'categorySet',
      type: 'string',
      description: "A concept used to indicate the technical difficulty of a task or skill.",
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Easy', value: 'easy'},
          {title: 'Medium', value: 'Medium'},
          {title: 'difficult', value: 'difficult'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
      
    },
    {
      name: "productshowto",
      title: "Products",
      type: "reference",
      description: "List products used in tutorial",
      to: {
        type: "products",
      },
    },
    {
      name: 'howototool',
      type: 'reference',
      title: 'Tools',
      description: "List tools/equipment used in tutorial",
      to: { type: 'tools', },
    },
    {
      name: "articlebody",
      title: "Article Body",
      type: "array",
      description:`Insert Step to provide Instruction Name, Directions & Image`,
      of: [
         {type: 'block'},
         {type: 'addsteps'},
         {type:'image'},
         {type:'youtube'},
         {type: 'products'}
       
      ]
    },
    {
      name: "articlesections",
      title: "Article Section",
      type: "reference",
      to: {
        type: "sections",
      },
    },
    {
      name: "articletags",
      title: "Tags",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'bestfortags' },],
        },
      ],
      description:'Related Articles are generated from these Tags',
    },
    {
      name: "readnext",
      title: "Read Next",
      type: "reference",
      description:'Editorial recommendation for next article to read',
      to: {
        type: "article",
      },
    },
    
 
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: {
        type: "author",
      },
    },
    {
      name: 'publishedAt',
      title: 'Publish-Date',
      type: 'datetime',
      validation: Rule => Rule.required().min('2018-03-01T15:00:00.000Z')
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: `The slug used in the generation of the URL of the page For example, if you have a page named "About our company", a good slug would be about-our-company.`,
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    },
    
    
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
  }
};
