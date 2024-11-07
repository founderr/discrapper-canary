n.d(t, {
    Z: function () {
        return f;
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
    d = n(504446);
function m(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function p(e, t, n) {
    return n.left + (e / t) * n.width;
}
function f(e) {
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: f, preloadedBuffers: v, duration: C, maxSeekableTime: g, onClick: x, onScrubBack: h, onScrubForward: E } = e,
        [S, _] = o.useState(null),
        [j, T] = o.useState(null),
        [N, I] = o.useState(null),
        [b, y] = o.useState(!1),
        B = o.useRef(null),
        D = (e) => {
            (B.current = e), _(e);
        };
    o.useEffect(() => {
        null != S && (null == g ? I(null) : I(p(g, C, S)));
    }, [S, g, C]);
    let k = (0, s.y)(() => {
        if (null != k.current) D(k.current.getBoundingClientRect());
    });
    o.useLayoutEffect(() => {
        null != k.current && D(k.current.getBoundingClientRect());
    }, [k]),
        o.useEffect(() => {
            let e = () => {
                null != k.current && D(k.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [k]);
    let A = (e) => {
            T(e.clientX);
        },
        L = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != h ? (e.preventDefault(), e.stopPropagation(), h()) : t === u.mR.ArrowRight && null != E && (e.preventDefault(), e.stopPropagation(), E());
            },
            [h, E]
        ),
        M = null != j && null != S ? m(j, S, C) : 0,
        O = (0, c.yv)(M),
        P = null != S ? S.right - p((t / 100) * C, C, S) : null,
        R = null != j && null != S ? S.right - j : null,
        w = null != N && null != S ? S.right - N : null;
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
                    if (!!i) null != k.current && D(k.current.getBoundingClientRect()), y(!0), A(e);
                },
                onMouseLeave: (e) => {
                    if (!!i) y(!1), T(null);
                },
                onMouseMove: (e) => {
                    if (!!i) b && A(e);
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
                        backgroundColor: null != f ? f : void 0,
                        size: b ? a.Progress.Sizes.XSMALL : a.Progress.Sizes.XXSMALL,
                        animate: n
                    }),
                    b &&
                        null != O &&
                        (0, r.jsx)(a.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: { right: null != R ? ''.concat(R - 10, 'px') : 'auto' },
                            children: O
                        }),
                    b &&
                        i &&
                        null != P &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: ''.concat(P - 6, 'px') }
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
