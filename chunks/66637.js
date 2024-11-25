var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(704839);
t.Z = r.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: r, disabled: l, children: c } = e;
    return (0, i.jsx)(s.Clickable, {
        className: a()(o.card, r, {
            [o.clickable]: null != t,
            [o.disabled]: l
        }),
        onContextMenu: n,
        onClick: l ? void 0 : t,
        children: c
    });
});
