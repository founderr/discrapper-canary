var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(470716),
    u = n(266067),
    c = n(873546),
    d = n(442837),
    _ = n(316792),
    E = n(481060),
    f = n(168551),
    h = n(540059),
    p = n(19759),
    m = n(706454),
    I = n(210887),
    T = n(451478),
    g = n(597952),
    S = n(252618),
    A = n(80006),
    v = n(587061),
    N = n(392358),
    O = n(981631);
n(81693);
let R = new Set([O.Z5c.LOGIN, O.Z5c.REGISTER]);
function C(e) {
    let { locale: t, theme: n } = (0, d.cj)([I.Z, m.default], () => ({
            locale: m.default.locale,
            theme: I.Z.theme
        })),
        r = (0, d.e7)([T.Z], () => T.Z.isFocused(), []),
        { reducedMotion: o } = a.useContext(E.AccessibilityPreferencesContext),
        { accessibilitySettings: l, appWrapperClassName: _ } = (0, A.I)(),
        { fontScale: f, fontScaleClass: S, saturation: O, desaturateUserColors: C, useForcedColors: y, systemForcedColors: L } = l,
        b = (0, u.TH)(),
        D = a.useMemo(() => R.has(b.pathname), [b.pathname]);
    (0, v.Z)(window, D);
    let M = (0, N.Z)(window, __OVERLAY__ || r),
        P = (0, d.e7)([p.Z], () => p.Z.sidebarWidth),
        U = (0, E.useRedesignIconContext)().enabled,
        w = (0, h.Q)('AppHelmet');
    return (0, i.jsx)('html', {
        lang: t,
        style: 'font-size: '.concat(f, '%; --saturation-factor: ').concat(O, '; --devtools-sidebar-width: ').concat(P, 'px;'),
        className: s()(
            e,
            _,
            {
                overlay: __OVERLAY__,
                'mouse-mode': M,
                'reduce-motion': o.enabled,
                'full-motion': !o.enabled,
                'is-mobile': c.tq,
                'app-focused': r,
                'desaturate-user-colors': C,
                'disable-forced-colors': !y && 'active' === L,
                'enable-forced-colors': y,
                'show-redesigned-icons': U,
                'visual-refresh': w
            },
            (0, E.getThemeClass)(n),
            (0, g.Z)(),
            S
        )
    });
}
function y() {
    let [e, t] = a.useState([]);
    return (
        a.useEffect(() => {
            Promise.all(
                _.L.map((e) =>
                    n(959598)('./'.concat(e, '.woff2')).then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                )
            ).then((e) => t(e));
        }, []),
        (0, i.jsx)(i.Fragment, {
            children: e.map((e, t) =>
                (0, i.jsx)(
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
}
function L(e) {
    let { children: t, skipsSettingDefaultPageTitle: n } = e;
    (0, S.ZD)({ skipsSettingDefaultPageTitle: n });
    let { clientThemesClassName: r, clientThemesCSS: o } = (0, f.ZP)(),
        s = a.createElement('style', { [f.PQ]: !0 }, o);
    return (0, i.jsxs)(l.ql, {
        children: [C(r), y(), s, t]
    });
}
t.Z = a.memo(L);
