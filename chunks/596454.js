n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120),
    n(411104),
    n(733860),
    n(653041);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(699581),
    l = n(374470),
    u = n(442837),
    c = n(249458),
    d = n(146128),
    _ = n(134432),
    E = n(695346),
    f = n(237997),
    h = n(768581),
    p = n(176354),
    I = n(506071),
    m = n(149203);
n(13585);
let T = (function (e) {
    if (null == window.IntersectionObserver)
        return function (t) {
            return (0, r.jsx)(e, {
                ...t,
                shouldAnimate: t.animated
            });
        };
    let t = [],
        n = [],
        a = new window.IntersectionObserver(
            (e) => {
                e.forEach((e) => {
                    let r = n.find((t) => {
                        let [n] = t;
                        return n === e.target;
                    });
                    if (null == r) return;
                    let i = r[1];
                    if (e.intersectionRatio >= 0.7) {
                        var a, s;
                        if (-1 !== t.indexOf(i)) return;
                        let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.top));
                        n ? t.unshift(i) : t.push(i), i.forceUpdate(), n && t.length > 100 && t[100].forceUpdate();
                    } else {
                        let e = t.indexOf(i);
                        -1 !== e && (t.splice(e, 1), i.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate());
                    }
                });
            },
            { threshold: 0.7 }
        );
    function s(e) {
        let t = o.findDOMNode(e);
        if (!!(0, l.k)(t)) n.push([t, e]), a.observe(t);
    }
    function u(e) {
        let r = o.findDOMNode(e);
        a.unobserve(r);
        let i = n.findIndex((t) => {
            let [n, r] = t;
            return r === e;
        });
        if (-1 !== i) n.splice(i, 1), -1 !== (i = t.indexOf(e)) && (t.splice(i, 1), i < 100 && t.length >= 100 && t[99].forceUpdate());
    }
    return class extends i.Component {
        shouldAutoplay(e) {
            return e.animated && e.autoplay;
        }
        componentDidMount() {
            this.shouldAutoplay(this.props) && s(this);
        }
        componentDidUpdate(e) {
            let t = this.shouldAutoplay(e),
                n = this.shouldAutoplay(this.props);
            n !== t && (n ? s(this) : u(this));
        }
        componentWillUnmount() {
            this.shouldAutoplay(this.props) && u(this);
        }
        render() {
            let n = t.indexOf(this),
                { autoplay: i, allowAnimatedEmoji: a, ...s } = this.props;
            return (0, r.jsx)(c.G.Consumer, {
                children: (t) =>
                    (0, r.jsx)(e, {
                        ...s,
                        autoplay: i || !1,
                        shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                    })
            });
        }
    };
})(function (e) {
    var t, n;
    let { src: a, alt: o, className: l, emojiId: u, emojiName: c, channelId: E, messageId: f, animated: I, size: T = 'default', isFocused: S, isInteracting: g = !1, shouldAnimate: A, onMouseEnter: N, onMouseLeave: R, canSelect: O = !0, autoplay: v, allowAnimatedEmoji: C, ...L } = e,
        [D, y] = i.useState(!1),
        [b, M] = i.useState(void 0),
        P = i.useRef(),
        { triggerAnimation: U } = i.useContext(d.Rm),
        w = i.useRef(null),
        x = m.kV[T],
        G = i.useMemo(() => {
            if (null != a) return a;
            if (null != u)
                return h.ZP.getEmojiURL({
                    id: u,
                    animated: S && !0 === I && (!0 === A || D || !0 === g),
                    size: x
                });
            if (null != c) return p.ZP.getURL(c);
            throw Error('Unknown Src for Emoji');
        }, [I, u, c, x, S, D, g, A, a]),
        k = i.useCallback(() => {
            null != G &&
                (P.current = (0, _.po)(G, (e) => {
                    !e && M(Date.now());
                }));
        }, [G]),
        B = i.useCallback(
            (e) => {
                I && y(!0), U(c), null == N || N(e);
            },
            [I, c, N, U]
        ),
        F = i.useCallback(
            (e) => {
                I && y(!1), null == R || R(e);
            },
            [I, R]
        ),
        V = i.useMemo(() => {
            let e = null != u && '' !== u ? { 'data-id': u } : { 'data-name': c };
            return {
                ...L,
                key: b,
                className: s()('emoji', l, {
                    jumboable: 'jumbo' === T,
                    reactionLarge: 'reactionLarge' === T
                }),
                onError: k,
                onMouseEnter: B,
                onMouseLeave: F,
                'data-type': 'emoji',
                ...e
            };
        }, [l, u, c, B, F, b, k, L, T]);
    return (i.useEffect(() => {
        k();
    }, [k]),
    i.useEffect(
        () => () => {
            var e;
            return null === (e = P.current) || void 0 === e ? void 0 : e.call(P);
        },
        []
    ),
    null == G || '' === G)
        ? (0, r.jsx)('span', {
              className: s()('emoji', 'emoji-text'),
              children: c
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.aO, {
                      channelId: E,
                      messageId: f,
                      emojiName: c,
                      disable: !1 === v || !1 === C,
                      emojiRef: w.current
                  }),
                  O
                      ? (0, r.jsx)('img', {
                            ...V,
                            ref: w,
                            src: G,
                            alt: null !== (t = null != o ? o : c) && void 0 !== t ? t : void 0,
                            draggable: !1
                        })
                      : (0, r.jsx)('div', {
                            ...V,
                            ref: w,
                            role: 'img',
                            'aria-label': null !== (n = null != o ? o : c) && void 0 !== n ? n : void 0,
                            style: {
                                backgroundImage: 'url('.concat(G, ')'),
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }
                        })
              ]
          });
});
function S(e) {
    let t = E.Yk.useSetting(),
        n = {
            autoplay: null == e.autoplay ? t : e.autoplay,
            allowAnimatedEmoji: t
        },
        i = __OVERLAY__ ? (0, u.e7)([f.Z], () => f.Z.isInstanceFocused()) : (0, I.n)();
    return (0, r.jsx)(T, {
        ...e,
        ...n,
        isFocused: i
    });
}
