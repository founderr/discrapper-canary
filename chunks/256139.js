t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(200651),
    i = t(120356),
    r = t.n(i),
    a = t(481060),
    o = t(40305);
function s(e) {
    let { className: n, onClick: t, ...i } = e,
        s = (0, l.jsx)(a.Clickable, {
            ...i,
            className: r()(null != t && o.clickable, n),
            onClick: t
        });
    return null == t ? (0, l.jsx)(a.BlockInteractions, { children: s }) : s;
}
