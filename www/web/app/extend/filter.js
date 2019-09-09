'use strict';
var moment = require('moment');
exports.formatDate = str => moment(str).format('YYYY-MM-DD HH:mm:ss');
