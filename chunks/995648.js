"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("735250");
l("470079");
var a = l("120356"),
  s = l.n(a),
  i = l("481060"),
  r = l("422559"),
  o = l("263704"),
  d = l("465670"),
  u = l("897269");

function c(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: l,
    grantedPermissionsHeader: a,
    disabledPermissionsHeader: c,
    className: f
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(u.list, f),
    children: [null != t && t.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != a ? (0, n.jsx)(i.FormTitle, {
        className: u.permissionHeader,
        children: a
      }) : null, (0, n.jsx)("div", {
        className: u.container,
        children: t.map(e => (0, n.jsxs)("div", {
          className: u.permission,
          children: [(0, n.jsx)(o.default, {
            width: 16,
            height: 16,
            className: u.check
          }), (0, n.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: (0, r.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != l && l.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != c ? (0, n.jsx)(i.FormTitle, {
        className: u.permissionHeader,
        children: c
      }) : null, (0, n.jsx)("div", {
        className: u.container,
        children: l.map(e => (0, n.jsxs)("div", {
          className: u.permission,
          children: [(0, n.jsx)(d.default, {
            width: 16,
            height: 16,
            className: u.cross
          }), (0, n.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: (0, r.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}