n.d(t, {
    Z: function () {
        return _;
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
    p = n(874893),
    f = n(981631),
    h = n(388032);
function _() {
    let e = b.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: _,
            useForcedColors: S,
            listDensity: x
        } = (0, r.cj)([g.Z, m.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: m.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors,
            listDensity: m.ZP.listDensity
        })),
        C = (0, d.Q3)('appearance_settings'),
        M = (0, d.o9)('appearance_settings'),
        Z = (e, r) =>
            (0, i.jsx)(o.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: r,
                disabled: S,
                checked: _ === p.K.ON ? 'system' === e : e === n,
                action: () => {
                    (0, s.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, l.ZI)({ theme: e });
                }
            }),
        k = [
            (0, i.jsxs)(
                o.MenuGroup,
                {
                    children: [
                        Z(f.BRd.DARK, h.intl.string(h.t.b8Cei4)),
                        Z(f.BRd.LIGHT, h.intl.string(h.t.K2sFfn)),
                        C &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [Z(f.BRd.DARKER, 'Darker'), Z(f.BRd.MIDNIGHT, h.intl.string(h.t.pQwSpa))]
                            }),
                        Z('system', h.intl.string(h.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            (0, i.jsx)(
                o.MenuGroup,
                {
                    children: (0, i.jsx)(o.MenuItem, {
                        id: 'compact-mode',
                        label: e ? h.intl.string(h.t.CTpwDw) : h.intl.string(h.t['J/FISU']),
                        action: () => {
                            b.jU.updateSetting(!e), (0, a.ZZ)();
                        }
                    })
                },
                'compact-mode'
            )
        ];
    return (
        M &&
            (k.push(
                (0, i.jsxs)(
                    o.MenuGroup,
                    {
                        children: [
                            (0, i.jsx)(o.MenuRadioItem, {
                                id: 'compact',
                                group: 'list-density',
                                label: 'Compact lists',
                                checked: 'compact' === x,
                                action: () => {
                                    l.ZP.updatedUnsyncedSettings({ listDensity: 'compact' });
                                }
                            }),
                            (0, i.jsx)(o.MenuRadioItem, {
                                id: 'cozy',
                                group: 'list-density',
                                label: 'Cozy lists',
                                checked: 'cozy' === x,
                                action: () => {
                                    l.ZP.updatedUnsyncedSettings({ listDensity: 'cozy' });
                                }
                            })
                        ]
                    },
                    'list-density'
                )
            ),
            k.push(
                (0, i.jsx)(
                    o.MenuGroup,
                    {
                        children: (0, i.jsx)(o.MenuCheckboxItem, {
                            id: 'desktop-refresh-override',
                            label: 'Enable Desktop Refresh',
                            action: () => {
                                l.ZP.updatedUnsyncedSettings({ disableVisualRefresh: C });
                            },
                            checked: C
                        })
                    },
                    'refresh-experiment'
                )
            )),
        k
    );
}
