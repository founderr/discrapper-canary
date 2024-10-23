n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(249458),
    u = n(146128),
    c = n(134432),
    d = n(959258),
    _ = n(695346),
    E = n(237997),
    f = n(768581),
    h = n(176354),
    p = n(506071),
    I = n(149203);
n(13585);
let m = __OVERLAY__ ? () => (0, o.e7)([E.Z], () => E.Z.isInstanceFocused()) : p.n;
function T(e) {
    var t, n;
    let { src: a, alt: o, className: l, emojiId: d, emojiName: E, channelId: p, messageId: T, animated: S, size: g = 'default', isInteracting: A = !1, shouldAnimate: N, onMouseEnter: R, onMouseLeave: O, canSelect: v = !0, autoplay: C, registerAnimatedElementRef: L, ...D } = e,
        [y, b] = i.useState(!1),
        [M, P] = i.useState(void 0),
        U = i.useRef(),
        { triggerAnimation: w } = i.useContext(u.Rm),
        x = _.Yk.useSetting(),
        G = m(),
        k = null == C ? x : C,
        B = I.kV[g],
        F = i.useRef(null),
        V = i.useMemo(() => {
            if (null != a) return a;
            if (null != d) {
                let e = !0 === N && k;
                return f.ZP.getEmojiURL({
                    id: d,
                    animated: G && !0 === S && (e || y || !0 === A),
                    size: B
                });
            }
            if (null != E) return h.ZP.getURL(E);
            throw Error('Unknown Src for Emoji');
        }, [S, k, d, E, B, G, y, A, N, a]),
        H = i.useCallback(() => {
            null != V &&
                (U.current = (0, c.po)(V, (e) => {
                    !e && P(Date.now());
                }));
        }, [V]),
        Z = i.useCallback(
            (e) => {
                S && b(!0), w(E), null == R || R(e);
            },
            [S, E, R, w]
        ),
        Y = i.useCallback(
            (e) => {
                S && b(!1), null == O || O(e);
            },
            [S, O]
        ),
        j = i.useMemo(() => {
            let e = null != d && '' !== d ? { 'data-id': d } : { 'data-name': E };
            return {
                ...D,
                className: s()('emoji', l, {
                    jumboable: 'jumbo' === g,
                    reactionLarge: 'reactionLarge' === g
                }),
                onError: H,
                onMouseEnter: Z,
                onMouseLeave: Y,
                'data-type': 'emoji',
                ...e
            };
        }, [l, d, E, Z, Y, H, D, g]);
    i.useEffect(
        () => () => {
            var e;
            return null === (e = U.current) || void 0 === e ? void 0 : e.call(U);
        },
        []
    );
    let W = i.useCallback(
        (e) => {
            (F.current = e), null == L || L(e);
        },
        [L]
    );
    return null == V || '' === V
        ? (0, r.jsx)('span', {
              className: s()('emoji', 'emoji-text'),
              children: E
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.aO, {
                      channelId: p,
                      messageId: T,
                      emojiName: E,
                      disable: !1 === k || !1 === x,
                      emojiRef: F.current
                  }),
                  v
                      ? (0, r.jsx)(
                            'img',
                            {
                                ...j,
                                ref: W,
                                src: V,
                                alt: null !== (t = null != o ? o : E) && void 0 !== t ? t : void 0,
                                draggable: !1
                            },
                            M
                        )
                      : (0, r.jsx)(
                            'div',
                            {
                                ...j,
                                ref: W,
                                role: 'img',
                                'aria-label': null !== (n = null != o ? o : E) && void 0 !== n ? n : void 0,
                                style: {
                                    backgroundImage: 'url('.concat(V, ')'),
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }
                            },
                            M
                        )
              ]
          });
}
function S(e) {
    let { useThoughtfullyAnimated: t } = i.useContext(d.q),
        { animate: n, registerRef: a } = t(),
        { disableAnimations: s } = i.useContext(l.G);
    return (0, r.jsx)(T, {
        ...e,
        registerAnimatedElementRef: a,
        shouldAnimate: n && !s
    });
}
function g(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, r.jsx)(S, { ...e }) : (0, r.jsx)(T, { ...e });
}
