"use strict";
a.r(t);
var n = a("857192"),
  s = a("901077"),
  l = a("915357"),
  i = a("981631");
t.default = e => {
  let {
    origin: t,
    postMessageToRPCClient: a,
    frameId: r,
    version: o,
    encoding: u,
    logger: d,
    postClose: c
  } = e;
  return new l.default({
    origin: t,
    postMessageToRPCClient: a,
    frameId: r,
    version: o,
    encoding: u,
    logger: d,
    postClose: c,
    onSendingToRPCClient: (e, t) => {
      (n.default.isLoggingOverlayEvents || e.cmd !== i.RPCCommands.OVERLAY && e.evt !== i.RPCEvents.OVERLAY) && d.info("Socket Emit: ".concat(t), (0, s.default)(e))
    }
  })
}