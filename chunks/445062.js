n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var i = n(864094),
    a = n(871499),
    s = n(388032);
function o(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: o, onMouseLeave: l, ...u } = e,
        c = n ? a.d : a.Z,
        { Component: d, events: f } = (0, i.P)('disable');
    return (0, r.jsx)(c, {
        label: t ? s.intl.string(s.t.S5anIS) : s.intl.string(s.t.q3O3Jy),
        iconComponent: d,
        isActive: !0,
        onMouseEnter: (e) => {
            null == o || o(e), f.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == l || l(e), f.onMouseLeave();
        },
        ...u
    });
}
