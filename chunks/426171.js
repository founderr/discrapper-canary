n.d(t, {
    Kp: function () {
        return _;
    },
    u9: function () {
        return C;
    },
    xV: function () {
        return b;
    }
}),
    n(757143),
    n(47120),
    n(653041);
var r = n(470079),
    s = n(266067),
    a = n(442837),
    i = n(607070),
    o = n(100527),
    l = n(906732),
    c = n(328347),
    d = n(237031),
    u = n(981631);
let f = ''.concat('#').concat('itemSkuId', '='),
    p = new RegExp('^'.concat(f, '(\\d+)$')),
    g = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, s.TH)();
        r.useEffect(() => {
            if (null != e && g.includes(t.pathname))
                return (
                    window.location.replace(''.concat(f).concat(e.skuId)),
                    () => {
                        window.location.hash.startsWith(f) && window.location.replace('#');
                    }
                );
        }, []);
    },
    m = (e) => {
        let { categories: t, productSkuId: n, analyticsLocations: r, analyticsSource: s, initialItemCardRef: a, reducedMotion: i = !1 } = e;
        for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === n);
            if (null != t) {
                var o;
                null === (o = a.current) ||
                    void 0 === o ||
                    o.scrollIntoView({
                        behavior: i ? 'instant' : 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                let n = setTimeout(() => {
                    let n = document.getElementById('shop-item-'.concat(t.skuId));
                    n !== document.activeElement && (null == n || n.focus()),
                        (0, d.T)({
                            product: t,
                            category: e,
                            analyticsSource: s,
                            analyticsLocations: r,
                            returnRef: a
                        });
                }, 750);
                return () => clearTimeout(n);
            }
        }
        return () => {};
    },
    _ = (e) => {
        let { categories: t, isFetchingCategories: n, isLayer: d, initialItemCardRef: f } = e,
            g = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            C = r.useRef(null),
            _ = (0, s.TH)(),
            b = _.pathname === u.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : _.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, l.ZP)(b);
        r.useEffect(() => {
            if (d) return;
            let e = p.exec(_.hash);
            if (null != e) {
                let t = e[1];
                C.current = t;
            }
        }, []);
        let x = (0, a.e7)([c.Z], () => c.Z.initialProductSkuId);
        r.useEffect(() => {
            if (n) return;
            let e = null;
            if ((d && null != x && (e = x), !d && null != C.current && (e = C.current), null != e)) {
                let n = [],
                    r = setTimeout(() => {
                        let r = m({
                            categories: t,
                            productSkuId: e,
                            analyticsLocations: h,
                            analyticsSource: b,
                            initialItemCardRef: f,
                            reducedMotion: g
                        });
                        n.push(r);
                    }, 250);
                return (
                    n.push(() => clearTimeout(r)),
                    () => {
                        n.forEach((e) => e());
                    }
                );
            }
        }, [d, h, b, t, n, x, f, g]);
    },
    b = (e) => {
        let t = r.useRef({}),
            n = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            s = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []);
        return {
            setCategoryRef: s,
            handleScrollToCategory: r.useCallback(
                (r) => {
                    let s = t.current[r];
                    null != s &&
                        (null == e ||
                            e.scrollIntoViewNode({
                                node: s,
                                padding: 12,
                                animate: !n,
                                shouldScrollToStart: !0
                            }));
                },
                [e, n]
            )
        };
    };
