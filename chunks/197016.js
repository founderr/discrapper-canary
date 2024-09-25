n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(685072),
    a = n(287734),
    o = n(871499),
    s = n(689938);
function l(e) {
    let { centerButton: t = !1, onClick: n, onMouseEnter: l, onMouseLeave: u, ...c } = e,
        d = t ? o.d : o.Z,
        _ = () => {
            a.default.disconnect(), null == n || n();
        },
        E = () => s.Z.Messages.DISCONNECT_SELF,
        { Component: f, events: h } = (0, i.K)();
    return (0, r.jsx)(d, {
        ...c,
        onClick: _,
        iconComponent: f,
        onMouseEnter: (e) => {
            null == l || l(e), h.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == u || u(e), h.onMouseLeave();
        },
        label: E()
    });
}
