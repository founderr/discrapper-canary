t.d(n, {
    Z: function () {
        return c;
    }
});
var a = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(481060),
    o = t(422559),
    l = t(594045);
function c(e) {
    let { grantedPermissions: n, disabledPermissions: t, grantedPermissionsHeader: r, disabledPermissionsHeader: c, className: d } = e;
    return (0, a.jsxs)('div', {
        className: i()(l.list, d),
        children: [
            null != n && n.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          null != r
                              ? (0, a.jsx)(s.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: l.header,
                                    children: r
                                })
                              : null,
                          (0, a.jsx)('div', {
                              className: l.container,
                              children: n.map((e) =>
                                  (0, a.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, a.jsx)(s.CheckmarkLargeIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.check
                                              }),
                                              (0, a.jsx)(s.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, o.wt)(e)
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
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          null != c
                              ? (0, a.jsx)(s.Heading, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    className: l.header,
                                    children: c
                                })
                              : null,
                          (0, a.jsx)('div', {
                              className: l.container,
                              children: t.map((e) =>
                                  (0, a.jsxs)(
                                      'div',
                                      {
                                          className: l.permission,
                                          children: [
                                              (0, a.jsx)(s.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: l.cross
                                              }),
                                              (0, a.jsx)(s.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: (0, o.wt)(e)
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
