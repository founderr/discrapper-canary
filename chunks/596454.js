n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120),
    n(411104);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(146128),
    u = n(134432),
    c = n(959258),
    d = n(695346),
    _ = n(237997),
    E = n(768581),
    f = n(176354),
    h = n(506071),
    p = n(149203);
n(13585);
let I = __OVERLAY__ ? () => (0, o.e7)([_.Z], () => _.Z.isInstanceFocused()) : h.n;
function m(e) {
    var t, n;
    let { src: a, alt: o, className: c, emojiId: _, emojiName: h, channelId: m, messageId: T, animated: S, size: g = 'default', isInteracting: A = !1, shouldAnimate: N, onMouseEnter: R, onMouseLeave: O, canSelect: v = !0, autoplay: C, registerAnimatedElementRef: L, ...D } = e,
        [y, b] = i.useState(!1),
        [M, P] = i.useState(void 0),
        U = i.useRef(),
        { triggerAnimation: w } = i.useContext(l.Rm),
        x = d.Yk.useSetting(),
        G = I(),
        k = p.kV[g],
        B = i.useRef(null),
        F = i.useMemo(() => {
            if (null != a) return a;
            if (null != _)
                return E.ZP.getEmojiURL({
                    id: _,
                    animated: G && !0 === S && (!0 === N || y || !0 === A),
                    size: k
                });
            if (null != h) return f.ZP.getURL(h);
            throw Error('Unknown Src for Emoji');
        }, [S, _, h, k, G, y, A, N, a]),
        V = i.useCallback(() => {
            null != F &&
                (U.current = (0, u.po)(F, (e) => {
                    !e && P(Date.now());
                }));
        }, [F]),
        H = i.useCallback(
            (e) => {
                S && b(!0), w(h), null == R || R(e);
            },
            [S, h, R, w]
        ),
        Z = i.useCallback(
            (e) => {
                S && b(!1), null == O || O(e);
            },
            [S, O]
        ),
        Y = i.useMemo(() => {
            let e = null != _ && '' !== _ ? { 'data-id': _ } : { 'data-name': h };
            return {
                ...D,
                className: s()('emoji', c, {
                    jumboable: 'jumbo' === g,
                    reactionLarge: 'reactionLarge' === g
                }),
                onError: V,
                onMouseEnter: H,
                onMouseLeave: Z,
                'data-type': 'emoji',
                ...e
            };
        }, [c, _, h, H, Z, V, D, g]);
    i.useEffect(
        () => () => {
            var e;
            return null === (e = U.current) || void 0 === e ? void 0 : e.call(U);
        },
        []
    );
    let j = i.useCallback(
        (e) => {
            (B.current = e), null == L || L(e);
        },
        [L]
    );
    return null == F || '' === F
        ? (0, r.jsx)('span', {
              className: s()('emoji', 'emoji-text'),
              children: h
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.aO, {
                      channelId: m,
                      messageId: T,
                      emojiName: h,
                      disable: !1 === (null == C ? x : C) || !1 === x,
                      emojiRef: B.current
                  }),
                  v
                      ? (0, r.jsx)(
                            'img',
                            {
                                ...Y,
                                ref: j,
                                src: F,
                                alt: null !== (t = null != o ? o : h) && void 0 !== t ? t : void 0,
                                draggable: !1
                            },
                            M
                        )
                      : (0, r.jsx)(
                            'div',
                            {
                                ...Y,
                                ref: j,
                                role: 'img',
                                'aria-label': null !== (n = null != o ? o : h) && void 0 !== n ? n : void 0,
                                style: {
                                    backgroundImage: 'url('.concat(F, ')'),
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }
                            },
                            M
                        )
              ]
          });
}
function T(e) {
    let { useThoughtfullyAnimated: t } = i.useContext(c.q),
        { animate: n, registerRef: a } = t();
    return (0, r.jsx)(m, {
        ...e,
        registerAnimatedElementRef: a,
        shouldAnimate: n
    });
}
function S(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, r.jsx)(T, { ...e }) : (0, r.jsx)(m, { ...e });
}
