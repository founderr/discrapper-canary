n.d(t, {
    DR: function () {
        return S;
    },
    bD: function () {
        return g;
    },
    oK: function () {
        return I;
    }
});
var r = n(627341);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    u = n(692547),
    c = n(780384),
    d = n(481060),
    _ = n(210887),
    E = n(47760),
    f = n(798728),
    h = n(981631),
    p = n(689938),
    m = n(405166);
function I() {
    return (0, i.jsx)('div', {
        className: m.selectionCircle,
        children: (0, i.jsx)(d.CircleCheckIcon, {
            size: 'md',
            color: 'currentColor',
            className: m.checkmarkCircle,
            colorClass: m.checkmark,
            secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
        })
    });
}
function T(e) {
    let { name: t, className: n, style: r, onSelect: a, isSelected: s = !1, tabIndex: l, children: u, showBadge: c, showLockedBadge: _ } = e,
        E = (0, d.useRadioItem)({
            label: t,
            isSelected: s
        });
    return (0, i.jsx)(d.Tooltip, {
        text: t,
        children: (e) =>
            (0, i.jsxs)('div', {
                className: m.themeSelectionContainer,
                children: [
                    (0, i.jsx)(d.Clickable, {
                        ...e,
                        ...E,
                        tabIndex: null != l ? l : E.tabIndex,
                        className: o()(m.themeSelection, { [m.selected]: s }, n),
                        style: r,
                        onClick: s ? h.dG4 : a,
                        children: u
                    }),
                    s && (0, i.jsx)(I, {}),
                    !s && c && (0, i.jsx)('div', { className: m.redCircle }),
                    _ &&
                        (0, i.jsx)('div', {
                            className: m.lockedBadgeContainer,
                            children: (0, i.jsx)(d.LockIcon, {
                                className: m.lockedBadge,
                                color: 'currentColor'
                            })
                        })
                ]
            })
    });
}
function g(e) {
    let { theme: t, isSelected: n, onSelect: r } = e,
        a = (0, l.e7)([_.Z], () => _.Z.systemPrefersColorScheme),
        E = (e) => ((0, c.ap)(e) ? u.Z.unsafe_rawColors.PRIMARY_600.css : u.Z.unsafe_rawColors.WHITE_500.css),
        I = (0, s.EQ)({
            theme: t,
            systemPrefersColorScheme: a
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
        g = (0, s.EQ)(t)
            .with(h.BRd.LIGHT, () => p.Z.Messages.THEME_LIGHT)
            .with(h.BRd.DARK, () => p.Z.Messages.THEME_DARK)
            .with(h.BRd.DARKER, () => 'Darker')
            .with(h.BRd.MIDNIGHT, () => p.Z.Messages.THEME_MIDNIGHT)
            .with('system', () => p.Z.Messages.THEME_SYSTEM)
            .exhaustive(),
        S = (0, d.useRedesignIconContext)().enabled;
    return (0, i.jsx)(T, {
        onSelect: r,
        isSelected: n,
        name: g,
        className: o()(m.defaultThemeSelection, I),
        children:
            'system' === t &&
            (0, i.jsx)('div', {
                className: m.iconWrapper,
                children: S ? (0, i.jsx)(d.RefreshIcon, { color: E(a) }) : (0, i.jsx)(f.Z, { fill: E(a) })
            })
    });
}
function S(e) {
    let { preset: t, isSelected: n, disabled: r, tabIndex: a, onSelect: s, showBadge: l, showLockedBadge: u } = e,
        { colors: d, angle: _, theme: f } = t,
        h = (0, E.VK)({
            colors: d,
            angle: _
        });
    return (0, i.jsx)(T, {
        onSelect: r ? void 0 : s,
        isSelected: n,
        name: t.getName(),
        className: o()([r ? m.disabled : null, (0, c.wj)(f) ? m.darkOverlay : m.lightOverlay]),
        style: { background: 'var(--bg-overlay), '.concat(h) },
        tabIndex: a,
        showBadge: l,
        showLockedBadge: u
    });
}
