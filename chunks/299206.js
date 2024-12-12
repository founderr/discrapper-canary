r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(512722),
    s = r.n(a),
    o = r(481060),
    l = r(695346),
    u = r(572004);
function c(e) {
    let { id: n, label: r, onSuccess: a, shiftId: c, showIconFirst: d, showWithoutDeveloperMode: f, focusedClassName: _ } = e,
        h = l.Sb.useSetting();
    function p(e) {
        let r = null != c && e.shiftKey ? c : n;
        s()(null != r, 'cannot copy null text'), (0, u.JG)(r), null == a || a();
    }
    let m = f || h;
    if (__OVERLAY__ || !m || !u.wS || null == n) return null;
    let g = 'devmode-copy-id-'.concat(n);
    return (0, i.jsx)(
        o.MenuItem,
        {
            id: g,
            label: r,
            action: p,
            icon: d ? void 0 : o.IdIcon,
            iconLeft: d ? o.IdIcon : void 0,
            focusedClassName: _
        },
        g
    );
}
