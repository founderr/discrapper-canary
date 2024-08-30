l.d(n, {
    Z: function () {
        return u;
    }
});
var t = l(735250),
    r = l(120356),
    i = l.n(r),
    a = l(481060),
    s = l(671656);
function u(e) {
    let { className: n, onClick: l, ...r } = e,
        u = (0, t.jsx)(a.Clickable, {
            ...r,
            className: i()(null != l && s.clickable, n),
            onClick: l
        });
    return null == l ? (0, t.jsx)(a.BlockInteractions, { children: u }) : u;
}
