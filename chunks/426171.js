n.d(t, {
    Kp: function () {
        return v;
    },
    u9: function () {
        return C;
    },
    xV: function () {
        return x;
    }
}),
    n(757143),
    n(653041),
    n(47120);
var r = n(192379),
    a = n(512969),
    i = n(442837),
    l = n(607070),
    s = n(100527),
    o = n(906732),
    c = n(597688),
    d = n(328347),
    u = n(429368),
    m = n(237031),
    h = n(981631);
let g = ''.concat('#').concat('itemSkuId', '='),
    p = new RegExp('^'.concat(g, '(\\d+)$')),
    f = [h.Z5c.COLLECTIBLES_SHOP, h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, a.TH)();
        r.useEffect(() => {
            if (null != e && f.includes(t.pathname))
                return (
                    window.location.replace(''.concat(g).concat(e)),
                    () => {
                        window.location.hash.startsWith(g) && window.location.replace('#');
                    }
                );
        }, [e]);
    },
    b = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, initialItemCardRef: a, reducedMotion: i = !1 } = e,
            l = c.Z.getProduct(t),
            s = c.Z.getCategoryForProduct(t);
        if (null != l && null != s) {
            var o;
            null === (o = a.current) ||
                void 0 === o ||
                o.scrollIntoView({
                    behavior: i ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = l,
                d = setTimeout(
                    () => {
                        let i = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((i !== document.activeElement && (null == i || i.focus()), null != l.variantGroupStoreListingId)) {
                            let n = c.Z.getProductByStoreListingId(l.variantGroupStoreListingId);
                            if (null != n) {
                                var o;
                                e = n;
                                let r = null === (o = n.variants) || void 0 === o ? void 0 : o.findIndex((e) => e.skuId === t);
                                null != r && r > -1 && (0, u.$)(n, r);
                            }
                        }
                        (0, m.T)({
                            product: e,
                            category: s,
                            analyticsSource: r,
                            analyticsLocations: n,
                            returnRef: a
                        });
                    },
                    null != a.current ? 750 : 0
                );
            return () => clearTimeout(d);
        }
        return () => {};
    },
    v = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: c } = e,
            u = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
            m = r.useRef(null),
            g = (0, a.TH)(),
            f = g.pathname === h.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : g.pathname === h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN : s.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: C } = (0, o.ZP)(f);
        r.useEffect(() => {
            if (n) return;
            let e = p.exec(g.hash);
            if (null != e) {
                let t = e[1];
                m.current = t;
            }
        }, []);
        let v = (0, i.e7)([d.Z], () => d.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let e = null;
            if ((n && null != v && (e = v), !n && null != m.current && (e = m.current), null != e)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = b({
                            productSkuId: e,
                            analyticsLocations: C,
                            analyticsSource: f,
                            initialItemCardRef: c,
                            reducedMotion: u
                        });
                        t.push(n);
                    }, 250);
                return (
                    t.push(() => clearTimeout(n)),
                    () => {
                        t.forEach((e) => e());
                    }
                );
            }
        }, [n, C, f, t, v, c, u]);
    },
    x = (e) => {
        let t = r.useRef({}),
            n = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
            a = (0, i.e7)([c.Z], () => c.Z.isFetchingCategories),
            [s, o] = r.useState(null),
            d = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            u = r.useCallback(
                (r) => {
                    if (a) o(r);
                    else {
                        let a = t.current[r];
                        null != a &&
                            (null == e ||
                                e.scrollIntoViewNode({
                                    node: a,
                                    padding: 12,
                                    animate: !n,
                                    shouldScrollToStart: !0
                                }));
                    }
                },
                [e, n, a, o]
            );
        return (
            r.useEffect(() => {
                !a && null != s && (u(s), o(null));
            }, [a, u, s, o]),
            {
                setCategoryRef: d,
                handleScrollToCategory: u
            }
        );
    };
