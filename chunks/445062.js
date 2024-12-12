r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(864094),
    s = r(871499),
    o = r(388032);
function l(e) {
    return e ? o.intl.string(o.t.S5anIS) : o.intl.string(o.t.q3O3Jy);
}
function u(e) {
    let { isSelfStream: n, centerButton: r = !1, onMouseEnter: o, onMouseLeave: u, ...c } = e,
        d = r ? s.d : s.Z,
        { Component: f, events: _ } = (0, a.P)('disable');
    return (0, i.jsx)(d, {
        label: l(n),
        iconComponent: f,
        isActive: !0,
        onMouseEnter: (e) => {
            null == o || o(e), _.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == u || u(e), _.onMouseLeave();
        },
        ...c
    });
}
