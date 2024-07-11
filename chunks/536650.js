t.d(n, {
    Z: function () {
        return h;
    }
}), t(47120);
var i = t(735250), l = t(470079), r = t(392711), a = t(780384), s = t(481060), o = t(410030), c = t(220082), u = t(564334), d = t(302221), m = t(772606), p = t(280283);
function _(e, n, t) {
    return e + (n - e) * t;
}
function E(e) {
    let [n, t] = l.useState(void 0);
    return l.useEffect(() => {
        null != e.current && t(getComputedStyle(e.current));
    }, [e]), n;
}
function h(e) {
    let {
            name: n,
            iconURL: t,
            scrollerRef: _
        } = e, h = (0, a.ap)((0, o.ZP)()), A = l.useRef(null), N = l.useRef(null), f = l.useRef(null), C = (0, s.useToken)(s.tokens.colors.BG_BASE_PRIMARY).hex(), I = (0, c.ZP)('number' == typeof t ? '' : t, null != C ? C : ''), v = l.useMemo(() => {
            var e, n;
            let t = (0, r.compact)([
                u.Z.parseHexString(I),
                u.Z.parseHexString(h ? '#000000' : '#ffffff')
            ]);
            return null !== (n = null === (e = (0, d.k8)({
                colors: t,
                ratio: 5,
                saturationFactor: 0.6
            })) || void 0 === e ? void 0 : e.toHexString()) && void 0 !== n ? n : I;
        }, [
            I,
            h
        ]), P = E(A), x = E(N), T = l.useCallback(() => {
            var e, n, t, i, l, a, s, o, c;
            let u = _.current, d = A.current, m = f.current, p = parseInt(null !== (e = null == P ? void 0 : P.height) && void 0 !== e ? e : ''), E = parseInt(null !== (n = null == x ? void 0 : x.height) && void 0 !== n ? n : '');
            if (null != u && null != d && null != m && !isNaN(p) && !isNaN(E)) {
                ;
                let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0, n = 0 !== u.scrollHeight ? u.scrollHeight : E + 20, _ = 0 !== u.clientHeight ? u.clientHeight : E + 20, A = E - p, N = (0, r.clamp)(n - _, A + 1, E + 20);
                let f = (i = e, (l = A) === (a = N) ? 1 : (0, r.clamp)((i - l) / (a - l), 0, 1));
                d.style.filter = 'brightness('.concat(1 + ((h ? 1.4 : 0.6) - (s = 1)) * f, ')'), d.style.backgroundColor = 'color-mix(in oklab,'.concat(I, ' ').concat((1 - f) * 100, '%, ').concat(v, ')'), m.style.opacity = ''.concat(0 + (1 - (o = 0)) * f), m.style.transform = 'translateY('.concat((c = p / 4) + (0 - c) * f, 'px)');
            }
        }, [
            v,
            I,
            null == x ? void 0 : x.height,
            h,
            _,
            null == P ? void 0 : P.height
        ]);
    return l.useEffect(() => {
        T();
    }, [
        T,
        h
    ]), l.useEffect(() => {
        let e = _.current, n = () => {
                T();
            };
        return null == e || e.addEventListener('scroll', n), () => {
            null == e || e.removeEventListener('scroll', n);
        };
    }, [
        _,
        T
    ]), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: p.stickyContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: p.stickyBannerContainer,
                        children: (0, i.jsx)('div', {
                            className: p.stickyBanner,
                            ref: A
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: p.backButtonContainer,
                        children: (0, i.jsx)(m.Z, {})
                    }),
                    (0, i.jsx)('div', {
                        className: p.nameContainer,
                        children: (0, i.jsx)(s.Heading, {
                            ref: f,
                            className: p.textApplicationName,
                            variant: 'heading-md/extrabold',
                            children: n
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                ref: N,
                className: p.bannerBackground,
                style: { backgroundColor: I }
            })
        ]
    });
}
