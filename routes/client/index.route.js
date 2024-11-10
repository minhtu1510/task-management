const tasksRoute = require("./task.route");

module.exports.routeClient = (app) => {
  app.use("/tasks", tasksRoute);
};
