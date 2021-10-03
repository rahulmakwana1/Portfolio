const ProjectController = require('./ProjectController')
const PostController = require('./PostController')
const ServiceController = require('./ServiceController')
const SubscriberController = require('./SubscriberController')
const { subscribe } = require('../routes/main')

module.exports = {

	project: ProjectController,
  post: PostController,
  service: ServiceController,
  subscriber: SubscriberController

}
