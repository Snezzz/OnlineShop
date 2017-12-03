/**
 * Created by Снежа on 01.12.2017.
 */
'use strict';

module.exports = (context, cb) => {
    const message = 'You have connection with serverless'
    cb(null, { message });
};
