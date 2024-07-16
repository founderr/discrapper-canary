s.d(t, {
  Kp: function() {
return _;
  },
  u9: function() {
return C;
  },
  xV: function() {
return h;
  }
}), s(757143), s(47120), s(653041);
var n = s(470079),
  r = s(266067),
  a = s(442837),
  o = s(607070),
  i = s(100527),
  l = s(906732),
  c = s(328347),
  d = s(237031),
  u = s(981631);
let p = ''.concat('#').concat('itemSkuId', '='),
  g = new RegExp('^'.concat(p, '(\\d+)$')),
  f = [
u.Z5c.COLLECTIBLES_SHOP,
u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
  ],
  C = e => {
let t = (0, r.TH)();
n.useEffect(() => {
  if (null != e && f.includes(t.pathname))
    return window.location.replace(''.concat(p).concat(e.skuId)), () => {
      window.location.hash.startsWith(p) && window.location.replace('#');
    };
}, []);
  },
  m = e => {
let {
  categories: t,
  productSkuId: s,
  analyticsLocations: n,
  analyticsSource: r,
  initialItemCardRef: a,
  reducedMotion: o = !1
} = e;
for (let e of t.values()) {
  let t = e.products.find(e => e.skuId === s);
  if (null != t) {
    var i;
    null === (i = a.current) || void 0 === i || i.scrollIntoView({
      behavior: o ? 'instant' : 'smooth',
      block: 'center',
      inline: 'center'
    });
    let s = setTimeout(() => {
      let s = document.getElementById('shop-item-'.concat(t.skuId));
      s !== document.activeElement && (null == s || s.focus()), (0, d.T)({
        product: t,
        category: e,
        analyticsSource: r,
        analyticsLocations: n,
        returnRef: a
      });
    }, 750);
    return () => clearTimeout(s);
  }
}
return () => {};
  },
  _ = e => {
let {
  categories: t,
  isFetchingCategories: s,
  isLayer: d,
  initialItemCardRef: p
} = e, f = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), C = n.useRef(null), _ = (0, r.TH)(), h = _.pathname === u.Z5c.COLLECTIBLES_SHOP ? i.Z.HOME_PAGE_SHOP_TAB : _.pathname === u.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN : i.Z.COLLECTIBLES_SHOP, {
  analyticsLocations: b
} = (0, l.ZP)(h);
n.useEffect(() => {
  if (d)
    return;
  let e = g.exec(_.hash);
  if (null != e) {
    let t = e[1];
    C.current = t;
  }
}, []);
let x = (0, a.e7)([c.Z], () => c.Z.initialProductSkuId);
n.useEffect(() => {
  if (s)
    return;
  let e = null;
  if (d && null != x && (e = x), !d && null != C.current && (e = C.current), null != e) {
    let s = [],
      n = setTimeout(() => {
        let n = m({
          categories: t,
          productSkuId: e,
          analyticsLocations: b,
          analyticsSource: h,
          initialItemCardRef: p,
          reducedMotion: f
        });
        s.push(n);
      }, 250);
    return s.push(() => clearTimeout(n)), () => {
      s.forEach(e => e());
    };
  }
}, [
  d,
  b,
  h,
  t,
  s,
  x,
  p,
  f
]);
  },
  h = e => {
let t = n.useRef({}),
  s = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
  r = n.useCallback((e, s) => {
    t.current[e] = s;
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
    }));
  }, [
    e,
    s
  ])
};
  };