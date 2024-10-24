n.r(t),
    n.d(t, {
        default: function () {
            return _;
        }
    });
var a = n(200651),
    s = n(192379),
    o = n(75124),
    l = n(481060),
    i = n(332664),
    r = n(626135),
    c = n(987562),
    u = n(981631),
    d = n(689938);
function _(e) {
    let { onClose: t, transitionState: _ } = e,
        E = (0, o.Z)(c.CE);
    s.useEffect(() => {
        r.default.track(u.rMx.OPEN_MODAL, { type: 'Block User Feedback' });
    }, []);
    let b = s.useCallback((e) => {
        let { rating: t } = e;
        if (null != t)
            (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                return (t) =>
                    (0, a.jsx)(e, {
                        body: d.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                        ...t
                    });
            });
    }, []);
    return (0, a.jsx)(i.Z, {
        modalType: 'block_user',
        header: d.Z.Messages.BLOCK_USER_FEEDBACK_TITLE,
        body: d.Z.Messages.BLOCK_USER_FEEDBACK_BODY,
        problemTitle: d.Z.Messages.BLOCK_USER_FEEDBACK_OPTIONS_HEADER,
        problems: E,
        feedbackProblems: [c.F5.SOMETHING_ELSE],
        onSubmit: b,
        onClose: t,
        transitionState: _,
        otherKey: c.F5.SOMETHING_ELSE,
        hideHelpDeskLink: !0,
        hideDontShowCheckbox: !0
    });
}
