"use strict";
s.d(t, {
  Kp: function() {
    return m
  },
  u9: function() {
    return g
  },
  xV: function() {
    return h
  }
}), s(757143), s(47120), s(653041);
var n = s(470079),
  r = s(266067),
  a = s(442837),
  i = s(607070),
  l = s(100527),
  o = s(906732),
  c = s(328347),
  u = s(237031),
  d = s(981631);
let C = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(C, "(\\d+)$")),
  p = [d.Z5c.COLLECTIBLES_SHOP, d.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  g = e => {
    let t = (0, r.TH)();
    n.useEffect(() => {
      if (null != e && p.includes(t.pathname)) return window.location.replace("".concat(C).concat(e.skuId)), () => {
        window.location.hash.startsWith(C) && window.location.replace("#")
      }
    }, [])
  },
  E = e => {
    let {
      categories: t,
      productSkuId: s,
      analyticsLocations: n,
      analyticsSource: r,
      initialItemCardRef: a,
      reducedMotion: i = !1
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === s);
      if (null != t) {
        var l;
        null === (l = a.current) || void 0 === l || l.scrollIntoView({
          behavior: i ? "instant" : "smooth",
          block: "center",
          inline: "center"
        });
        let s = setTimeout(() => {
          let s = document.getElementById("shop-item-".concat(t.skuId));
          s !== document.activeElement && (null == s || s.focus()), (0, u.T)({
            product: t,
            category: e,
            analyticsSource: r,
            analyticsLocations: n,
            returnRef: a
          })
        }, 750);
        return () => clearTimeout(s)
      }
    }
    return () => {}
  },
  m = e => {
    let {
      categories: t,
      isFetchingCategories: s,
      isLayer: u,
      initialItemCardRef: C
    } = e, p = (0, a.e7)([i.Z], () => i.Z.useReducedMotion), g = n.useRef(null), m = (0, r.TH)(), h = m.pathname === d.Z5c.COLLECTIBLES_SHOP ? l.Z.HOME_PAGE_SHOP_TAB : m.pathname === d.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? l.Z.COLLECTIBLES_SHOP_FULLSCREEN : l.Z.COLLECTIBLES_SHOP, {
      analyticsLocations: x
    } = (0, o.ZP)(h);
    n.useEffect(() => {
      if (u) return;
      let e = f.exec(m.hash);
      if (null != e) {
        let t = e[1];
        g.current = t
      }
    }, []);
    let I = (0, a.e7)([c.Z], () => c.Z.initialProductSkuId);
    n.useEffect(() => {
      if (s) return;
      let e = null;
      if (u && null != I && (e = I), !u && null != g.current && (e = g.current), null != e) {
        let s = [],
          n = setTimeout(() => {
            let n = E({
              categories: t,
              productSkuId: e,
              analyticsLocations: x,
              analyticsSource: h,
              initialItemCardRef: C,
              reducedMotion: p
            });
            s.push(n)
          }, 250);
        return s.push(() => clearTimeout(n)), () => {
          s.forEach(e => e())
        }
      }
    }, [u, x, h, t, s, I, C, p])
  },
  h = e => {
    let t = n.useRef({}),
      s = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
      r = n.useCallback((e, s) => {
        t.current[e] = s
      }, []);
    return {
      setCategoryRef: r,
      handleScrollToCategory: n.useCallback(n => {
        let r = t.current[n];
        null != r && (null == e || e.scrollIntoViewNode({
          node: r,
          padding: 12,
          animate: !s,
          shouldScrollToStart: !0
        }))
      }, [e, s])
    }
  }