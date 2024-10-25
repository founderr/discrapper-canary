t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var r = t(200651),
    o = t(192379),
    a = t(120356),
    s = t.n(a),
    i = t(481060),
    l = t(393903),
    c = t(604162),
    u = t(420212),
    d = t(504446);
function m(e, n, t) {
    return t * (Math.max(e - n.left, 0) / n.width);
}
function p(e, n, t) {
    return t.left + (e / n) * t.width;
}
function f(e) {
    let { percent: n, animate: t, interactionEnabled: a, backgroundColor: f, preloadedBuffers: _, duration: C, maxSeekableTime: E, onClick: v, onScrubBack: S, onScrubForward: T } = e,
        [g, x] = o.useState(null),
        [N, h] = o.useState(null),
        [I, L] = o.useState(null),
        [O, j] = o.useState(!1);
    o.useEffect(() => {
        if (null != g) null == E ? L(null) : L(p(E, C, g));
    }, [g, E, C]);
    let b = (0, l.y)(() => {
            if (null != b.current) x(b.current.getBoundingClientRect());
        }),
        B = (e) => {
            h(e.clientX);
        },
        P = o.useCallback(
            (e) => {
                let { key: n } = e;
                n === u.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : n === u.mR.ArrowRight && null != T && (e.preventDefault(), e.stopPropagation(), T());
            },
            [S, T]
        ),
        k = null != N && null != g ? m(N, g, C) : 0,
        y = (0, c.yv)(k),
        R = null != g ? g.right - p((n / 100) * C, C, g) : null,
        D = null != N && null != g ? g.right - N : null,
        A = null != I && null != g ? g.right - I : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: b,
        children: [
            (0, r.jsxs)(i.Clickable, {
                className: s()(d.hitboxArea, { [d.interactionEnabled]: a }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!a && null != v) v(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
                },
                onMouseEnter: (e) => {
                    if (!!a) j(!0), B(e);
                },
                onMouseLeave: (e) => {
                    if (!!a) j(!1), h(null);
                },
                onMouseMove: (e) => {
                    if (!!a) O && B(e);
                },
                onKeyDown: P,
                tabIndex: a ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12
                    }
                },
                children: [
                    null == _
                        ? void 0
                        : _.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: s()(d.buffer, { [d.bufferHovered]: O }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !a &&
                        null != A &&
                        A > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != A ? ''.concat(A, 'px') : 'auto',
                                opacity: null != A ? 1 : 0
                            }
                        }),
                    (0, r.jsx)(i.Progress, {
                        className: d.progress,
                        percent: n,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != f ? f : void 0,
                        size: O ? i.Progress.Sizes.XSMALL : i.Progress.Sizes.XXSMALL,
                        animate: t
                    }),
                    O &&
                        null != y &&
                        (0, r.jsx)(i.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: { right: null != D ? ''.concat(D - 10, 'px') : 'auto' },
                            children: y
                        }),
                    O &&
                        a &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: null != R ? ''.concat(R - 6, 'px') : 'auto' }
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.progressGlow,
                style: { width: ''.concat(n, '%') }
            })
        ]
    });
}
