s.d(t, {
  h: function() {
return b;
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(442837),
  o = s(481060),
  i = s(607070),
  l = s(100527),
  c = s(906732),
  d = s(44315),
  u = s(810090),
  p = s(626135),
  g = s(328347),
  f = s(530915),
  C = s(948625),
  m = s(981631),
  _ = s(395114);

function h(e) {
  var t, s;
  let {
config: a,
index: i,
handleCTAClick: l,
text: c,
reducedMotion: p = !1
  } = e, g = r.useMemo(() => (0, C.E8)(a, p), [
a,
p
  ]);
  return (0, n.jsxs)('div', {
className: _.headerContainer,
children: [
  (0, n.jsxs)('div', {
    className: _.headerInnerContainer,
    children: [
      null == a.backgroundVideoSrc || p ? (0, n.jsx)('img', {
        src: a.backgroundStaticSrc,
        alt: '',
        className: _.headerAsset
      }) : (0, n.jsx)(u.Z, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: _.headerAsset,
        children: (0, n.jsx)('source', {
          src: a.backgroundVideoSrc,
          type: 'video/mp4'
        })
      }),
      (0, n.jsxs)('div', {
        className: _.headerContent,
        style: {
          color: null !== (t = a.textColor) && void 0 !== t ? t : (0, d.Lq)(m.Ilk.WHITE_100)
        },
        children: [
          (0, n.jsx)('div', {
            className: _.badgeContainer,
            style: {
              visibility: null != a.badge ? 'visible' : 'hidden'
            },
            children: null != a.badge && (0, n.jsx)(o.Text, {
              variant: 'text-xs/semibold',
              className: _.badge,
              children: a.badge.label()
            })
          }),
          (0, n.jsxs)('div', {
            className: _.logoAndDescriptionContainer,
            children: [
              null != a.logoSrc && (0, n.jsx)('img', {
                src: a.logoSrc,
                alt: '',
                className: _.logo
              }),
              (null != a.description || null != c) && (0, n.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'currentColor',
                children: null !== (s = a.description) && void 0 !== s ? s : c
              })
            ]
          }),
          (0, n.jsx)('div', {
            children: null != a.cta && (0, n.jsx)(o.Button, {
              onClick: () => l(a, i),
              children: a.cta.label()
            })
          })
        ]
      })
    ]
  }),
  g.map((e, t) => (0, n.jsx)('img', {
    src: e,
    className: _.overflowImage,
    alt: ''
  }, t))
]
  });
}

function b(e) {
  let {
categories: t,
handleScrollToCategory: s
  } = e, o = r.useMemo(() => {
let e = {};
for (let s of t)
  e[s.skuId] = s;
return e;
  }, [t]), d = r.useMemo(() => (0, C.yc)(o), [o]), {
analyticsLocations: u
  } = (0, a.cj)([g.Z], () => g.Z.getAnalytics()), {
analyticsLocations: b
  } = (0, c.ZP)([
...u,
l.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL
  ]), x = r.useCallback((e, t) => {
let n = e.cta;
p.default.track(m.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
  location_stack: b,
  slide_id: e.id,
  slide_index: t,
  sku_id: null == n ? void 0 : n.categorySkuId
}), (null == n ? void 0 : n.categorySkuId) != null && s(n.categorySkuId);
  }, [
b,
s
  ]), I = (0, a.e7)([i.Z], () => i.Z.useReducedMotion), E = r.useCallback((e, t) => {
var s, r;
let a = null === (s = e.cta) || void 0 === s ? void 0 : s.categorySkuId,
  i = null != a ? null === (r = o[a]) || void 0 === r ? void 0 : r.summary : void 0;
return (0, n.jsx)(h, {
  config: e,
  text: i,
  handleCTAClick: x,
  reducedMotion: I,
  index: t
});
  }, [
o,
x,
I
  ]), L = r.useCallback(e => {
var t;
return null === (t = d[e]) || void 0 === t ? void 0 : t.id;
  }, [d]);
  return (0, n.jsx)('div', {
className: _.carouselContainer,
children: (0, n.jsx)(f.U, {
  carouselId: 'collectibles_shop_header_carousel',
  className: _.carousel,
  items: d,
  renderItem: E,
  getItemId: L,
  controlsClassName: _.paginationControls,
  paginationButtonClassName: _.paginationButton,
  delay: 6000,
  analyticsLocations: b,
  unidirectional: !0
})
  });
}