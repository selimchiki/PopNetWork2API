/**
* Example file.
*
* @author Daria <lo.pennequin@gmail.com>
*/
'use strict';

const path            = require('path');
const ctrl            = require(path.join(__dirname, '../../controllers'));
const handler         = require(path.join(__dirname, '../../services/controllerHandler.js'));



module.exports.register = (req, res, next) => {
    handler(ctrl.user.register, req => [req])(req, res, next);
};


module.exports.test = (req, res, next) => {
    handler(() => ({
        
    }))(req, res, next);
};
