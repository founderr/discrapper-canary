t.d(n, {
  Z: function() {
    return c
  }
});
var i = t(735250);
t(470079);
var l = t(120356),
  s = t.n(l),
  a = t(481060),
  r = t(422559),
  o = t(209945);

function c(e) {
  let {
    grantedPermissions: n,
    disabledPermissions: t,
    grantedPermissionsHeader: l,
    disabledPermissionsHeader: c,
    className: d
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(o.list, d),
    children: [null != n && n.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [null != l ? (0, i.jsx)(a.FormTitle, {
        className: o.permissionHeader,
        children: l
      }) : null, (0, i.jsx)("div", {
        className: o.container,
        children: n.map(e => (0, i.jsxs)("div", {
          className: o.permission,
          children: [(0, i.jsx)(a.CheckmarkLargeIcon, {
            size: "xs",
            color: "currentColor",
            className: o.check
          }), (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, r.wt)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != t && t.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [null != c ? (0, i.jsx)(a.FormTitle, {
        className: o.permissionHeader,
        children: c
      }) : null, (0, i.jsx)("div", {
        className: o.container,
        children: t.map(e => (0, i.jsxs)("div", {
          className: o.permission,
          children: [(0, i.jsx)(a.CloseSmallIcon, {
            size: "xs",
            color: "currentColor",
            className: o.cross
          }), (0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, r.wt)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}