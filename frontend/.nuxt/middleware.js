const middleware = {}

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['getCookies'] = require('..\\middleware\\getCookies.js')
middleware['getCookies'] = middleware['getCookies'].default || middleware['getCookies']

middleware['loginMiddleware'] = require('..\\middleware\\loginMiddleware.js')
middleware['loginMiddleware'] = middleware['loginMiddleware'].default || middleware['loginMiddleware']

middleware['userAuth'] = require('..\\middleware\\userAuth.js')
middleware['userAuth'] = middleware['userAuth'].default || middleware['userAuth']

export default middleware
