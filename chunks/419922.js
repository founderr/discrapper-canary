n.d(t, {
    Co: function () {
        return b;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    u = n.n(l),
    c = n(526629),
    d = n(442837),
    _ = n(622535),
    E = n(481060),
    f = n(607070),
    h = n(134432),
    p = n(314910),
    m = n(506071),
    I = n(453070),
    T = n(373228),
    g = n(378233),
    S = n(689938),
    A = n(131345);
let v = (e) => e.preventDefault(),
    N = 0.7,
    O = 33,
    R = 1.55,
    C = {
        tension: 1100,
        friction: 40
    },
    y = {
        tension: 1600,
        friction: 60
    };
function L(e, t) {
    return a.cloneElement(e, {
        'data-type': 'sticker',
        'data-id': t
    });
}
function b(e) {
    let t = 'description' in e && null != e.description ? ''.concat(e.name, ', ').concat(e.description) : e.name;
    return S.Z.Messages.STICKER_A11Y_LABEL.format({ stickerName: t });
}
let D = (e) => {
        let { children: t, hasError: n, isLoading: r, maskAsset: a, size: o, withLoadingIndicator: l = !0 } = e,
            u = o >= O;
        return (0, i.jsxs)('div', {
            className: s()(A.assetWrapper, { [A.assetWrapperMasked]: n || a }),
            style: {
                height: o,
                width: o
            },
            children: [
                n
                    ? (0, i.jsxs)('div', {
                          className: A.error,
                          children: [
                              (0, i.jsx)(E.StickerSadIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: A.errorIcon
                              }),
                              u &&
                                  (0, i.jsx)(E.Text, {
                                      className: A.errorText,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: S.Z.Messages.STICKER_ASSET_LOAD_ERROR
                                  })
                          ]
                      })
                    : t,
                l && r && (0, i.jsx)('div', { className: A.loadingIndicator })
            ]
        });
    },
    M = (e) => {
        let { shouldAnimate: t, size: r, sticker: o, fileUri: s, assetData: l, isFocused: c, className: d, maskAsset: _, positionRef: E, withLoadingIndicator: f, onError: p } = e,
            m = a.useRef(null),
            I = a.useRef(null),
            [T, v] = a.useState(!0),
            [N, O] = a.useState(!1),
            R = a.useRef(!1);
        R.current = t && c;
        let C = null == s ? (0, g.Q6)(o) : s;
        return (u()(null != C, 'Unable to determine sticker asset URL. Sticker ID: '.concat(o.id)),
        a.useEffect(() => {
            if (null == m.current || null == C) return;
            let e = Math.min(2, (0, h.x_)());
            (m.current.width = r * e), (m.current.height = r * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e('21617').then(n.bind(n, 186952));
                    null != m.current &&
                        ((I.current = new e({
                            canvas: m.current,
                            animationId: o.id,
                            assetUrl: C,
                            assetData: l,
                            onInitialDraw: () => {
                                !t && v(!1);
                            },
                            onError: () => {
                                !t && (v(!1), O(!0), null == p || p());
                            }
                        })),
                        R.current && I.current.setState(!0));
                })(),
                () => {
                    var e;
                    null === (e = I.current) || void 0 === e || e.drop(), (I.current = null), (t = !0);
                }
            );
        }, [C, r, o.id, l, p]),
        a.useEffect(() => {
            var e;
            let n;
            !t && (n = 0), null === (e = I.current) || void 0 === e || e.setState(t && c, n);
        }, [o, t, c]),
        null == C)
            ? null
            : (0, i.jsx)('div', {
                  role: 'img',
                  className: d,
                  'aria-label': N ? S.Z.Messages.ERROR_LOADING_STICKER : b(o),
                  ref: E,
                  children: (0, i.jsx)(D, {
                      hasError: N,
                      isLoading: T,
                      maskAsset: _,
                      size: r,
                      withLoadingIndicator: f,
                      children: L(
                          (0, i.jsx)('canvas', {
                              className: A.lottieCanvas,
                              ref: m
                          }),
                          o.id
                      )
                  })
              });
    },
    P = (e) => {
        let { shouldAnimate: t, sticker: n, isFocused: r, size: o, className: l, maskAsset: u, positionRef: c, withLoadingIndicator: d, fileUri: E } = e,
            [f, h] = a.useState(!1),
            [p, m] = a.useState(!0),
            [I, T] = a.useState(!1),
            S = a.useRef(null),
            O = a.useRef(null),
            R =
                null != E
                    ? E
                    : (0, g.Q6)(n, {
                          isPreview: !t || !f || !r,
                          size: o
                      }),
            C = a.useCallback(() => {
                m(!1);
            }, []),
            y = a.useCallback(() => {
                T(!0);
            }, []);
        return (a.useEffect(() => {
            if (null != S.current) {
                let { isVisible: e } = S.current;
                h(e);
            }
        }, []),
        a.useLayoutEffect(() => {
            var e;
            (null === (e = O.current) || void 0 === e ? void 0 : e.complete) === !0 && m(!1);
        }, []),
        null == R)
            ? null
            : (0, i.jsx)(_.$, {
                  ref: S,
                  onChange: h,
                  threshold: N,
                  children: (0, i.jsx)('div', {
                      className: s()(l, A.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, i.jsx)(D, {
                          hasError: I,
                          isLoading: p,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: d,
                          children: L(
                              (0, i.jsx)('img', {
                                  className: A.pngImage,
                                  alt: b(n),
                                  src: R,
                                  draggable: !1,
                                  onError: y,
                                  onLoad: C,
                                  onContextMenu: v,
                                  ref: O
                              }),
                              n.id
                          )
                      })
                  })
              });
    },
    U = (e) => {
        let { disableAnimation: t, enlargeScaleFactor: n, enlargeWithName: r, isInteracting: o, positionRef: s, size: l, sticker: u } = e,
            _ = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
            h = a.useRef(null),
            m = {
                transform: 'scale('.concat(_ ? 1 : 1 / n, ')'),
                opacity: 0
            },
            I = (0, E.useTransition)(o, {
                ref: h,
                from: m,
                enter: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                leave: m,
                config: C
            }),
            T = a.useRef(null),
            g = (0, E.useSpring)(
                {
                    ref: T,
                    transform: o || _ ? 'translateY(0)' : 'translateY(-25px)',
                    opacity: o ? 1 : 0,
                    config: y
                },
                'animate-always'
            );
        return (
            (0, c.useChain)(o ? [h, T] : [T, h], o ? [0, 0.0625] : [0, 0]),
            I(
                (e, a) =>
                    a &&
                    (0, i.jsx)(p.W5, {
                        className: A.positionedLayer,
                        fixed: !0,
                        align: 'center',
                        position: 'center',
                        targetRef: s,
                        children: () =>
                            (0, i.jsxs)('div', {
                                className: A.overlayWrapper,
                                children: [
                                    (0, i.jsx)(c.animated.div, {
                                        className: A.overlayStickerWrapper,
                                        style: e,
                                        children: (0, i.jsx)(w, {
                                            className: A.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: o,
                                            maskAsset: !1,
                                            sticker: u,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1
                                        })
                                    }),
                                    r &&
                                        (0, i.jsx)(c.animated.div, {
                                            className: A.overlayLabelWrapper,
                                            style: g,
                                            children: (0, i.jsx)(E.Text, {
                                                variant: 'text-sm/medium',
                                                className: A.overlayLabel,
                                                children: u.name
                                            })
                                        })
                                ]
                            })
                    })
            )
        );
    },
    w = (e) => {
        let { isInteracting: t = !1, disableAnimation: n = !1, enlargeOnInteraction: r = !1, enlargeWithName: o = !0, enlargeScaleFactor: s = R, maskAsset: l = !1, size: u, sticker: c, className: d, withLoadingIndicator: _, assetData: E, fileUri: f, onError: h } = e,
            p = (0, m.n)(),
            g = (0, I.t$)(t) && !n,
            S = a.useRef(null);
        if (null == c) return null;
        let A = c.format_type === T.u3.LOTTIE ? M : P;
        return (0, i.jsxs)(
            a.Fragment,
            {
                children: [
                    (0, i.jsx)(A, {
                        shouldAnimate: g,
                        isFocused: p,
                        size: u,
                        sticker: c,
                        className: d,
                        maskAsset: l,
                        positionRef: S,
                        withLoadingIndicator: _,
                        assetData: E,
                        fileUri: f,
                        onError: h
                    }),
                    r &&
                        (0, i.jsx)(U, {
                            disableAnimation: n,
                            enlargeScaleFactor: s,
                            enlargeWithName: o,
                            isInteracting: t,
                            positionRef: S,
                            size: u,
                            sticker: c
                        })
                ]
            },
            ''.concat(c.id, ',').concat(u)
        );
    };
t.ZP = w;
