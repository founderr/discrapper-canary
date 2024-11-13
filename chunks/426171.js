n.d(t, {
    Kp: function () {
        return C;
    },
    u9: function () {
        return f;
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
    i = n(442837),
    s = n(607070),
    l = n(100527),
    o = n(906732),
    c = n(328347),
    d = n(237031),
    u = n(981631);
let m = ''.concat('#').concat('itemSkuId', '='),
    h = new RegExp('^'.concat(m, '(\\d+)$')),
    p = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    f = (e) => {
        let t = (0, a.TH)();
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
    g = (e) => {
        let { categories: t, productSkuId: n, analyticsLocations: r, analyticsSource: a, initialItemCardRef: i, reducedMotion: s = !1 } = e;
        for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === n);
            if (null != t) {
                var l;
                null === (l = i.current) ||
                    void 0 === l ||
                    l.scrollIntoView({
                        behavior: s ? 'instant' : 'smooth',
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
                            returnRef: i
                        });
                }, 750);
                return () => clearTimeout(n);
            }
        }
        return () => {};
    },
    C = (e) => {
        let { categories: t, isFetchingCategories: n, isLayer: d, initialItemCardRef: m } = e,
            p = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            f = r.useRef(null),
            C = (0, a.TH)(),
            b = C.pathname === u.Z5c.COLLECTIBLES_SHOP ? l.Z.HOME_PAGE_SHOP_TAB : C.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? l.Z.COLLECTIBLES_SHOP_FULLSCREEN : l.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: x } = (0, o.ZP)(b);
        r.useEffect(() => {
            if (d) return;
            let e = h.exec(C.hash);
            if (null != e) {
                let t = e[1];
                f.current = t;
            }
        }, []);
        let v = (0, i.e7)([c.Z], () => c.Z.initialProductSkuId);
        r.useEffect(() => {
            if (n) return;
            let e = null;
            if ((d && null != v && (e = v), !d && null != f.current && (e = f.current), null != e)) {
                let n = [],
                    r = setTimeout(() => {
                        let r = g({
                            categories: t,
                            productSkuId: e,
                            analyticsLocations: x,
                            analyticsSource: b,
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
        }, [d, x, b, t, n, v, m, p]);
    },
    b = (e) => {
        let t = r.useRef({}),
            n = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
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
