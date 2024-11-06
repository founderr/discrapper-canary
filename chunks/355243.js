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
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: f, preloadedBuffers: v, duration: C, maxSeekableTime: x, onClick: g, onScrubBack: h, onScrubForward: S } = e,
        [E, _] = o.useState(null),
        [j, T] = o.useState(null),
        [N, I] = o.useState(null),
        [b, y] = o.useState(!1);
    o.useEffect(() => {
        if (null != E) null == x ? I(null) : I(p(x, C, E));
    }, [E, x, C]);
    let D = (0, s.y)(() => {
            if (null != D.current) _(D.current.getBoundingClientRect());
        }),
        B = (e) => {
            T(e.clientX);
        },
        k = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != h ? (e.preventDefault(), e.stopPropagation(), h()) : t === u.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [h, S]
        ),
        A = null != j && null != E ? m(j, E, C) : 0,
        L = (0, c.yv)(A),
        M = null != E ? E.right - p((t / 100) * C, C, E) : null,
        O = null != j && null != E ? E.right - j : null,
        P = null != N && null != E ? E.right - N : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: D,
        children: [
            (0, r.jsxs)(a.Clickable, {
                className: l()(d.hitboxArea, { [d.interactionEnabled]: i }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!i && null != g) g(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
                },
                onMouseEnter: (e) => {
                    if (!!i) y(!0), B(e);
                },
                onMouseLeave: (e) => {
                    if (!!i) y(!1), T(null);
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
                        null != P &&
                        P > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != P ? ''.concat(P, 'px') : 'auto',
                                opacity: null != P ? 1 : 0
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
                            style: { right: null != O ? ''.concat(O - 10, 'px') : 'auto' },
                            children: L
                        }),
                    b &&
                        i &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: null != M ? ''.concat(M - 6, 'px') : 'auto' }
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
