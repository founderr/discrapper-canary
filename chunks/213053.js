r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(866442),
    u = r(442837),
    c = r(780384),
    d = r(481060),
    f = r(607070),
    _ = r(629935),
    h = r(168551),
    p = r(168631);
let m = 'custom-profile-theme',
    g = Object.freeze({
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
function E(e) {
    let { theme: n, primaryColor: r, secondaryColor: i } = e,
        [s, E] = (0, u.Wu)([f.Z], () => [f.Z.desaturateUserColors, f.Z.syncProfileThemeWithUserTheme]),
        v = (0, p.fq)(n),
        I = (0, p.wu)(n, r, E),
        T = (0, p.lM)(n, r),
        b = (0, p.e4)(n, i),
        y = E ? (null == v ? void 0 : v.overlaySyncedWithUserTheme) : null == v ? void 0 : v.overlay;
    return {
        profileThemeStyle: (0, a.useMemo)(() => {
            if (null == r || null == i || null == v || null == I || null == T || null == b || null == y) return g;
            let e = (e, n) => (0, l.ho)(e, s, null, n);
            return {
                '--profile-gradient-primary-color': e(r),
                '--profile-gradient-secondary-color': e(i),
                '--profile-gradient-overlay-color': y,
                '--profile-gradient-button-color': e((0, p.ZB)(r)),
                '--profile-avatar-border-color': e(I),
                '--profile-body-background-color': v.sectionBox,
                '--profile-body-background-hover': v.profileBodyBackgroundHover,
                '--profile-body-divider-color': e(T, v.dividerOpacity),
                '--profile-body-border-color': e(T, 0.12),
                '--profile-message-input-border-color': e(b),
                '--profile-note-background-color': v.noteBackgroundColor,
                '--profile-role-pill-background-color': v.rolePillBackgroundColor,
                '--profile-role-pill-border-color': v.rolePillBorderColor,
                ...(0, _.W4)({
                    enabled: !0,
                    primaryColor: r,
                    secondaryColor: i,
                    isDarkTheme: (0, c.wj)(n),
                    textMixAmount: 25
                })
            };
        }, [r, i, v, I, T, b, y, n, s]),
        profileThemeClassName: o()((0, d.getThemeClass)(n), {
            [h.e3]: null != r,
            [m]: null != r
        })
    };
}
