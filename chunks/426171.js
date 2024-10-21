s.d(t, {
    Kp: function () {
        return g;
    },
    u9: function () {
        return p;
    },
    xV: function () {
        return _;
    }
}),
    s(757143),
    s(47120),
    s(653041);
var a = s(192379),
    r = s(512969),
    n = s(442837),
    i = s(607070),
    l = s(100527),
    o = s(906732),
    c = s(328347),
    d = s(237031),
    u = s(981631);
let m = ''.concat('#').concat('itemSkuId', '='),
    C = new RegExp('^'.concat(m, '(\\d+)$')),
    f = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    p = (e) => {
        let t = (0, r.TH)();
        a.useEffect(() => {
            if (null != e && f.includes(t.pathname))
                return (
                    window.location.replace(''.concat(m).concat(e.skuId)),
                    () => {
                        window.location.hash.startsWith(m) && window.location.replace('#');
                    }
                );
        }, []);
    },
    h = (e) => {
        let { categories: t, productSkuId: s, analyticsLocations: a, analyticsSource: r, initialItemCardRef: n, reducedMotion: i = !1 } = e;
        for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === s);
            if (null != t) {
                var l;
                null === (l = n.current) ||
                    void 0 === l ||
                    l.scrollIntoView({
                        behavior: i ? 'instant' : 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                let s = setTimeout(() => {
                    let s = document.getElementById('shop-item-'.concat(t.skuId));
                    s !== document.activeElement && (null == s || s.focus()),
                        (0, d.T)({
                            product: t,
                            category: e,
                            analyticsSource: r,
                            analyticsLocations: a,
                            returnRef: n
                        });
                }, 750);
                return () => clearTimeout(s);
            }
        }
        return () => {};
    },
    g = (e) => {
        let { categories: t, isFetchingCategories: s, isLayer: d, initialItemCardRef: m } = e,
            f = (0, n.e7)([i.Z], () => i.Z.useReducedMotion),
            p = a.useRef(null),
            g = (0, r.TH)(),
            _ = g.pathname === u.Z5c.COLLECTIBLES_SHOP ? l.Z.HOME_PAGE_SHOP_TAB : g.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? l.Z.COLLECTIBLES_SHOP_FULLSCREEN : l.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: b } = (0, o.ZP)(_);
        a.useEffect(() => {
            if (d) return;
            let e = C.exec(g.hash);
            if (null != e) {
                let t = e[1];
                p.current = t;
            }
        }, []);
        let x = (0, n.e7)([c.Z], () => c.Z.initialProductSkuId);
        a.useEffect(() => {
            if (s) return;
            let e = null;
            if ((d && null != x && (e = x), !d && null != p.current && (e = p.current), null != e)) {
                let s = [],
                    a = setTimeout(() => {
                        let a = h({
                            categories: t,
                            productSkuId: e,
                            analyticsLocations: b,
                            analyticsSource: _,
                            initialItemCardRef: m,
                            reducedMotion: f
                        });
                        s.push(a);
                    }, 250);
                return (
                    s.push(() => clearTimeout(a)),
                    () => {
                        s.forEach((e) => e());
                    }
                );
            }
        }, [d, b, _, t, s, x, m, f]);
    },
    _ = (e) => {
        let t = a.useRef({}),
            s = (0, n.e7)([i.Z], () => i.Z.useReducedMotion),
            r = a.useCallback((e, s) => {
                t.current[e] = s;
            }, []);
        return {
            setCategoryRef: r,
            handleScrollToCategory: a.useCallback(
                (a) => {
                    let r = t.current[a];
                    null != r &&
                        (null == e ||
                            e.scrollIntoViewNode({
                                node: r,
                                padding: 12,
                                animate: !s,
                                shouldScrollToStart: !0
                            }));
                },
                [e, s]
            )
        };
    };
