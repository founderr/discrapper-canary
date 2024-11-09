t.d(n, {
    Z: function () {
        return c;
    }
});
var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    o = t(481060),
    s = t(422559),
    l = t(594045);
function c(e) {
    let { grantedPermissions: n, disabledPermissions: t, grantedPermissionsHeader: a, disabledPermissionsHeader: c, className: d } = e;
    return (0, r.jsxs)('div', {
        className: i()(l.list, d),
        children: [
            null != n && n.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != a
                              ? (0, r.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: l.header,
                                    children: a
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: l.container,
                              children: n.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, r.jsx)(o.CheckmarkLargeIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.check
                                              }),
                                              (0, r.jsx)(o.Text, {
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
            null != t && t.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != c
                              ? (0, r.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: l.header,
                                    children: c
                                })
                              : null,
                          (0, r.jsx)('div', {
                              className: l.container,
                              children: t.map((e) =>
                                  (0, r.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, r.jsx)(o.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.cross
                                              }),
                                              (0, r.jsx)(o.Text, {
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
