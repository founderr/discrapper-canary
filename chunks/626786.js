n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(134433),
    r = n(139513);
function o(e) {
    let t,
        { className: n, children: s, verified: o, roleColor: c, roleName: u } = e;
    return (
        (t = o
            ? (0, i.jsx)(l.Z, {
                  size: 12,
                  color: c,
                  className: r.linkedRoleColor
              })
            : (0, i.jsx)('div', {
                  className: r.roleColor,
                  style: { backgroundColor: c }
              })),
        (0, i.jsxs)('div', {
            className: a()(n, r.role),
            children: [t, u, s]
        })
    );
}
