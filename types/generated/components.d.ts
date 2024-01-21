import type { Schema, Attribute } from '@strapi/strapi';

export interface CountrySelectCountry extends Schema.Component {
  collectionName: 'components_country_select_countries';
  info: {
    displayName: 'SelectCountry';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'country.select-country': CountrySelectCountry;
    }
  }
}
