n.d(e, {
    Z: function () {
        return _;
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
    h = n(24343);
function v() {
    return (0, a.jsxs)('div', {
        className: i()(h.toast, b.toast),
        children: [
            (0, a.jsx)(c.ShieldIcon, { color: c.tokens.colors.TEXT_BRAND }),
            (0, a.jsx)(c.Text, {
                className: h.__invalid_content,
                color: 'header-primary',
                variant: 'text-md/normal',
                children: x.intl.string(x.t['gd/Yqq'])
            })
        ]
    });
}
function _(t) {
    let { channelId: e, warningId: n, senderId: s, safetyWarning: h } = t,
        _ = o.useMemo(() => (null == h ? void 0 : h.feedback_type) === u.ny.UPVOTE, [h]),
        g = o.useMemo(() => (null == h ? void 0 : h.feedback_type) === u.ny.DOWNVOTE, [h]),
        p = o.useCallback(
            (t, o) => {
                (null == h ? void 0 : h.feedback_type) !== t &&
                    ((0, d.Ms)(e, n, t),
                    (0, c.showToast)((0, c.createToast)(x.intl.string(x.t['gd/Yqq']), c.ToastType.CUSTOM, { component: (0, a.jsx)(v, {}) })),
                    (0, m.qc)({
                        channelId: e,
                        warningId: n,
                        senderId: s,
                        warningType: null == h ? void 0 : h.type,
                        cta: o
                    }));
            },
            [h, e, n, s]
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
                        className: i()([b.buttonsBackground, _ ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive, { [b.disabled]: _ }]),
                        onClick: () => p(u.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                        'aria-label': x.intl.string(x.t['2GrOCA']),
                        children: (0, a.jsx)(r.Z, {
                            className: b.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    }),
                    (0, a.jsx)(c.Clickable, {
                        className: i()([b.buttonsBackground, g ? b.buttonsBackgroundActive : b.buttonsBackgroundInactive, { [b.disabled]: g }]),
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
