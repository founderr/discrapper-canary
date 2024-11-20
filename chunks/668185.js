n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(149765),
    s = n(178940),
    o = n(993365),
    l = n(481060),
    u = n(422559),
    c = n(388032),
    d = n(482145);
function f(e) {
    let { application: t, permissions: n, deniedPermissions: f, onPermissionsChange: _, guild: p } = e,
        h = i.useMemo(() => a.U_(p.permissions), [p.permissions]);
    i.useEffect(() => {
        _(!1, a.hX(n, h));
    }, [h, _, n]);
    let m = u.VY.filter((e) => a.e$(n, e)),
        g = m
            .filter((e) => !a.e$(h, e))
            .map((e) => {
                let t = (0, u.wt)(e),
                    n = !a.e$(f, e);
                return (0, r.jsx)(
                    'li',
                    {
                        className: d.permission,
                        children: (0, r.jsx)(s.X, {
                            value: n,
                            onChange: (t, n) => _(n, e),
                            type: s.X.Types.INVERTED,
                            children: (0, r.jsx)(o.x, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        })
                    },
                    String(e)
                );
            }),
        E = m
            .filter((e) => a.e$(h, e))
            .map((e) => {
                let t = (0, u.wt)(e);
                return (0, r.jsxs)(
                    'li',
                    {
                        className: d.permission,
                        children: [
                            (0, r.jsx)('div', {
                                className: d.disabledPermissionIcon,
                                children: (0, r.jsx)(l.XSmallIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: d.icon
                                })
                            }),
                            (0, r.jsx)(o.x, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        ]
                    },
                    String(e)
                );
            });
    return (0, r.jsxs)('div', {
        className: d.botPermissions,
        children: [
            g.length > 0
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(o.x, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: c.intl.format(c.t.sOaT2t, {
                                  applicationName: t.name,
                                  guildName: p.name
                              })
                          }),
                          (0, r.jsx)('ul', {
                              className: d.permissionsList,
                              children: g
                          })
                      ]
                  })
                : null,
            E.length > 0
                ? (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(o.x, {
                              variant: 'text-sm/medium',
                              color: 'header-secondary',
                              children: c.intl.format(c.t.fsOkFx, { applicationName: t.name })
                          }),
                          (0, r.jsx)('ul', {
                              className: d.permissionsList,
                              children: E
                          })
                      ]
                  })
                : null
        ]
    });
}
