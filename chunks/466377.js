n.d(t, {
    Cg: function () {
        return i;
    },
    Y0: function () {
        return C;
    },
    YA: function () {
        return x;
    },
    hz: function () {
        return O;
    },
    mz: function () {
        return D;
    },
    ol: function () {
        return L;
    },
    xB: function () {
        return R;
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
    f = n(143450),
    _ = n(186325),
    p = n(693789),
    h = n(507274),
    m = n(84735),
    g = n(261833),
    E = n(742746),
    v = n(147479),
    I = n(481060),
    b = n(600164),
    T = n(602091),
    S = n(231338),
    y = n(388032),
    A = n(46493);
((r = i || (i = {})).SMALL = 'small'), (r.MEDIUM = 'medium'), (r.LARGE = 'large'), (r.DYNAMIC = 'dynamic');
let N = Object.freeze({
    small: A.small,
    medium: A.medium,
    large: A.large,
    dynamic: null
});
function C(e) {
    var t;
    let { transitionState: n, children: r, size: i = 'small', role: o = 'dialog', className: p, fullscreenOnMobile: g = !0, hideShadow: E = !1, onAnimationEnd: v = S.dG, returnRef: I, ...b } = e,
        y = n === T.Dv.ENTERING || n === T.Dv.ENTERED,
        { reducedMotion: C } = s.useContext(_.S),
        R = (0, f.q)(
            {
                opacity: y ? 1 : 0,
                transform: y || C.enabled ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: y ? 300 : 100,
                    easing: y ? d.Z.Easing.inOut(d.Z.Easing.back()) : d.Z.Easing.quad,
                    clamp: !0
                },
                onRest: v
            },
            'animate-always'
        ),
        O = s.useRef(null),
        D = null != b['aria-label'],
        L = null != b['aria-labelledby'],
        x = s.useId(),
        w = null !== (t = b['aria-labelledby']) && void 0 !== t ? t : x,
        M = s.useMemo(
            () => ({
                headerId: w,
                headerIdIsManaged: L
            }),
            [w, L]
        );
    return (0, a.jsx)(T.zM.Provider, {
        value: M,
        children: (0, a.jsx)(h.V, {
            className: A.focusLock,
            role: o,
            returnRef: I,
            impressionType: c.ImpressionTypes.MODAL,
            'aria-labelledby': D ? void 0 : M.headerId,
            ...b,
            children: (0, a.jsx)(u.animated.div, {
                className: l()(p, A.root, N[i], {
                    [A.fullscreenOnMobile]: g,
                    [A.rootWithShadow]: !E
                }),
                ref: O,
                style: R,
                children: (0, a.jsx)(m.J, {
                    containerRef: O,
                    children: r
                })
            })
        })
    });
}
function R(e) {
    var t, n, r, i, o;
    let { headerId: u, headerIdIsManaged: c } = s.useContext(T.zM);
    return (0, a.jsx)(b.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : b.Z.Direction.HORIZONTAL,
        justify: null !== (n = e.justify) && void 0 !== n ? n : b.Z.Justify.START,
        align: null !== (r = e.align) && void 0 !== r ? r : b.Z.Align.CENTER,
        wrap: null !== (i = e.wrap) && void 0 !== i ? i : b.Z.Wrap.NO_WRAP,
        className: l()(A.header, e.className, { [A.separator]: null === (o = e.separator) || void 0 === o || o }),
        id: c ? void 0 : u,
        children: e.children
    });
}
function O(e) {
    let { className: t, children: n, scrollerRef: r, scrollbarType: i, ...s } = e,
        o = (function (e) {
            switch (null != e ? e : 'thin') {
                case 'auto':
                    return v.yW;
                case 'none':
                    return v.xV;
                default:
                    return v.h2;
            }
        })(i);
    return (0, a.jsx)(o, {
        className: l()(A.content, t),
        ref: r,
        ...s,
        children: (0, a.jsx)(I.HeadingLevel, { children: n })
    });
}
function D(e) {
    var t, n, r, i, s;
    return (0, a.jsx)(b.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : b.Z.Direction.HORIZONTAL_REVERSE,
        justify: null !== (n = e.justify) && void 0 !== n ? n : b.Z.Justify.START,
        align: null !== (r = e.align) && void 0 !== r ? r : b.Z.Align.STRETCH,
        wrap: null !== (i = e.wrap) && void 0 !== i ? i : b.Z.Wrap.NO_WRAP,
        className: l()(A.footer, e.className, { [A.footerSeparator]: null === (s = e.separator) || void 0 === s || s }),
        children: (0, a.jsx)(I.HeadingLevel, { children: e.children })
    });
}
function L(e) {
    return (0, a.jsx)(p.zx, {
        focusProps: e.focusProps,
        'aria-label': y.intl.string(y.t.cpT0Cg),
        look: p.zx.Looks.BLANK,
        size: p.zx.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: l()(e.innerClassName, { [A.closeWithCircleBackground]: e.withCircleBackground }),
        className: l()(e.className, {
            [A.hideOnFullscreen]: e.hideOnFullscreen,
            [A.close]: !e.withCircleBackground
        }),
        children: (0, a.jsx)(g.D, {
            size: 'md',
            color: 'currentColor',
            className: l()(e.innerClassName, A.closeIcon)
        })
    });
}
function x(e) {
    let { className: t, scrollerRef: n, ...r } = e;
    return (0, a.jsx)(E.Tv, {
        className: t,
        ref: n,
        ...r
    });
}
