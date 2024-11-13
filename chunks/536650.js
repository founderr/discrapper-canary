t.d(n, {
    Z: function () {
        return x;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(392711),
    o = t(780384),
    r = t(481060),
    s = t(410030),
    c = t(220082),
    d = t(564334),
    u = t(302221),
    m = t(783097),
    p = t(772606),
    h = t(488977),
    f = t(289760);
function C(e, n, t) {
    return e + (n - e) * t;
}
function v(e) {
    let [n, t] = l.useState(void 0);
    return (
        l.useEffect(() => {
            null != e.current && t(getComputedStyle(e.current));
        }, [e]),
        n
    );
}
function x(e) {
    let { application: n, name: t, iconURL: C, scrollerRef: x, sectionName: _ } = e,
        N = (0, o.ap)((0, s.ZP)()),
        g = l.useRef(null),
        A = l.useRef(null),
        b = l.useRef(null),
        E = l.useRef(null),
        I = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
        j = (0, c.ZP)('number' == typeof C ? '' : C, null != I ? I : ''),
        S = l.useMemo(() => {
            var e, n;
            let t = (0, a.compact)([d.Z.parseHexString(j), d.Z.parseHexString(N ? '#000000' : '#ffffff')]);
            return null !==
                (n =
                    null ===
                        (e = (0, u.k8)({
                            colors: t,
                            ratio: 5,
                            saturationFactor: 0.6
                        })) || void 0 === e
                        ? void 0
                        : e.toHexString()) && void 0 !== n
                ? n
                : j;
        }, [j, N]),
        P = v(g),
        y = v(A),
        T = l.useCallback(() => {
            var e, n, t, i, l, o, r, s, c, d;
            let u = x.current,
                m = g.current,
                p = b.current,
                h = null == E ? void 0 : E.current,
                f = parseInt(null !== (e = null == P ? void 0 : P.height) && void 0 !== e ? e : ''),
                C = parseInt(null !== (n = null == y ? void 0 : y.height) && void 0 !== n ? n : '');
            if (null != u && null != m && null != p && !isNaN(f) && !isNaN(C)) {
                let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0,
                    n = 0 !== u.scrollHeight ? u.scrollHeight : C + 20,
                    v = 0 !== u.clientHeight ? u.clientHeight : C + 20,
                    x = C - f,
                    _ = (0, a.clamp)(n - v, x + 1, C + 20);
                let g = ((i = e), (l = x) === (o = _) ? 1 : (0, a.clamp)((i - l) / (o - l), 0, 1));
                if (
                    ((m.style.filter = 'brightness('.concat(1 + ((N ? 1.4 : 0.6) - (r = 1)) * g, ')')),
                    (m.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(j, ' ')
                        .concat((1 - g) * 100, '%, ')
                        .concat(S, ')')),
                    (p.style.opacity = ''.concat(0 + (1 - (s = 0)) * g)),
                    (p.style.transform = 'translateY('.concat((c = f / 4) + (0 - c) * g, 'px)')),
                    null != h)
                ) {
                    h.style.opacity = ''.concat(1 + (0 - (d = 1)) * g);
                }
            }
        }, [S, j, null == y ? void 0 : y.height, N, x, null == P ? void 0 : P.height]);
    return (
        l.useEffect(() => {
            T();
        }, [T, N]),
        l.useEffect(() => {
            let e = x.current,
                n = () => {
                    T();
                };
            return (
                null == e || e.addEventListener('scroll', n),
                () => {
                    null == e || e.removeEventListener('scroll', n);
                }
            );
        }, [x, T]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: f.stickyContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: f.stickyBannerContainer,
                            children: (0, i.jsx)('div', {
                                className: f.stickyBanner,
                                ref: g
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: f.backButtonContainer,
                            children: (0, i.jsx)(p.Z, { className: f.headerButton })
                        }),
                        (0, i.jsx)('div', {
                            className: f.nameContainer,
                            children: (0, i.jsx)(r.Heading, {
                                ref: b,
                                className: f.textApplicationName,
                                variant: 'heading-lg/extrabold',
                                children: t
                            })
                        })
                    ]
                }),
                (0, m.BQ)(n)
                    ? (0, i.jsx)('div', {
                          ref: E,
                          className: f.moreMenuButtonContainer,
                          children: (0, i.jsx)(h.Z, {
                              application: n,
                              className: f.headerButton,
                              sectionName: _
                          })
                      })
                    : null,
                (0, i.jsx)('div', {
                    ref: A,
                    className: f.bannerBackground,
                    style: { backgroundColor: j }
                })
            ]
        })
    );
}
