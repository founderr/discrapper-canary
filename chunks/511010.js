var s = t(735250),
    a = t(470079),
    o = t(120356),
    r = t.n(o),
    i = t(661824),
    _ = t(916315);
let l = a.forwardRef(function (e, n) {
    let { className: t, isBeforeGroup: a = !1, ...o } = e,
        { children: l } = o;
    return (0, s.jsx)(i.Z, {
        ...o,
        ref: n,
        role: 'separator',
        'aria-label': 'string' == typeof l ? l : void 0,
        className: r()(t, {
            [_.divider]: !0,
            [_.hasContent]: null != l,
            [_.beforeGroup]: a
        })
    });
});
n.Z = a.memo(l);
