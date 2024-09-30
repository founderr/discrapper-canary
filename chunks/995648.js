a.d(n, {
    Z: function () {
        return c;
    }
});
var i = a(735250);
a(470079);
var t = a(120356),
    r = a.n(t),
    l = a(481060),
    s = a(422559),
    o = a(594045);
function c(e) {
    let { grantedPermissions: n, disabledPermissions: a, grantedPermissionsHeader: t, disabledPermissionsHeader: c, className: d } = e;
    return (0, i.jsxs)('div', {
        className: r()(o.list, d),
        children: [
            null != n && n.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != t
                              ? (0, i.jsx)(l.FormTitle, {
                                    className: o.permissionHeader,
                                    children: t
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: o.container,
                              children: n.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: o.permission,
                                          children: [
                                              (0, i.jsx)(l.CheckmarkLargeIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: o.check
                                              }),
                                              (0, i.jsx)(l.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, s.wt)(e)
                                              })
                                          ]
                                      },
                                      e.toString()
                                  )
                              )
                          })
                      ]
                  })
                : null,
            null != a && a.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != c
                              ? (0, i.jsx)(l.FormTitle, {
                                    className: o.permissionHeader,
                                    children: c
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: o.container,
                              children: a.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: o.permission,
                                          children: [
                                              (0, i.jsx)(l.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: o.cross
                                              }),
                                              (0, i.jsx)(l.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, s.wt)(e)
                                              })
                                          ]
                                      },
                                      e.toString()
                                  )
                              )
                          })
                      ]
                  })
                : null
        ]
    });
}
