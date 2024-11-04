var i = n(857192),
    r = n(901077),
    a = n(915357),
    l = n(981631);
t.Z = (e) => {
    let { origin: t, postMessageToRPCClient: n, frameId: s, version: o, encoding: c, logger: d, postClose: u } = e;
    return new a.Z({
        origin: t,
        postMessageToRPCClient: n,
        frameId: s,
        version: o,
        encoding: c,
        logger: d,
        postClose: u,
        onSendingToRPCClient: (e, t) => {
            (i.default.isLoggingOverlayEvents || (e.cmd !== l.Etm.OVERLAY && e.evt !== l.zMe.OVERLAY)) && d.info('Socket Emit: '.concat(t), (0, r.Z)(e));
        }
    });
};
