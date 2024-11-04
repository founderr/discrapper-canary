n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    a = n(626786),
    o = n(127340);
function c(e) {
    let { className: t, roleColor: n, roleName: l, hasRemoveIcon: c = !1, onClick: u, disabled: d = !1, verified: h = !1 } = e;
    return (0, i.jsx)(s.Button, {
        className: r()(t, o.button),
        look: s.Button.Looks.BLANK,
        size: s.Button.Sizes.NONE,
        onClick: u,
        disabled: d,
        children: (0, i.jsx)(a.Z, {
            className: o.role,
            roleColor: n,
            roleName: l,
            verified: h,
            children:
                c &&
                (0, i.jsx)(s.XSmallIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    height: 6,
                    width: 6,
                    className: o.removeRole,
                    colorClass: o.removeRoleIcon
                })
        })
    });
}
