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
    I = n(210887),
    m = n(451478),
    T = n(792125),
    g = n(597952),
    S = n(252618),
    A = n(80006),
    N = n(587061),
    O = n(392358),
    R = n(981631);
n(243997);
let v = new Set([R.Z5c.LOGIN, R.Z5c.REGISTER]);
t.Z = i.memo(function (e) {
    let { children: t, skipsSettingDefaultPageTitle: a } = e;
    (0, S.ZD)({ skipsSettingDefaultPageTitle: a });
    let { clientThemesClassName: R, clientThemesCSS: C } = (0, E.ZP)(),
        y = i.createElement('style', { [E.PQ]: !0 }, C);
    return (0, r.jsxs)(o.ql, {
        children: [
            (function (e) {
                let { locale: t, theme: n } = (0, c.cj)([I.Z, p.default], () => ({
                        locale: p.default.locale,
                        theme: I.Z.theme
                    })),
                    a = (0, c.e7)([m.Z], () => m.Z.isFocused(), []),
                    { reducedMotion: o } = i.useContext(_.AccessibilityPreferencesContext),
                    { accessibilitySettings: d, appWrapperClassName: E } = (0, A.I)(),
                    { fontScale: S, fontScaleClass: R, saturation: C, desaturateUserColors: y, useForcedColors: L, systemForcedColors: D } = d,
                    b = (0, l.TH)(),
                    M = i.useMemo(() => v.has(b.pathname), [b.pathname]);
                (0, N.Z)(window, M);
                let P = (0, O.Z)(window, __OVERLAY__ || a),
                    U = (0, c.e7)([h.Z], () => h.Z.sidebarWidth),
                    w = (0, _.useRedesignIconContext)().enabled,
                    x = (0, f.Q)('AppHelmet');
                return (0, r.jsx)('html', {
                    lang: t,
                    style: 'font-size: '.concat(S, '%; --saturation-factor: ').concat(C, '; --devtools-sidebar-width: ').concat(U, 'px;'),
                    className: s()(
                        e,
                        E,
                        {
                            overlay: __OVERLAY__,
                            'mouse-mode': P,
                            'reduce-motion': o.enabled,
                            'full-motion': !o.enabled,
                            'is-mobile': u.tq,
                            'app-focused': a,
                            'desaturate-user-colors': y,
                            'disable-forced-colors': !L && 'active' === D,
                            'enable-forced-colors': L,
                            'show-redesigned-icons': w,
                            'visual-refresh': x
                        },
                        (0, T.Q)(n),
                        (0, g.Z)(),
                        R
                    )
                });
            })(R),
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
            y,
            t
        ]
    });
});
