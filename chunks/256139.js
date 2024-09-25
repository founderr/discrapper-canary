n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(615934);
function l(e) {
    let { className: t, onClick: n, ...i } = e,
        l = (0, r.jsx)(o.Clickable, {
            ...i,
            className: a()(null != n && s.clickable, t),
            onClick: n
        });
    return null == n ? (0, r.jsx)(o.BlockInteractions, { children: l }) : l;
}
