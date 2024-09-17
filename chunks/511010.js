var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(661824),
    s = n(916315);
let c = a.forwardRef(function (e, t) {
    let { className: n, isBeforeGroup: a = !1, ...l } = e,
        { children: c } = l;
    return (0, r.jsx)(o.Z, {
        ...l,
        ref: t,
        role: 'separator',
        'aria-label': 'string' == typeof c ? c : void 0,
        className: i()(n, {
            [s.divider]: !0,
            [s.hasContent]: null != c,
            [s.beforeGroup]: a
        })
    });
});
t.Z = a.memo(c);
