"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var i = n("120356"),
  l = n.n(i),
  r = n("481060"),
  a = n("422559"),
  o = n("263704"),
  u = n("465670"),
  c = n("150740");

function d(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: n,
    grantedPermissionsHeader: i,
    disabledPermissionsHeader: d,
    className: f
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(c.list, f),
    children: [null != t && t.length > 0 ? (0, s.jsxs)(s.Fragment, {
      children: [null != i ? (0, s.jsx)(r.FormTitle, {
        className: c.permissionHeader,
        children: i
      }) : null, (0, s.jsx)("div", {
        className: c.container,
        children: t.map(e => (0, s.jsxs)("div", {
          className: c.permission,
          children: [(0, s.jsx)(o.default, {
            width: 16,
            height: 16,
            className: c.check
          }), (0, s.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: (0, a.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != n && n.length > 0 ? (0, s.jsxs)(s.Fragment, {
      children: [null != d ? (0, s.jsx)(r.FormTitle, {
        className: c.permissionHeader,
        children: d
      }) : null, (0, s.jsx)("div", {
        className: c.container,
        children: n.map(e => (0, s.jsxs)("div", {
          className: c.permission,
          children: [(0, s.jsx)(u.default, {
            width: 16,
            height: 16,
            className: c.cross
          }), (0, s.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: (0, a.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}