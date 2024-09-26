n.d(t, {
    H: function () {
        return T;
    },
    M: function () {
        return I;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(526629),
    o = n(990547),
    s = n(873546),
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
    return null == e ? null : e.index > t.index ? 'backwards' : e.index < t.index ? 'forwards' : null;
}
function m(e, t) {
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
function T(e) {
    var t, n, I;
    let { contentDisplay: T, fadeInOut: g = !1, ...S } = e,
        A = {},
        { analyticsLocations: v } = (0, E.ZP)();
    i.Children.forEach(S.children, (e, t) => {
        A[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t
        };
    });
    let N = S.activeSlide,
        O = (0, d.Z)(S.activeSlide),
        R = null !== (t = S.directionOverride) && void 0 !== t ? t : p(null != O ? A[O] : null, A[N]),
        { reducedMotion: C } = i.useContext(l.S),
        y = i.useContext(_.Z),
        L = A[N].impressionName,
        b = {
            ...A[N].impressionProperties,
            location_stack: v
        };
    y({
        type: o.ImpressionTypes.MODAL,
        name: L,
        properties: b,
        _stackContext: { isSlide: !0 }
    });
    let { ref: D, width: M = 0, height: P = 0 } = (0, c.Z)(N),
        U = {
            ...h,
            ...S.springConfig,
            ...(C.enabled ? { clamp: !0 } : null)
        },
        w = (0, u.useSpring)(
            {
                width: null !== (n = S.width) && void 0 !== n ? n : M,
                height: P,
                config: U
            },
            null == O ? 'animate-never' : 'respect-motion-settings'
        ),
        x = (0, u.useTransition)(
            N,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: U,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === N && null != S.onSlideReady && S.onSlideReady(n);
                }
            },
            null == O ? 'animate-never' : 'respect-motion-settings'
        ),
        G = (0, f.Z)(R),
        { width: k, centered: B = !0 } = S,
        F = s.tq ? '100%' : w.width.to((e) => Math.round(e)),
        Z = s.tq ? '100%' : w.height.to((e) => Math.round(e)),
        V = s.tq
            ? {}
            : B
              ? {
                    transform: 'translate3d(0, -50%, 0) scale(1.0, 1.0)',
                    top: '50%'
                }
              : { transform: 'scale(1.0, 1.0)' },
        H = s.tq ? {} : { overflow: null !== (I = S.overflow) && void 0 !== I ? I : 'hidden' };
    return (0, r.jsx)(a.animated.div, {
        style: {
            position: 'relative',
            width: F,
            height: Z,
            ...H
        },
        children: x((e, t, n) => {
            let { key: i } = n,
                o = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                a.animated.div,
                {
                    ref: t === N ? D : null,
                    style: {
                        position: 'absolute',
                        display: T,
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: s.tq ? '100%' : k,
                        ...V,
                        ...(C.enabled
                            ? o
                            : {
                                  left: e.value.to(m('left', G)),
                                  right: e.value.to(m('right', G)),
                                  ...(g && o)
                              })
                    },
                    children: A[t].children
                },
                i
            );
        })
    });
}
