n.d(t, {
    Z: function () {
        return l;
    }
});
var a = n(200651),
    r = n(120356),
    s = n.n(r),
    i = n(481060),
    o = n(615934);
function l(e) {
    let { className: t, onClick: n, ...r } = e,
        l = (0, a.jsx)(i.Clickable, {
            ...r,
            className: s()(null != n && o.clickable, t),
            onClick: n
        });
    return null == n ? (0, a.jsx)(i.BlockInteractions, { children: l }) : l;
}
