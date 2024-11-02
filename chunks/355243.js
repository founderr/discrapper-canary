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
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: f, preloadedBuffers: v, duration: C, maxSeekableTime: g, onClick: x, onScrubBack: h, onScrubForward: S } = e,
        [E, b] = o.useState(null),
        [j, N] = o.useState(null),
        [_, T] = o.useState(null),
        [I, k] = o.useState(!1);
    o.useEffect(() => {
        if (null != E) null == g ? T(null) : T(p(g, C, E));
    }, [E, g, C]);
    let y = (0, s.y)(() => {
            if (null != y.current) b(y.current.getBoundingClientRect());
        }),
        B = (e) => {
            N(e.clientX);
        },
        A = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != h ? (e.preventDefault(), e.stopPropagation(), h()) : t === u.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [h, S]
        ),
        L = null != j && null != E ? m(j, E, C) : 0,
        P = (0, c.yv)(L),
        D = null != E ? E.right - p((t / 100) * C, C, E) : null,
        R = null != j && null != E ? E.right - j : null,
        M = null != _ && null != E ? E.right - _ : null;
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
                    if (!!i) k(!0), B(e);
                },
                onMouseLeave: (e) => {
                    if (!!i) k(!1), N(null);
                },
                onMouseMove: (e) => {
                    if (!!i) I && B(e);
                },
                onKeyDown: A,
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
                                      className: l()(d.buffer, { [d.bufferHovered]: I }),
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
                        size: I ? a.Progress.Sizes.XSMALL : a.Progress.Sizes.XXSMALL,
                        animate: n
                    }),
                    I &&
                        null != P &&
                        (0, r.jsx)(a.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: { right: null != R ? ''.concat(R - 10, 'px') : 'auto' },
                            children: P
                        }),
                    I &&
                        i &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: null != D ? ''.concat(D - 6, 'px') : 'auto' }
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
