t.d(n, {
    Z: function () {
        return _;
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
    m = t(424602),
    p = t(783097),
    h = t(772606),
    f = t(488977),
    C = t(289760);
function v(e, n, t) {
    return e + (n - e) * t;
}
function x(e) {
    let [n, t] = l.useState(void 0);
    return (
        l.useEffect(() => {
            null != e.current && t(getComputedStyle(e.current));
        }, [e]),
        n
    );
}
function _(e) {
    let { application: n, name: t, iconURL: v, scrollerRef: _, sectionName: N } = e,
        g = m.zQ.useExperiment({ location: 'AppLauncherAppHeader' }, { autoTrackExposure: !1 }).enabled,
        A = (0, o.ap)((0, s.ZP)()),
        b = l.useRef(null),
        E = l.useRef(null),
        I = l.useRef(null),
        j = l.useRef(null),
        S = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
        y = (0, c.ZP)('number' == typeof v ? '' : v, null != S ? S : ''),
        P = l.useMemo(() => {
            var e, n;
            let t = (0, a.compact)([d.Z.parseHexString(y), d.Z.parseHexString(A ? '#000000' : '#ffffff')]);
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
                : y;
        }, [y, A]),
        T = x(b),
        L = x(E),
        R = l.useCallback(() => {
            var e, n, t, i, l, o, r, s, c, d;
            let u = _.current,
                m = b.current,
                p = I.current,
                h = null == j ? void 0 : j.current,
                f = parseInt(null !== (e = null == T ? void 0 : T.height) && void 0 !== e ? e : ''),
                C = parseInt(null !== (n = null == L ? void 0 : L.height) && void 0 !== n ? n : '');
            if (null != u && null != m && null != p && !isNaN(f) && !isNaN(C)) {
                let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0,
                    n = 0 !== u.scrollHeight ? u.scrollHeight : C + 20,
                    v = 0 !== u.clientHeight ? u.clientHeight : C + 20,
                    x = C - f,
                    _ = (0, a.clamp)(n - v, x + 1, C + 20);
                let N = ((i = e), (l = x) === (o = _) ? 1 : (0, a.clamp)((i - l) / (o - l), 0, 1));
                if (
                    ((m.style.filter = 'brightness('.concat(1 + ((A ? 1.4 : 0.6) - (r = 1)) * N, ')')),
                    (m.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(y, ' ')
                        .concat((1 - N) * 100, '%, ')
                        .concat(P, ')')),
                    (p.style.opacity = ''.concat(0 + (1 - (s = 0)) * N)),
                    (p.style.transform = 'translateY('.concat((c = f / 4) + (0 - c) * N, 'px)')),
                    null != h)
                ) {
                    h.style.opacity = ''.concat(1 + (0 - (d = 1)) * N);
                }
            }
        }, [P, y, null == L ? void 0 : L.height, A, _, null == T ? void 0 : T.height]);
    return (
        l.useEffect(() => {
            R();
        }, [R, A]),
        l.useEffect(() => {
            let e = _.current,
                n = () => {
                    R();
                };
            return (
                null == e || e.addEventListener('scroll', n),
                () => {
                    null == e || e.removeEventListener('scroll', n);
                }
            );
        }, [_, R]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: C.stickyContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: C.stickyBannerContainer,
                            children: (0, i.jsx)('div', {
                                className: C.stickyBanner,
                                ref: b
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: C.backButtonContainer,
                            children: (0, i.jsx)(h.Z, { className: C.headerButton })
                        }),
                        (0, i.jsx)('div', {
                            className: C.nameContainer,
                            children: (0, i.jsx)(r.Heading, {
                                ref: I,
                                className: C.textApplicationName,
                                variant: 'heading-lg/extrabold',
                                children: t
                            })
                        })
                    ]
                }),
                (0, p.BQ)(n) && g
                    ? (0, i.jsx)('div', {
                          ref: j,
                          className: C.moreMenuButtonContainer,
                          children: (0, i.jsx)(f.Z, {
                              application: n,
                              className: C.headerButton,
                              sectionName: N
                          })
                      })
                    : null,
                (0, i.jsx)('div', {
                    ref: E,
                    className: C.bannerBackground,
                    style: { backgroundColor: y }
                })
            ]
        })
    );
}
