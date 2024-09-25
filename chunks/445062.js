n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(864094),
    a = n(871499),
    o = n(689938);
function s(e) {
    return e ? o.Z.Messages.STOP_STREAMING : o.Z.Messages.STOP_WATCHING;
}
function l(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: o, onMouseLeave: l, ...u } = e,
        c = n ? a.d : a.Z,
        { Component: d, events: _ } = (0, i.P)('disable');
    return (0, r.jsx)(c, {
        label: s(t),
        iconComponent: d,
        isActive: !0,
        onMouseEnter: (e) => {
            null == o || o(e), _.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == l || l(e), _.onMouseLeave();
        },
        ...u
    });
}
