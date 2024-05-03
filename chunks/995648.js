"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  s = a("481060"),
  l = a("422559"),
  o = a("263704"),
  c = a("465670"),
  d = a("808490");

function u(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: a,
    grantedPermissionsHeader: r,
    disabledPermissionsHeader: u,
    className: f
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(d.list, f),
    children: [null != t && t.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != r ? (0, n.jsx)(s.FormTitle, {
        className: d.permissionHeader,
        children: r
      }) : null, (0, n.jsx)("div", {
        className: d.container,
        children: t.map(e => (0, n.jsxs)("div", {
          className: d.permission,
          children: [(0, n.jsx)(o.default, {
            width: 16,
            height: 16,
            className: d.check
          }), (0, n.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != a && a.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != u ? (0, n.jsx)(s.FormTitle, {
        className: d.permissionHeader,
        children: u
      }) : null, (0, n.jsx)("div", {
        className: d.container,
        children: a.map(e => (0, n.jsxs)("div", {
          className: d.permission,
          children: [(0, n.jsx)(c.default, {
            width: 16,
            height: 16,
            className: d.cross
          }), (0, n.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}