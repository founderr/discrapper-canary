n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    });
var s = n(735250),
    o = n(470079),
    a = n(77866),
    l = n(442837),
    r = n(704215),
    i = n(481060),
    c = n(605236),
    u = n(624659),
    d = n(594174),
    _ = n(626135),
    E = n(924400),
    b = n(987562),
    f = n(981631),
    m = n(689938);
let M = [b.Y.OTHER];
function x(e) {
    let { transitionState: t, onClose: x, channel: h } = e,
        p = (0, a.Z)(b.T),
        C = (0, l.e7)([d.default], () => d.default.getUser(h.getRecipientId()));
    return (
        o.useEffect(() => {
            _.default.track(f.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, s.jsx)(u.Z, {
            hasCloseButton: !0,
            header: m.Z.Messages.MUTE_FEEDBACK_HEADER,
            body: m.Z.Messages.MUTE_FEEDBACK_BODY.format({ username: null == C ? void 0 : C.username }),
            problems: p,
            feedbackProblems: M,
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: o, feedback: a } = e;
                o && (0, c.EW)(r.z.USER_DM_MUTE_FEEDBACK);
                let l = null == t;
                (0, E.Z)(t, a, l, o),
                    !l &&
                        (0, i.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, s.jsx)(e, {
                                    body: m.Z.Messages.MUTE_FEEDBACK_THANKS,
                                    ...t
                                });
                        });
            },
            onClose: x,
            transitionState: t,
            otherKey: b.Y.OTHER
        })
    );
}
