n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(866442),
    l = n(481060),
    u = n(779699),
    c = n(557092);
t.Z = (e) => {
    let { children: t, className: n, color: a, iconType: d, onMouseEnter: f, onMouseLeave: _, ...p } = e,
        [h, m] = i.useState(!1),
        g = i.useCallback(
            (e) => {
                m(!0), null == f || f(e);
            },
            [m, f]
        ),
        E = i.useCallback(
            (e) => {
                m(!1), null == _ || _(e);
            },
            [m, _]
        ),
        v = {};
    return (
        null != a &&
            (v = {
                color: (0, o.Rf)(a),
                backgroundColor: h ? (0, o.br)(a, 0.3) : (0, o.br)(a, 0.1)
            }),
        (0, r.jsx)(l.Clickable, {
            ...p,
            tag: 'span',
            className: s()(n, {
                [c.wrapper]: !0,
                interactive: p.onClick
            }),
            onMouseEnter: g,
            onMouseLeave: E,
            style: v,
            tabIndex: null != p.onClick ? 0 : -1,
            children:
                null != d
                    ? (0, r.jsx)(u.Z, {
                          iconType: d,
                          children: t
                      })
                    : t
        })
    );
};
