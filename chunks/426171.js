"use strict";
a.r(t), a.d(t, {
  useCategoryDeepLinking: function() {
    return E
  },
  useProductDetailsDeepLinking: function() {
    return g
  },
  useProductDetailsLinkableRoute: function() {
    return p
  }
}), a("757143"), a("47120"), a("653041");
var s = a("470079"),
  r = a("266067"),
  n = a("442837"),
  l = a("100527"),
  o = a("906732"),
  i = a("328347"),
  c = a("237031"),
  u = a("981631");
let d = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(d, "(\\d+)$")),
  C = [u.Routes.COLLECTIBLES_SHOP, u.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  p = e => {
    let t = (0, r.useLocation)();
    s.useEffect(() => {
      if (null != e && C.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
        window.location.hash.startsWith(d) && window.location.replace("#")
      }
    }, [])
  },
  m = e => {
    let {
      categories: t,
      productSkuId: a,
      analyticsLocations: s,
      analyticsSource: r,
      initialItemCardRef: n
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === a);
      if (null != t) {
        var l;
        null === (l = n.current) || void 0 === l || l.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
        let a = setTimeout(() => {
          let a = document.getElementById("shop-item-".concat(t.skuId));
          a !== document.activeElement && (null == a || a.focus()), (0, c.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: e,
            analyticsSource: r,
            analyticsLocations: s,
            returnRef: n
          })
        }, 750);
        return () => clearTimeout(a)
      }
    }
    return () => {}
  },
  g = e => {
    let {
      categories: t,
      isFetchingCategories: a,
      isLayer: c,
      initialItemCardRef: d
    } = e, C = s.useRef(null), p = (0, r.useLocation)(), g = p.pathname === u.Routes.COLLECTIBLES_SHOP ? l.default.HOME_PAGE_SHOP_TAB : p.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? l.default.COLLECTIBLES_SHOP_FULLSCREEN : l.default.COLLECTIBLES_SHOP, {
      analyticsLocations: E
    } = (0, o.default)(g);
    s.useEffect(() => {
      if (c) return;
      let e = f.exec(p.hash);
      if (null != e) {
        let t = e[1];
        C.current = t
      }
    }, []);
    let b = (0, n.useStateFromStores)([i.default], () => i.default.initialProductSkuId);
    s.useEffect(() => {
      if (a) return;
      let e = null;
      if (c && null != b && (e = b), !c && null != C.current && (e = C.current), null != e) {
        let a = [],
          s = setTimeout(() => {
            let s = m({
              categories: t,
              productSkuId: e,
              analyticsLocations: E,
              analyticsSource: g,
              initialItemCardRef: d
            });
            a.push(s)
          }, 250);
        return a.push(() => clearTimeout(s)), () => {
          a.forEach(e => e())
        }
      }
    }, [c, E, g, t, a, b, d])
  },
  E = () => {
    let e = s.useRef({}),
      t = s.useCallback((t, a) => {
        e.current[t] = a
      }, []);
    return {
      setCategoryRef: t,
      handleScrollToCategory: s.useCallback(t => {
        var a;
        null === (a = e.current[t]) || void 0 === a || a.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }, [])
    }
  }