t.d(n, {
    Z: function () {
        return h;
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
    m = t(772606),
    p = t(624781);
function _(e, n, t) {
    return e + (n - e) * t;
}
function C(e) {
    let [n, t] = a.useState(void 0);
    return (
        a.useEffect(() => {
            null != e.current && t(getComputedStyle(e.current));
        }, [e]),
        n
    );
}
function h(e) {
    let { name: n, iconURL: t, scrollerRef: _ } = e,
        h = (0, o.ap)((0, s.ZP)()),
        f = a.useRef(null),
        A = a.useRef(null),
        E = a.useRef(null),
        x = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
        N = (0, c.ZP)('number' == typeof t ? '' : t, null != x ? x : ''),
        v = a.useMemo(() => {
            var e, n;
            let t = (0, l.compact)([d.Z.parseHexString(N), d.Z.parseHexString(h ? '#000000' : '#ffffff')]);
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
                : N;
        }, [N, h]),
        I = C(f),
        g = C(A),
        b = a.useCallback(() => {
            var e, n, t, i, a, o, r, s, c;
            let d = _.current,
                u = f.current,
                m = E.current,
                p = parseInt(null !== (e = null == I ? void 0 : I.height) && void 0 !== e ? e : ''),
                C = parseInt(null !== (n = null == g ? void 0 : g.height) && void 0 !== n ? n : '');
            if (null != d && null != u && null != m && !isNaN(p) && !isNaN(C)) {
                let e = null !== (t = d.scrollTop) && void 0 !== t ? t : 0,
                    n = 0 !== d.scrollHeight ? d.scrollHeight : C + 20,
                    _ = 0 !== d.clientHeight ? d.clientHeight : C + 20,
                    f = C - p,
                    A = (0, l.clamp)(n - _, f + 1, C + 20);
                let E = ((i = e), (a = f) === (o = A) ? 1 : (0, l.clamp)((i - a) / (o - a), 0, 1));
                (u.style.filter = 'brightness('.concat(1 + ((h ? 1.4 : 0.6) - (r = 1)) * E, ')')),
                    (u.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(N, ' ')
                        .concat((1 - E) * 100, '%, ')
                        .concat(v, ')')),
                    (m.style.opacity = ''.concat(0 + (1 - (s = 0)) * E)),
                    (m.style.transform = 'translateY('.concat((c = p / 4) + (0 - c) * E, 'px)'));
            }
        }, [v, N, null == g ? void 0 : g.height, h, _, null == I ? void 0 : I.height]);
    return (
        a.useEffect(() => {
            b();
        }, [b, h]),
        a.useEffect(() => {
            let e = _.current,
                n = () => {
                    b();
                };
            return (
                null == e || e.addEventListener('scroll', n),
                () => {
                    null == e || e.removeEventListener('scroll', n);
                }
            );
        }, [_, b]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: p.stickyContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: p.stickyBannerContainer,
                            children: (0, i.jsx)('div', {
                                className: p.stickyBanner,
                                ref: f
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: p.backButtonContainer,
                            children: (0, i.jsx)(m.Z, {})
                        }),
                        (0, i.jsx)('div', {
                            className: p.nameContainer,
                            children: (0, i.jsx)(r.Heading, {
                                ref: E,
                                className: p.textApplicationName,
                                variant: 'heading-md/extrabold',
                                children: n
                            })
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    ref: A,
                    className: p.bannerBackground,
                    style: { backgroundColor: N }
                })
            ]
        })
    );
}
