n.d(a, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var t = n(120356),
    r = n.n(t),
    l = n(481060),
    s = n(422559),
    o = n(594045);
function c(e) {
    let { grantedPermissions: a, disabledPermissions: n, grantedPermissionsHeader: t, disabledPermissionsHeader: c, className: d } = e;
    return (0, i.jsxs)('div', {
        className: r()(o.list, d),
        children: [
            null != a && a.length > 0
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
                              children: a.map((e) =>
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
            null != n && n.length > 0
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
                              children: n.map((e) =>
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
