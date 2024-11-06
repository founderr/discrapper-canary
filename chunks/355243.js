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
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: f, preloadedBuffers: v, duration: C, maxSeekableTime: g, onClick: x, onScrubBack: S, onScrubForward: E } = e,
        [h, _] = o.useState(null),
        [T, I] = o.useState(null),
        [j, N] = o.useState(null),
        [b, D] = o.useState(!1);
    o.useEffect(() => {
        if (null != h) null == g ? N(null) : N(p(g, C, h));
    }, [h, g, C]);
    let y = (0, s.y)(() => {
            if (null != y.current) _(y.current.getBoundingClientRect());
        }),
        B = (e) => {
            I(e.clientX);
        },
        k = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === u.mR.ArrowRight && null != E && (e.preventDefault(), e.stopPropagation(), E());
            },
            [S, E]
        ),
        A = null != T && null != h ? m(T, h, C) : 0,
        L = (0, c.yv)(A),
        O = null != h ? h.right - p((t / 100) * C, C, h) : null,
        P = null != T && null != h ? h.right - T : null,
        M = null != j && null != h ? h.right - j : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: y,
        children: [
            (0, r.jsxs)(a.Clickable, {
                className: l()(d.hitboxArea, { [d.interactionEnabled]: i }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!i && null != x) x(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
                },
                onMouseEnter: (e) => {
                    if (!!i) D(!0), B(e);
                },
                onMouseLeave: (e) => {
                    if (!!i) D(!1), I(null);
                },
                onMouseMove: (e) => {
                    if (!!i) b && B(e);
                },
                onKeyDown: k,
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
                        null != M &&
                        M > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != M ? ''.concat(M, 'px') : 'auto',
                                opacity: null != M ? 1 : 0
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
                        null != L &&
                        (0, r.jsx)(a.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: { right: null != P ? ''.concat(P - 10, 'px') : 'auto' },
                            children: L
                        }),
                    b &&
                        i &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: null != O ? ''.concat(O - 6, 'px') : 'auto' }
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
