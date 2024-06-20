"use strict";
t.d(s, {
  Kp: function() {
    return m
  },
  u9: function() {
    return p
  },
  xV: function() {
    return x
  }
}), t(757143), t(47120), t(653041);
var n = t(470079),
  a = t(266067),
  r = t(442837),
  i = t(607070),
  l = t(100527),
  o = t(906732),
  c = t(328347),
  u = t(237031),
  d = t(981631);
let C = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(C, "(\\d+)$")),
  E = [d.Z5c.COLLECTIBLES_SHOP, d.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  p = e => {
    let s = (0, a.TH)();
    n.useEffect(() => {
      if (null != e && E.includes(s.pathname)) return window.location.replace("".concat(C).concat(e.skuId)), () => {
        window.location.hash.startsWith(C) && window.location.replace("#")
      }
    }, [])
  },
  g = e => {
    let {
      categories: s,
      productSkuId: t,
      analyticsLocations: n,
      analyticsSource: a,
      initialItemCardRef: r,
      reducedMotion: i = !1
    } = e;
    for (let e of s.values()) {
      let s = e.products.find(e => e.skuId === t);
      if (null != s) {
        var l;
        null === (l = r.current) || void 0 === l || l.scrollIntoView({
          behavior: i ? "instant" : "smooth",
          block: "center",
          inline: "center"
        });
        let t = setTimeout(() => {
          let t = document.getElementById("shop-item-".concat(s.skuId));
          t !== document.activeElement && (null == t || t.focus()), (0, u.T)({
            product: s,
            category: e,
            analyticsSource: a,
            analyticsLocations: n,
            returnRef: r
          })
        }, 750);
        return () => clearTimeout(t)
      }
    }
    return () => {}
  },
  m = e => {
    let {
      categories: s,
      isFetchingCategories: t,
      isLayer: u,
      initialItemCardRef: C
    } = e, E = (0, r.e7)([i.Z], () => i.Z.useReducedMotion), p = n.useRef(null), m = (0, a.TH)(), x = m.pathname === d.Z5c.COLLECTIBLES_SHOP ? l.Z.HOME_PAGE_SHOP_TAB : m.pathname === d.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? l.Z.COLLECTIBLES_SHOP_FULLSCREEN : l.Z.COLLECTIBLES_SHOP, {
      analyticsLocations: h
    } = (0, o.ZP)(x);
    n.useEffect(() => {
      if (u) return;
      let e = f.exec(m.hash);
      if (null != e) {
        let s = e[1];
        p.current = s
      }
    }, []);
    let I = (0, r.e7)([c.Z], () => c.Z.initialProductSkuId);
    n.useEffect(() => {
      if (t) return;
      let e = null;
      if (u && null != I && (e = I), !u && null != p.current && (e = p.current), null != e) {
        let t = [],
          n = setTimeout(() => {
            let n = g({
              categories: s,
              productSkuId: e,
              analyticsLocations: h,
              analyticsSource: x,
              initialItemCardRef: C,
              reducedMotion: E
            });
            t.push(n)
          }, 250);
        return t.push(() => clearTimeout(n)), () => {
          t.forEach(e => e())
        }
      }
    }, [u, h, x, s, t, I, C, E])
  },
  x = e => {
    let s = n.useRef({}),
      t = (0, r.e7)([i.Z], () => i.Z.useReducedMotion),
      a = n.useCallback((e, t) => {
        s.current[e] = t
      }, []);
    return {
      setCategoryRef: a,
      handleScrollToCategory: n.useCallback(n => {
        let a = s.current[n];
        null != a && (null == e || e.scrollIntoViewNode({
          node: a,
          padding: 12,
          animate: !t,
          shouldScrollToStart: !0
        }))
      }, [e, t])
    }
  }