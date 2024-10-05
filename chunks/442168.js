n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(212433),
    l = n(442837),
    r = n(780384),
    o = n(481060),
    c = n(435064),
    u = n(39604),
    d = n(175470),
    h = n(569545),
    p = n(314910),
    m = n(247280);
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
    g = { duration: 1000 };
function C(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: C } = s.useContext(r.Sf),
        I = (0, s.useRef)(null),
        T = d.n.getState().clipsButtonRef,
        x = (0, h.V9)(t),
        S = (0, l.e7)([c.Z], () => c.Z.getActiveAnimation()),
        v = (0, l.Wu)([c.Z], () => c.Z.getStreamClipAnimations(x)),
        N = (0, s.useRef)();
    s.useEffect(
        () => () => {
            (0, u.Gh)(x);
        },
        [x]
    );
    let A = () => {
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
        Z = (e) => {
            let t = null == T ? void 0 : T.getBoundingClientRect();
            if (((N.current = t), e.timestamp !== S || null == t || n)) return _;
            let { top: i, left: s } = t;
            return {
                top: i + 36,
                left: s - 216,
                height: 151,
                width: 268
            };
        },
        M = (0, s.useRef)(null),
        b = (0, o.useTransition)(
            v,
            {
                keys: (e) => e.timestamp,
                ref: M,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: f
            },
            'animate-always'
        ),
        R = (0, s.useRef)(null),
        L = (0, o.useTransition)(
            v,
            {
                ref: R,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: 'fixed',
                    visibility: 'hidden',
                    opacity: 1,
                    ...(C.enabled ? Z(e) : A())
                }),
                enter: (e) => [
                    {
                        opacity: 1,
                        visibility: 'visible',
                        ...Z(e)
                    }
                ],
                leave: {
                    opacity: 0,
                    ...(!C.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != N.current)
                                return {
                                    top: N.current.top + 12,
                                    left: N.current.left + 12
                                };
                        })()
                    })
                },
                config: C.enabled ? g : E,
                onRest: (e, t) => {
                    null != t.item && null != v.find((e) => e.timestamp === t.item.timestamp) && (0, u.Gh)(x, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, a.useChain)([M, R], [0, 0.1], 3000),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: m.hidden,
                    ref: I
                }),
                b(
                    (e, t) =>
                        null != t &&
                        (0, i.jsx)(a.animated.div, {
                            className: m.whiteFlash,
                            style: e
                        })
                ),
                (0, i.jsx)(p.ZP, {
                    children: (0, i.jsx)('div', {
                        className: m.hidden,
                        children: L(
                            (e, t, n, s) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, i.jsx)(a.animated.img, {
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
