n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(685072),
    a = n(287734),
    s = n(871499),
    o = n(388032);
function l(e) {
    let { centerButton: t = !1, onClick: n, onMouseEnter: l, onMouseLeave: u, ...c } = e,
        d = t ? s.d : s.Z,
        { Component: f, events: _ } = (0, i.K)();
    return (0, r.jsx)(d, {
        ...c,
        onClick: () => {
            a.default.disconnect(), null == n || n();
        },
        iconComponent: f,
        onMouseEnter: (e) => {
            null == l || l(e), _.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == u || u(e), _.onMouseLeave();
        },
        label: o.intl.string(o.t['6vrfgo'])
    });
}
