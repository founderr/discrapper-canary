"use strict";
s.r(t), s.d(t, {
  useCategoryDeepLinking: function() {
    return h
  },
  useProductDetailsDeepLinking: function() {
    return E
  },
  useProductDetailsLinkableRoute: function() {
    return m
  }
}), s("757143"), s("47120"), s("653041");
var a = s("470079"),
  l = s("266067"),
  r = s("442837"),
  n = s("607070"),
  i = s("100527"),
  o = s("906732"),
  c = s("328347"),
  u = s("237031"),
  d = s("981631");
let f = "".concat("#").concat("itemSkuId", "="),
  C = new RegExp("^".concat(f, "(\\d+)$")),
  p = [d.Routes.COLLECTIBLES_SHOP, d.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  m = e => {
    let t = (0, l.useLocation)();
    a.useEffect(() => {
      if (null != e && p.includes(t.pathname)) return window.location.replace("".concat(f).concat(e.skuId)), () => {
        window.location.hash.startsWith(f) && window.location.replace("#")
      }
    }, [])
  },
  g = e => {
    let {
      categories: t,
      productSkuId: s,
      analyticsLocations: a,
      analyticsSource: l,
      initialItemCardRef: r,
      reducedMotion: n = !1
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === s);
      if (null != t) {
        var i;
        null === (i = r.current) || void 0 === i || i.scrollIntoView({
          behavior: n ? "instant" : "smooth",
          block: "center",
          inline: "center"
        });
        let s = setTimeout(() => {
          let s = document.getElementById("shop-item-".concat(t.skuId));
          s !== document.activeElement && (null == s || s.focus()), (0, u.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: e,
            analyticsSource: l,
            analyticsLocations: a,
            returnRef: r
          })
        }, 750);
        return () => clearTimeout(s)
      }
    }
    return () => {}
  },
  E = e => {
    let {
      categories: t,
      isFetchingCategories: s,
      isLayer: u,
      initialItemCardRef: f
    } = e, p = (0, r.useStateFromStores)([n.default], () => n.default.useReducedMotion), m = a.useRef(null), E = (0, l.useLocation)(), h = E.pathname === d.Routes.COLLECTIBLES_SHOP ? i.default.HOME_PAGE_SHOP_TAB : E.pathname === d.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? i.default.COLLECTIBLES_SHOP_FULLSCREEN : i.default.COLLECTIBLES_SHOP, {
      analyticsLocations: b
    } = (0, o.default)(h);
    a.useEffect(() => {
      if (u) return;
      let e = C.exec(E.hash);
      if (null != e) {
        let t = e[1];
        m.current = t
      }
    }, []);
    let x = (0, r.useStateFromStores)([c.default], () => c.default.initialProductSkuId);
    a.useEffect(() => {
      if (s) return;
      let e = null;
      if (u && null != x && (e = x), !u && null != m.current && (e = m.current), null != e) {
        let s = [],
          a = setTimeout(() => {
            let a = g({
              categories: t,
              productSkuId: e,
              analyticsLocations: b,
              analyticsSource: h,
              initialItemCardRef: f,
              reducedMotion: p
            });
            s.push(a)
          }, 250);
        return s.push(() => clearTimeout(a)), () => {
          s.forEach(e => e())
        }
      }
    }, [u, b, h, t, s, x, f, p])
  },
  h = () => {
    let e = (0, r.useStateFromStores)([n.default], () => n.default.useReducedMotion),
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