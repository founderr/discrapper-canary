n.d(t, {
    DR: function () {
        return I;
    },
    bD: function () {
        return v;
    },
    oK: function () {
        return g;
    }
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(442837),
    l = n(692547),
    u = n(780384),
    c = n(481060),
    d = n(210887),
    f = n(47760),
    _ = n(798728),
    h = n(981631),
    p = n(388032),
    m = n(405166);
function g() {
    return (0, r.jsx)('div', {
        className: m.selectionCircle,
        children: (0, r.jsx)(c.CircleCheckIcon, {
            size: 'md',
            color: 'currentColor',
            className: m.checkmarkCircle,
            colorClass: m.checkmark,
            secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css
        })
    });
}
function E(e) {
    let { name: t, className: n, style: i, onSelect: s, isSelected: o = !1, tabIndex: l, children: u, showBadge: d, showLockedBadge: f } = e,
        _ = (0, c.useRadioItem)({
            label: t,
            isSelected: o
        });
    return (0, r.jsx)(c.Tooltip, {
        text: t,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: m.themeSelectionContainer,
                children: [
                    (0, r.jsx)(c.Clickable, {
                        ...e,
                        ..._,
                        tabIndex: null != l ? l : _.tabIndex,
                        className: a()(m.themeSelection, { [m.selected]: o }, n),
                        style: i,
                        onClick: o ? h.dG4 : s,
                        children: u
                    }),
                    o && (0, r.jsx)(g, {}),
                    !o && d && (0, r.jsx)('div', { className: m.redCircle }),
                    f &&
                        (0, r.jsx)('div', {
                            className: m.lockedBadgeContainer,
                            children: (0, r.jsx)(c.LockIcon, {
                                className: m.lockedBadge,
                                color: 'currentColor'
                            })
                        })
                ]
            })
    });
}
function v(e) {
    let { theme: t, isSelected: n, onSelect: i } = e,
        f = (0, o.e7)([d.Z], () => d.Z.systemPrefersColorScheme),
        g = (e) => ((0, u.ap)(e) ? l.Z.unsafe_rawColors.PRIMARY_600.css : l.Z.unsafe_rawColors.WHITE_500.css),
        v = (0, s.EQ)({
            theme: t,
            systemPrefersColorScheme: f
        })
            .with(
                {
                    theme: 'system',
                    systemPrefersColorScheme: h.BRd.LIGHT
                },
                () => m.lightIcon
            )
            .with({ theme: h.BRd.LIGHT }, () => m.lightIcon)
            .with({ theme: h.BRd.DARK }, () => m.darkIcon)
            .with({ theme: h.BRd.DARKER }, () => m.darkerIcon)
            .with({ theme: h.BRd.MIDNIGHT }, () => m.midnightIcon)
            .otherwise(() => m.darkIcon),
        I = (0, s.EQ)(t)
            .with(h.BRd.LIGHT, () => p.intl.string(p.t.K2sFfn))
            .with(h.BRd.DARK, () => p.intl.string(p.t.b8Cei4))
            .with(h.BRd.DARKER, () => 'Darker')
            .with(h.BRd.MIDNIGHT, () => p.intl.string(p.t.pQwSpa))
            .with('system', () => p.intl.string(p.t['7rOU6u']))
            .exhaustive(),
        S = (0, c.useRedesignIconContext)().enabled;
    return (0, r.jsx)(E, {
        onSelect: i,
        isSelected: n,
        name: I,
        className: a()(m.defaultThemeSelection, v),
        children:
            'system' === t &&
            (0, r.jsx)('div', {
                className: m.iconWrapper,
                children: S ? (0, r.jsx)(c.RefreshIcon, { color: g(f) }) : (0, r.jsx)(_.Z, { fill: g(f) })
            })
    });
}
function I(e) {
    let { preset: t, isSelected: n, disabled: i, tabIndex: s, onSelect: o, showBadge: l, showLockedBadge: c } = e,
        { colors: d, angle: _, theme: h } = t,
        p = (0, f.VK)({
            colors: d,
            angle: _
        });
    return (0, r.jsx)(E, {
        onSelect: i ? void 0 : o,
        isSelected: n,
        name: t.getName(),
        className: a()([i ? m.disabled : null, (0, u.wj)(h) ? m.darkOverlay : m.lightOverlay]),
        style: { background: 'var(--bg-overlay), '.concat(p) },
        tabIndex: s,
        showBadge: l,
        showLockedBadge: c
    });
}
