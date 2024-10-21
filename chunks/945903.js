n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var a = n(200651),
    o = n(192379),
    s = n(75124),
    r = n(704215),
    l = n(481060),
    i = n(605236),
    c = n(624659),
    u = n(626135),
    d = n(652463),
    E = n(709243),
    b = n(981631),
    _ = n(689938);
let m = { [E.U.OTHER]: {} };
function h(e) {
    let { transitionState: t, onClose: h, guildId: f } = e,
        x = (0, s.Z)(E.e);
    return (
        o.useEffect(() => {
            u.default.track(b.rMx.OPEN_MODAL, { type: 'Guild Delete Report' });
        }, []),
        (0, a.jsx)(c.Z, {
            header: _.Z.Messages.GUILD_DELETE_FEEDBACK_HEADER,
            body: _.Z.Messages.GUILD_DELETE_FEEDBACK_BODY,
            problems: x,
            feedbackProblems: m,
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: o, feedback: s } = e;
                o && (0, i.EW)(r.z.GUILD_DELETE_FEEDBACK);
                let c = null == t;
                (0, d.Z)(f, t, s, c),
                    !c &&
                        (0, l.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    body: _.Z.Messages.GUILD_DELETE_FEEDBACK_REPORT,
                                    ...t
                                });
                        });
            },
            onClose: h,
            transitionState: t,
            otherKey: E.U.OTHER
        })
    );
}
