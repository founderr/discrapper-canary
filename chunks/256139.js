t.d(n, {
    Z: function () {
        return i;
    }
});
var a = t(735250),
    r = t(120356),
    s = t.n(r),
    o = t(481060),
    l = t(615934);
function i(e) {
    let { className: n, onClick: t, ...r } = e,
        i = (0, a.jsx)(o.Clickable, {
            ...r,
            className: s()(null != t && l.clickable, n),
            onClick: t
        });
    return null == t ? (0, a.jsx)(o.BlockInteractions, { children: i }) : i;
}
