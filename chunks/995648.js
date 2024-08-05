t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250);
t(470079);
var a = t(120356),
  s = t.n(a),
  l = t(481060),
  o = t(422559),
  r = t(913206);

function d(e) {
  let {
grantedPermissions: n,
disabledPermissions: t,
grantedPermissionsHeader: a,
disabledPermissionsHeader: d,
className: c
  } = e;
  return (0, i.jsxs)('div', {
className: s()(r.list, c),
children: [
  null != n && n.length > 0 ? (0, i.jsxs)(i.Fragment, {
    children: [
      null != a ? (0, i.jsx)(l.FormTitle, {
        className: r.permissionHeader,
        children: a
      }) : null,
      (0, i.jsx)('div', {
        className: r.container,
        children: n.map(e => (0, i.jsxs)('div', {
          className: r.permission,
          children: [
            (0, i.jsx)(l.CheckmarkLargeIcon, {
              size: 'xs',
              color: 'currentColor',
              className: r.check
            }),
            (0, i.jsx)(l.Text, {
              variant: 'text-sm/normal',
              children: (0, o.wt)(e)
            })
          ]
        }, e.toString()))
      })
    ]
  }) : null,
  null != t && t.length > 0 ? (0, i.jsxs)(i.Fragment, {
    children: [
      null != d ? (0, i.jsx)(l.FormTitle, {
        className: r.permissionHeader,
        children: d
      }) : null,
      (0, i.jsx)('div', {
        className: r.container,
        children: t.map(e => (0, i.jsxs)('div', {
          className: r.permission,
          children: [
            (0, i.jsx)(l.CloseSmallIcon, {
              size: 'xs',
              color: 'currentColor',
              className: r.cross
            }),
            (0, i.jsx)(l.Text, {
              variant: 'text-sm/normal',
              children: (0, o.wt)(e)
            })
          ]
        }, e.toString()))
      })
    ]
  }) : null
]
  });
}