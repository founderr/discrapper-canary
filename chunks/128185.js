"use strict";
s.r(t), s.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return h
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
  f = s("626135"),
  C = s("328347"),
  E = s("530915"),
  m = s("948625"),
  p = s("981631"),
  S = s("139557");

function g(e) {
  var t, s;
  let {
    config: n,
    index: i,
    handleCTAClick: o,
    text: u,
    reducedMotion: f = !1
  } = e, C = l.useMemo(() => (0, m.getOverflowImages)(n, f), [n, f]);
  return (0, a.jsxs)("div", {
    className: S.headerContainer,
    children: [(0, a.jsxs)("div", {
      className: S.headerInnerContainer,
      children: [null == n.backgroundVideoSrc || f ? (0, a.jsx)("img", {
        src: n.backgroundStaticSrc,
        alt: "",
        className: S.headerAsset
      }) : (0, a.jsx)(d.default, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: S.headerAsset,
        children: (0, a.jsx)("source", {
          src: n.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, a.jsxs)("div", {
        className: S.headerContent,
        style: {
          color: null !== (t = n.textColor) && void 0 !== t ? t : (0, c.getColor)(p.Color.WHITE_100)
        },
        children: [(0, a.jsx)("div", {
          className: S.badgeContainer,
          style: {
            visibility: null != n.badge ? "visible" : "hidden"
          },
          children: null != n.badge && (0, a.jsx)(r.Text, {
            variant: "text-xs/bold",
            className: S.badge,
            children: n.badge.label()
          })
        }), (0, a.jsxs)("div", {
          className: S.logoAndDescriptionContainer,
          children: [null != n.logoSrc && (0, a.jsx)("img", {
            src: n.logoSrc,
            alt: "",
            className: S.logo
          }), (null != n.description || null != u) && (0, a.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "currentColor",
            children: null !== (s = n.description) && void 0 !== s ? s : u
          })]
        }), (0, a.jsx)("div", {
          children: null != n.cta && (0, a.jsx)(r.Button, {
            onClick: () => o(n, i),
            children: n.cta.label()
          })
        })]
      })]
    }), C.map((e, t) => (0, a.jsx)("img", {
      src: e,
      className: S.overflowImage,
      alt: ""
    }, t))]
  })
}

function h(e) {
  let {
    categories: t,
    handleScrollToCategory: s
  } = e, {
    analyticsLocations: r
  } = (0, n.useStateFromStoresObject)([C.default], () => C.default.getAnalytics()), {
    analyticsLocations: c
  } = (0, u.default)([...r, o.default.COLLECTIBLES_SHOP_HEADER_CAROUSEL]), d = l.useCallback((e, t) => {
    let a = e.cta;
    f.default.track(p.AnalyticEvents.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
      location_stack: c,
      slide_id: e.id,
      slide_index: t,
      sku_id: null == a ? void 0 : a.categorySkuId
    }), (null == a ? void 0 : a.categorySkuId) != null && s(a.categorySkuId)
  }, [c, s]), h = (0, n.useStateFromStores)([i.default], () => i.default.useReducedMotion), I = l.useMemo(() => {
    let e = {};
    for (let s of t) e[s.skuId] = s.summary;
    return e
  }, [t]), _ = l.useCallback((e, t) => {
    var s;
    let l = null === (s = e.cta) || void 0 === s ? void 0 : s.categorySkuId,
      n = null != l ? I[l] : void 0;
    return (0, a.jsx)(g, {
      config: e,
      text: n,
      handleCTAClick: d,
      reducedMotion: h,
      index: t
    })
  }, [I, d, h]), T = l.useCallback(e => {
    var t;
    return null === (t = m.COLLECTIBLES_HEADERS[e]) || void 0 === t ? void 0 : t.id
  }, []);
  return (0, a.jsx)("div", {
    className: S.carouselContainer,
    children: (0, a.jsx)(E.SlideCarousel, {
      carouselId: "collectibles_shop_header_carousel",
      className: S.carousel,
      items: m.COLLECTIBLES_HEADERS,
      renderItem: _,
      getItemId: T,
      controlsClassName: S.paginationControls,
      paginationButtonClassName: S.paginationButton,
      delay: 6e3,
      analyticsLocations: c,
      unidirectional: !0
    })
  })
}