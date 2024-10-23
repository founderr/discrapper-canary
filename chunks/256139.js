t.d(n, {
    Z: function () {
        return l;
    }
});
var a = t(200651),
    r = t(120356),
    s = t.n(r),
    i = t(481060),
    o = t(615934);
function l(e) {
    let { className: n, onClick: t, ...r } = e,
        l = (0, a.jsx)(i.Clickable, {
            ...r,
            className: s()(null != t && o.clickable, n),
            onClick: t
        });
    return null == t ? (0, a.jsx)(i.BlockInteractions, { children: l }) : l;
}
