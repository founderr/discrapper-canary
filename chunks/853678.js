n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(230711),
    r = n(317381),
    l = n(611577),
    a = n(316253),
    s = n(812206),
    o = n(12647),
    c = n(49012),
    d = n(358085),
    u = n(996106),
    h = n(914946),
    m = n(452426),
    p = n(186901),
    g = n(981631),
    f = n(701488);
let _ = new Set([f.Fu, f.JT]);
t.Z = {
    [g.Etm.OPEN_EXTERNAL_LINK]: {
        scope: {
            [p.Gp.ANY]: [p.wE, p.b_]
        },
        validation: (e) => (0, m.Z)(e).required().keys({ url: e.string().required() }),
        handler(e) {
            let {
                socket: t,
                args: { url: n }
            } = e;
            (0, h.bu)(t.transport);
            try {
                let e = new URL(n);
                if (d.isPlatformEmbedded) {
                    let e = (0, a.Z)() ? g.KJ3.ACTIVITY_POPOUT : null;
                    o.Z.focus(e, !0);
                }
                let t = r.ZP.getCurrentEmbeddedActivity(),
                    i = s.Z.getApplication(null == t ? void 0 : t.applicationId),
                    u = null == t ? void 0 : t.channelId;
                (0, c.q)(
                    { href: e.toString() },
                    void 0,
                    void 0,
                    (0, l.z)({
                        application: i,
                        channelId: u
                    })
                );
            } catch (e) {
                throw new u.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
            }
        }
    },
    [g.Etm.NAVIGATE_TO_CONNECTIONS]: {
        validation: (e) => (0, m.Z)(e),
        scope: { [p.Gp.ANY]: [p.wE] },
        handler(e) {
            let { socket: t } = e;
            (0, h.bu)(t.transport);
            let n = (0, h._f)(t.application);
            if (!_.has(n)) throw new u.Z({ errorCode: g.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
            i.Z.open(g.oAB.CONNECTIONS);
        }
    }
};
