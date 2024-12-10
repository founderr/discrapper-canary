n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(230711),
    r = n(782568),
    l = n(636449),
    a = n(317381),
    o = n(611577),
    s = n(812206),
    c = n(12647),
    d = n(49012),
    u = n(358085),
    h = n(996106),
    m = n(914946),
    p = n(452426),
    g = n(186901),
    f = n(981631),
    _ = n(701488);
let E = new Set([_.Fu, _.JT]);
t.Z = {
    [f.Etm.OPEN_EXTERNAL_LINK]: {
        scope: {
            [g.Gp.ANY]: [g.wE, g.b_]
        },
        validation: (e) => (0, p.Z)(e).required().keys({ url: e.string().required() }),
        handler(e) {
            let {
                socket: t,
                args: { url: n }
            } = e;
            (0, m.bu)(t.transport);
            try {
                let e = new URL(n).toString();
                if (u.isPlatformEmbedded) {
                    let e = (0, l.R)() ? f.KJ3.ACTIVITY_POPOUT : null;
                    c.Z.focus(e, !0);
                }
                let t = a.ZP.getCurrentEmbeddedActivity(),
                    i = s.Z.getApplication(null == t ? void 0 : t.applicationId),
                    h = null == t ? void 0 : t.channelId;
                return new Promise((t) =>
                    (0, d.q)(
                        {
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                (0, r.Z)(e), t({ opened: !0 });
                            },
                            onCancel: () => {
                                t({ opened: !1 });
                            }
                        },
                        void 0,
                        void 0,
                        (0, o.z)({
                            application: i,
                            channelId: h
                        })
                    )
                );
            } catch (e) {
                throw new h.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
            }
        }
    },
    [f.Etm.NAVIGATE_TO_CONNECTIONS]: {
        validation: (e) => (0, p.Z)(e),
        scope: { [g.Gp.ANY]: [g.wE] },
        handler(e) {
            let { socket: t } = e;
            (0, m.bu)(t.transport);
            let n = (0, m._f)(t.application);
            if (!E.has(n)) throw new h.Z({ errorCode: f.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
            i.Z.open(f.oAB.CONNECTIONS);
        }
    }
};
