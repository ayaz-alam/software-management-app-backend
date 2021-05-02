const TASK_STATUS = {
    BACKLOG: "BACKLOG",
    READY: "READY",
    IN_PROGRESS: "IN_PROGRESS",
    PEER_REVIEW: "PEER_REVIEW",
    TESTING: "TESTING",
    DONE: "DONE",
    RESOLVED: "RESOLVED",
    DEPLOYED: "DEPLOYED",
    CANCELLED: "CANCELLED",
};
Object.freeze(TASK_STATUS);
module.exports = { TASK_STATUS };