t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var i = t(200651),
    a = t(192379),
    l = t(392711),
    o = t(780384),
    r = t(481060),
    s = t(410030),
    c = t(220082),
    d = t(564334),
    u = t(302221),
    m = t(424602),
    p = t(783097),
    _ = t(772606),
    C = t(488977),
    h = t(289760);
function f(e, n, t) {
    return e + (n - e) * t;
}
function A(e) {
    let [n, t] = a.useState(void 0);
    return (
        a.useEffect(() => {
            null != e.current && t(getComputedStyle(e.current));
        }, [e]),
        n
    );
}
function E(e) {
    let { application: n, name: t, iconURL: f, scrollerRef: E, sectionName: N } = e,
        v = m.zQ.useExperiment({ location: 'AppLauncherAppHeader' }, { autoTrackExposure: !1 }).enabled,
        x = (0, o.ap)((0, s.ZP)()),
        I = a.useRef(null),
        P = a.useRef(null),
        g = a.useRef(null),
        T = a.useRef(null),
        L = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
        S = (0, c.ZP)('number' == typeof f ? '' : f, null != L ? L : ''),
        b = a.useMemo(() => {
            var e, n;
            let t = (0, l.compact)([d.Z.parseHexString(S), d.Z.parseHexString(x ? '#000000' : '#ffffff')]);
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
                : S;
        }, [S, x]),
        R = A(I),
        M = A(P),
        j = a.useCallback(() => {
            var e, n, t, i, a, o, r, s, c, d;
            let u = E.current,
                m = I.current,
                p = g.current,
                _ = null == T ? void 0 : T.current,
                C = parseInt(null !== (e = null == R ? void 0 : R.height) && void 0 !== e ? e : ''),
                h = parseInt(null !== (n = null == M ? void 0 : M.height) && void 0 !== n ? n : '');
            if (null != u && null != m && null != p && !isNaN(C) && !isNaN(h)) {
                let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0,
                    n = 0 !== u.scrollHeight ? u.scrollHeight : h + 20,
                    f = 0 !== u.clientHeight ? u.clientHeight : h + 20,
                    A = h - C,
                    E = (0, l.clamp)(n - f, A + 1, h + 20);
                let N = ((i = e), (a = A) === (o = E) ? 1 : (0, l.clamp)((i - a) / (o - a), 0, 1));
                if (
                    ((m.style.filter = 'brightness('.concat(1 + ((x ? 1.4 : 0.6) - (r = 1)) * N, ')')),
                    (m.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(S, ' ')
                        .concat((1 - N) * 100, '%, ')
                        .concat(b, ')')),
                    (p.style.opacity = ''.concat(0 + (1 - (s = 0)) * N)),
                    (p.style.transform = 'translateY('.concat((c = C / 4) + (0 - c) * N, 'px)')),
                    null != _)
                ) {
                    _.style.opacity = ''.concat(1 + (0 - (d = 1)) * N);
                }
            }
        }, [b, S, null == M ? void 0 : M.height, x, E, null == R ? void 0 : R.height]);
    return (
        a.useEffect(() => {
            j();
        }, [j, x]),
        a.useEffect(() => {
            let e = E.current,
                n = () => {
                    j();
                };
            return (
                null == e || e.addEventListener('scroll', n),
                () => {
                    null == e || e.removeEventListener('scroll', n);
                }
            );
        }, [E, j]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: h.stickyContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: h.stickyBannerContainer,
                            children: (0, i.jsx)('div', {
                                className: h.stickyBanner,
                                ref: I
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: h.backButtonContainer,
                            children: (0, i.jsx)(_.Z, { className: h.headerButton })
                        }),
                        (0, i.jsx)('div', {
                            className: h.nameContainer,
                            children: (0, i.jsx)(r.Heading, {
                                ref: g,
                                className: h.textApplicationName,
                                variant: 'heading-md/extrabold',
                                children: t
                            })
                        })
                    ]
                }),
                (0, p.BQ)(n) && v
                    ? (0, i.jsx)('div', {
                          ref: T,
                          className: h.moreMenuButtonContainer,
                          children: (0, i.jsx)(C.Z, {
                              application: n,
                              className: h.headerButton,
                              sectionName: N
                          })
                      })
                    : null,
                (0, i.jsx)('div', {
                    ref: P,
                    className: h.bannerBackground,
                    style: { backgroundColor: S }
                })
            ]
        })
    );
}
