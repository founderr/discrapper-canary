"use strict";
n.r(t);
var a = n("857192"),
  s = n("901077"),
  i = n("915357"),
  l = n("981631");
t.default = e => {
  let {
    origin: t,
    postMessageToRPCClient: n,
    frameId: r,
    version: o,
    encoding: u,
    logger: d,
    postClose: c
  } = e;
  return new i.default({
    origin: t,
    postMessageToRPCClient: n,
    frameId: r,
    version: o,
    encoding: u,
    logger: d,
    postClose: c,
    onSendingToRPCClient: (e, t) => {
      (a.default.isLoggingOverlayEvents || e.cmd !== l.RPCCommands.OVERLAY && e.evt !== l.RPCEvents.OVERLAY) && d.info("Socket Emit: ".concat(t), (0, s.default)(e))
    }
  })
}