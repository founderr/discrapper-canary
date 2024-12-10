n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(393903),
    u = n(604162),
    c = n(420212),
    d = n(452973);
function m(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function v(e, t, n) {
    return n.left + (e / t) * n.width;
}
function p(e) {
    let { percent: t, animate: n, interactionEnabled: l, backgroundColor: p, preloadedBuffers: E, duration: f, maxSeekableTime: C, onClick: g, onScrubBack: S, onScrubForward: x } = e,
        [h, _] = i.useState(null),
        [T, I] = i.useState(null),
        [N, D] = i.useState(null),
        [A, j] = i.useState(!1),
        b = i.useRef(null),
        L = (e) => {
            (b.current = e), _(e);
        };
    i.useEffect(() => {
        null != h && (null == C ? D(null) : D(v(C, f, h)));
    }, [h, C, f]);
    let k = (0, a.y)(() => {
        if (null != k.current) L(k.current.getBoundingClientRect());
    });
    i.useLayoutEffect(() => {
        null != k.current && L(k.current.getBoundingClientRect());
    }, [k]),
        i.useEffect(() => {
            let e = () => {
                null != k.current && L(k.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [k]);
    let M = (e) => {
            I(e.clientX);
        },
        O = i.useCallback(
            (e) => {
                let { key: t } = e;
                t === c.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === c.mR.ArrowRight && null != x && (e.preventDefault(), e.stopPropagation(), x());
            },
            [S, x]
        ),
        y = null != T && null != h ? m(T, h, f) : 0,
        R = (0, u.yv)(y),
        P = null != h ? h.right - v((t / 100) * f, f, h) : null,
        w = null != T && null != h ? h.right - T : null,
        B = null != N && null != h ? h.right - N : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: k,
        children: [
            (0, r.jsxs)(s.Clickable, {
                className: o()(d.hitboxArea, { [d.interactionEnabled]: l }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!l && null != g) g(m(e.clientX, e.currentTarget.getBoundingClientRect(), f));
                },
                onMouseEnter: (e) => {
                    if (!!l) null != k.current && L(k.current.getBoundingClientRect()), j(!0), M(e);
                },
                onMouseLeave: (e) => {
                    if (!!l) j(!1), I(null);
                },
                onMouseMove: (e) => {
                    if (!!l) A && M(e);
                },
                onKeyDown: O,
                tabIndex: l ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12
                    }
                },
                children: [
                    null == E
                        ? void 0
                        : E.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: o()(d.buffer, { [d.bufferHovered]: A }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !l &&
                        null != B &&
                        B > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != B ? ''.concat(B, 'px') : 'auto',
                                opacity: null != B ? 1 : 0
                            }
                        }),
                    (0, r.jsx)(s.Progress, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != p ? p : void 0,
                        size: A ? s.Progress.Sizes.XSMALL : s.Progress.Sizes.XXSMALL,
                        animate: n
                    }),
                    A &&
                        null != R &&
                        (0, r.jsx)(s.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: {
                                right: null != w ? ''.concat(w - 10, 'px') : 'auto',
                                color: '#FFFFFF'
                            },
                            children: R
                        }),
                    A &&
                        l &&
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
