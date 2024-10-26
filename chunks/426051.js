n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(286379),
    r = n(481060),
    l = n(797614),
    o = n(359110),
    c = n(6025),
    d = n(433355),
    u = n(26373),
    _ = n(486622),
    E = n(376191),
    h = n(86203),
    m = n(689938),
    I = n(894639);
function p(e) {
    let { active: t, user: n, channel: p } = e,
        g = (0, u.V)(),
        T = a.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(m.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, r.ToastType.FAILURE)), l.Z.increment({ name: s.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        S = a.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ);
        }, []),
        C = a.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ), g && (0, o.Kh)(p.id);
        }, [p.id, g]),
        {
            acceptMessageRequest: f,
            isAcceptLoading: N,
            isUserProfileLoading: A,
            isOptimisticAccepted: v
        } = (0, _.m)({
            user: n,
            onAcceptSuccess: C,
            onRejectSuccess: S,
            onError: T
        }),
        Z = N || A,
        L = Z || v;
    return (0, i.jsxs)('div', {
        className: I.container,
        children: [
            (0, i.jsx)(E.Z, {
                otherUser: n,
                channel: p,
                active: t
            }),
            (0, i.jsxs)('div', {
                className: I.actions,
                children: [
                    (0, i.jsx)(r.Button, {
                        className: I.button,
                        color: r.ButtonColors.PRIMARY,
                        size: r.Button.Sizes.SMALL,
                        onClick: (e) => {
                            f(p.id), e.stopPropagation();
                        },
                        disabled: L,
                        submitting: Z,
                        children: m.Z.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
                    }),
                    (0, i.jsx)(h.Z, {
                        className: I.button,
                        channel: p,
                        buttonSize: r.Button.Sizes.SMALL
                    })
                ]
            })
        ]
    });
}
