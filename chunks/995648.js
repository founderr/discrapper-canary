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
  u = i("465670"),
  c = i("150740");

function d(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: i,
    grantedPermissionsHeader: r,
    disabledPermissionsHeader: d,
    className: f
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(c.list, f),
    children: [null != t && t.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != r ? (0, n.jsx)(a.FormTitle, {
        className: c.permissionHeader,
        children: r
      }) : null, (0, n.jsx)("div", {
        className: c.container,
        children: t.map(e => (0, n.jsxs)("div", {
          className: c.permission,
          children: [(0, n.jsx)(o.default, {
            width: 16,
            height: 16,
            className: c.check
          }), (0, n.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != i && i.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != d ? (0, n.jsx)(a.FormTitle, {
        className: c.permissionHeader,
        children: d
      }) : null, (0, n.jsx)("div", {
        className: c.container,
        children: i.map(e => (0, n.jsxs)("div", {
          className: c.permission,
          children: [(0, n.jsx)(u.default, {
            width: 16,
            height: 16,
            className: c.cross
          }), (0, n.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, l.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}