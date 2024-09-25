t.d(n, {
    Z: function () {
        return l;
    }
});
var a = t(735250),
    r = t(120356),
    s = t.n(r),
    o = t(481060),
    i = t(615934);
function l(e) {
    let { className: n, onClick: t, ...r } = e,
        l = (0, a.jsx)(o.Clickable, {
            ...r,
            className: s()(null != t && i.clickable, n),
            onClick: t
        });
    return null == t ? (0, a.jsx)(o.BlockInteractions, { children: l }) : l;
}
