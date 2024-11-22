n.d(t, {
    Z: function () {
        return b;
    }
});
var s = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    r = n(399606),
    l = n(481060),
    d = n(446183),
    c = n(677281),
    u = n(378298),
    x = n(359119),
    m = n(473092),
    g = n(388032),
    _ = n(488385),
    h = n(482617);
function N() {
    return (0, s.jsxs)('div', {
        className: o()(h.toast, _.toast),
        children: [
            (0, s.jsx)(l.ShieldIcon, { color: l.tokens.colors.TEXT_BRAND }),
            (0, s.jsx)(l.Text, {
                className: h.__invalid_content,
                color: 'header-primary',
                variant: 'text-md/normal',
                children: g.intl.string(g.t['gd/Yqq'])
            })
        ]
    });
}
function b(e) {
    let { channelId: t, warningId: n, senderId: a } = e,
        h = (0, r.e7)([x.ZP], () => x.ZP.getChannelSafetyWarning(t, n)),
        b = i.useMemo(() => (null == h ? void 0 : h.feedback_type) === x.ny.UPVOTE, [h]),
        v = i.useMemo(() => (null == h ? void 0 : h.feedback_type) === x.ny.DOWNVOTE, [h]),
        j = i.useCallback(
            (e, i) => {
                (null == h ? void 0 : h.feedback_type) !== e &&
                    ((0, u.Ms)(t, n, e),
                    (0, l.showToast)((0, l.createToast)(g.intl.string(g.t['gd/Yqq']), l.ToastType.CUSTOM, { component: (0, s.jsx)(N, {}) })),
                    (0, m.qc)({
                        channelId: t,
                        warningId: n,
                        senderId: a,
                        warningType: x.pj.STRANGER_DANGER,
                        cta: i
                    }));
            },
            [h, t, n, a]
        );
    return (0, s.jsxs)('div', {
        className: _.feedback,
        children: [
            (0, s.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: g.intl.string(g.t.L84yVl)
            }),
            (0, s.jsxs)('div', {
                className: _.buttonsContainer,
                children: [
                    (0, s.jsx)(l.Clickable, {
                        className: o()([_.buttonsBackground, b ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive, { [_.disabled]: b }]),
                        onClick: () => j(x.ny.UPVOTE, m.NM.FEEDBACK_UPVOTE),
                        'aria-label': g.intl.string(g.t['2GrOCA']),
                        children: (0, s.jsx)(c.Z, {
                            className: _.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    }),
                    (0, s.jsx)(l.Clickable, {
                        className: o()([_.buttonsBackground, v ? _.buttonsBackgroundActive : _.buttonsBackgroundInactive, { [_.disabled]: v }]),
                        onClick: () => j(x.ny.DOWNVOTE, m.NM.FEEDBACK_DOWNVOTE),
                        'aria-label': g.intl.string(g.t.COp9BA),
                        children: (0, s.jsx)(d.Z, {
                            className: _.__invalid_buttonIcon,
                            color: 'interactive-normal'
                        })
                    })
                ]
            })
        ]
    });
}
