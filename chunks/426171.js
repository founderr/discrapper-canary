"use strict";
a.r(t), a.d(t, {
  useProductDetailsDeepLinking: function() {
    return E
  },
  useProductDetailsLinkableRoute: function() {
    return C
  }
}), a("757143"), a("47120"), a("653041");
var l = a("470079"),
  s = a("266067"),
  r = a("442837"),
  n = a("100527"),
  i = a("906732"),
  o = a("328347"),
  u = a("237031"),
  c = a("981631");
let d = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(d, "(\\d+)$")),
  m = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  C = e => {
    let t = (0, s.useLocation)();
    l.useEffect(() => {
      if (null != e && m.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
        window.location.hash.startsWith(d) && window.location.replace("#")
      }
    }, [])
  },
  p = e => {
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
          a !== document.activeElement && (null == a || a.focus()), (0, u.openCollectiblesShopProductDetailsModal)({
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
  E = e => {
    let {
      categories: t,
      isFetchingCategories: a,
      isLayer: u,
      initialItemCardRef: d
    } = e, m = l.useRef(null), C = (0, s.useLocation)(), E = C.pathname === c.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : C.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: h
    } = (0, i.default)(E);
    l.useEffect(() => {
      if (u) return;
      let e = f.exec(C.hash);
      if (null != e) {
        let t = e[1];
        m.current = t
      }
    }, []);
    let g = (0, r.useStateFromStores)([o.default], () => o.default.initialProductSkuId);
    l.useEffect(() => {
      if (a) return;
      let e = null;
      if (u && null != g && (e = g), !u && null != m.current && (e = m.current), null != e) {
        let a = [],
          l = setTimeout(() => {
            let l = p({
              categories: t,
              productSkuId: e,
              analyticsLocations: h,
              analyticsSource: E,
              initialItemCardRef: d
            });
            a.push(l)
          }, 250);
        return a.push(() => clearTimeout(l)), () => {
          a.forEach(e => e())
        }
      }
    }, [u, h, E, t, a, g, d])
  }