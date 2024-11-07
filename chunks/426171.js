n.d(t, {
    Kp: function () {
        return C;
    },
    u9: function () {
        return h;
    },
    xV: function () {
        return b;
    }
}),
    n(757143),
    n(47120),
    n(653041);
var r = n(192379),
    a = n(512969),
    s = n(442837),
    i = n(607070),
    l = n(100527),
    o = n(906732),
    c = n(328347),
    d = n(237031),
    u = n(981631);
let m = ''.concat('#').concat('itemSkuId', '='),
    p = new RegExp('^'.concat(m, '(\\d+)$')),
    f = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    h = (e) => {
        let t = (0, a.TH)();
        r.useEffect(() => {
            if (null != e && f.includes(t.pathname))
                return (
                    window.location.replace(''.concat(m).concat(e.skuId)),
                    () => {
                        window.location.hash.startsWith(m) && window.location.replace('#');
                    }
                );
        }, []);
    },
    g = (e) => {
        let { categories: t, productSkuId: n, analyticsLocations: r, analyticsSource: a, initialItemCardRef: s, reducedMotion: i = !1 } = e;
        for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === n);
            if (null != t) {
                var l;
                null === (l = s.current) ||
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
                            analyticsSource: a,
                            analyticsLocations: r,
                            returnRef: s
                        });
                }, 750);
                return () => clearTimeout(n);
            }
        }
        return () => {};
    },
    C = (e) => {
        let { categories: t, isFetchingCategories: n, isLayer: d, initialItemCardRef: m } = e,
            f = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
            h = r.useRef(null),
            C = (0, a.TH)(),
            b = C.pathname === u.Z5c.COLLECTIBLES_SHOP ? l.Z.HOME_PAGE_SHOP_TAB : C.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? l.Z.COLLECTIBLES_SHOP_FULLSCREEN : l.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: x } = (0, o.ZP)(b);
        r.useEffect(() => {
            if (d) return;
            let e = p.exec(C.hash);
            if (null != e) {
                let t = e[1];
                h.current = t;
            }
        }, []);
        let v = (0, s.e7)([c.Z], () => c.Z.initialProductSkuId);
        r.useEffect(() => {
            if (n) return;
            let e = null;
            if ((d && null != v && (e = v), !d && null != h.current && (e = h.current), null != e)) {
                let n = [],
                    r = setTimeout(() => {
                        let r = g({
                            categories: t,
                            productSkuId: e,
                            analyticsLocations: x,
                            analyticsSource: b,
                            initialItemCardRef: m,
                            reducedMotion: f
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
        }, [d, x, b, t, n, v, m, f]);
    },
    b = (e) => {
        let t = r.useRef({}),
            n = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
            a = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []);
        return {
            setCategoryRef: a,
            handleScrollToCategory: r.useCallback(
                (r) => {
                    let a = t.current[r];
                    null != a &&
                        (null == e ||
                            e.scrollIntoViewNode({
                                node: a,
                                padding: 12,
                                animate: !n,
                                shouldScrollToStart: !0
                            }));
                },
                [e, n]
            )
        };
    };
