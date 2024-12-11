t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(653041);
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    a = t(153867),
    l = t(857595),
    c = t(607070),
    u = t(906732),
    s = t(705262),
    d = t(540059),
    g = t(210887),
    m = t(740492),
    b = t(695346),
    f = t(874893),
    p = t(981631),
    h = t(388032);
function _() {
    let e = b.jU.useSetting(),
        { analyticsLocations: n } = (0, u.ZP)(),
        {
            theme: t,
            useSystemTheme: _,
            useForcedColors: S
        } = (0, o.cj)([g.Z, m.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: m.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors
        })),
        x = (0, d.Q3)('appearance_settings'),
        C = (0, d.o9)('appearance_settings'),
        M = (e, o) =>
            (0, r.jsx)(i.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: o,
                disabled: S,
                checked: _ === f.K.ON ? 'system' === e : e === t,
                action: () => {
                    (0, s.Yk)({
                        isPersisted: !0,
                        analyticsLocations: n,
                        themeName: 'default '.concat(e)
                    }),
                        (0, a.ZI)({ theme: e });
                }
            }),
        Z = [
            (0, r.jsxs)(
                i.MenuGroup,
                {
                    children: [
                        M(p.BRd.DARK, h.intl.string(h.t.b8Cei4)),
                        M(p.BRd.LIGHT, h.intl.string(h.t.K2sFfn)),
                        x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [M(p.BRd.DARKER, 'Darker'), M(p.BRd.MIDNIGHT, h.intl.string(h.t.pQwSpa))]
                            }),
                        M('system', h.intl.string(h.t['7rOU6u']))
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
        C &&
            Z.push(
                (0, r.jsx)(
                    i.MenuGroup,
                    {
                        children: (0, r.jsx)(i.MenuCheckboxItem, {
                            id: 'desktop-refresh-override',
                            label: 'Enable Desktop Refresh',
                            action: () => {
                                a.ZP.updatedUnsyncedSettings({ disableVisualRefresh: x });
                            },
                            checked: x
                        })
                    },
                    'refresh-experiment'
                )
            ),
        Z
    );
}
