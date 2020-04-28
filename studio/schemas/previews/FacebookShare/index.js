// eslint-disable-next-line no-unused-vars
import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
// eslint-disable-next-line import/no-unresolved
import sanityClient from 'part:@sanity/base/client';

import styles from './FacebookShare.css';

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

const FacebookShare = ({ document, width }) => {
  const { title, seo, excerpt, thumbnail } = document.displayed;
  const description = (seo && seo.description) || excerpt;
  const openGraphImage =
    (seo && seo.openGraphImage) || (thumbnail && thumbnail.image && thumbnail.image);
  const websiteUrl = 'http://www.tresemme.com/uk';
  const websiteUrlWithoutProtocol = websiteUrl.split('://')[1];

  return (
    <div className={styles.seoItem}>
      <h3>Facebook share</h3>
      <div className={styles.facebookWrapper} style={{ width }}>
        <div className={styles.facebookImageContainer}>
          <img
            className={styles.facebookCardImage}
            src={urlFor(openGraphImage)
              .width(500)
              .url()}
          />
        </div>
        <div className={styles.facebookCardContent}>
          <div className={styles.facebookCardUrl}>{websiteUrlWithoutProtocol}</div>
          <div className={styles.facebookCardTitle}>
            <a href={websiteUrl}>{title}</a>
          </div>
          <div className={styles.facebookCardDescription}>{description}</div>
        </div>
      </div>
    </div>
  );
};

FacebookShare.defaultProps = {
  document: null,
  width: 500,
};

export default FacebookShare;
