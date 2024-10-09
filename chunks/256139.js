a.d(n, {
    Z: function () {
        return l;
    }
});
var t = a(735250),
    r = a(120356),
    s = a.n(r),
    i = a(481060),
    o = a(615934);
function l(e) {
    let { className: n, onClick: a, ...r } = e,
        l = (0, t.jsx)(i.Clickable, {
            ...r,
            className: s()(null != a && o.clickable, n),
            onClick: a
        });
    return null == a ? (0, t.jsx)(i.BlockInteractions, { children: l }) : l;
}
