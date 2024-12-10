var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(704839);
t.Z = r.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: r, disabled: l, children: c } = e;
    return (0, i.jsx)(o.Clickable, {
        className: a()(s.card, r, {
            [s.clickable]: null != t,
            [s.disabled]: l
        }),
        onContextMenu: n,
        onClick: l ? void 0 : t,
        children: c
    });
});
