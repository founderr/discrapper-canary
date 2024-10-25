n.r(t),
    n.d(t, {
        default: function () {
            return E;
        }
    });
var a = n(200651),
    s = n(192379),
    l = n(75124),
    o = n(481060),
    r = n(332664),
    i = n(626135),
    c = n(900735),
    u = n(987562),
    d = n(981631),
    _ = n(689938);
function E(e) {
    let { onClose: t, transitionState: E } = e,
        b = (0, l.Z)(u.CE);
    s.useEffect(() => {
        i.default.track(d.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let f = s.useCallback((e) => {
        let { rating: t, problem: s, feedback: l } = e,
            r = null == t;
        (0, c.t)(t, l, s, r),
            !r &&
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, a.jsx)(e, {
                            body: _.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                            ...t
                        });
                });
    }, []);
    return (0, a.jsx)(r.Z, {
        modalType: 'block_user',
        header: _.Z.Messages.BLOCK_USER_FEEDBACK_TITLE,
        body: _.Z.Messages.BLOCK_USER_FEEDBACK_BODY,
        problemTitle: _.Z.Messages.BLOCK_USER_FEEDBACK_OPTIONS_HEADER,
        problems: b,
        feedbackProblems: [u.F5.SOMETHING_ELSE],
        onSubmit: f,
        onClose: t,
        transitionState: E,
        otherKey: u.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowCheckbox: !0
    });
}
