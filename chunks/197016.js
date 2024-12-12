r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(685072),
    s = r(287734),
    o = r(871499),
    l = r(388032);
function u(e) {
    let { centerButton: n = !1, onClick: r, onMouseEnter: u, onMouseLeave: c, ...d } = e,
        f = n ? o.d : o.Z,
        _ = () => {
            s.default.disconnect(), null == r || r();
        },
        h = () => l.intl.string(l.t['6vrfgo']),
        { Component: p, events: m } = (0, a.K)();
    return (0, i.jsx)(f, {
        ...d,
        onClick: _,
        iconComponent: p,
        onMouseEnter: (e) => {
            null == u || u(e), m.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == c || c(e), m.onMouseLeave();
        },
        label: h()
    });
}
