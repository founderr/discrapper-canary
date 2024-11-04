var i = n(710845),
    r = n(857192),
    a = n(901077),
    l = n(46832),
    s = n(852926),
    o = n(748635),
    c = n(981631);
let d = new i.Z('RPCServer:PostMessage'),
    u = (e, t, n) => {
        (r.default.isLoggingOverlayEvents || e.cmd !== c.Etm.OVERLAY) && t.info('Socket Message: '.concat(n.id), (0, a.Z)(e));
    };
t.Z = (function () {
    let e = new l.Z(s.em, d, o.Z, u);
    return (
        window.addEventListener('message', (t) => {
            if (window === t.source) return;
            if (null == t.source || null == t.source.postMessage) {
                d.error('Unknown event source');
                return;
            }
            let n = t.source,
                i = t.data,
                r = t.origin;
            e.handleMessage(i, r, (e, t) => {
                !(function (e) {
                    try {
                        return e.closed;
                    } catch {
                        return !1;
                    }
                })(n) && n.postMessage(e, t);
            });
        }),
        e
    );
})();
