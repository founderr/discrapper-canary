n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(866442),
    o = n(442837),
    l = n(780384),
    u = n(481060),
    c = n(607070),
    d = n(629935),
    f = n(168551),
    _ = n(168631);
let p = Object.freeze({
    '--profile-gradient-primary-color': 'var(--background-secondary-alt)',
    '--profile-gradient-secondary-color': 'var(--background-secondary-alt)',
    '--profile-gradient-overlay-color': 'rgba(0, 0, 0, 0)',
    '--profile-gradient-button-color': 'var(--button-secondary-background)',
    '--profile-avatar-border-color': 'var(--background-secondary-alt)',
    '--profile-body-background-color': 'var(--background-floating)',
    '--profile-body-background-hover': 'var(--background-modifier-hover)',
    '--profile-body-divider-color': 'var(--background-modifier-accent)',
    '--profile-body-border-color': 'var(--border-faint)',
    '--profile-message-input-border-color': 'var(--background-modifier-accent)',
    '--profile-note-background-color': 'var(--background-tertiary)',
    '--profile-role-pill-background-color': 'var(--background-secondary-alt)',
    '--profile-role-pill-border-color': 'var(--interactive-normal)'
});
function h(e) {
    let { theme: t, primaryColor: n, secondaryColor: i } = e,
        [h, m] = (0, o.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.syncProfileThemeWithUserTheme]),
        g = (0, _.fq)(t),
        E = (0, _.wu)(t, n, m),
        v = (0, _.lM)(t, n),
        b = (0, _.e4)(t, i),
        I = m ? (null == g ? void 0 : g.overlaySyncedWithUserTheme) : null == g ? void 0 : g.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == n || null == i || null == g || null == E || null == v || null == b || null == I) return p;
            let e = (e, t) => (0, s.ho)(e, h, null, t);
            return {
                '--profile-gradient-primary-color': e(n),
                '--profile-gradient-secondary-color': e(i),
                '--profile-gradient-overlay-color': I,
                '--profile-gradient-button-color': e((0, _.ZB)(n)),
                '--profile-avatar-border-color': e(E),
                '--profile-body-background-color': g.sectionBox,
                '--profile-body-background-hover': g.profileBodyBackgroundHover,
                '--profile-body-divider-color': e(v, g.dividerOpacity),
                '--profile-body-border-color': e(v, 0.12),
                '--profile-message-input-border-color': e(b),
                '--profile-note-background-color': g.noteBackgroundColor,
                '--profile-role-pill-background-color': g.rolePillBackgroundColor,
                '--profile-role-pill-border-color': g.rolePillBorderColor,
                ...(0, d.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: i,
                    isDarkTheme: (0, l.wj)(t),
                    textMixAmount: 25
                })
            };
        }, [n, i, g, E, v, b, I, t, h]),
        profileThemeClassName: a()((0, u.getThemeClass)(t), {
            [f.e3]: null != n,
            'custom-profile-theme': null != n
        })
    };
}
