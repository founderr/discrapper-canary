n.d(t, {
    Cg: function () {
        return i;
    },
    Y0: function () {
        return C;
    },
    YA: function () {
        return M;
    },
    hz: function () {
        return D;
    },
    mz: function () {
        return y;
    },
    ol: function () {
        return b;
    },
    xB: function () {
        return L;
    }
});
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(100621),
    c = n(990547),
    d = n(748780),
    _ = n(143450),
    E = n(186325),
    f = n(693789),
    h = n(507274),
    p = n(84735),
    I = n(261833),
    m = n(742746),
    T = n(147479),
    S = n(481060),
    g = n(600164),
    A = n(602091),
    N = n(231338),
    R = n(689938),
    O = n(46493);
((r = i || (i = {})).SMALL = 'small'), (r.MEDIUM = 'medium'), (r.LARGE = 'large'), (r.DYNAMIC = 'dynamic');
let v = Object.freeze({
    small: O.small,
    medium: O.medium,
    large: O.large,
    dynamic: null
});
function C(e) {
    var t;
    let { transitionState: n, children: r, size: i = 'small', role: o = 'dialog', className: f, fullscreenOnMobile: I = !0, hideShadow: m = !1, onAnimationEnd: T = N.dG, returnRef: S, ...g } = e,
        R = n === A.Dv.ENTERING || n === A.Dv.ENTERED,
        { reducedMotion: C } = s.useContext(E.S),
        L = (0, _.q)(
            {
                opacity: R ? 1 : 0,
                transform: R || C.enabled ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: R ? 300 : 100,
                    easing: R ? d.Z.Easing.inOut(d.Z.Easing.back()) : d.Z.Easing.quad,
                    clamp: !0
                },
                onRest: T
            },
            'animate-always'
        ),
        D = s.useRef(null),
        y = null != g['aria-label'],
        b = null != g['aria-labelledby'],
        M = s.useId(),
        P = null !== (t = g['aria-labelledby']) && void 0 !== t ? t : M,
        U = s.useMemo(
            () => ({
                headerId: P,
                headerIdIsManaged: b
            }),
            [P, b]
        );
    return (0, a.jsx)(A.zM.Provider, {
        value: U,
        children: (0, a.jsx)(h.V, {
            className: O.focusLock,
            role: o,
            returnRef: S,
            impressionType: c.ImpressionTypes.MODAL,
            'aria-labelledby': y ? void 0 : U.headerId,
            ...g,
            children: (0, a.jsx)(u.animated.div, {
                className: l()(f, O.root, v[i], {
                    [O.fullscreenOnMobile]: I,
                    [O.rootWithShadow]: !m
                }),
                ref: D,
                style: L,
                children: (0, a.jsx)(p.J, {
                    containerRef: D,
                    children: r
                })
            })
        })
    });
}
function L(e) {
    var t, n, r, i, o;
    let { headerId: u, headerIdIsManaged: c } = s.useContext(A.zM);
    return (0, a.jsx)(g.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : g.Z.Direction.HORIZONTAL,
        justify: null !== (n = e.justify) && void 0 !== n ? n : g.Z.Justify.START,
        align: null !== (r = e.align) && void 0 !== r ? r : g.Z.Align.CENTER,
        wrap: null !== (i = e.wrap) && void 0 !== i ? i : g.Z.Wrap.NO_WRAP,
        className: l()(O.header, e.className, { [O.separator]: null === (o = e.separator) || void 0 === o || o }),
        id: c ? void 0 : u,
        children: e.children
    });
}
function D(e) {
    let { className: t, children: n, scrollerRef: r, scrollbarType: i, ...s } = e,
        o = (function (e) {
            switch (null != e ? e : 'thin') {
                case 'auto':
                    return T.yW;
                case 'none':
                    return T.xV;
                default:
                    return T.h2;
            }
        })(i);
    return (0, a.jsx)(o, {
        className: l()(O.content, t),
        ref: r,
        ...s,
        children: (0, a.jsx)(S.HeadingLevel, { children: n })
    });
}
function y(e) {
    var t, n, r, i, s;
    return (0, a.jsx)(g.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : g.Z.Direction.HORIZONTAL_REVERSE,
        justify: null !== (n = e.justify) && void 0 !== n ? n : g.Z.Justify.START,
        align: null !== (r = e.align) && void 0 !== r ? r : g.Z.Align.STRETCH,
        wrap: null !== (i = e.wrap) && void 0 !== i ? i : g.Z.Wrap.NO_WRAP,
        className: l()(O.footer, e.className, { [O.footerSeparator]: null === (s = e.separator) || void 0 === s || s }),
        children: (0, a.jsx)(S.HeadingLevel, { children: e.children })
    });
}
function b(e) {
    return (0, a.jsx)(f.zx, {
        focusProps: e.focusProps,
        'aria-label': R.Z.Messages.CLOSE,
        look: f.zx.Looks.BLANK,
        size: f.zx.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: l()(e.innerClassName, { [O.closeWithCircleBackground]: e.withCircleBackground }),
        className: l()(e.className, {
            [O.hideOnFullscreen]: e.hideOnFullscreen,
            [O.close]: !e.withCircleBackground
        }),
        children: (0, a.jsx)(I.D, {
            size: 'md',
            color: 'currentColor',
            className: l()(e.innerClassName, O.closeIcon)
        })
    });
}
function M(e) {
    let { className: t, scrollerRef: n, ...r } = e;
    return (0, a.jsx)(m.Tv, {
        className: t,
        ref: n,
        ...r
    });
}
