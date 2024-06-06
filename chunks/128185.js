"use strict";
s.r(t), s.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return S
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  r = s("481060"),
  i = s("607070"),
  o = s("100527"),
  u = s("906732"),
  c = s("44315"),
  d = s("810090"),
  f = s("328347"),
  C = s("530915"),
  E = s("948625"),
  p = s("981631"),
  m = s("139557");

function g(e) {
  var t, s, n;
  let {
    config: i,
    handleScrollToCategory: o,
    text: u,
    reducedMotion: f = !1
  } = e, C = l.useMemo(() => (0, E.getOverflowImages)(i, f), [i, f]), g = l.useCallback(() => {
    var e;
    (null === (e = i.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && o(i.cta.categorySkuId)
  }, [null === (t = i.cta) || void 0 === t ? void 0 : t.categorySkuId, o]);
  return (0, a.jsxs)("div", {
    className: m.headerContainer,
    children: [(0, a.jsxs)("div", {
      className: m.headerInnerContainer,
      children: [null == i.backgroundVideoSrc || f ? (0, a.jsx)("img", {
        src: i.backgroundStaticSrc,
        alt: "",
        className: m.headerAsset
      }) : (0, a.jsx)(d.default, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: m.headerAsset,
        children: (0, a.jsx)("source", {
          src: i.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, a.jsxs)("div", {
        className: m.headerContent,
        style: {
          color: null !== (s = i.textColor) && void 0 !== s ? s : (0, c.getColor)(p.Color.WHITE_100)
        },
        children: [(0, a.jsx)("div", {
          className: m.badgeContainer,
          style: {
            visibility: null != i.badge ? "visible" : "hidden"
          },
          children: null != i.badge && (0, a.jsx)(r.Text, {
            variant: "text-xs/bold",
            className: m.badge,
            children: i.badge.label()
          })
        }), (0, a.jsxs)("div", {
          className: m.logoAndDescriptionContainer,
          children: [null != i.logoSrc && (0, a.jsx)("img", {
            src: i.logoSrc,
            alt: "",
            className: m.logo
          }), (null != i.description || null != u) && (0, a.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "currentColor",
            children: null !== (n = i.description) && void 0 !== n ? n : u
          })]
        }), (0, a.jsx)("div", {
          children: null != i.cta && (0, a.jsx)(r.Button, {
            onClick: g,
            children: i.cta.label()
          })
        })]
      })]
    }), C.map((e, t) => (0, a.jsx)("img", {
      src: e,
      className: m.overflowImage,
      alt: ""
    }, t))]
  })
}

function S(e) {
  let {
    categories: t,
    handleScrollToCategory: s
  } = e, {
    analyticsLocations: r
  } = (0, n.useStateFromStoresObject)([f.default], () => f.default.getAnalytics()), {
    analyticsLocations: c
  } = (0, u.default)([...r, o.default.COLLECTIBLES_SHOP_HEADER_CAROUSEL]), d = (0, n.useStateFromStores)([i.default], () => i.default.useReducedMotion), p = l.useMemo(() => {
    let e = {};
    for (let s of t) e[s.skuId] = s.summary;
    return e
  }, [t]), S = l.useCallback(e => {
    var t;
    let l = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      n = null != l ? p[l] : void 0;
    return (0, a.jsx)(g, {
      config: e,
      text: n,
      handleScrollToCategory: s,
      reducedMotion: d
    })
  }, [p, s, d]), h = l.useCallback(e => {
    var t;
    return null === (t = E.COLLECTIBLES_HEADERS[e]) || void 0 === t ? void 0 : t.id
  }, []);
  return (0, a.jsx)("div", {
    className: m.carouselContainer,
    children: (0, a.jsx)(C.SlideCarousel, {
      carouselId: "collectibles_shop_header_carousel",
      className: m.carousel,
      items: E.COLLECTIBLES_HEADERS,
      renderItem: S,
      getItemId: h,
      controlsClassName: m.paginationControls,
      paginationButtonClassName: m.paginationButton,
      delay: 6e3,
      analyticsLocations: c,
      unidirectional: !0
    })
  })
}