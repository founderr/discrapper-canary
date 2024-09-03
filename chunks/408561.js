n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    });
var s = n(735250),
    o = n(470079),
    a = n(77866),
    l = n(442837),
    r = n(481060),
    i = n(624659),
    c = n(594174),
    u = n(626135),
    d = n(987562),
    b = n(981631),
    _ = n(689938);
let m = [d.Y.OTHER];
function f(e) {
    let { transitionState: t, onClose: f, channel: E } = e,
        x = (0, a.Z)(d.T),
        M = (0, l.e7)([c.default], () => c.default.getUser(E.getRecipientId()));
    return (
        o.useEffect(() => {
            u.default.track(b.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, s.jsx)(i.Z, {
            header: _.Z.Messages.MUTE_FEEDBACK_HEADER,
            body: _.Z.Messages.MUTE_FEEDBACK_BODY.format({ username: null == M ? void 0 : M.username }),
            problems: x,
            feedbackProblems: m,
            onSubmit: function (e) {
                let { problem: t } = e;
                null != t &&
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                        return (t) =>
                            (0, s.jsx)(e, {
                                body: _.Z.Messages.MUTE_FEEDBACK_THANKS,
                                ...t
                            });
                    });
            },
            onClose: f,
            transitionState: t,
            otherKey: d.Y.OTHER
        })
    );
}
