l.d(n, {
    Z: function () {
        return o;
    }
});
var t = l(200651),
    i = l(120356),
    r = l.n(i),
    a = l(481060),
    s = l(40305);
function o(e) {
    let { className: n, onClick: l, ...i } = e,
        o = (0, t.jsx)(a.Clickable, {
            ...i,
            className: r()(null != l && s.clickable, n),
            onClick: l
        });
    return null == l ? (0, t.jsx)(a.BlockInteractions, { children: o }) : o;
}
