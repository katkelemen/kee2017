exports.register = function (server, options, next) {

    server.route([
    {
      method: 'GET',
      path: '/',
      config: {
          description: 'return home page',
          handler: function(request, reply){
            return reply.view('home', {is_home_active: true});
          }
      }
    },
    {
        method: 'GET',
        path: '/eng',
        config: {
            description: 'return english page',
            handler: function(request, reply){
              return reply.view('eng', {is_classes_active: true});
            }
        }
    },
    ]);
    return next();
};

exports.register.attributes = {
    name: 'Contents'
};