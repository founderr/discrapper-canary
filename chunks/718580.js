n.d(t, {
    H: function () {
        return E;
    },
    M: function () {
        return g;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(100621),
    s = n(990547),
    o = n(873546),
    l = n(186325),
    u = n(481060),
    c = n(393238),
    d = n(699682),
    f = n(793903),
    _ = n(906732),
    p = n(237617);
let h = {
    mass: 1,
    tension: 300,
    friction: 28,
    clamp: !0
};
function m(e, t) {
    return (n) => {
        if (0 === n) return 'auto';
        let r = 'forwards' === t.current,
            i = n > 0,
            a = !1;
        return i && r && 'left' === e && (a = !0), i && !r && 'right' === e && (a = !0), !i && r && 'right' === e && (a = !0), !i && !r && 'left' === e && (a = !0), a ? ''.concat(100 * Math.abs(n), '%') : 'auto';
    };
}
function g(e) {
    return null;
}
function E(e) {
    var t, n, g, E, v;
    let { contentDisplay: b, fadeInOut: I = !1, ...S } = e,
        T = {},
        { analyticsLocations: y } = (0, _.ZP)();
    i.Children.forEach(S.children, (e, t) => {
        T[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t
        };
    });
    let A = S.activeSlide,
        N = (0, d.Z)(S.activeSlide);
    let C = null !== (t = S.directionOverride) && void 0 !== t ? t : ((E = null != N ? T[N] : null), (v = T[A]), null == E ? null : E.index > v.index ? 'backwards' : E.index < v.index ? 'forwards' : null),
        { reducedMotion: R } = i.useContext(l.S),
        O = i.useContext(f.Z),
        D = T[A].impressionName,
        L = {
            ...T[A].impressionProperties,
            location_stack: y
        };
    O({
        type: s.ImpressionTypes.MODAL,
        name: D,
        properties: L,
        _stackContext: { isSlide: !0 }
    });
    let { ref: x, width: w = 0, height: M = 0 } = (0, c.Z)(A),
        P = {
            ...h,
            ...S.springConfig,
            ...(R.enabled ? { clamp: !0 } : null)
        },
        k = (0, u.useSpring)(
            {
                width: null !== (n = S.width) && void 0 !== n ? n : w,
                height: M,
                config: P
            },
            null == N ? 'animate-never' : 'respect-motion-settings'
        ),
        U = (0, u.useTransition)(
            A,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: P,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === A && null != S.onSlideReady && S.onSlideReady(n);
                }
            },
            null == N ? 'animate-never' : 'respect-motion-settings'
        ),
        G = (0, p.Z)(C),
        { width: B, centered: Z = !0 } = S,
        F = o.tq ? '100%' : k.width.to((e) => Math.round(e)),
        V = o.tq ? '100%' : k.height.to((e) => Math.round(e)),
        j = o.tq
            ? {}
            : Z
              ? {
                    transform: 'translate3d(0, -50%, 0) scale(1.0, 1.0)',
                    top: '50%'
                }
              : { transform: 'scale(1.0, 1.0)' },
        H = o.tq ? {} : { overflow: null !== (g = S.overflow) && void 0 !== g ? g : 'hidden' };
    return (0, r.jsx)(a.animated.div, {
        style: {
            position: 'relative',
            width: F,
            height: V,
            ...H
        },
        children: U((e, t, n) => {
            let { key: i } = n,
                s = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                a.animated.div,
                {
                    ref: t === A ? x : null,
                    style: {
                        position: 'absolute',
                        display: b,
                        flexDirection: 'column',
                        backfaceVisibility: 'hidden',
                        width: o.tq ? '100%' : B,
                        ...j,
                        ...(R.enabled
                            ? s
                            : {
                                  left: e.value.to(m('left', G)),
                                  right: e.value.to(m('right', G)),
                                  ...(I && s)
                              })
                    },
                    children: T[t].children
                },
                i
            );
        })
    });
}
