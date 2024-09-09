r.d(t, {
    Kp: function () {
        return g;
    },
    u9: function () {
        return _;
    },
    xV: function () {
        return h;
    }
}),
    r(757143),
    r(47120),
    r(653041);
var a = r(470079),
    n = r(266067),
    s = r(442837),
    i = r(607070),
    o = r(100527),
    l = r(906732),
    c = r(328347),
    d = r(237031),
    u = r(981631);
let f = ''.concat('#').concat('itemSkuId', '='),
    p = new RegExp('^'.concat(f, '(\\d+)$')),
    C = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    _ = (e) => {
        let t = (0, n.TH)();
        a.useEffect(() => {
            if (null != e && C.includes(t.pathname))
                return (
                    window.location.replace(''.concat(f).concat(e.skuId)),
                    () => {
                        window.location.hash.startsWith(f) && window.location.replace('#');
                    }
                );
        }, []);
    },
    m = (e) => {
        let { categories: t, productSkuId: r, analyticsLocations: a, analyticsSource: n, initialItemCardRef: s, reducedMotion: i = !1 } = e;
        for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === r);
            if (null != t) {
                var o;
                null === (o = s.current) ||
                    void 0 === o ||
                    o.scrollIntoView({
                        behavior: i ? 'instant' : 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                let r = setTimeout(() => {
                    let r = document.getElementById('shop-item-'.concat(t.skuId));
                    r !== document.activeElement && (null == r || r.focus()),
                        (0, d.T)({
                            product: t,
                            category: e,
                            analyticsSource: n,
                            analyticsLocations: a,
                            returnRef: s
                        });
                }, 750);
                return () => clearTimeout(r);
            }
        }
        return () => {};
    },
    g = (e) => {
        let { categories: t, isFetchingCategories: r, isLayer: d, initialItemCardRef: f } = e,
            C = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
            _ = a.useRef(null),
            g = (0, n.TH)(),
            h = g.pathname === u.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : g.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: b } = (0, l.ZP)(h);
        a.useEffect(() => {
            if (d) return;
            let e = p.exec(g.hash);
            if (null != e) {
                let t = e[1];
                _.current = t;
            }
        }, []);
        let E = (0, s.e7)([c.Z], () => c.Z.initialProductSkuId);
        a.useEffect(() => {
            if (r) return;
            let e = null;
            if ((d && null != E && (e = E), !d && null != _.current && (e = _.current), null != e)) {
                let r = [],
                    a = setTimeout(() => {
                        let a = m({
                            categories: t,
                            productSkuId: e,
                            analyticsLocations: b,
                            analyticsSource: h,
                            initialItemCardRef: f,
                            reducedMotion: C
                        });
                        r.push(a);
                    }, 250);
                return (
                    r.push(() => clearTimeout(a)),
                    () => {
                        r.forEach((e) => e());
                    }
                );
            }
        }, [d, b, h, t, r, E, f, C]);
    },
    h = (e) => {
        let t = a.useRef({}),
            r = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
            n = a.useCallback((e, r) => {
                t.current[e] = r;
            }, []);
        return {
            setCategoryRef: n,
            handleScrollToCategory: a.useCallback(
                (a) => {
                    let n = t.current[a];
                    null != n &&
                        (null == e ||
                            e.scrollIntoViewNode({
                                node: n,
                                padding: 12,
                                animate: !r,
                                shouldScrollToStart: !0
                            }));
                },
                [e, r]
            )
        };
    };
