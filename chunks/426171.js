"use strict";
n.d(t, {
  Kp: function() {
    return b
  },
  u9: function() {
    return _
  },
  xV: function() {
    return m
  }
}), n(757143), n(47120), n(653041);
var r = n(470079),
  i = n(266067),
  a = n(442837),
  o = n(607070),
  s = n(100527),
  c = n(906732),
  l = n(328347),
  d = n(237031),
  u = n(981631);
let p = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(p, "(\\d+)$")),
  g = [u.Z5c.COLLECTIBLES_SHOP, u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  _ = e => {
    let t = (0, i.TH)();
    r.useEffect(() => {
      if (null != e && g.includes(t.pathname)) return window.location.replace("".concat(p).concat(e.skuId)), () => {
        window.location.hash.startsWith(p) && window.location.replace("#")
      }
    }, [])
  },
  C = e => {
    let {
      categories: t,
      productSkuId: n,
      analyticsLocations: r,
      analyticsSource: i,
      initialItemCardRef: a,
      reducedMotion: o = !1
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === n);
      if (null != t) {
        var s;
        null === (s = a.current) || void 0 === s || s.scrollIntoView({
          behavior: o ? "instant" : "smooth",
          block: "center",
          inline: "center"
        });
        let n = setTimeout(() => {
          let n = document.getElementById("shop-item-".concat(t.skuId));
          n !== document.activeElement && (null == n || n.focus()), (0, d.T)({
            product: t,
            category: e,
            analyticsSource: i,
            analyticsLocations: r,
            returnRef: a
          })
        }, 750);
        return () => clearTimeout(n)
      }
    }
    return () => {}
  },
  b = e => {
    let {
      categories: t,
      isFetchingCategories: n,
      isLayer: d,
      initialItemCardRef: p
    } = e, g = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), _ = r.useRef(null), b = (0, i.TH)(), m = b.pathname === u.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : b.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN : s.Z.COLLECTIBLES_SHOP, {
      analyticsLocations: h
    } = (0, c.ZP)(m);
    r.useEffect(() => {
      if (d) return;
      let e = f.exec(b.hash);
      if (null != e) {
        let t = e[1];
        _.current = t
      }
    }, []);
    let x = (0, a.e7)([l.Z], () => l.Z.initialProductSkuId);
    r.useEffect(() => {
      if (n) return;
      let e = null;
      if (d && null != x && (e = x), !d && null != _.current && (e = _.current), null != e) {
        let n = [],
          r = setTimeout(() => {
            let r = C({
              categories: t,
              productSkuId: e,
              analyticsLocations: h,
              analyticsSource: m,
              initialItemCardRef: p,
              reducedMotion: g
            });
            n.push(r)
          }, 250);
        return n.push(() => clearTimeout(r)), () => {
          n.forEach(e => e())
        }
      }
    }, [d, h, m, t, n, x, p, g])
  },
  m = e => {
    let t = r.useRef({}),
      n = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
      i = r.useCallback((e, n) => {
        t.current[e] = n
      }, []);
    return {
      setCategoryRef: i,
      handleScrollToCategory: r.useCallback(r => {
        let i = t.current[r];
        null != i && (null == e || e.scrollIntoViewNode({
          node: i,
          padding: 12,
          animate: !n,
          shouldScrollToStart: !0
        }))
      }, [e, n])
    }
  }