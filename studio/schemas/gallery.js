export default {
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Headline",
        type: "string",
       
  
      },
      {
        name: "subtitle",
        title: "Subheading",
        type: "string",
     
      },
      {
        name: "heroImage",
        title: "Hero",
        type: "images",
        description: `Main image used for thumbnail in SEO and Social Shares`,
        options: {
          hotspot: true,
        },
      },
      {
        name: "imagegallery",
        title: "Image Gallery",
        type: "galleryimage",
        options: {
          collapsible: true,
        },
      },
      {
        name: "articlebody",
        title: "Article Body",
        type: "array",
        description:`Insert Images, Video and Products anywhere in the body`,
        of: [
           {type: 'block'},
           {type: 'images'},
           {type: 'youtube'},
           {type: 'productrichtext'}
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
        type: "reference",
        description:'Related Articles are generated from these Tags',
        to: {
          type: "bestfortags",
        },
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
    
  };
  