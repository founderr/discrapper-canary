n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(180081),
    l = n(442837),
    r = n(780384),
    o = n(481060),
    c = n(435064),
    u = n(39604),
    d = n(175470),
    h = n(569545),
    p = n(314910),
    m = n(357768);
let _ = { visibility: 'hidden' },
    f = {
        precision: 0.0001,
        duration: 300
    },
    E = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0
    },
    C = { duration: 1000 };
function g(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: g } = a.useContext(r.Sf),
        I = (0, a.useRef)(null),
        x = d.n.getState().clipsButtonRef,
        T = (0, h.V9)(t),
        N = (0, l.e7)([c.Z], () => c.Z.getActiveAnimation()),
        S = (0, l.Wu)([c.Z], () => c.Z.getStreamClipAnimations(T)),
        v = (0, a.useRef)();
    a.useEffect(
        () => () => {
            (0, u.Gh)(T);
        },
        [T]
    );
    let Z = () => {
            var e;
            let t = null === (e = I.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? _
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        A = (e) => {
            let t = null == x ? void 0 : x.getBoundingClientRect();
            if (((v.current = t), e.timestamp !== N || null == t || n)) return _;
            let { top: i, left: a } = t;
            return {
                top: i + 36,
                left: a - 216,
                height: 151,
                width: 268
            };
        },
        M = (0, a.useRef)(null),
        b = (0, o.useTransition)(
            S,
            {
                keys: (e) => e.timestamp,
                ref: M,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: f
            },
            'animate-always'
        ),
        R = (0, a.useRef)(null),
        L = (0, o.useTransition)(
            S,
            {
                ref: R,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: 'fixed',
                    visibility: 'hidden',
                    opacity: 1,
                    ...(g.enabled ? A(e) : Z())
                }),
                enter: (e) => [
                    {
                        opacity: 1,
                        visibility: 'visible',
                        ...A(e)
                    }
                ],
                leave: {
                    opacity: 0,
                    ...(!g.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != v.current)
                                return {
                                    top: v.current.top + 12,
                                    left: v.current.left + 12
                                };
                        })()
                    })
                },
                config: g.enabled ? C : E,
                onRest: (e, t) => {
                    null != t.item && null != S.find((e) => e.timestamp === t.item.timestamp) && (0, u.Gh)(T, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, s.useChain)([M, R], [0, 0.1], 3000),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: m.hidden,
                    ref: I
                }),
                b(
                    (e, t) =>
                        null != t &&
                        (0, i.jsx)(s.animated.div, {
                            className: m.whiteFlash,
                            style: e
                        })
                ),
                (0, i.jsx)(p.ZP, {
                    children: (0, i.jsx)('div', {
                        className: m.hidden,
                        children: L(
                            (e, t, n, a) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, i.jsx)(s.animated.img, {
                                    src: t.thumbnail,
                                    className: m.movingImage,
                                    style: e
                                })
                        )
                    })
                })
            ]
        })
    );
}
