n.d(t, {
    Cg: function () {
        return r;
    },
    Y0: function () {
        return R;
    },
    YA: function () {
        return M;
    },
    hz: function () {
        return L;
    },
    mz: function () {
        return b;
    },
    ol: function () {
        return D;
    },
    xB: function () {
        return C;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(526629),
    u = n(990547),
    c = n(748780),
    d = n(143450),
    _ = n(186325),
    E = n(693789),
    f = n(507274),
    h = n(84735),
    p = n(261833),
    m = n(742746),
    I = n(147479),
    T = n(481060),
    g = n(600164),
    S = n(602091),
    A = n(231338),
    v = n(689938),
    N = n(46493);
!(function (e) {
    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.LARGE = 'large'), (e.DYNAMIC = 'dynamic');
})(r || (r = {}));
let O = Object.freeze({
    small: N.small,
    medium: N.medium,
    large: N.large,
    dynamic: null
});
function R(e) {
    var t;
    let { transitionState: n, children: r, size: o = 'small', role: E = 'dialog', className: p, fullscreenOnMobile: m = !0, hideShadow: I = !1, onAnimationEnd: T = A.dG, returnRef: g, ...v } = e,
        R = n === S.Dv.ENTERING || n === S.Dv.ENTERED,
        { reducedMotion: C } = a.useContext(_.S),
        y = (0, d.q)(
            {
                opacity: R ? 1 : 0,
                transform: R || C.enabled ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: R ? 300 : 100,
                    easing: R ? c.Z.Easing.inOut(c.Z.Easing.back()) : c.Z.Easing.quad,
                    clamp: !0
                },
                onRest: T
            },
            'animate-always'
        ),
        L = a.useRef(null),
        b = null != v['aria-label'],
        D = null != v['aria-labelledby'],
        M = a.useId(),
        P = null !== (t = v['aria-labelledby']) && void 0 !== t ? t : M,
        U = a.useMemo(
            () => ({
                headerId: P,
                headerIdIsManaged: D
            }),
            [P, D]
        );
    return (0, i.jsx)(S.zM.Provider, {
        value: U,
        children: (0, i.jsx)(f.V, {
            className: N.focusLock,
            role: E,
            returnRef: g,
            impressionType: u.ImpressionTypes.MODAL,
            'aria-labelledby': b ? void 0 : U.headerId,
            ...v,
            children: (0, i.jsx)(l.animated.div, {
                className: s()(p, N.root, O[o], {
                    [N.fullscreenOnMobile]: m,
                    [N.rootWithShadow]: !I
                }),
                ref: L,
                style: y,
                children: (0, i.jsx)(h.J, {
                    containerRef: L,
                    children: r
                })
            })
        })
    });
}
function C(e) {
    var t, n, r, o, l;
    let { headerId: u, headerIdIsManaged: c } = a.useContext(S.zM);
    return (0, i.jsx)(g.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : g.Z.Direction.HORIZONTAL,
        justify: null !== (n = e.justify) && void 0 !== n ? n : g.Z.Justify.START,
        align: null !== (r = e.align) && void 0 !== r ? r : g.Z.Align.CENTER,
        wrap: null !== (o = e.wrap) && void 0 !== o ? o : g.Z.Wrap.NO_WRAP,
        className: s()(N.header, e.className, { [N.separator]: null === (l = e.separator) || void 0 === l || l }),
        id: c ? void 0 : u,
        children: e.children
    });
}
function y(e) {
    switch (null != e ? e : 'thin') {
        case 'auto':
            return I.yW;
        case 'none':
            return I.xV;
        default:
            return I.h2;
    }
}
function L(e) {
    let { className: t, children: n, scrollerRef: r, scrollbarType: a, ...o } = e,
        l = y(a);
    return (0, i.jsx)(l, {
        className: s()(N.content, t),
        ref: r,
        ...o,
        children: (0, i.jsx)(T.HeadingLevel, { children: n })
    });
}
function b(e) {
    var t, n, r, a, o;
    return (0, i.jsx)(g.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : g.Z.Direction.HORIZONTAL_REVERSE,
        justify: null !== (n = e.justify) && void 0 !== n ? n : g.Z.Justify.START,
        align: null !== (r = e.align) && void 0 !== r ? r : g.Z.Align.STRETCH,
        wrap: null !== (a = e.wrap) && void 0 !== a ? a : g.Z.Wrap.NO_WRAP,
        className: s()(N.footer, e.className, { [N.footerSeparator]: null === (o = e.separator) || void 0 === o || o }),
        children: (0, i.jsx)(T.HeadingLevel, { children: e.children })
    });
}
function D(e) {
    return (0, i.jsx)(E.zx, {
        focusProps: e.focusProps,
        'aria-label': v.Z.Messages.CLOSE,
        look: E.zx.Looks.BLANK,
        size: E.zx.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: s()(e.innerClassName, { [N.closeWithCircleBackground]: e.withCircleBackground }),
        className: s()(e.className, {
            [N.hideOnFullscreen]: e.hideOnFullscreen,
            [N.close]: !e.withCircleBackground
        }),
        children: (0, i.jsx)(p.D, {
            size: 'md',
            color: 'currentColor',
            className: s()(e.innerClassName, N.closeIcon)
        })
    });
}
function M(e) {
    let { className: t, scrollerRef: n, ...r } = e;
    return (0, i.jsx)(m.Tv, {
        className: t,
        ref: n,
        ...r
    });
}
