exports.register = function (server, options, next) {

    server.route([
        {
          method: 'GET',
          path: '/assets/{params*}',
          config: {
              description: 'load assests',
              handler: {
                  directory: {
                      path: 'assets'
                  }
              }
          }
        },
        {
          method: 'GET',
          path: '/favicon.ico',
          config: {
              description: 'load favicon',
              handler: function(request, reply) {
                reply.file('favicon.ico');
              }
          }
        },
        {
          method: 'GET',
          path: '/robots.txt',
          config: {
              description: 'robots',
              handler: function(request, reply) {
                reply.file('robots.txt');
              }
          }
        }
  ]);
    return next();
};

exports.register.attributes = {
    name: 'Assets'
};
