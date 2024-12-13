n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(653041);
var i = n(200651);
n(192379);
var r = n(442837),
    o = n(481060),
    l = n(153867),
    a = n(857595),
    c = n(607070),
    u = n(906732),
    s = n(705262),
    d = n(540059),
    g = n(210887),
    m = n(740492),
    b = n(695346),
    f = n(874893),
    p = n(981631),
    h = n(969943),
    _ = n(388032);
function S() {
    let e = b.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: S,
            useForcedColors: x,
            listDensity: C
        } = (0, r.cj)([g.Z, m.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: m.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors,
            listDensity: m.ZP.listDensity
        })),
        M = (0, d.Q3)('appearance_settings'),
        Z = (0, d.o9)('appearance_settings'),
        k = (e, r) =>
            (0, i.jsx)(o.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: r,
                disabled: x,
                checked: S === f.K.ON ? 'system' === e : e === n,
                action: () => {
                    (0, s.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, l.ZI)({ theme: e });
                }
            }),
        I = [
            (0, i.jsxs)(
                o.MenuGroup,
                {
                    children: [
                        k(p.BRd.DARK, _.intl.string(_.t.b8Cei4)),
                        k(p.BRd.LIGHT, _.intl.string(_.t.K2sFfn)),
                        M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [k(p.BRd.DARKER, 'Darker'), k(p.BRd.MIDNIGHT, _.intl.string(_.t.pQwSpa))]
                            }),
                        k('system', _.intl.string(_.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            (0, i.jsx)(
                o.MenuGroup,
                {
                    children: (0, i.jsx)(o.MenuItem, {
                        id: 'compact-mode',
                        label: e ? _.intl.string(_.t.CTpwDw) : _.intl.string(_.t['J/FISU']),
                        action: () => {
                            b.jU.updateSetting(!e), (0, a.ZZ)();
                        }
                    })
                },
                'compact-mode'
            )
        ];
    return (
        Z &&
            (I.push(
                (0, i.jsxs)(
                    o.MenuGroup,
                    {
                        children: [
                            (0, i.jsx)(o.MenuRadioItem, {
                                id: 'cozy',
                                group: 'list-density',
                                label: 'Cozy lists',
                                checked: 'cozy' === C,
                                action: () => {
                                    l.ZP.updatedUnsyncedSettings({ listDensity: h.fx.COZY });
                                }
                            }),
                            (0, i.jsx)(o.MenuRadioItem, {
                                id: 'compact',
                                group: 'list-density',
                                label: 'Compact lists',
                                checked: 'compact' === C,
                                action: () => {
                                    l.ZP.updatedUnsyncedSettings({ listDensity: h.fx.COMPACT });
                                }
                            })
                        ]
                    },
                    'list-density'
                )
            ),
            I.push(
                (0, i.jsx)(
                    o.MenuGroup,
                    {
                        children: (0, i.jsx)(o.MenuCheckboxItem, {
                            id: 'desktop-refresh-override',
                            label: 'Enable Desktop Refresh',
                            action: () => {
                                l.ZP.updatedUnsyncedSettings({ disableVisualRefresh: M });
                            },
                            checked: M
                        })
                    },
                    'refresh-experiment'
                )
            )),
        I
    );
}
