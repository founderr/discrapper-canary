var i = n(857192),
  s = n(901077),
  l = n(915357),
  a = n(981631);
t.Z = e => {
  let {
    origin: t,
    postMessageToRPCClient: n,
    frameId: r,
    version: o,
    encoding: c,
    logger: u,
    postClose: d
  } = e;
  return new l.Z({
    origin: t,
    postMessageToRPCClient: n,
    frameId: r,
    version: o,
    encoding: c,
    logger: u,
    postClose: d,
    onSendingToRPCClient: (e, t) => {
      (i.default.isLoggingOverlayEvents || e.cmd !== a.Etm.OVERLAY && e.evt !== a.zMe.OVERLAY) && u.info("Socket Emit: ".concat(t), (0, s.Z)(e))
    }
  })
}