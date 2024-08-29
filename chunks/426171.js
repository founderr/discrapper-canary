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
    a = n(266067),
    s = n(442837),
    o = n(607070),
    i = n(100527),
    c = n(906732),
    l = n(328347),
    d = n(237031),
    u = n(981631);
let f = ''.concat('#').concat('itemSkuId', '='),
    p = new RegExp('^'.concat(f, '(\\d+)$')),
    g = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, a.TH)();
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
        let { categories: t, productSkuId: n, analyticsLocations: r, analyticsSource: a, initialItemCardRef: s, reducedMotion: o = !1 } = e;
        for (let e of t.values()) {
            let t = e.products.find((e) => e.skuId === n);
            if (null != t) {
                var i;
                null === (i = s.current) ||
                    void 0 === i ||
                    i.scrollIntoView({
                        behavior: o ? 'instant' : 'smooth',
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
    _ = (e) => {
        let { categories: t, isFetchingCategories: n, isLayer: d, initialItemCardRef: f } = e,
            g = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
            C = r.useRef(null),
            _ = (0, a.TH)(),
            b = _.pathname === u.Z5c.COLLECTIBLES_SHOP ? i.Z.HOME_PAGE_SHOP_TAB : _.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN : i.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, c.ZP)(b);
        r.useEffect(() => {
            if (d) return;
            let e = p.exec(_.hash);
            if (null != e) {
                let t = e[1];
                C.current = t;
            }
        }, []);
        let x = (0, s.e7)([l.Z], () => l.Z.initialProductSkuId);
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
            n = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
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
