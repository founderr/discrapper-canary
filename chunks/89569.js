"use strict";
a.r(t), a.d(t, {
  useProductDetailsLinkableRoute: function() {
    return C
  },
  useProductDetailsDeepLinking: function() {
    return h
  }
}), a("781738"), a("222007"), a("424973");
var l = a("884691"),
  s = a("803182"),
  r = a("446674"),
  n = a("812204"),
  i = a("685665"),
  o = a("216719"),
  u = a("54809"),
  c = a("49111");
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
  E = e => {
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
  h = e => {
    let {
      categories: t,
      isFetchingCategories: a,
      isLayer: u,
      initialItemCardRef: d
    } = e, m = l.useRef(null), C = (0, s.useLocation)(), h = C.pathname === c.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : C.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: p
    } = (0, i.default)(h);
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
            let l = E({
              categories: t,
              productSkuId: e,
              analyticsLocations: p,
              analyticsSource: h,
              initialItemCardRef: d
            });
            a.push(l)
          }, 250);
        return a.push(() => clearTimeout(l)), () => {
          a.forEach(e => e())
        }
      }
    }, [u, p, h, t, a, g, d])
  }