var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(661824),
    o = n(916315);
let c = s.forwardRef(function (e, t) {
    let { className: n, isBeforeGroup: s = !1, ...a } = e,
        { children: c } = a;
    return (0, i.jsx)(r.Z, {
        ...a,
        ref: t,
        role: 'separator',
        'aria-label': 'string' == typeof c ? c : void 0,
        className: l()(n, {
            [o.divider]: !0,
            [o.hasContent]: null != c,
            [o.beforeGroup]: s
        })
    });
});
t.Z = s.memo(c);
