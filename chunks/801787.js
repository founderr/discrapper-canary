n.d(t, {
    C1: function () {
        return I;
    },
    Od: function () {
        return c;
    },
    TC: function () {
        return m;
    },
    bg: function () {
        return r;
    },
    wM: function () {
        return f;
    },
    wR: function () {
        return p;
    },
    ze: function () {
        return h;
    }
});
var r,
    i = n(789020);
var a = n(411104);
var o = n(735250),
    s = n(470079),
    l = n(231338);
function u(e, t) {
    return (e.flags & t) === t;
}
function c(e, t) {
    return e | t;
}
!(function (e) {
    (e[(e.MOBILE_REDESIGN_ENABLED = 2)] = 'MOBILE_REDESIGN_ENABLED'), (e[(e.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = 'MOBILE_DARK_GRADIENT_THEME_ENABLED'), (e[(e.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = 'MOBILE_LIGHT_GRADIENT_THEME_ENABLED'), (e[(e.REDUCED_CONTRAST_ENABLED = 16)] = 'REDUCED_CONTRAST_ENABLED'), (e[(e.INCREASED_CONTRAST_ENABLED = 32)] = 'INCREASED_CONTRAST_ENABLED'), (e[(e.REDUCE_SATURATION_ENABLED = 64)] = 'REDUCE_SATURATION_ENABLED');
})(r || (r = {}));
function d(e) {
    let t = JSON.stringify(e);
    return {
        ...e,
        key: t
    };
}
let _ = {
        theme: 'light',
        primaryColor: null,
        secondaryColor: null,
        gradient: null,
        key: 'light-false-null-null-null',
        flags: 0,
        contrast: 1,
        saturation: 1
    },
    E = s.createContext(_);
function f(e) {
    let { children: t, theme: n = l.BR.DARK, primaryColor: r = null, secondaryColor: i = null, gradient: a = null, flags: u = 0, contrast: c = 1, saturation: _ = 1 } = e,
        f = s.useMemo(
            () =>
                d({
                    theme: n,
                    primaryColor: r,
                    secondaryColor: i,
                    gradient: a,
                    flags: u,
                    contrast: c,
                    saturation: _
                }),
            [n, r, i, a, u, c, _]
        );
    return (0, o.jsx)(E.Provider, {
        value: f,
        children: t
    });
}
function h(e) {
    let { children: t, theme: n, primaryColor: r, secondaryColor: i, gradient: a, flags: l, contrast: u, saturation: c } = e,
        _ = s.useContext(E),
        f = s.useMemo(
            () =>
                d({
                    theme: null != n ? n : _.theme,
                    primaryColor: null != r ? r : _.primaryColor,
                    secondaryColor: null != i ? i : _.secondaryColor,
                    gradient: null != a ? a : _.gradient,
                    flags: null != l ? l : _.flags,
                    contrast: null != u ? u : _.contrast,
                    saturation: null != c ? c : _.saturation
                }),
            [n, _.theme, _.primaryColor, _.secondaryColor, _.gradient, _.flags, _.contrast, _.saturation, r, i, a, l, u, c]
        );
    return (0, o.jsx)(E.Provider, {
        value: f,
        children: t
    });
}
function p(e) {
    let t = m(),
        n = s.useMemo(
            () =>
                d({
                    ...t,
                    primaryColor: null,
                    secondaryColor: null
                }),
            [t]
        );
    return (0, o.jsx)(E.Provider, {
        value: n,
        children: e.children
    });
}
function m() {
    let e = s.useContext(E);
    if (null == e) throw Error('useThemeContext must be used within a ThemeContext.Provider');
    return e;
}
function I(e) {
    let { children: t } = e,
        n = m();
    return (0, o.jsx)(o.Fragment, { children: t(n) });
}
