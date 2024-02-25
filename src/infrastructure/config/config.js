const configStaging = require('./config.staging')
const configProduction = require('./config.production')

const config = process.env.NODE_ENV === 'production' ? configProduction : configStaging;

module.exports = config;