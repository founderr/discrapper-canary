n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(481060),
    l = n(393903),
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
    let { percent: t, animate: n, interactionEnabled: a, backgroundColor: f, preloadedBuffers: C, duration: _, maxSeekableTime: v, onClick: E, onScrubBack: S, onScrubForward: T } = e,
        [g, x] = o.useState(null),
        [N, h] = o.useState(null),
        [I, O] = o.useState(null),
        [b, j] = o.useState(!1);
    o.useEffect(() => {
        if (null != g) null == v ? O(null) : O(p(v, _, g));
    }, [g, v, _]);
    let L = (0, l.y)(() => {
            if (null != L.current) x(L.current.getBoundingClientRect());
        }),
        B = (e) => {
            h(e.clientX);
        },
        k = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === u.mR.ArrowRight && null != T && (e.preventDefault(), e.stopPropagation(), T());
            },
            [S, T]
        ),
        y = null != N && null != g ? m(N, g, _) : 0,
        P = (0, c.yv)(y),
        R = null != g ? g.right - p((t / 100) * _, _, g) : null,
        D = null != N && null != g ? g.right - N : null,
        M = null != I && null != g ? g.right - I : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: L,
        children: [
            (0, r.jsxs)(s.Clickable, {
                className: i()(d.hitboxArea, { [d.interactionEnabled]: a }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!a && null != E) E(m(e.clientX, e.currentTarget.getBoundingClientRect(), _));
                },
                onMouseEnter: (e) => {
                    if (!!a) j(!0), B(e);
                },
                onMouseLeave: (e) => {
                    if (!!a) j(!1), h(null);
                },
                onMouseMove: (e) => {
                    if (!!a) b && B(e);
                },
                onKeyDown: k,
                tabIndex: a ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12
                    }
                },
                children: [
                    null == C
                        ? void 0
                        : C.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: i()(d.buffer, { [d.bufferHovered]: b }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !a &&
                        null != M &&
                        M > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != M ? ''.concat(M, 'px') : 'auto',
                                opacity: null != M ? 1 : 0
                            }
                        }),
                    (0, r.jsx)(s.Progress, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != f ? f : void 0,
                        size: b ? s.Progress.Sizes.XSMALL : s.Progress.Sizes.XXSMALL,
                        animate: n
                    }),
                    b &&
                        null != P &&
                        (0, r.jsx)(s.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: { right: null != D ? ''.concat(D - 10, 'px') : 'auto' },
                            children: P
                        }),
                    b &&
                        a &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: null != R ? ''.concat(R - 6, 'px') : 'auto' }
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
