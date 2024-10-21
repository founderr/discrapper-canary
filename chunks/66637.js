var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(481060),
    o = n(686907);
t.Z = a.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: a, disabled: s, children: c } = e;
    return (0, i.jsx)(l.Clickable, {
        className: r()(o.card, a, {
            [o.clickable]: null != t,
            [o.disabled]: s
        }),
        onContextMenu: n,
        onClick: s ? void 0 : t,
        children: c
    });
});
