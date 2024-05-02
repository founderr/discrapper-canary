"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var r = n("120356"),
  i = n.n(r),
  s = n("481060"),
  l = n("422559"),
  o = n("263704"),
  c = n("465670"),
  d = n("808490");

function u(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: n,
    grantedPermissionsHeader: r,
    disabledPermissionsHeader: u,
    className: f
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(d.list, f),
    children: [null != t && t.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != r ? (0, a.jsx)(s.FormTitle, {
        className: d.permissionHeader,
        children: r
      }) : null, (0, a.jsx)("div", {
        className: d.container,
        children: t.map(e => (0, a.jsxs)("div", {
          className: d.permission,
          children: [(0, a.jsx)(o.default, {
            width: 16,
            height: 16,
            className: d.check
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != n && n.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != u ? (0, a.jsx)(s.FormTitle, {
        className: d.permissionHeader,
        children: u
      }) : null, (0, a.jsx)("div", {
        className: d.container,
        children: n.map(e => (0, a.jsxs)("div", {
          className: d.permission,
          children: [(0, a.jsx)(c.default, {
            width: 16,
            height: 16,
            className: d.cross
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}