var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(661824),
    c = n(916315);
let s = a.forwardRef(function (e, t) {
    let { className: n, isBeforeGroup: a = !1, ...l } = e,
        { children: s } = l;
    return (0, r.jsx)(o.Z, {
        ...l,
        ref: t,
        role: 'separator',
        'aria-label': 'string' == typeof s ? s : void 0,
        className: i()(n, {
            [c.divider]: !0,
            [c.hasContent]: null != s,
            [c.beforeGroup]: a
        })
    });
});
t.Z = a.memo(s);
