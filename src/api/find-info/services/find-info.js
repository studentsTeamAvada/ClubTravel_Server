'use strict';

/**
 * find-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::find-info.find-info');
