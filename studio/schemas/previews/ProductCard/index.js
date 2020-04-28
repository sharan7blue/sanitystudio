import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
// eslint-disable-next-line import/no-unresolved
import sanityClient from 'part:@sanity/base/client';

import styles from './ProductCard.css';

const builder = imageUrlBuilder(sanityClient);

export default ({ document: { displayed } }) => (
  <div className={styles[`product-card-container`]}>
    <article className={styles[`product-card`]} data-testid="product-card">
      <a className={styles[`product-card__link`]} data-testid="product-card-link">
        <div className={styles[`product-card__media`]}>
          <img
            src={builder
              .image(displayed.thumbnail.image)
              .width(400)
              .url()}
            alt={displayed.thumbnail.image.altText}
          />
          {!displayed.thumbnail && (
            <div className={styles[`product-card__no-image`]}>
              <p className={styles[`product-card__no-image__label`]}>No Image</p>
            </div>
          )}
        </div>
        <div className={styles[`product-card__content`]}>
          <header>
            <h2 className={styles[`product-card__title`]}>{displayed.title}</h2>
          </header>
        </div>
      </a>
    </article>
  </div>
);
