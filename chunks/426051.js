n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(286379),
    a = n(481060),
    s = n(797614),
    o = n(359110),
    c = n(6025),
    d = n(433355),
    u = n(26373),
    h = n(486622),
    m = n(376191),
    p = n(86203),
    g = n(388032),
    f = n(449328);
function _(e) {
    let { active: t, user: n, channel: _ } = e,
        E = (0, u.V)(),
        I = r.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(g.intl.string(g.t.pIQ3h4), a.ToastType.FAILURE)), s.Z.increment({ name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        C = r.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ);
        }, []),
        v = r.useCallback(() => {
            c.Z.closeChannelSidebar(d.uZ), E && (0, o.Kh)(_.id);
        }, [_.id, E]),
        {
            acceptMessageRequest: S,
            isAcceptLoading: N,
            isUserProfileLoading: T,
            isOptimisticAccepted: A
        } = (0, h.m)({
            user: n,
            onAcceptSuccess: v,
            onRejectSuccess: C,
            onError: I
        }),
        b = N || T,
        x = b || A;
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)(m.Z, {
                otherUser: n,
                channel: _,
                active: t
            }),
            (0, i.jsxs)('div', {
                className: f.actions,
                children: [
                    (0, i.jsx)(a.Button, {
                        className: f.button,
                        color: a.ButtonColors.PRIMARY,
                        size: a.Button.Sizes.SMALL,
                        onClick: (e) => {
                            S(_.id), e.stopPropagation();
                        },
                        disabled: x,
                        submitting: b,
                        children: g.intl.string(g.t.vicfl5)
                    }),
                    (0, i.jsx)(p.Z, {
                        className: f.button,
                        channel: _,
                        buttonSize: a.Button.Sizes.SMALL
                    })
                ]
            })
        ]
    });
}
