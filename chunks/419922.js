n.d(t, {
    Co: function () {
        return N;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(100621),
    c = n(442837),
    d = n(622535),
    f = n(481060),
    _ = n(607070),
    p = n(134432),
    h = n(314910),
    m = n(506071),
    g = n(453070),
    E = n(373228),
    v = n(378233),
    b = n(388032),
    I = n(131345);
let S = (e) => e.preventDefault(),
    T = {
        tension: 1100,
        friction: 40
    },
    y = {
        tension: 1600,
        friction: 60
    };
function A(e, t) {
    return i.cloneElement(e, {
        'data-type': 'sticker',
        'data-id': t
    });
}
function N(e) {
    let t = 'description' in e && null != e.description ? ''.concat(e.name, ', ').concat(e.description) : e.name;
    return b.intl.formatToPlainString(b.t.rk6pOz, { stickerName: t });
}
let C = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: a, size: o, withLoadingIndicator: l = !0 } = e,
            u = o >= 33;
        return (0, r.jsxs)('div', {
            className: s()(I.assetWrapper, { [I.assetWrapperMasked]: n || a }),
            style: {
                height: o,
                width: o
            },
            children: [
                n
                    ? (0, r.jsxs)('div', {
                          className: I.error,
                          children: [
                              (0, r.jsx)(f.StickerSadIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: I.errorIcon
                              }),
                              u &&
                                  (0, r.jsx)(f.Text, {
                                      className: I.errorText,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: b.intl.string(b.t.tWYWJy)
                                  })
                          ]
                      })
                    : t,
                l && i && (0, r.jsx)('div', { className: I.loadingIndicator })
            ]
        });
    },
    R = (e) => {
        let { shouldAnimate: t, size: a, sticker: s, fileUri: o, assetData: u, isFocused: c, className: d, maskAsset: f, positionRef: _, withLoadingIndicator: h, onError: m } = e,
            g = i.useRef(null),
            E = i.useRef(null),
            [S, T] = i.useState(!0),
            [y, R] = i.useState(!1),
            O = i.useRef(!1);
        O.current = t && c;
        let D = null == o ? (0, v.Q6)(s) : o;
        return (l()(null != D, 'Unable to determine sticker asset URL. Sticker ID: '.concat(s.id)),
        i.useEffect(() => {
            if (null == g.current || null == D) return;
            let e = Math.min(2, (0, p.x_)());
            (g.current.width = a * e), (g.current.height = a * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e('21617').then(n.bind(n, 186952));
                    null != g.current &&
                        ((E.current = new e({
                            canvas: g.current,
                            animationId: s.id,
                            assetUrl: D,
                            assetData: u,
                            onInitialDraw: () => {
                                !t && T(!1);
                            },
                            onError: () => {
                                !t && (T(!1), R(!0), null == m || m());
                            }
                        })),
                        O.current && E.current.setState(!0));
                })(),
                () => {
                    var e;
                    null === (e = E.current) || void 0 === e || e.drop(), (E.current = null), (t = !0);
                }
            );
        }, [D, a, s.id, u, m]),
        i.useEffect(() => {
            var e;
            let n;
            !t && (n = 0), null === (e = E.current) || void 0 === e || e.setState(t && c, n);
        }, [s, t, c]),
        null == D)
            ? null
            : (0, r.jsx)('div', {
                  role: 'img',
                  className: d,
                  'aria-label': y ? b.intl.string(b.t.yEvsKy) : N(s),
                  ref: _,
                  children: (0, r.jsx)(C, {
                      hasError: y,
                      isLoading: S,
                      maskAsset: f,
                      size: a,
                      withLoadingIndicator: h,
                      children: A(
                          (0, r.jsx)('canvas', {
                              className: I.lottieCanvas,
                              ref: g
                          }),
                          s.id
                      )
                  })
              });
    },
    O = (e) => {
        let { shouldAnimate: t, sticker: n, isFocused: a, size: o, className: l, maskAsset: u, positionRef: c, withLoadingIndicator: f, fileUri: _ } = e,
            [p, h] = i.useState(!1),
            [m, g] = i.useState(!0),
            [E, b] = i.useState(!1),
            T = i.useRef(null),
            y = i.useRef(null),
            R =
                null != _
                    ? _
                    : (0, v.Q6)(n, {
                          isPreview: !t || !p || !a,
                          size: o
                      }),
            O = i.useCallback(() => {
                g(!1);
            }, []),
            D = i.useCallback(() => {
                b(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != T.current) {
                let { isVisible: e } = T.current;
                h(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            var e;
            (null === (e = y.current) || void 0 === e ? void 0 : e.complete) === !0 && g(!1);
        }, []),
        null == R)
            ? null
            : (0, r.jsx)(d.$, {
                  ref: T,
                  onChange: h,
                  threshold: 0.7,
                  children: (0, r.jsx)('div', {
                      className: s()(l, I.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, r.jsx)(C, {
                          hasError: E,
                          isLoading: m,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: f,
                          children: A(
                              (0, r.jsx)('img', {
                                  className: I.pngImage,
                                  alt: N(n),
                                  src: R,
                                  draggable: !1,
                                  onError: D,
                                  onLoad: O,
                                  onContextMenu: S,
                                  ref: y
                              }),
                              n.id
                          )
                      })
                  })
              });
    },
    D = (e) => {
        let { disableAnimation: t, enlargeScaleFactor: n, enlargeWithName: a, isInteracting: s, positionRef: o, size: l, sticker: d } = e,
            p = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
            m = i.useRef(null),
            g = {
                transform: 'scale('.concat(p ? 1 : 1 / n, ')'),
                opacity: 0
            },
            E = (0, f.useTransition)(s, {
                ref: m,
                from: g,
                enter: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                leave: g,
                config: T
            }),
            v = i.useRef(null),
            b = (0, f.useSpring)(
                {
                    ref: v,
                    transform: s || p ? 'translateY(0)' : 'translateY(-25px)',
                    opacity: s ? 1 : 0,
                    config: y
                },
                'animate-always'
            );
        return (
            (0, u.useChain)(s ? [m, v] : [v, m], s ? [0, 0.0625] : [0, 0]),
            E(
                (e, i) =>
                    i &&
                    (0, r.jsx)(h.W5, {
                        className: I.positionedLayer,
                        fixed: !0,
                        align: 'center',
                        position: 'center',
                        targetRef: o,
                        children: () =>
                            (0, r.jsxs)('div', {
                                className: I.overlayWrapper,
                                children: [
                                    (0, r.jsx)(u.animated.div, {
                                        className: I.overlayStickerWrapper,
                                        style: e,
                                        children: (0, r.jsx)(L, {
                                            className: I.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: s,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1
                                        })
                                    }),
                                    a &&
                                        (0, r.jsx)(u.animated.div, {
                                            className: I.overlayLabelWrapper,
                                            style: b,
                                            children: (0, r.jsx)(f.Text, {
                                                variant: 'text-sm/medium',
                                                className: I.overlayLabel,
                                                children: d.name
                                            })
                                        })
                                ]
                            })
                    })
            )
        );
    },
    L = (e) => {
        let { isInteracting: t = !1, disableAnimation: n = !1, enlargeOnInteraction: a = !1, enlargeWithName: s = !0, enlargeScaleFactor: o = 1.55, maskAsset: l = !1, size: u, sticker: c, className: d, withLoadingIndicator: f, assetData: _, fileUri: p, onError: h } = e,
            v = (0, m.n)(),
            b = (0, g.t$)(t) && !n,
            I = i.useRef(null);
        if (null == c) return null;
        let S = c.format_type === E.u3.LOTTIE ? R : O;
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, r.jsx)(S, {
                        shouldAnimate: b,
                        isFocused: v,
                        size: u,
                        sticker: c,
                        className: d,
                        maskAsset: l,
                        positionRef: I,
                        withLoadingIndicator: f,
                        assetData: _,
                        fileUri: p,
                        onError: h
                    }),
                    a &&
                        (0, r.jsx)(D, {
                            disableAnimation: n,
                            enlargeScaleFactor: o,
                            enlargeWithName: s,
                            isInteracting: t,
                            positionRef: I,
                            size: u,
                            sticker: c
                        })
                ]
            },
            ''.concat(c.id, ',').concat(u)
        );
    };
t.ZP = L;
