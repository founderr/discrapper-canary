"use strict";
l.r(t), l.d(t, {
  useCategoryDeepLinking: function() {
    return E
  },
  useProductDetailsDeepLinking: function() {
    return g
  },
  useProductDetailsLinkableRoute: function() {
    return m
  }
}), l("757143"), l("47120"), l("653041");
var a = l("470079"),
  s = l("266067"),
  r = l("442837"),
  n = l("100527"),
  i = l("906732"),
  o = l("328347"),
  c = l("237031"),
  u = l("981631");
let d = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(d, "(\\d+)$")),
  C = [u.Routes.COLLECTIBLES_SHOP, u.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  m = e => {
    let t = (0, s.useLocation)();
    a.useEffect(() => {
      if (null != e && C.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
        window.location.hash.startsWith(d) && window.location.replace("#")
      }
    }, [])
  },
  p = e => {
    let {
      categories: t,
      productSkuId: l,
      analyticsLocations: a,
      analyticsSource: s,
      initialItemCardRef: r
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === l);
      if (null != t) {
        var n;
        null === (n = r.current) || void 0 === n || n.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
        let l = setTimeout(() => {
          let l = document.getElementById("shop-item-".concat(t.skuId));
          l !== document.activeElement && (null == l || l.focus()), (0, c.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: e,
            analyticsSource: s,
            analyticsLocations: a,
            returnRef: r
          })
        }, 750);
        return () => clearTimeout(l)
      }
    }
    return () => {}
  },
  g = e => {
    let {
      categories: t,
      isFetchingCategories: l,
      isLayer: c,
      initialItemCardRef: d
    } = e, C = a.useRef(null), m = (0, s.useLocation)(), g = m.pathname === u.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : m.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: E
    } = (0, i.default)(g);
    a.useEffect(() => {
      if (c) return;
      let e = f.exec(m.hash);
      if (null != e) {
        let t = e[1];
        C.current = t
      }
    }, []);
    let h = (0, r.useStateFromStores)([o.default], () => o.default.initialProductSkuId);
    a.useEffect(() => {
      if (l) return;
      let e = null;
      if (c && null != h && (e = h), !c && null != C.current && (e = C.current), null != e) {
        let l = [],
          a = setTimeout(() => {
            let a = p({
              categories: t,
              productSkuId: e,
              analyticsLocations: E,
              analyticsSource: g,
              initialItemCardRef: d
            });
            l.push(a)
          }, 250);
        return l.push(() => clearTimeout(a)), () => {
          l.forEach(e => e())
        }
      }
    }, [c, E, g, t, l, h, d])
  },
  E = () => {
    let e = a.useRef({}),
      t = a.useCallback((t, l) => {
        e.current[t] = l
      }, []);
    return {
      setCategoryRef: t,
      handleScrollToCategory: a.useCallback(t => {
        var l;
        null === (l = e.current[t]) || void 0 === l || l.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }, [])
    }
  }