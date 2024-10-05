t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    l = t(422559),
    s = t(594045);
function c(e) {
    let { grantedPermissions: n, disabledPermissions: t, grantedPermissionsHeader: a, disabledPermissionsHeader: c, className: d } = e;
    return (0, i.jsxs)('div', {
        className: r()(s.list, d),
        children: [
            null != n && n.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != a
                              ? (0, i.jsx)(o.FormTitle, {
                                    className: s.permissionHeader,
                                    children: a
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: s.container,
                              children: n.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: s.permission,
                                          children: [
                                              (0, i.jsx)(o.CheckmarkLargeIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: s.check
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, l.wt)(e)
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
            null != t && t.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != c
                              ? (0, i.jsx)(o.FormTitle, {
                                    className: s.permissionHeader,
                                    children: c
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: s.container,
                              children: t.map((e) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: s.permission,
                                          children: [
                                              (0, i.jsx)(o.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: s.cross
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, l.wt)(e)
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
