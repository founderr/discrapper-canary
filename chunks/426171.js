r.d(t, {
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
    r(757143),
    r(47120),
    r(653041);
var s = r(192379),
    n = r(512969),
    a = r(442837),
    i = r(607070),
    l = r(100527),
    o = r(906732),
    c = r(328347),
    d = r(237031),
    u = r(981631);
let m = ''.concat('#').concat('itemSkuId', '='),
    f = new RegExp('^'.concat(m, '(\\d+)$')),
    p = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, n.TH)();
        s.useEffect(() => {
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
        let { categories: t, productSkuId: r, analyticsLocations: s, analyticsSource: n, initialItemCardRef: a, reducedMotion: i = !1 } = e;
        for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === r);
            if (null != t) {
                var l;
                null === (l = a.current) ||
                    void 0 === l ||
                    l.scrollIntoView({
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
                            analyticsLocations: s,
                            returnRef: a
                        });
                }, 750);
                return () => clearTimeout(r);
            }
        }
        return () => {};
    },
    g = (e) => {
        let { categories: t, isFetchingCategories: r, isLayer: d, initialItemCardRef: m } = e,
            p = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            C = s.useRef(null),
            g = (0, n.TH)(),
            _ = g.pathname === u.Z5c.COLLECTIBLES_SHOP ? l.Z.HOME_PAGE_SHOP_TAB : g.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? l.Z.COLLECTIBLES_SHOP_FULLSCREEN : l.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: b } = (0, o.ZP)(_);
        s.useEffect(() => {
            if (d) return;
            let e = f.exec(g.hash);
            if (null != e) {
                let t = e[1];
                C.current = t;
            }
        }, []);
        let x = (0, a.e7)([c.Z], () => c.Z.initialProductSkuId);
        s.useEffect(() => {
            if (r) return;
            let e = null;
            if ((d && null != x && (e = x), !d && null != C.current && (e = C.current), null != e)) {
                let r = [],
                    s = setTimeout(() => {
                        let s = h({
                            categories: t,
                            productSkuId: e,
                            analyticsLocations: b,
                            analyticsSource: _,
                            initialItemCardRef: m,
                            reducedMotion: p
                        });
                        r.push(s);
                    }, 250);
                return (
                    r.push(() => clearTimeout(s)),
                    () => {
                        r.forEach((e) => e());
                    }
                );
            }
        }, [d, b, _, t, r, x, m, p]);
    },
    _ = (e) => {
        let t = s.useRef({}),
            r = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            n = s.useCallback((e, r) => {
                t.current[e] = r;
            }, []);
        return {
            setCategoryRef: n,
            handleScrollToCategory: s.useCallback(
                (s) => {
                    let n = t.current[s];
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
