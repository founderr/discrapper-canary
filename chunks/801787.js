r.d(n, {
    C1: function () {
        return I;
    },
    Od: function () {
        return d;
    },
    TC: function () {
        return v;
    },
    bg: function () {
        return i;
    },
    wM: function () {
        return m;
    },
    wR: function () {
        return E;
    },
    ze: function () {
        return g;
    }
});
var i,
    a = r(789020);
var s = r(411104);
var o = r(200651),
    l = r(192379),
    u = r(231338);
function c(e, n) {
    return (e.flags & n) === n;
}
function d(e, n) {
    return e | n;
}
function f(e, n) {
    return e & ~n;
}
!(function (e) {
    (e[(e.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = 'MOBILE_DARK_GRADIENT_THEME_ENABLED'), (e[(e.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = 'MOBILE_LIGHT_GRADIENT_THEME_ENABLED'), (e[(e.REDUCED_CONTRAST_ENABLED = 16)] = 'REDUCED_CONTRAST_ENABLED'), (e[(e.INCREASED_CONTRAST_ENABLED = 32)] = 'INCREASED_CONTRAST_ENABLED'), (e[(e.REDUCE_SATURATION_ENABLED = 64)] = 'REDUCE_SATURATION_ENABLED');
})(i || (i = {}));
function _(e) {
    let n = JSON.stringify(e);
    return {
        ...e,
        key: n
    };
}
let h = {
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
    p = l.createContext(h);
function m(e) {
    let { children: n, theme: r = u.BR.DARK, primaryColor: i = null, secondaryColor: a = null, gradient: s = null, flags: c = 0, contrast: d = 1, saturation: f = 1, density: h = 'cozy', disableAdaptiveTheme: m = !1 } = e,
        g = l.useMemo(
            () =>
                _({
                    theme: r,
                    primaryColor: i,
                    secondaryColor: a,
                    gradient: s,
                    flags: c,
                    contrast: d,
                    saturation: f,
                    density: h,
                    disableAdaptiveTheme: m
                }),
            [r, i, a, s, c, d, f, h, m]
        );
    return (0, o.jsx)(p.Provider, {
        value: g,
        children: n
    });
}
function g(e) {
    let { children: n, theme: r, primaryColor: i, secondaryColor: a, gradient: s, flags: u, contrast: c, saturation: d, density: f, disableAdaptiveTheme: h } = e,
        m = l.useContext(p),
        g = l.useMemo(
            () =>
                _({
                    theme: null != r ? r : m.theme,
                    primaryColor: null != i ? i : m.primaryColor,
                    secondaryColor: null != a ? a : m.secondaryColor,
                    gradient: null != s ? s : m.gradient,
                    flags: null != u ? u : m.flags,
                    contrast: null != c ? c : m.contrast,
                    saturation: null != d ? d : m.saturation,
                    density: null != f ? f : m.density,
                    disableAdaptiveTheme: null != h ? h : m.disableAdaptiveTheme
                }),
            [r, m.theme, m.primaryColor, m.secondaryColor, m.gradient, m.flags, m.contrast, m.saturation, m.density, m.disableAdaptiveTheme, i, a, s, u, c, d, f, h]
        );
    return (0, o.jsx)(p.Provider, {
        value: g,
        children: n
    });
}
function E(e) {
    let n = v(),
        r = l.useMemo(() => {
            let e = f(n.flags, 4);
            return (
                (e = f(e, 8)),
                _({
                    ...n,
                    primaryColor: null,
                    secondaryColor: null,
                    gradient: null,
                    flags: e
                })
            );
        }, [n]);
    return (0, o.jsx)(p.Provider, {
        value: r,
        children: e.children
    });
}
function v() {
    let e = l.useContext(p);
    if (null == e) throw Error('useThemeContext must be used within a ThemeContext.Provider');
    return e;
}
function I(e) {
    let { children: n } = e,
        r = v();
    return (0, o.jsx)(o.Fragment, { children: n(r) });
}
