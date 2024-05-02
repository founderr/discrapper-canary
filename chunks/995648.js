"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  s = n("481060"),
  l = n("422559"),
  o = n("263704"),
  d = n("465670"),
  c = n("808490");

function u(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: n,
    grantedPermissionsHeader: i,
    disabledPermissionsHeader: u,
    className: f
  } = e;
  return (0, a.jsxs)("div", {
    className: r()(c.list, f),
    children: [null != t && t.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != i ? (0, a.jsx)(s.FormTitle, {
        className: c.permissionHeader,
        children: i
      }) : null, (0, a.jsx)("div", {
        className: c.container,
        children: t.map(e => (0, a.jsxs)("div", {
          className: c.permission,
          children: [(0, a.jsx)(o.default, {
            width: 16,
            height: 16,
            className: c.check
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != n && n.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != u ? (0, a.jsx)(s.FormTitle, {
        className: c.permissionHeader,
        children: u
      }) : null, (0, a.jsx)("div", {
        className: c.container,
        children: n.map(e => (0, a.jsxs)("div", {
          className: c.permission,
          children: [(0, a.jsx)(d.default, {
            width: 16,
            height: 16,
            className: c.cross
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}