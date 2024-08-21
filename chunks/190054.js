t.d(n, {
    H: function () {
        return u;
    }
}),
    t(47120);
var o = t(735250),
    r = t(470079),
    s = t(120356),
    c = t.n(s),
    i = t(481060),
    l = t(572004),
    a = t(689938),
    d = t(205962);
function u(e) {
    let { chunks: n, className: t, onCopy: s, ...u } = e,
        h = r.useMemo(() => (null == n ? void 0 : n.join(' ')), [n]),
        [f, x] = r.useState(!1),
        m = r.useCallback(() => {
            x(!0), (0, l.JG)(h), null == s || s();
        }, [s, h]),
        _ = f ? i.CircleCheckIcon : i.CopyIcon;
    return (0, o.jsx)(i.Clickable, {
        className: c()(d.container, t),
        onClick: m,
        children: (0, o.jsx)(i.Tooltip, {
            text: f ? a.Z.Messages.COPIED : a.Z.Messages.COPY,
            children: (e) =>
                (0, o.jsx)(_, {
                    ...u,
                    ...e,
                    size: 'xxs',
                    color: f ? i.tokens.colors.TEXT_POSITIVE : i.tokens.colors.INTERACTIVE_NORMAL
                })
        })
    });
}
