var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(481060),
    o = n(686907);
t.Z = r.memo(function (e) {
    let { onClick: t, onContextMenu: n, className: r, disabled: a, children: c } = e;
    return (0, i.jsx)(s.Clickable, {
        className: l()(o.card, r, {
            [o.clickable]: null != t,
            [o.disabled]: a
        }),
        onContextMenu: n,
        onClick: a ? void 0 : t,
        children: c
    });
});
