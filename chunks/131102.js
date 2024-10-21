n.r(t),
    n.d(t, {
        default: function () {
            return C;
        }
    });
var a = n(200651),
    o = n(192379),
    s = n(75124),
    l = n(704215),
    r = n(481060),
    i = n(605236),
    c = n(624659),
    u = n(626135),
    E = n(263226),
    d = n(225634),
    _ = n(981631),
    b = n(689938);
function C(e) {
    let { transitionState: t, onClose: C, guildId: m, guildName: I } = e,
        f = (0, s.Z)(d.S);
    return (
        o.useEffect(() => {
            u.default.track(_.rMx.OPEN_MODAL, { type: 'Guild Leave Report' });
        }, []),
        (0, a.jsx)(c.Z, {
            header: b.Z.Messages.GUILD_LEAVE_FEEDBACK_HEADER,
            body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_BODY.format({ server: I }),
            problems: f,
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: o, feedback: s } = e;
                o && (0, i.EW)(l.z.GUILD_LEAVE_FEEDBACK);
                let c = null == t;
                (0, E.Z)(m, t, s, c),
                    !c &&
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    body: b.Z.Messages.GUILD_LEAVE_FEEDBACK_REPORT,
                                    ...t
                                });
                        });
            },
            onClose: C,
            transitionState: t,
            otherKey: d.G.OTHER,
            hasCloseButton: !0
        })
    );
}
