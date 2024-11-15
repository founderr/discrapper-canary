n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(393903),
    c = n(604162),
    u = n(420212),
    d = n(584448);
function m(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function f(e, t, n) {
    return n.left + (e / t) * n.width;
}
function p(e) {
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: p, preloadedBuffers: v, duration: C, maxSeekableTime: g, onClick: x, onScrubBack: S, onScrubForward: E } = e,
        [h, _] = o.useState(null),
        [T, I] = o.useState(null),
        [j, N] = o.useState(null),
        [b, D] = o.useState(!1),
        y = o.useRef(null),
        A = (e) => {
            (y.current = e), _(e);
        };
    o.useEffect(() => {
        null != h && (null == g ? N(null) : N(f(g, C, h)));
    }, [h, g, C]);
    let k = (0, s.y)(() => {
        if (null != k.current) A(k.current.getBoundingClientRect());
    });
    o.useLayoutEffect(() => {
        null != k.current && A(k.current.getBoundingClientRect());
    }, [k]),
        o.useEffect(() => {
            let e = () => {
                null != k.current && A(k.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [k]);
    let B = (e) => {
            I(e.clientX);
        },
        L = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === u.mR.ArrowRight && null != E && (e.preventDefault(), e.stopPropagation(), E());
            },
            [S, E]
        ),
        P = null != T && null != h ? m(T, h, C) : 0,
        M = (0, c.yv)(P),
        O = null != h ? h.right - f((t / 100) * C, C, h) : null,
        R = null != T && null != h ? h.right - T : null,
        w = null != j && null != h ? h.right - j : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: k,
        children: [
            (0, r.jsxs)(a.Clickable, {
                className: l()(d.hitboxArea, { [d.interactionEnabled]: i }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!i && null != x) x(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
                },
                onMouseEnter: (e) => {
                    if (!!i) null != k.current && A(k.current.getBoundingClientRect()), D(!0), B(e);
                },
                onMouseLeave: (e) => {
                    if (!!i) D(!1), I(null);
                },
                onMouseMove: (e) => {
                    if (!!i) b && B(e);
                },
                onKeyDown: L,
                tabIndex: i ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12
                    }
                },
                children: [
                    null == v
                        ? void 0
                        : v.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: l()(d.buffer, { [d.bufferHovered]: b }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !i &&
                        null != w &&
                        w > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != w ? ''.concat(w, 'px') : 'auto',
                                opacity: null != w ? 1 : 0
                            }
                        }),
                    (0, r.jsx)(a.Progress, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != p ? p : void 0,
                        size: b ? a.Progress.Sizes.XSMALL : a.Progress.Sizes.XXSMALL,
                        animate: n
                    }),
                    b &&
                        null != M &&
                        (0, r.jsx)(a.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: {
                                right: null != R ? ''.concat(R - 10, 'px') : 'auto',
                                color: '#FFFFFF'
                            },
                            children: M
                        }),
                    b &&
                        i &&
                        null != O &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: ''.concat(O - 6, 'px') }
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.progressGlow,
                style: { width: ''.concat(t, '%') }
            })
        ]
    });
}
