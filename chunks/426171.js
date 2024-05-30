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
var l = a("470079"),
  s = a("266067"),
  r = a("442837"),
  n = a("100527"),
  i = a("906732"),
  o = a("328347"),
  c = a("237031"),
  u = a("981631");
let d = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(d, "(\\d+)$")),
  C = [u.Routes.COLLECTIBLES_SHOP, u.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  p = e => {
    let t = (0, s.useLocation)();
    l.useEffect(() => {
      if (null != e && C.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
        window.location.hash.startsWith(d) && window.location.replace("#")
      }
    }, [])
  },
  m = e => {
    let {
      categories: t,
      productSkuId: a,
      analyticsLocations: l,
      analyticsSource: s,
      initialItemCardRef: r
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === a);
      if (null != t) {
        var n;
        null === (n = r.current) || void 0 === n || n.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
        let a = setTimeout(() => {
          let a = document.getElementById("shop-item-".concat(t.skuId));
          a !== document.activeElement && (null == a || a.focus()), (0, c.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: e,
            analyticsSource: s,
            analyticsLocations: l,
            returnRef: r
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
    } = e, C = l.useRef(null), p = (0, s.useLocation)(), g = p.pathname === u.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : p.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: E
    } = (0, i.default)(g);
    l.useEffect(() => {
      if (c) return;
      let e = f.exec(p.hash);
      if (null != e) {
        let t = e[1];
        C.current = t
      }
    }, []);
    let h = (0, r.useStateFromStores)([o.default], () => o.default.initialProductSkuId);
    l.useEffect(() => {
      if (a) return;
      let e = null;
      if (c && null != h && (e = h), !c && null != C.current && (e = C.current), null != e) {
        let a = [],
          l = setTimeout(() => {
            let l = m({
              categories: t,
              productSkuId: e,
              analyticsLocations: E,
              analyticsSource: g,
              initialItemCardRef: d
            });
            a.push(l)
          }, 250);
        return a.push(() => clearTimeout(l)), () => {
          a.forEach(e => e())
        }
      }
    }, [c, E, g, t, a, h, d])
  },
  E = () => {
    let e = l.useRef({}),
      t = l.useCallback((t, a) => {
        e.current[t] = a
      }, []);
    return {
      setCategoryRef: t,
      handleScrollToCategory: l.useCallback(t => {
        var a;
        null === (a = e.current[t]) || void 0 === a || a.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }, [])
    }
  }