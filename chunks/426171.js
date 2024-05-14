"use strict";
l.r(t), l.d(t, {
  useProductDetailsDeepLinking: function() {
    return E
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
  u = l("237031"),
  c = l("981631");
let d = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(d, "(\\d+)$")),
  C = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
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
          l !== document.activeElement && (null == l || l.focus()), (0, u.openCollectiblesShopProductDetailsModal)({
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
  E = e => {
    let {
      categories: t,
      isFetchingCategories: l,
      isLayer: u,
      initialItemCardRef: d
    } = e, C = a.useRef(null), m = (0, s.useLocation)(), E = m.pathname === c.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : m.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: g
    } = (0, i.default)(E);
    a.useEffect(() => {
      if (u) return;
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
      if (u && null != h && (e = h), !u && null != C.current && (e = C.current), null != e) {
        let l = [],
          a = setTimeout(() => {
            let a = p({
              categories: t,
              productSkuId: e,
              analyticsLocations: g,
              analyticsSource: E,
              initialItemCardRef: d
            });
            l.push(a)
          }, 250);
        return l.push(() => clearTimeout(a)), () => {
          l.forEach(e => e())
        }
      }
    }, [u, g, E, t, l, h, d])
  }