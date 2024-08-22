t.d(e, {
    Z: function () {
        return u;
    }
});
var i = t(735250),
    l = t(120356),
    r = t.n(l),
    o = t(481060),
    a = t(671656);
function u(n) {
    let { className: e, onClick: t, ...l } = n,
        u = (0, i.jsx)(o.Clickable, {
            ...l,
            className: r()(null != t && a.clickable, e),
            onClick: t
        });
    return null == t ? (0, i.jsx)(o.BlockInteractions, { children: u }) : u;
}
