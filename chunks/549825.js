"use strict";
a.r(s), a.d(s, {
  default: function() {
    return u
  }
});
var n = a("37983");
a("884691");
var i = a("414456"),
  l = a.n(i),
  r = a("77078"),
  t = a("978970"),
  d = a("36694"),
  o = a("945330"),
  c = a("434106");

function u(e) {
  let {
    grantedPermissions: s,
    disabledPermissions: a,
    grantedPermissionsHeader: i,
    disabledPermissionsHeader: u,
    className: h
  } = e;
  return (0, n.jsxs)("div", {
    className: l(c.list, h),
    children: [null != s && s.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != i ? (0, n.jsx)(r.FormTitle, {
        className: c.permissionHeader,
        children: i
      }) : null, (0, n.jsx)("div", {
        className: c.container,
        children: s.map(e => (0, n.jsxs)("div", {
          className: c.permission,
          children: [(0, n.jsx)(d.default, {
            width: 16,
            height: 16,
            className: c.check
          }), (0, n.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: (0, t.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != a && a.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != u ? (0, n.jsx)(r.FormTitle, {
        className: c.permissionHeader,
        children: u
      }) : null, (0, n.jsx)("div", {
        className: c.container,
        children: a.map(e => (0, n.jsxs)("div", {
          className: c.permission,
          children: [(0, n.jsx)(o.default, {
            width: 16,
            height: 16,
            className: c.cross
          }), (0, n.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: (0, t.getPermissionName)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}