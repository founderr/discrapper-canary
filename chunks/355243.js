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
    s = n(481060),
    a = n(393903),
    c = n(604162),
    u = n(420212),
    d = n(504446);
function m(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function f(e, t, n) {
    return n.left + (e / t) * n.width;
}
function p(e) {
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: p, preloadedBuffers: v, duration: C, maxSeekableTime: g, onClick: x, onScrubBack: S, onScrubForward: _ } = e,
        [E, h] = o.useState(null),
        [T, I] = o.useState(null),
        [N, b] = o.useState(null),
        [j, D] = o.useState(!1),
        A = o.useRef(null),
        y = (e) => {
            (A.current = e), h(e);
        };
    o.useEffect(() => {
        null != E && (null == g ? b(null) : b(f(g, C, E)));
    }, [E, g, C]);
    let k = (0, a.y)(() => {
        if (null != k.current) y(k.current.getBoundingClientRect());
    });
    o.useLayoutEffect(() => {
        null != k.current && y(k.current.getBoundingClientRect());
    }, [k]),
        o.useEffect(() => {
            let e = () => {
                null != k.current && y(k.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [k]);
    let B = (e) => {
            I(e.clientX);
        },
        L = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === u.mR.ArrowRight && null != _ && (e.preventDefault(), e.stopPropagation(), _());
            },
            [S, _]
        ),
        P = null != T && null != E ? m(T, E, C) : 0,
        M = (0, c.yv)(P),
        O = null != E ? E.right - f((t / 100) * C, C, E) : null,
        R = null != T && null != E ? E.right - T : null,
        w = null != N && null != E ? E.right - N : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: k,
        children: [
            (0, r.jsxs)(s.Clickable, {
                className: l()(d.hitboxArea, { [d.interactionEnabled]: i }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!i && null != x) x(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
                },
                onMouseEnter: (e) => {
                    if (!!i) null != k.current && y(k.current.getBoundingClientRect()), D(!0), B(e);
                },
                onMouseLeave: (e) => {
                    if (!!i) D(!1), I(null);
                },
                onMouseMove: (e) => {
                    if (!!i) j && B(e);
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
                                      className: l()(d.buffer, { [d.bufferHovered]: j }),
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
                    (0, r.jsx)(s.Progress, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != p ? p : void 0,
                        size: j ? s.Progress.Sizes.XSMALL : s.Progress.Sizes.XXSMALL,
                        animate: n
                    }),
                    j &&
                        null != M &&
                        (0, r.jsx)(s.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: {
                                right: null != R ? ''.concat(R - 10, 'px') : 'auto',
                                color: '#FFFFFF'
                            },
                            children: M
                        }),
                    j &&
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
