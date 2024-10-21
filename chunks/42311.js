n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    r = n(626786),
    o = n(127340);
function c(e) {
    let { className: t, roleColor: n, roleName: s, hasRemoveIcon: c = !1, onClick: u, disabled: d = !1, verified: h = !1 } = e;
    return (0, i.jsx)(l.Button, {
        className: a()(t, o.button),
        look: l.Button.Looks.BLANK,
        size: l.Button.Sizes.NONE,
        onClick: u,
        disabled: d,
        children: (0, i.jsx)(r.Z, {
            className: o.role,
            roleColor: n,
            roleName: s,
            verified: h,
            children:
                c &&
                (0, i.jsx)(l.XSmallIcon, {
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
