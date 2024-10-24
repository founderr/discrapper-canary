n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    i = n(393903),
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
    let { percent: t, animate: n, interactionEnabled: a, backgroundColor: f, preloadedBuffers: C, duration: _, maxSeekableTime: E, onClick: v, onScrubBack: T, onScrubForward: S } = e,
        [g, x] = o.useState(null),
        [N, h] = o.useState(null),
        [I, L] = o.useState(null),
        [O, j] = o.useState(!1);
    o.useEffect(() => {
        if (null != g) null == E ? L(null) : L(p(E, _, g));
    }, [g, E, _]);
    let b = (0, i.y)(() => {
            if (null != b.current) x(b.current.getBoundingClientRect());
        }),
        B = (e) => {
            h(e.clientX);
        },
        P = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != T ? (e.preventDefault(), e.stopPropagation(), T()) : t === u.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [T, S]
        ),
        k = null != N && null != g ? m(N, g, _) : 0,
        R = (0, c.yv)(k),
        y = null != g ? g.right - p((t / 100) * _, _, g) : null,
        D = null != N && null != g ? g.right - N : null,
        A = null != I && null != g ? g.right - I : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: b,
        children: [
            (0, r.jsxs)(l.Clickable, {
                className: s()(d.hitboxArea, { [d.interactionEnabled]: a }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!a && null != v) v(m(e.clientX, e.currentTarget.getBoundingClientRect(), _));
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
                    null == C
                        ? void 0
                        : C.map((e) =>
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
                    (0, r.jsx)(l.Progress, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != f ? f : void 0,
                        size: O ? l.Progress.Sizes.XSMALL : l.Progress.Sizes.XXSMALL,
                        animate: n
                    }),
                    O &&
                        null != R &&
                        (0, r.jsx)(l.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: { right: null != D ? ''.concat(D - 10, 'px') : 'auto' },
                            children: R
                        }),
                    O &&
                        a &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: null != y ? ''.concat(y - 6, 'px') : 'auto' }
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
