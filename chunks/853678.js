n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(230711),
    r = n(12647),
    a = n(49012),
    l = n(358085),
    s = n(996106),
    o = n(914946),
    c = n(452426),
    d = n(186901),
    u = n(981631),
    h = n(701488);
let m = new Set([h.Fu, h.JT]);
t.Z = {
    [u.Etm.OPEN_EXTERNAL_LINK]: {
        scope: {
            [d.Gp.ANY]: [d.wE, d.b_]
        },
        validation: (e) => (0, c.Z)(e).required().keys({ url: e.string().required() }),
        handler(e) {
            let {
                socket: t,
                args: { url: n }
            } = e;
            (0, o.bu)(t.transport);
            try {
                let e = new URL(n);
                l.isPlatformEmbedded && r.Z.focus(null, !0), (0, a.q)({ href: e.toString() });
            } catch (e) {
                throw new s.Z({ errorCode: u.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
            }
        }
    },
    [u.Etm.NAVIGATE_TO_CONNECTIONS]: {
        validation: (e) => (0, c.Z)(e),
        scope: { [d.Gp.ANY]: [d.wE] },
        handler(e) {
            let { socket: t } = e;
            (0, o.bu)(t.transport);
            let n = (0, o._f)(t.application);
            if (!m.has(n)) throw new s.Z({ errorCode: u.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
            i.Z.open(u.oAB.CONNECTIONS);
        }
    }
};
