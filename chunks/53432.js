t.d(n, {
    Z: function () {
        return h;
    }
});
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    l = t(153867),
    a = t(857595),
    c = t(607070),
    u = t(906732),
    d = t(705262),
    s = t(540059),
    g = t(210887),
    m = t(740492),
    b = t(695346),
    f = t(874893),
    p = t(981631),
    _ = t(388032);
function h() {
    let e = b.jU.useSetting(),
        { analyticsLocations: n } = (0, u.ZP)(),
        {
            theme: t,
            useSystemTheme: h,
            useForcedColors: S
        } = (0, o.cj)([g.Z, m.ZP, c.Z], () => ({
            theme: g.Z.theme,
            useSystemTheme: m.ZP.useSystemTheme,
            useForcedColors: c.Z.useForcedColors
        })),
        x = (0, s.Q)('appearance_settings'),
        C = (e, o) =>
            (0, r.jsx)(i.MenuRadioItem, {
                id: e,
                group: 'input-modes',
                label: o,
                disabled: S,
                checked: h === f.K.ON ? 'system' === e : e === t,
                action: () => {
                    (0, d.Yk)({
                        isPersisted: !0,
                        analyticsLocations: n,
                        themeName: 'default '.concat(e)
                    }),
                        (0, l.ZI)({ theme: e });
                }
            });
    return [
        (0, r.jsxs)(
            i.MenuGroup,
            {
                children: [
                    C(p.BRd.DARK, _.intl.string(_.t.b8Cei4)),
                    C(p.BRd.LIGHT, _.intl.string(_.t.K2sFfn)),
                    x &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [C(p.BRd.DARKER, 'Darker'), C(p.BRd.MIDNIGHT, _.intl.string(_.t.pQwSpa))]
                        }),
                    C('system', _.intl.string(_.t['7rOU6u']))
                ]
            },
            'theme-items'
        ),
        (0, r.jsx)(
            i.MenuGroup,
            {
                children: (0, r.jsx)(i.MenuItem, {
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
}
