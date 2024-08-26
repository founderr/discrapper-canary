t.d(n, {
    Z: function () {
        return f;
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
    u = t(564334),
    d = t(302221),
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
function f(e) {
    let { name: n, iconURL: t, scrollerRef: _ } = e,
        f = (0, o.ap)((0, s.ZP)()),
        h = a.useRef(null),
        E = a.useRef(null),
        A = a.useRef(null),
        N = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
        x = (0, c.ZP)('number' == typeof t ? '' : t, null != N ? N : ''),
        v = a.useMemo(() => {
            var e, n;
            let t = (0, l.compact)([u.Z.parseHexString(x), u.Z.parseHexString(f ? '#000000' : '#ffffff')]);
            return null !==
                (n =
                    null ===
                        (e = (0, d.k8)({
                            colors: t,
                            ratio: 5,
                            saturationFactor: 0.6
                        })) || void 0 === e
                        ? void 0
                        : e.toHexString()) && void 0 !== n
                ? n
                : x;
        }, [x, f]),
        I = C(h),
        g = C(E),
        P = a.useCallback(() => {
            var e, n, t, i, a, o, r, s, c;
            let u = _.current,
                d = h.current,
                m = A.current,
                p = parseInt(null !== (e = null == I ? void 0 : I.height) && void 0 !== e ? e : ''),
                C = parseInt(null !== (n = null == g ? void 0 : g.height) && void 0 !== n ? n : '');
            if (null != u && null != d && null != m && !isNaN(p) && !isNaN(C)) {
                let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0,
                    n = 0 !== u.scrollHeight ? u.scrollHeight : C + 20,
                    _ = 0 !== u.clientHeight ? u.clientHeight : C + 20,
                    h = C - p,
                    E = (0, l.clamp)(n - _, h + 1, C + 20);
                let A = ((i = e), (a = h) === (o = E) ? 1 : (0, l.clamp)((i - a) / (o - a), 0, 1));
                (d.style.filter = 'brightness('.concat(1 + ((f ? 1.4 : 0.6) - (r = 1)) * A, ')')),
                    (d.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(x, ' ')
                        .concat((1 - A) * 100, '%, ')
                        .concat(v, ')')),
                    (m.style.opacity = ''.concat(0 + (1 - (s = 0)) * A)),
                    (m.style.transform = 'translateY('.concat((c = p / 4) + (0 - c) * A, 'px)'));
            }
        }, [v, x, null == g ? void 0 : g.height, f, _, null == I ? void 0 : I.height]);
    return (
        a.useEffect(() => {
            P();
        }, [P, f]),
        a.useEffect(() => {
            let e = _.current,
                n = () => {
                    P();
                };
            return (
                null == e || e.addEventListener('scroll', n),
                () => {
                    null == e || e.removeEventListener('scroll', n);
                }
            );
        }, [_, P]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: p.stickyContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: p.stickyBannerContainer,
                            children: (0, i.jsx)('div', {
                                className: p.stickyBanner,
                                ref: h
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: p.backButtonContainer,
                            children: (0, i.jsx)(m.Z, {})
                        }),
                        (0, i.jsx)('div', {
                            className: p.nameContainer,
                            children: (0, i.jsx)(r.Heading, {
                                ref: A,
                                className: p.textApplicationName,
                                variant: 'heading-md/extrabold',
                                children: n
                            })
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    ref: E,
                    className: p.bannerBackground,
                    style: { backgroundColor: x }
                })
            ]
        })
    );
}
