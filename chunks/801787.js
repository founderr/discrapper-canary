n.d(t, {
    C1: function () {
        return p;
    },
    Od: function () {
        return l;
    },
    TC: function () {
        return h;
    },
    bg: function () {
        return r;
    },
    wM: function () {
        return _;
    },
    wR: function () {
        return f;
    },
    ze: function () {
        return E;
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
function u(e) {
    let t = JSON.stringify(e);
    return {
        ...e,
        key: t
    };
}
((i = r || (r = {}))[(i.MOBILE_REDESIGN_ENABLED = 2)] = 'MOBILE_REDESIGN_ENABLED'), (i[(i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = 'MOBILE_DARK_GRADIENT_THEME_ENABLED'), (i[(i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = 'MOBILE_LIGHT_GRADIENT_THEME_ENABLED'), (i[(i.REDUCED_CONTRAST_ENABLED = 16)] = 'REDUCED_CONTRAST_ENABLED'), (i[(i.INCREASED_CONTRAST_ENABLED = 32)] = 'INCREASED_CONTRAST_ENABLED'), (i[(i.REDUCE_SATURATION_ENABLED = 64)] = 'REDUCE_SATURATION_ENABLED');
let c = {
        theme: 'light',
        primaryColor: null,
        secondaryColor: null,
        gradient: null,
        key: 'light-false-null-null-null',
        flags: 0,
        contrast: 1,
        saturation: 1,
        density: 'compact'
    },
    d = s.createContext(c);
function _(e) {
    let { children: t, theme: n = o.BR.DARK, primaryColor: r = null, secondaryColor: i = null, gradient: l = null, flags: c = 0, contrast: _ = 1, saturation: E = 1, density: f = 'compact' } = e,
        h = s.useMemo(
            () =>
                u({
                    theme: n,
                    primaryColor: r,
                    secondaryColor: i,
                    gradient: l,
                    flags: c,
                    contrast: _,
                    saturation: E,
                    density: f
                }),
            [n, r, i, l, c, _, E, f]
        );
    return (0, a.jsx)(d.Provider, {
        value: h,
        children: t
    });
}
function E(e) {
    let { children: t, theme: n, primaryColor: r, secondaryColor: i, gradient: o, flags: l, contrast: c, saturation: _, density: E } = e,
        f = s.useContext(d),
        h = s.useMemo(
            () =>
                u({
                    theme: null != n ? n : f.theme,
                    primaryColor: null != r ? r : f.primaryColor,
                    secondaryColor: null != i ? i : f.secondaryColor,
                    gradient: null != o ? o : f.gradient,
                    flags: null != l ? l : f.flags,
                    contrast: null != c ? c : f.contrast,
                    saturation: null != _ ? _ : f.saturation,
                    density: null != E ? E : f.density
                }),
            [n, f.theme, f.primaryColor, f.secondaryColor, f.gradient, f.flags, f.contrast, f.saturation, f.density, r, i, o, l, c, _, E]
        );
    return (0, a.jsx)(d.Provider, {
        value: h,
        children: t
    });
}
function f(e) {
    let t = h(),
        n = s.useMemo(
            () =>
                u({
                    ...t,
                    primaryColor: null,
                    secondaryColor: null
                }),
            [t]
        );
    return (0, a.jsx)(d.Provider, {
        value: n,
        children: e.children
    });
}
function h() {
    let e = s.useContext(d);
    if (null == e) throw Error('useThemeContext must be used within a ThemeContext.Provider');
    return e;
}
function p(e) {
    let { children: t } = e,
        n = h();
    return (0, a.jsx)(a.Fragment, { children: t(n) });
}
