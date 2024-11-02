n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var o = n(200651),
    l = n(192379),
    a = n(75124),
    r = n(704215),
    i = n(481060),
    s = n(605236),
    c = n(624659),
    u = n(626135),
    d = n(263226),
    b = n(225634),
    m = n(981631),
    f = n(388032);
function h(e) {
    let { transitionState: t, onClose: h, guildId: x, guildName: C } = e,
        E = (0, a.Z)(b.S);
    return (
        l.useEffect(() => {
            u.default.track(m.rMx.OPEN_MODAL, { type: 'Guild Leave Report' });
        }, []),
        (0, o.jsx)(c.Z, {
            header: f.intl.string(f.t.YT6YAA),
            body: f.intl.formatToPlainString(f.t.xpn2vL, { server: C }),
            problems: E,
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: l, feedback: a } = e;
                l && (0, s.EW)(r.z.GUILD_LEAVE_FEEDBACK);
                let c = null == t;
                (0, d.Z)(x, t, a, c),
                    !c &&
                        (0, i.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    body: f.intl.string(f.t.Gxbt29),
                                    ...t
                                });
                        });
            },
            onClose: h,
            transitionState: t,
            otherKey: b.G.OTHER,
            hasCloseButton: !0
        })
    );
}
