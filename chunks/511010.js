var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(661824),
    l = n(596756);
let u = i.forwardRef(function (e, t) {
    let { className: n, isBeforeGroup: i = !1, ...a } = e,
        { children: u } = a;
    return (0, r.jsx)(o.Z, {
        ...a,
        ref: t,
        role: 'separator',
        'aria-label': 'string' == typeof u ? u : void 0,
        className: s()(n, {
            [l.divider]: !0,
            [l.hasContent]: null != u,
            [l.beforeGroup]: i
        })
    });
});
t.Z = i.memo(u);
