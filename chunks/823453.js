n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(470716),
    l = n(266067),
    u = n(873546),
    c = n(442837),
    d = n(316792),
    _ = n(481060),
    E = n(168551),
    f = n(540059),
    h = n(19759),
    p = n(706454),
    I = n(451478),
    m = n(597952),
    T = n(252618),
    S = n(80006),
    g = n(587061),
    A = n(392358),
    N = n(981631);
n(81693);
let R = new Set([N.Z5c.LOGIN, N.Z5c.REGISTER]);
t.Z = i.memo(function (e) {
    let { children: t, skipsSettingDefaultPageTitle: a } = e;
    (0, T.ZD)({ skipsSettingDefaultPageTitle: a });
    let { clientThemesClassName: N, clientThemesCSS: O } = (0, E.ZP)(),
        v = i.createElement('style', { [E.PQ]: !0 }, O);
    return (0, r.jsxs)(o.ql, {
        children: [
            (function (e) {
                let t = (0, c.e7)([p.default], () => p.default.locale),
                    n = (0, c.e7)([I.Z], () => I.Z.isFocused(), []),
                    { theme: a, density: o } = (0, _.useThemeContext)(),
                    { reducedMotion: d } = i.useContext(_.AccessibilityPreferencesContext),
                    { accessibilitySettings: E, appWrapperClassName: T } = (0, S.I)(),
                    { fontScale: N, fontScaleClass: O, saturation: v, desaturateUserColors: C, useForcedColors: L, systemForcedColors: y } = E,
                    D = (0, l.TH)(),
                    b = i.useMemo(() => R.has(D.pathname), [D.pathname]);
                (0, g.Z)(window, b);
                let M = (0, A.Z)(window, __OVERLAY__ || n),
                    P = (0, c.e7)([h.Z], () => h.Z.sidebarWidth),
                    U = (0, _.useRedesignIconContext)().enabled,
                    w = (0, f.Q)('AppHelmet');
                return (0, r.jsx)('html', {
                    lang: t,
                    style: 'font-size: '.concat(N, '%; --saturation-factor: ').concat(v, '; --devtools-sidebar-width: ').concat(P, 'px;'),
                    className: s()(
                        e,
                        T,
                        {
                            overlay: __OVERLAY__,
                            'mouse-mode': M,
                            'reduce-motion': d.enabled,
                            'full-motion': !d.enabled,
                            'is-mobile': u.tq,
                            'app-focused': n,
                            'desaturate-user-colors': C,
                            'disable-forced-colors': !L && 'active' === y,
                            'enable-forced-colors': L,
                            'show-redesigned-icons': U,
                            'visual-refresh': w
                        },
                        (0, _.getThemeClass)(a),
                        'density-'.concat(o),
                        (0, m.Z)(),
                        O
                    )
                });
            })(N),
            (function () {
                let [e, t] = i.useState([]);
                return (
                    i.useEffect(() => {
                        Promise.all(
                            d.L.map((e) =>
                                n(959598)('./'.concat(e, '.woff2')).then((e) => {
                                    let { default: t } = e;
                                    return t;
                                })
                            )
                        ).then((e) => t(e));
                    }, []),
                    (0, r.jsx)(r.Fragment, {
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                'link',
                                {
                                    rel: 'preload',
                                    href: e,
                                    as: 'font',
                                    type: 'font/woff2',
                                    crossOrigin: 'true'
                                },
                                t
                            )
                        )
                    })
                );
            })(),
            v,
            t
        ]
    });
});
