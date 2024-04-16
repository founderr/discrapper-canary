"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var n = i("735250");
i("470079");
var r = i("120356"),
  s = i.n(r),
  a = i("481060"),
  l = i("422559"),
  o = i("263704"),
  c = i("465670"),
  u = i("150740");

function d(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: i,
    grantedPermissionsHeader: r,
    disabledPermissionsHeader: d,
    className: f
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(u.list, f),
    children: [null != t && t.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != r ? (0, n.jsx)(a.FormTitle, {
        className: u.permissionHeader,
        children: r
      }) : null, (0, n.jsx)("div", {
        className: u.container,
        children: t.map(e => (0, n.jsxs)("div", {
          className: u.permission,
          children: [(0, n.jsx)(o.default, {
            width: 16,
            height: 16,
            className: u.check
          }), (0, n.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != i && i.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != d ? (0, n.jsx)(a.FormTitle, {
        className: u.permissionHeader,
        children: d
      }) : null, (0, n.jsx)("div", {
        className: u.container,
        children: i.map(e => (0, n.jsxs)("div", {
          className: u.permission,
          children: [(0, n.jsx)(c.default, {
            width: 16,
            height: 16,
            className: u.cross
          }), (0, n.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}