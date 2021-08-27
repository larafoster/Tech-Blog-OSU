const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const protectedRoutes = require('./protected-routes.js');

router.use('/', homeRoutes);
router.use('/protected', protectedRoutes);
router.use('/api', apiRoutes);

module.exports = router;
