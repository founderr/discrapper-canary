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
    let { percent: t, animate: n, interactionEnabled: l, backgroundColor: p, preloadedBuffers: E, duration: f, maxSeekableTime: g, onClick: C, onScrubBack: S, onScrubForward: x } = e,
        [h, _] = i.useState(null),
        [T, I] = i.useState(null),
        [D, N] = i.useState(null),
        [j, A] = i.useState(!1),
        b = i.useRef(null),
        L = (e) => {
            (b.current = e), _(e);
        };
    i.useEffect(() => {
        null != h && (null == g ? N(null) : N(v(g, f, h)));
    }, [h, g, f]);
    let M = (0, a.y)(() => {
        if (null != M.current) L(M.current.getBoundingClientRect());
    });
    i.useLayoutEffect(() => {
        null != M.current && L(M.current.getBoundingClientRect());
    }, [M]),
        i.useEffect(() => {
            let e = () => {
                null != M.current && L(M.current.getBoundingClientRect());
            };
            return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
        }, [M]);
    let O = (e) => {
            I(e.clientX);
        },
        k = i.useCallback(
            (e) => {
                let { key: t } = e;
                t === c.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === c.mR.ArrowRight && null != x && (e.preventDefault(), e.stopPropagation(), x());
            },
            [S, x]
        ),
        y = null != T && null != h ? m(T, h, f) : 0,
        P = (0, u.yv)(y),
        R = null != h ? h.right - v((t / 100) * f, f, h) : null,
        w = null != T && null != h ? h.right - T : null,
        Z = null != D && null != h ? h.right - D : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: M,
        children: [
            (0, r.jsxs)(s.Clickable, {
                className: o()(d.hitboxArea, { [d.interactionEnabled]: l }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!l && null != C) C(m(e.clientX, e.currentTarget.getBoundingClientRect(), f));
                },
                onMouseEnter: (e) => {
                    if (!!l) null != M.current && L(M.current.getBoundingClientRect()), A(!0), O(e);
                },
                onMouseLeave: (e) => {
                    if (!!l) A(!1), I(null);
                },
                onMouseMove: (e) => {
                    if (!!l) j && O(e);
                },
                onKeyDown: k,
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
                                      className: o()(d.buffer, { [d.bufferHovered]: j }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !l &&
                        null != Z &&
                        Z > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != Z ? ''.concat(Z, 'px') : 'auto',
                                opacity: null != Z ? 1 : 0
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
                        null != P &&
                        (0, r.jsx)(s.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: {
                                right: null != w ? ''.concat(w - 10, 'px') : 'auto',
                                color: '#FFFFFF'
                            },
                            children: P
                        }),
                    j &&
                        l &&
                        null != R &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: ''.concat(R - 6, 'px') }
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
