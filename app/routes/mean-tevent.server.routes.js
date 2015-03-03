'use strict';

module.exports = function(app) {
	// Routing logic   
	// ...
    var users = require('../../app/controllers/users.server.controller');
    var meanEvents = require('../../app/controllers/mean-events.server.controller');

    // Mean events Routes
    // localhost:3000/mean-events url 이 호출되면, meanEvents.list method를 실행
    app.route('/mean-events')   // mean-events 라우트 설정
        .get(meanEvents.list)   // 해당 method 실행 되었을때, 실행될 함수를 call
        .post(users.requiresLogin, meanEvents.create);
    app.route('/mean-events/:meanEventId')
        .get(meanEvents.read)
        .put(users.requiresLogin, meanEvents.hasAuthorization, meanEvents.update)
        .delete(users.requiresLogin, meanEvents.hasAuthorization, meanEvents.delete);
    // Finish by binding the Mean event middleware
    app.param('meanEventId', meanEvents.meanEventByID);
};
