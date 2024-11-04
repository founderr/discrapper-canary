n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(100621),
    s = n(442837),
    a = n(780384),
    o = n(481060),
    c = n(435064),
    u = n(39604),
    d = n(175470),
    h = n(569545),
    m = n(314910),
    p = n(247280);
let f = { visibility: 'hidden' },
    g = {
        precision: 0.0001,
        duration: 300
    },
    C = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0
    },
    x = { duration: 1000 };
function v(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: v } = l.useContext(a.Sf),
        _ = (0, l.useRef)(null),
        I = d.n.getState().clipsButtonRef,
        E = (0, h.V9)(t),
        b = (0, s.e7)([c.Z], () => c.Z.getActiveAnimation()),
        S = (0, s.Wu)([c.Z], () => c.Z.getStreamClipAnimations(E)),
        Z = (0, l.useRef)();
    l.useEffect(
        () => () => {
            (0, u.Gh)(E);
        },
        [E]
    );
    let T = () => {
            var e;
            let t = null === (e = _.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? f
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        N = (e) => {
            let t = null == I ? void 0 : I.getBoundingClientRect();
            if (((Z.current = t), e.timestamp !== b || null == t || n)) return f;
            let { top: i, left: l } = t;
            return {
                top: i + 36,
                left: l - 216,
                height: 151,
                width: 268
            };
        },
        j = (0, l.useRef)(null),
        A = (0, o.useTransition)(
            S,
            {
                keys: (e) => e.timestamp,
                ref: j,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: g
            },
            'animate-always'
        ),
        y = (0, l.useRef)(null),
        P = (0, o.useTransition)(
            S,
            {
                ref: y,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: 'fixed',
                    visibility: 'hidden',
                    opacity: 1,
                    ...(v.enabled ? N(e) : T())
                }),
                enter: (e) => [
                    {
                        opacity: 1,
                        visibility: 'visible',
                        ...N(e)
                    }
                ],
                leave: {
                    opacity: 0,
                    ...(!v.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != Z.current)
                                return {
                                    top: Z.current.top + 12,
                                    left: Z.current.left + 12
                                };
                        })()
                    })
                },
                config: v.enabled ? x : C,
                onRest: (e, t) => {
                    null != t.item && null != S.find((e) => e.timestamp === t.item.timestamp) && (0, u.Gh)(E, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, r.useChain)([j, y], [0, 0.1], 3000),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: p.hidden,
                    ref: _
                }),
                A(
                    (e, t) =>
                        null != t &&
                        (0, i.jsx)(r.animated.div, {
                            className: p.whiteFlash,
                            style: e
                        })
                ),
                (0, i.jsx)(m.ZP, {
                    children: (0, i.jsx)('div', {
                        className: p.hidden,
                        children: P(
                            (e, t, n, l) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, i.jsx)(r.animated.img, {
                                    src: t.thumbnail,
                                    className: p.movingImage,
                                    style: e
                                })
                        )
                    })
                })
            ]
        })
    );
}
