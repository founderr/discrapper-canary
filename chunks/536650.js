t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
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
    f = t(289760);
function h(e, n, t) {
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
    let { application: n, name: t, iconURL: h, scrollerRef: E, sectionName: N } = e,
        v = m.zQ.useExperiment({ location: 'AppLauncherAppHeader' }, { autoTrackExposure: !1 }).enabled,
        x = (0, o.ap)((0, s.ZP)()),
        I = a.useRef(null),
        g = a.useRef(null),
        P = a.useRef(null),
        L = a.useRef(null),
        S = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
        b = (0, c.ZP)('number' == typeof h ? '' : h, null != S ? S : ''),
        R = a.useMemo(() => {
            var e, n;
            let t = (0, l.compact)([d.Z.parseHexString(b), d.Z.parseHexString(x ? '#000000' : '#ffffff')]);
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
                : b;
        }, [b, x]),
        T = A(I),
        M = A(g),
        y = a.useCallback(() => {
            var e, n, t, i, a, o, r, s, c, d;
            let u = E.current,
                m = I.current,
                p = P.current,
                _ = null == L ? void 0 : L.current,
                C = parseInt(null !== (e = null == T ? void 0 : T.height) && void 0 !== e ? e : ''),
                f = parseInt(null !== (n = null == M ? void 0 : M.height) && void 0 !== n ? n : '');
            if (null != u && null != m && null != p && !isNaN(C) && !isNaN(f)) {
                let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0,
                    n = 0 !== u.scrollHeight ? u.scrollHeight : f + 20,
                    h = 0 !== u.clientHeight ? u.clientHeight : f + 20,
                    A = f - C,
                    E = (0, l.clamp)(n - h, A + 1, f + 20);
                let N = ((i = e), (a = A) === (o = E) ? 1 : (0, l.clamp)((i - a) / (o - a), 0, 1));
                if (
                    ((m.style.filter = 'brightness('.concat(1 + ((x ? 1.4 : 0.6) - (r = 1)) * N, ')')),
                    (m.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(b, ' ')
                        .concat((1 - N) * 100, '%, ')
                        .concat(R, ')')),
                    (p.style.opacity = ''.concat(0 + (1 - (s = 0)) * N)),
                    (p.style.transform = 'translateY('.concat((c = C / 4) + (0 - c) * N, 'px)')),
                    null != _)
                ) {
                    _.style.opacity = ''.concat(1 + (0 - (d = 1)) * N);
                }
            }
        }, [R, b, null == M ? void 0 : M.height, x, E, null == T ? void 0 : T.height]);
    return (
        a.useEffect(() => {
            y();
        }, [y, x]),
        a.useEffect(() => {
            let e = E.current,
                n = () => {
                    y();
                };
            return (
                null == e || e.addEventListener('scroll', n),
                () => {
                    null == e || e.removeEventListener('scroll', n);
                }
            );
        }, [E, y]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: f.stickyContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: f.stickyBannerContainer,
                            children: (0, i.jsx)('div', {
                                className: f.stickyBanner,
                                ref: I
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: f.backButtonContainer,
                            children: (0, i.jsx)(_.Z, { className: f.headerButton })
                        }),
                        (0, i.jsx)('div', {
                            className: f.nameContainer,
                            children: (0, i.jsx)(r.Heading, {
                                ref: P,
                                className: f.textApplicationName,
                                variant: 'heading-md/extrabold',
                                children: t
                            })
                        })
                    ]
                }),
                (0, p.BQ)(n) && v
                    ? (0, i.jsx)('div', {
                          ref: L,
                          className: f.moreMenuButtonContainer,
                          children: (0, i.jsx)(C.Z, {
                              application: n,
                              className: f.headerButton,
                              sectionName: N
                          })
                      })
                    : null,
                (0, i.jsx)('div', {
                    ref: g,
                    className: f.bannerBackground,
                    style: { backgroundColor: b }
                })
            ]
        })
    );
}
