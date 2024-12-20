n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(653041);
var r = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    a = n(153867),
    l = n(857595),
    c = n(607070),
    u = n(906732),
    s = n(705262),
    d = n(540059),
    g = n(210887),
    m = n(740492),
    b = n(695346),
    f = n(874893),
    p = n(981631),
    h = n(388032);
function _() {
    let e = b.jU.useSetting(),
        { analyticsLocations: t } = (0, u.ZP)(),
        {
            theme: n,
            useSystemTheme: _,
            useForcedColors: S
        } = (0, o.cj)([g.Z, m.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: m.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors
        })),
        x = b.N5.useSetting(),
        C = (0, d.Q3)('appearance_settings'),
        M = (0, d.o9)('appearance_settings'),
        Z = (e, o) =>
            (0, r.jsx)(i.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: o,
                disabled: S,
                checked: _ === f.K.ON ? 'system' === e : e === n,
                action: () => {
                    (0, s.Yk)({
                        isPersisted: !0,
                        analyticsLocations: t,
                        themeName: 'default '.concat(e)
                    }),
                        (0, a.ZI)({ theme: e });
                }
            }),
        k = [
            (0, r.jsxs)(
                i.MenuGroup,
                {
                    children: [
                        Z(p.BRd.DARK, h.intl.string(h.t.b8Cei4)),
                        Z(p.BRd.LIGHT, h.intl.string(h.t.K2sFfn)),
                        C &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [Z(p.BRd.DARKER, 'Darker'), Z(p.BRd.MIDNIGHT, h.intl.string(h.t.pQwSpa))]
                            }),
                        Z('system', h.intl.string(h.t['7rOU6u']))
                    ]
                },
                'theme-items'
            ),
            (0, r.jsx)(
                i.MenuGroup,
                {
                    children: (0, r.jsx)(i.MenuItem, {
                        id: 'compact-mode',
                        label: e ? h.intl.string(h.t.CTpwDw) : h.intl.string(h.t['J/FISU']),
                        action: () => {
                            b.jU.updateSetting(!e), (0, l.ZZ)();
                        }
                    })
                },
                'compact-mode'
            )
        ];
    return (
        M &&
            (k.push(
                (0, r.jsxs)(
                    i.MenuGroup,
                    {
                        children: [
                            (0, r.jsx)(i.MenuRadioItem, {
                                id: 'cozy',
                                group: 'list-density',
                                label: 'Cozy lists',
                                checked: 'cozy' === x,
                                action: () => {
                                    b.N5.updateSetting('cozy');
                                }
                            }),
                            (0, r.jsx)(i.MenuRadioItem, {
                                id: 'compact',
                                group: 'list-density',
                                label: 'Compact lists',
                                checked: 'compact' === x,
                                action: () => {
                                    b.N5.updateSetting('compact');
                                }
                            })
                        ]
                    },
                    'list-density'
                )
            ),
            k.push(
                (0, r.jsx)(
                    i.MenuGroup,
                    {
                        children: (0, r.jsx)(i.MenuCheckboxItem, {
                            id: 'desktop-refresh-override',
                            label: 'Enable Desktop Refresh',
                            action: () => {
                                a.ZP.updatedUnsyncedSettings({ disableVisualRefresh: C });
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
