'use strict';

/**
 * name-country service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::name-country.name-country');
