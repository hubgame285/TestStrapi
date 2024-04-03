'use strict';

/**
 * restaurant-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-test.restaurant-test');
