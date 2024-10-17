n.d(t, {
    H: function () {
        return m;
    },
    M: function () {
        return I;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(212433),
    s = n(990547),
    o = n(873546),
    l = n(186325),
    u = n(481060),
    c = n(393238),
    d = n(699682),
    _ = n(793903),
    E = n(906732),
    f = n(237617);
let h = {
    mass: 1,
    tension: 300,
    friction: 28,
    clamp: !0
};
function p(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let r = 'forwards' === t.current,
            i = n > 0,
            a = !1;
        return i && r && 'left' === e && (a = !0), i && !r && 'right' === e && (a = !0), !i && r && 'right' === e && (a = !0), !i && !r && 'left' === e && (a = !0), a ? ''.concat(100 * Math.abs(n), '%') : 'auto';
    };
}
function I(e) {
    return null;
}
function m(e) {
    var t, n, I, m, T;
    let { contentDisplay: S, fadeInOut: g = !1, ...A } = e,
        N = {},
        { analyticsLocations: R } = (0, E.ZP)();
    i.Children.forEach(A.children, (e, t) => {
        N[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t
        };
    });
    let O = A.activeSlide,
        v = (0, d.Z)(A.activeSlide);
    let C = null !== (t = A.directionOverride) && void 0 !== t ? t : ((m = null != v ? N[v] : null), (T = N[O]), null == m ? null : m.index > T.index ? 'backwards' : m.index < T.index ? 'forwards' : null),
        { reducedMotion: L } = i.useContext(l.S),
        D = i.useContext(_.Z),
        y = N[O].impressionName,
        b = {
            ...N[O].impressionProperties,
            location_stack: R
        };
    D({
        type: s.ImpressionTypes.MODAL,
        name: y,
        properties: b,
        _stackContext: { isSlide: !0 }
    });
    let { ref: M, width: P = 0, height: U = 0 } = (0, c.Z)(O),
        w = {
            ...h,
            ...A.springConfig,
            ...(L.enabled ? { clamp: !0 } : null)
        },
        x = (0, u.useSpring)(
            {
                width: null !== (n = A.width) && void 0 !== n ? n : P,
                height: U,
                config: w
            },
            null == v ? 'animate-never' : 'respect-motion-settings'
        ),
        G = (0, u.useTransition)(
            O,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: w,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === O && null != A.onSlideReady && A.onSlideReady(n);
                }
            },
            null == v ? 'animate-never' : 'respect-motion-settings'
        ),
        k = (0, f.Z)(C),
        { width: B, centered: F = !0 } = A,
        V = o.tq ? '100%' : x.width.to((e) => Math.round(e)),
        H = o.tq ? '100%' : x.height.to((e) => Math.round(e)),
        Z = o.tq
            ? {}
            : F
              ? {
                    transform: 'translate3d(0, -50%, 0) scale(1.0, 1.0)',
                    top: '50%'
                }
              : { transform: 'scale(1.0, 1.0)' },
        Y = o.tq ? {} : { overflow: null !== (I = A.overflow) && void 0 !== I ? I : 'hidden' };
    return (0, r.jsx)(a.animated.div, {
        style: {
            position: 'relative',
            width: V,
            height: H,
            ...Y
        },
        children: G((e, t, n) => {
            let { key: i } = n,
                s = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                a.animated.div,
                {
                    ref: t === O ? M : null,
                    style: {
                        position: 'absolute',
                        display: S,
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: o.tq ? '100%' : B,
                        ...Z,
                        ...(L.enabled
                            ? s
                            : {
                                  left: e.value.to(p('left', k)),
                                  right: e.value.to(p('right', k)),
                                  ...(g && s)
                              })
                    },
                    children: N[t].children
                },
                i
            );
        })
    });
}
