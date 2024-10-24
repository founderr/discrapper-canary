n.d(t, {
    Kp: function () {
        return g;
    },
    u9: function () {
        return C;
    },
    xV: function () {
        return _;
    }
}),
    n(757143),
    n(47120),
    n(653041);
var r = n(192379),
    s = n(512969),
    a = n(442837),
    i = n(607070),
    l = n(100527),
    o = n(906732),
    c = n(328347),
    d = n(237031),
    u = n(981631);
let m = ''.concat('#').concat('itemSkuId', '='),
    f = new RegExp('^'.concat(m, '(\\d+)$')),
    p = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, s.TH)();
        r.useEffect(() => {
            if (null != e && p.includes(t.pathname))
                return (
                    window.location.replace(''.concat(m).concat(e.skuId)),
                    () => {
                        window.location.hash.startsWith(m) && window.location.replace('#');
                    }
                );
        }, []);
    },
    h = (e) => {
        let { categories: t, productSkuId: n, analyticsLocations: r, analyticsSource: s, initialItemCardRef: a, reducedMotion: i = !1 } = e;
        for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === n);
            if (null != t) {
                var l;
                null === (l = a.current) ||
                    void 0 === l ||
                    l.scrollIntoView({
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
    g = (e) => {
        let { categories: t, isFetchingCategories: n, isLayer: d, initialItemCardRef: m } = e,
            p = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            C = r.useRef(null),
            g = (0, s.TH)(),
            _ = g.pathname === u.Z5c.COLLECTIBLES_SHOP ? l.Z.HOME_PAGE_SHOP_TAB : g.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? l.Z.COLLECTIBLES_SHOP_FULLSCREEN : l.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: b } = (0, o.ZP)(_);
        r.useEffect(() => {
            if (d) return;
            let e = f.exec(g.hash);
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
                        let r = h({
                            categories: t,
                            productSkuId: e,
                            analyticsLocations: b,
                            analyticsSource: _,
                            initialItemCardRef: m,
                            reducedMotion: p
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
        }, [d, b, _, t, n, x, m, p]);
    },
    _ = (e) => {
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
