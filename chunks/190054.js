t.d(n, {
    H: function () {
        return u;
    }
}),
    t(47120);
var o = t(200651),
    s = t(192379),
    c = t(120356),
    r = t.n(c),
    i = t(481060),
    l = t(572004),
    a = t(689938),
    d = t(606053);
function u(e) {
    let { chunks: n, className: t, onCopy: c, ...u } = e,
        h = s.useMemo(() => (null == n ? void 0 : n.join(' ')), [n]),
        [f, x] = s.useState(!1),
        _ = s.useCallback(() => {
            x(!0), (0, l.JG)(h), null == c || c();
        }, [c, h]),
        m = f ? i.CircleCheckIcon : i.CopyIcon;
    return (0, o.jsx)(i.Clickable, {
        className: r()(d.container, t),
        onClick: _,
        children: (0, o.jsx)(i.Tooltip, {
            text: f ? a.Z.Messages.COPIED : a.Z.Messages.COPY,
            children: (e) =>
                (0, o.jsx)(m, {
                    ...u,
                    ...e,
                    size: 'xxs',
                    color: f ? i.tokens.colors.TEXT_POSITIVE : i.tokens.colors.INTERACTIVE_NORMAL
                })
        })
    });
}
