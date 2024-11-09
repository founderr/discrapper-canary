n.d(e, {
    Z: function () {
        return _;
    }
});
var s = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    r = n(399606),
    l = n(481060),
    d = n(446183),
    c = n(677281),
    u = n(378298),
    x = n(359119),
    m = n(473092),
    h = n(388032),
    g = n(488385),
    N = n(482617);
function T() {
    return (0, s.jsxs)('div', {
        className: o()(N.toast, g.toast),
        children: [
            (0, s.jsx)(l.ShieldIcon, { color: l.tokens.colors.TEXT_BRAND }),
            (0, s.jsx)(l.Text, {
                className: N.__invalid_content,
                color: 'header-primary',
                variant: 'text-md/normal',
                children: h.intl.string(h.t['gd/Yqq'])
            })
        ]
    });
}
function _(t) {
    let { channelId: e, warningId: n, senderId: i } = t,
        N = (0, r.e7)([x.ZP], () => x.ZP.getChannelSafetyWarning(e, n)),
        _ = a.useMemo(() => (null == N ? void 0 : N.feedback_type) === x.ny.UPVOTE, [N]),
        b = a.useMemo(() => (null == N ? void 0 : N.feedback_type) === x.ny.DOWNVOTE, [N]),
        p = a.useCallback(
            (t, a) => {
                (null == N ? void 0 : N.feedback_type) !== t &&
                    ((0, u.Ms)(e, n, t),
                    (0, l.showToast)((0, l.createToast)(h.intl.string(h.t['gd/Yqq']), l.ToastType.CUSTOM, { component: (0, s.jsx)(T, {}) })),
                    (0, m.qc)({
                        channelId: e,
                        warningId: n,
                        senderId: i,
                        warningType: x.pj.STRANGER_DANGER,
                        cta: a
                    }));
            },
            [N, e, n, i]
        );
    return (0, s.jsxs)('div', {
        className: g.feedback,
        children: [
            (0, s.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: h.intl.string(h.t.L84yVl)
            }),
            (0, s.jsxs)('div', {
                className: g.buttonsContainer,
                children: [
                    (0, s.jsx)(l.Clickable, {
                        className: o()([g.buttonsBackground, _ ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive, { [g.disabled]: _ }]),
                        onClick: () => p(x.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                        'aria-label': h.intl.string(h.t['2GrOCA']),
                        children: (0, s.jsx)(c.Z, {
                            className: g.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    }),
                    (0, s.jsx)(l.Clickable, {
                        className: o()([g.buttonsBackground, b ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive, { [g.disabled]: b }]),
                        onClick: () => p(x.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
                        'aria-label': h.intl.string(h.t.COp9BA),
                        children: (0, s.jsx)(d.Z, {
                            className: g.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    })
                ]
            })
        ]
    });
}
