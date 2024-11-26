n.d(t, {
    Z: function () {
        return g;
    }
});
var a = n(200651),
    o = n(192379),
    s = n(120356),
    i = n.n(s),
    c = n(481060),
    l = n(446183),
    r = n(677281),
    d = n(378298),
    u = n(359119),
    m = n(473092),
    x = n(388032),
    b = n(445587),
    _ = n(24343);
function v() {
    return (0, a.jsxs)('div', {
        className: i()(_.toast, b.toast),
        children: [
            (0, a.jsx)(c.ShieldIcon, { color: c.tokens.colors.TEXT_BRAND }),
            (0, a.jsx)(c.Text, {
                className: _.__invalid_content,
                color: 'header-primary',
                variant: 'text-md/normal',
                children: x.intl.string(x.t['gd/Yqq'])
            })
        ]
    });
}
function g(e) {
    let { channelId: t, warningId: n, senderId: s, safetyWarning: _ } = e,
        g = o.useMemo(() => (null == _ ? void 0 : _.feedback_type) === u.ny.UPVOTE, [_]),
        h = o.useMemo(() => (null == _ ? void 0 : _.feedback_type) === u.ny.DOWNVOTE, [_]),
        p = o.useCallback(
            (e, o) => {
                (null == _ ? void 0 : _.feedback_type) !== e &&
                    ((0, d.Ms)(t, n, e),
                    (0, c.showToast)((0, c.createToast)(x.intl.string(x.t['gd/Yqq']), c.ToastType.CUSTOM, { component: (0, a.jsx)(v, {}) })),
                    (0, m.qc)({
                        channelId: t,
                        warningId: n,
                        senderId: s,
                        warningType: null == _ ? void 0 : _.type,
                        cta: o
                    }));
            },
            [_, t, n, s]
        );
    return (0, a.jsxs)('div', {
        className: b.feedback,
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: x.intl.string(x.t.L84yVl)
            }),
            (0, a.jsxs)('div', {
                className: b.buttonsContainer,
                children: [
                    (0, a.jsx)(c.Clickable, {
                        className: i()([b.buttonsBackground, g ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive, { [b.disabled]: g }]),
                        onClick: () => p(u.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                        'aria-label': x.intl.string(x.t['2GrOCA']),
                        children: (0, a.jsx)(r.Z, {
                            className: b.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    }),
                    (0, a.jsx)(c.Clickable, {
                        className: i()([b.buttonsBackground, h ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive, { [b.disabled]: h }]),
                        onClick: () => p(u.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
                        'aria-label': x.intl.string(x.t.COp9BA),
                        children: (0, a.jsx)(l.Z, {
                            className: b.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    })
                ]
            })
        ]
    });
}
