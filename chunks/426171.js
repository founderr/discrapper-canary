"use strict";
s.r(t), s.d(t, {
  useCategoryDeepLinking: function() {
    return h
  },
  useProductDetailsDeepLinking: function() {
    return g
  },
  useProductDetailsLinkableRoute: function() {
    return p
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
  p = e => {
    let t = (0, l.useLocation)();
    a.useEffect(() => {
      if (null != e && E.includes(t.pathname)) return window.location.replace("".concat(f).concat(e.skuId)), () => {
        window.location.hash.startsWith(f) && window.location.replace("#")
      }
    }, [])
  },
  m = e => {
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
  g = e => {
    let {
      categories: t,
      isFetchingCategories: s,
      isLayer: c,
      initialItemCardRef: f
    } = e, E = (0, n.useStateFromStores)([r.default], () => r.default.useReducedMotion), p = a.useRef(null), g = (0, l.useLocation)(), h = g.pathname === d.Routes.COLLECTIBLES_SHOP ? i.default.HOME_PAGE_SHOP_TAB : g.pathname === d.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? i.default.COLLECTIBLES_SHOP_FULLSCREEN : i.default.COLLECTIBLES_SHOP, {
      analyticsLocations: S
    } = (0, o.default)(h);
    a.useEffect(() => {
      if (c) return;
      let e = C.exec(g.hash);
      if (null != e) {
        let t = e[1];
        p.current = t
      }
    }, []);
    let I = (0, n.useStateFromStores)([u.default], () => u.default.initialProductSkuId);
    a.useEffect(() => {
      if (s) return;
      let e = null;
      if (c && null != I && (e = I), !c && null != p.current && (e = p.current), null != e) {
        let s = [],
          a = setTimeout(() => {
            let a = m({
              categories: t,
              productSkuId: e,
              analyticsLocations: S,
              analyticsSource: h,
              initialItemCardRef: f,
              reducedMotion: E
            });
            s.push(a)
          }, 250);
        return s.push(() => clearTimeout(a)), () => {
          s.forEach(e => e())
        }
      }
    }, [c, S, h, t, s, I, f, E])
  },
  h = () => {
    let e = (0, n.useStateFromStores)([r.default], () => r.default.useReducedMotion),
      t = a.useRef({}),
      s = a.useCallback((e, s) => {
        t.current[e] = s
      }, []);
    return {
      setCategoryRef: s,
      handleScrollToCategory: a.useCallback(s => {
        var a;
        null === (a = t.current[s]) || void 0 === a || a.scrollIntoView({
          behavior: e ? "instant" : "smooth",
          block: "start"
        })
      }, [e])
    }
  }