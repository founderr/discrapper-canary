n.r(t),
    n.d(t, {
        default: function () {
            return M;
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
    b = n(987562),
    E = n(981631),
    m = n(689938);
let f = [b.Y.OTHER];
function M(e) {
    let { transitionState: t, onClose: M, channel: x } = e,
        h = (0, a.Z)(b.T),
        p = (0, l.e7)([d.default], () => d.default.getUser(x.getRecipientId()));
    return (
        o.useEffect(() => {
            _.default.track(E.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, s.jsx)(u.Z, {
            header: m.Z.Messages.MUTE_FEEDBACK_HEADER,
            body: m.Z.Messages.MUTE_FEEDBACK_BODY.format({ username: null == p ? void 0 : p.username }),
            problems: h,
            feedbackProblems: f,
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: o } = e;
                o && (0, c.EW)(r.z.USER_DM_MUTE_FEEDBACK);
                null != t &&
                    (0, i.openModalLazy)(async () => {
                        let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                        return (t) =>
                            (0, s.jsx)(e, {
                                body: m.Z.Messages.MUTE_FEEDBACK_THANKS,
                                ...t
                            });
                    });
            },
            onClose: M,
            transitionState: t,
            otherKey: b.Y.OTHER
        })
    );
}
