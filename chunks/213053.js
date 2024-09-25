n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(866442),
    l = n(442837),
    u = n(780384),
    c = n(481060),
    d = n(607070),
    _ = n(629935),
    E = n(168551),
    f = n(168631);
let h = 'custom-profile-theme',
    p = Object.freeze({
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
function m(e) {
    let { theme: t, primaryColor: n, secondaryColor: r } = e,
        [a, m] = (0, l.Wu)([d.Z], () => [d.Z.desaturateUserColors, d.Z.syncProfileThemeWithUserTheme]),
        I = (0, f.fq)(t),
        T = (0, f.wu)(t, n, m),
        g = (0, f.lM)(t, n),
        S = (0, f.e4)(t, r),
        A = m ? (null == I ? void 0 : I.overlaySyncedWithUserTheme) : null == I ? void 0 : I.overlay;
    return {
        profileThemeStyle: (0, i.useMemo)(() => {
            if (null == n || null == r || null == I || null == T || null == g || null == S || null == A) return p;
            let e = (e, t) => (0, s.ho)(e, a, null, t);
            return {
                '--profile-gradient-primary-color': e(n),
                '--profile-gradient-secondary-color': e(r),
                '--profile-gradient-overlay-color': A,
                '--profile-gradient-button-color': e((0, f.ZB)(n)),
                '--profile-avatar-border-color': e(T),
                '--profile-body-background-color': I.sectionBox,
                '--profile-body-background-hover': I.profileBodyBackgroundHover,
                '--profile-body-divider-color': e(g, I.dividerOpacity),
                '--profile-body-border-color': e(g, 0.12),
                '--profile-message-input-border-color': e(S),
                '--profile-note-background-color': I.noteBackgroundColor,
                '--profile-role-pill-background-color': I.rolePillBackgroundColor,
                '--profile-role-pill-border-color': I.rolePillBorderColor,
                ...(0, _.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: r,
                    isDarkTheme: (0, u.wj)(t),
                    textMixAmount: 25
                })
            };
        }, [n, r, I, T, g, S, A, t, a]),
        profileThemeClassName: o()((0, c.getThemeClass)(t), {
            [E.e3]: null != n,
            [h]: null != n
        })
    };
}
