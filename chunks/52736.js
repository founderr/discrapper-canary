n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(134433),
  r = n(461124);

function o(e) {
  let t, {
    className: n,
    children: i,
    verified: o,
    roleColor: c,
    roleName: u
  } = e;
  return t = o ? (0, l.jsx)(a.Z, {
    size: 12,
    color: c,
    className: r.linkedRoleColor
  }) : (0, l.jsx)("div", {
    className: r.roleColor,
    style: {
      backgroundColor: c
    }
  }), (0, l.jsxs)("div", {
    className: s()(n, r.role),
    children: [t, u, i]
  })
}