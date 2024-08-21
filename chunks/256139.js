t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(735250),
    i = t(120356),
    a = t.n(i),
    r = t(481060),
    o = t(671656);
function s(e) {
    let { className: n, onClick: t, ...i } = e,
        s = (0, l.jsx)(r.Clickable, {
            ...i,
            className: a()(null != t && o.clickable, n),
            onClick: t
        });
    return null == t ? (0, l.jsx)(r.BlockInteractions, { children: s }) : s;
}
