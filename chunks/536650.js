t.d(n, {
    Z: function () {
        return A;
    }
}), t(47120);
var i = t(735250), l = t(470079), a = t(392711), r = t(780384), s = t(481060), o = t(410030), c = t(220082), u = t(564334), d = t(302221), m = t(772606), _ = t(280283);
function p(e, n, t) {
    return e + (n - e) * t;
}
function E(e) {
    let [n, t] = l.useState(void 0);
    return l.useEffect(() => {
        null != e.current && t(getComputedStyle(e.current));
    }, [e]), n;
}
function A(e) {
    let {
            name: n,
            iconURL: t,
            scrollerRef: p
        } = e, A = (0, r.ap)((0, o.ZP)()), N = l.useRef(null), h = l.useRef(null), C = l.useRef(null), f = (0, s.useToken)(s.tokens.colors.BG_BASE_PRIMARY).hex(), I = (0, c.ZP)('number' == typeof t ? '' : t, null != f ? f : ''), v = l.useMemo(() => {
            var e, n;
            let t = (0, a.compact)([
                u.Z.parseHexString(I),
                u.Z.parseHexString(A ? '#000000' : '#ffffff')
            ]);
            return null !== (n = null === (e = (0, d.k8)({
                colors: t,
                ratio: 5,
                saturationFactor: 0.6
            })) || void 0 === e ? void 0 : e.toHexString()) && void 0 !== n ? n : I;
        }, [
            I,
            A
        ]), x = E(N), P = E(h), g = l.useCallback(() => {
            var e, n, t, i, l, r, s, o, c;
            let u = p.current, d = N.current, m = C.current, _ = parseInt(null !== (e = null == x ? void 0 : x.height) && void 0 !== e ? e : ''), E = parseInt(null !== (n = null == P ? void 0 : P.height) && void 0 !== n ? n : '');
            if (null != u && null != d && null != m && !isNaN(_) && !isNaN(E)) {
                ;
                let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0, n = 0 !== u.scrollHeight ? u.scrollHeight : E + 20, p = 0 !== u.clientHeight ? u.clientHeight : E + 20, N = E - _, h = (0, a.clamp)(n - p, N + 1, E + 20);
                let C = (i = e, (l = N) === (r = h) ? 1 : (0, a.clamp)((i - l) / (r - l), 0, 1));
                d.style.filter = 'brightness('.concat(1 + ((A ? 1.4 : 0.6) - (s = 1)) * C, ')'), d.style.backgroundColor = 'color-mix(in oklab,'.concat(I, ' ').concat((1 - C) * 100, '%, ').concat(v, ')'), m.style.opacity = ''.concat(0 + (1 - (o = 0)) * C), m.style.transform = 'translateY('.concat((c = _ / 4) + (0 - c) * C, 'px)');
            }
        }, [
            v,
            I,
            null == P ? void 0 : P.height,
            A,
            p,
            null == x ? void 0 : x.height
        ]);
    return l.useEffect(() => {
        g();
    }, [
        g,
        A
    ]), l.useEffect(() => {
        let e = p.current, n = () => {
                g();
            };
        return null == e || e.addEventListener('scroll', n), () => {
            null == e || e.removeEventListener('scroll', n);
        };
    }, [
        p,
        g
    ]), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: _.stickyContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: _.stickyBannerContainer,
                        children: (0, i.jsx)('div', {
                            className: _.stickyBanner,
                            ref: N
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: _.backButtonContainer,
                        children: (0, i.jsx)(m.Z, {})
                    }),
                    (0, i.jsx)('div', {
                        className: _.nameContainer,
                        children: (0, i.jsx)(s.Heading, {
                            ref: C,
                            className: _.textApplicationName,
                            variant: 'heading-md/extrabold',
                            children: n
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                ref: h,
                className: _.bannerBackground,
                style: { backgroundColor: I }
            })
        ]
    });
}
