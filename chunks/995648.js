t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    s = t.n(a),
    l = t(481060),
    r = t(422559),
    o = t(594045);
function c(e) {
    let { grantedPermissions: n, disabledPermissions: t, grantedPermissionsHeader: a, disabledPermissionsHeader: c, className: d } = e;
    return (0, i.jsxs)('div', {
        className: s()(o.list, d),
        children: [
            null != n && n.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != a
                              ? (0, i.jsx)(l.FormTitle, {
                                    className: o.permissionHeader,
                                    children: a
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
                                                  children: (0, r.wt)(e)
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
                              ? (0, i.jsx)(l.FormTitle, {
                                    className: o.permissionHeader,
                                    children: c
                                })
                              : null,
                          (0, i.jsx)('div', {
                              className: o.container,
                              children: t.map((e) =>
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
                                                  children: (0, r.wt)(e)
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
