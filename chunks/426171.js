"use strict";
s.r(t), s.d(t, {
  useCategoryDeepLinking: function() {
    return g
  },
  useProductDetailsDeepLinking: function() {
    return S
  },
  useProductDetailsLinkableRoute: function() {
    return m
  }
}), s("757143"), s("47120"), s("653041");
var a = s("470079"),
  l = s("266067"),
  n = s("442837"),
  r = s("607070"),
  i = s("100527"),
  o = s("906732"),
  u = s("328347"),
  c = s("237031"),
  d = s("981631");
let f = "".concat("#").concat("itemSkuId", "="),
  C = new RegExp("^".concat(f, "(\\d+)$")),
  E = [d.Routes.COLLECTIBLES_SHOP, d.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  m = e => {
    let t = (0, l.useLocation)();
    a.useEffect(() => {
      if (null != e && E.includes(t.pathname)) return window.location.replace("".concat(f).concat(e.skuId)), () => {
        window.location.hash.startsWith(f) && window.location.replace("#")
      }
    }, [])
  },
  p = e => {
    let {
      categories: t,
      productSkuId: s,
      analyticsLocations: a,
      analyticsSource: l,
      initialItemCardRef: n,
      reducedMotion: r = !1
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === s);
      if (null != t) {
        var i;
        null === (i = n.current) || void 0 === i || i.scrollIntoView({
          behavior: r ? "instant" : "smooth",
          block: "center",
          inline: "center"
        });
        let s = setTimeout(() => {
          let s = document.getElementById("shop-item-".concat(t.skuId));
          s !== document.activeElement && (null == s || s.focus()), (0, c.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: e,
            analyticsSource: l,
            analyticsLocations: a,
            returnRef: n
          })
        }, 750);
        return () => clearTimeout(s)
      }
    }
    return () => {}
  },
  S = e => {
    let {
      categories: t,
      isFetchingCategories: s,
      isLayer: c,
      initialItemCardRef: f
    } = e, E = (0, n.useStateFromStores)([r.default], () => r.default.useReducedMotion), m = a.useRef(null), S = (0, l.useLocation)(), g = S.pathname === d.Routes.COLLECTIBLES_SHOP ? i.default.HOME_PAGE_SHOP_TAB : S.pathname === d.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? i.default.COLLECTIBLES_SHOP_FULLSCREEN : i.default.COLLECTIBLES_SHOP, {
      analyticsLocations: h
    } = (0, o.default)(g);
    a.useEffect(() => {
      if (c) return;
      let e = C.exec(S.hash);
      if (null != e) {
        let t = e[1];
        m.current = t
      }
    }, []);
    let I = (0, n.useStateFromStores)([u.default], () => u.default.initialProductSkuId);
    a.useEffect(() => {
      if (s) return;
      let e = null;
      if (c && null != I && (e = I), !c && null != m.current && (e = m.current), null != e) {
        let s = [],
          a = setTimeout(() => {
            let a = p({
              categories: t,
              productSkuId: e,
              analyticsLocations: h,
              analyticsSource: g,
              initialItemCardRef: f,
              reducedMotion: E
            });
            s.push(a)
          }, 250);
        return s.push(() => clearTimeout(a)), () => {
          s.forEach(e => e())
        }
      }
    }, [c, h, g, t, s, I, f, E])
  },
  g = e => {
    let t = a.useRef({}),
      s = (0, n.useStateFromStores)([r.default], () => r.default.useReducedMotion),
      l = a.useCallback((e, s) => {
        t.current[e] = s
      }, []);
    return {
      setCategoryRef: l,
      handleScrollToCategory: a.useCallback(a => {
        let l = t.current[a];
        null != l && (null == e || e.scrollIntoViewNode({
          node: l,
          padding: 12,
          animate: !s,
          shouldScrollToStart: !0
        }))
      }, [e, s])
    }
  }