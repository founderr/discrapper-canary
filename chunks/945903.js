a.r(t),
    a.d(t, {
        default: function () {
            return h;
        }
    });
var n = a(735250),
    o = a(470079),
    s = a(77866),
    r = a(704215),
    l = a(481060),
    i = a(605236),
    c = a(624659),
    u = a(626135),
    d = a(652463),
    E = a(709243),
    b = a(981631),
    _ = a(689938);
let m = { [E.U.OTHER]: {} };
function h(e) {
    let { transitionState: t, onClose: h, guildId: f } = e,
        x = (0, s.Z)(E.e);
    return (
        o.useEffect(() => {
            u.default.track(b.rMx.OPEN_MODAL, { type: 'Guild Delete Report' });
        }, []),
        (0, n.jsx)(c.Z, {
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
                            let { default: e } = await a.e('14466').then(a.bind(a, 729328));
                            return (t) =>
                                (0, n.jsx)(e, {
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
