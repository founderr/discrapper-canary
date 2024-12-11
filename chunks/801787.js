n.d(t, {
    C1: function () {
        return g;
    },
    Od: function () {
        return l;
    },
    TC: function () {
        return m;
    },
    bg: function () {
        return r;
    },
    wM: function () {
        return _;
    },
    wR: function () {
        return h;
    },
    ze: function () {
        return p;
    }
}),
    n(789020),
    n(411104);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(231338);
function l(e, t) {
    return e | t;
}
function u(e, t) {
    return e & ~t;
}
function c(e) {
    let t = JSON.stringify(e);
    return {
        ...e,
        key: t
    };
}
((i = r || (r = {}))[(i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = 'MOBILE_DARK_GRADIENT_THEME_ENABLED'), (i[(i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = 'MOBILE_LIGHT_GRADIENT_THEME_ENABLED'), (i[(i.REDUCED_CONTRAST_ENABLED = 16)] = 'REDUCED_CONTRAST_ENABLED'), (i[(i.INCREASED_CONTRAST_ENABLED = 32)] = 'INCREASED_CONTRAST_ENABLED'), (i[(i.REDUCE_SATURATION_ENABLED = 64)] = 'REDUCE_SATURATION_ENABLED');
let d = {
        theme: 'light',
        primaryColor: null,
        secondaryColor: null,
        gradient: null,
        key: 'light-false-null-null-null',
        flags: 0,
        contrast: 1,
        saturation: 1,
        density: 'compact',
        disableAdaptiveTheme: !1
    },
    f = s.createContext(d);
function _(e) {
    let { children: t, theme: n = o.BR.DARK, primaryColor: r = null, secondaryColor: i = null, gradient: l = null, flags: u = 0, contrast: d = 1, saturation: _ = 1, density: p = 'cozy', disableAdaptiveTheme: h = !1 } = e,
        m = s.useMemo(
            () =>
                c({
                    theme: n,
                    primaryColor: r,
                    secondaryColor: i,
                    gradient: l,
                    flags: u,
                    contrast: d,
                    saturation: _,
                    density: p,
                    disableAdaptiveTheme: h
                }),
            [n, r, i, l, u, d, _, p, h]
        );
    return (0, a.jsx)(f.Provider, {
        value: m,
        children: t
    });
}
function p(e) {
    let { children: t, theme: n, primaryColor: r, secondaryColor: i, gradient: o, flags: l, contrast: u, saturation: d, density: _, disableAdaptiveTheme: p } = e,
        h = s.useContext(f),
        m = s.useMemo(
            () =>
                c({
                    theme: null != n ? n : h.theme,
                    primaryColor: null != r ? r : h.primaryColor,
                    secondaryColor: null != i ? i : h.secondaryColor,
                    gradient: null != o ? o : h.gradient,
                    flags: null != l ? l : h.flags,
                    contrast: null != u ? u : h.contrast,
                    saturation: null != d ? d : h.saturation,
                    density: null != _ ? _ : h.density,
                    disableAdaptiveTheme: null != p ? p : h.disableAdaptiveTheme
                }),
            [n, h.theme, h.primaryColor, h.secondaryColor, h.gradient, h.flags, h.contrast, h.saturation, h.density, h.disableAdaptiveTheme, r, i, o, l, u, d, _, p]
        );
    return (0, a.jsx)(f.Provider, {
        value: m,
        children: t
    });
}
function h(e) {
    let t = m(),
        n = s.useMemo(() => {
            let e = -5 & t.flags;
            return (
                (e &= -9),
                c({
                    ...t,
                    primaryColor: null,
                    secondaryColor: null,
                    gradient: null,
                    flags: e
                })
            );
        }, [t]);
    return (0, a.jsx)(f.Provider, {
        value: n,
        children: e.children
    });
}
function m() {
    let e = s.useContext(f);
    if (null == e) throw Error('useThemeContext must be used within a ThemeContext.Provider');
    return e;
}
function g(e) {
    let { children: t } = e,
        n = m();
    return (0, a.jsx)(a.Fragment, { children: t(n) });
}
