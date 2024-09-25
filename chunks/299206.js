n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(512722),
    a = n.n(i),
    o = n(481060),
    s = n(695346),
    l = n(572004);
function u(e) {
    let { id: t, label: n, onSuccess: i, shiftId: u, showIconFirst: c, showWithoutDeveloperMode: d, focusedClassName: _ } = e,
        E = s.Sb.useSetting();
    function f(e) {
        let n = null != u && e.shiftKey ? u : t;
        a()(null != n, 'cannot copy null text'), (0, l.JG)(n), null == i || i();
    }
    let h = d || E;
    if (__OVERLAY__ || !h || !l.wS || null == t) return null;
    let p = 'devmode-copy-id-'.concat(t);
    return (0, r.jsx)(
        o.MenuItem,
        {
            id: p,
            label: n,
            action: f,
            icon: c ? void 0 : o.IdIcon,
            iconLeft: c ? o.IdIcon : void 0,
            focusedClassName: _
        },
        p
    );
}
