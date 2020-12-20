export const handle = (context: FaasHandlerContext, callback: FaaSHandlerCallback) => {
    return callback(undefined, {status: "done"});
}
