// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";


// We import object and document schemas
import blockContent from "./blockContent";
// import category from './category'
// import post from './post'
import author from "./author";
import article from "./article";
import step from "./step";
import addsteps from "./addsteps";
import youtube from "./youtube";
import heroImage from "./heroImage";
import images from "./images";
import brandinfo from "./brandinfo";
import products from "./products";
import seo from "./seo";
import brand from "./brand";
import bestfortags from "./bestfortags";
import sections from "./sections";
import productrichtext from "./productrichtext";
import gallery from "./gallery";
import galleryimage from "./galleryimage";
import tool from "./tools";





// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // post,
    author,
    images,
    // category,
    article,
    step,
    addsteps,
    youtube,
    heroImage,
    brandinfo,
    products,
    seo,
    brand,
    bestfortags,
    productrichtext,
    sections,
    gallery,
    galleryimage,
    tool,


    
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
