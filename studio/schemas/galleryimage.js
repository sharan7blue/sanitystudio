export default {
    name: 'galleryimage',
    type: 'object',
    title: 'Image Gallery',
    options: {
      hotspot: true
    },
    fields: [
      {
        name: 'Thumbnails',
        title: 'Add in a Sequence of Images',
        type: 'array',
        of: [
            {
                type: 'image',
                options: {
                    isHighlighted: true
                  }
            }
        ]
        
      }
    ],
    preview: {
      select: {
        imageUrl: 'asset.url'
      }
    }
  }
  
    