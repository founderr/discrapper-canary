n.r(t),
    n.d(t, {
        default: function () {
            return b;
        }
    });
var a = n(735250),
    s = n(470079),
    o = n(77866),
    l = n(481060),
    r = n(332664),
    i = n(626135),
    c = n(987562),
    u = n(981631),
    d = n(689938);
function b(e) {
    let { onClose: t, transitionState: b } = e,
        m = (0, o.Z)(c.CE);
    s.useEffect(() => {
        i.default.track(u.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let f = s.useCallback((e) => {
        let { rating: t, problem: s } = e;
        if (null != t)
            null != s &&
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, a.jsx)(e, {
                            body: d.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                            ...t
                        });
                });
    }, []);
    return (0, a.jsx)(r.Z, {
        modalType: 'block_user',
        header: 'header goes here',
        body: 'body goes here',
        problemTitle: 'section header goes here',
        problems: m,
        feedbackProblems: [c.F5.OTHER],
        onSubmit: f,
        onClose: t,
        transitionState: b,
        otherKey: c.F5.OTHER
    });
}
