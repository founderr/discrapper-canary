n.d(t, {
    P: function () {
        return _;
    },
    r: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(756715),
    l = n(607070),
    u = n(109161),
    c = n(888998);
function d(e) {
    let { roleStyle: t, name: n, color: i, roleName: s, dotAlignment: o = 'left', className: l } = e,
        d = 'username' === t,
        f =
            'dot' === t
                ? (0, r.jsx)(u.F, {
                      color: i,
                      name: s,
                      className: 'left' === o ? c.roleDotLeft : c.roleDotRight
                  })
                : null;
    return (0, r.jsxs)('span', {
        style: { color: d && null != i ? i : void 0 },
        className: a()(l, { [c.username]: d }),
        children: ['left' === o && f, n, 'right' === o && f]
    });
}
function f(e) {
    let { name: t, color: n, roleName: i, dotAlignment: a, className: u, ...c } = e,
        f = (0, s.e7)([l.Z], () => l.Z.roleStyle),
        _ = 'username' === f,
        h = (0, r.jsx)(d, {
            roleStyle: f,
            name: t,
            color: n,
            roleName: i,
            dotAlignment: a,
            className: u
        }),
        p = _ ? { color: n } : void 0;
    return (0, r.jsx)(o.Anchor, {
        ...c,
        children: h,
        style: p
    });
}
function _(e) {
    let t = (0, s.e7)([l.Z], () => l.Z.roleStyle);
    return (0, r.jsx)(d, {
        ...e,
        roleStyle: t
    });
}
