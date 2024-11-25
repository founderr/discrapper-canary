n.d(t, {
    b: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(570140),
    s = n(594174),
    o = n(626135),
    l = n(358085),
    u = n(857595),
    c = n(607070),
    d = n(981631);
let f = window.matchMedia('(prefers-reduced-motion: reduce)'),
    _ = window.matchMedia('(prefers-contrast: more)'),
    p = window.matchMedia('(prefers-contrast: less)'),
    h = window.matchMedia('(prefers-color-scheme: dark)'),
    m = window.matchMedia('(prefers-color-scheme: light)'),
    g = window.matchMedia('(forced-colors: active)'),
    E = 5;
function v() {
    return 'windows' === (0, l.getOS)();
}
t.Z = {
    initBasic() {
        f.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(f), h.addListener(this.handleSystemColorPreferencesChanged), m.addListener(this.handleSystemColorPreferencesChanged), g.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), _.addListener(this.handleSystemPrefersContrastChanged), p.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged();
    },
    init() {
        this.initBasic(),
            a.Z.subscribe('ACCESSIBILITY_COLORBLIND_TOGGLE', () => {
                o.default.track(d.rMx.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: c.Z.colorblindMode });
            }),
            a.Z.subscribe('ACCESSIBILITY_SET_SATURATION', (e) => {
                o.default.track(d.rMx.LOCAL_SETTINGS_UPDATED, { saturation_level: e.saturation });
            });
    },
    maybeShowKeyboardNavigationExplainerModal() {
        (E = Math.max(E - 1, 0)),
            !(function () {
                let e = s.default.getCurrentUser();
                return null == e || Date.now() - +e.createdAt < 86400000;
            })() &&
                !c.Z.keyboardNavigationExplainerModalSeen &&
                0 === E &&
                (0, i.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('6380'), n.e('59088')]).then(n.bind(n, 461964));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
    },
    handleSystemPrefersReducedMotionChanged(e) {
        a.Z.wait(() => {
            u.Nc(e.matches ? 'reduce' : 'no-preference');
        });
    },
    handleSystemColorPreferencesChanged() {
        let e;
        h.matches ? (e = d.BRd.DARK) : m.matches && (e = d.BRd.LIGHT);
        let t = (!l.isPlatformEmbedded || v()) && g.matches ? 'active' : 'none';
        a.Z.wait(() => {
            u.Ej(e, t);
        });
    },
    handleSystemPrefersContrastChanged() {
        let e = 'no-preference';
        _.matches ? (e = 'more') : p.matches && (e = 'less'),
            a.Z.wait(() => {
                u.TX(e);
            });
    }
};
