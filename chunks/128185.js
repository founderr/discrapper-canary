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
  p = s("948625"),
  m = s("981631"),
  g = s("139557");

function S(e) {
  var t, s;
  let {
    config: n,
    index: i,
    handleCTAClick: o,
    text: u,
    reducedMotion: f = !1
  } = e, C = l.useMemo(() => (0, p.getOverflowImages)(n, f), [n, f]);
  return (0, a.jsxs)("div", {
    className: g.headerContainer,
    children: [(0, a.jsxs)("div", {
      className: g.headerInnerContainer,
      children: [null == n.backgroundVideoSrc || f ? (0, a.jsx)("img", {
        src: n.backgroundStaticSrc,
        alt: "",
        className: g.headerAsset
      }) : (0, a.jsx)(d.default, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: g.headerAsset,
        children: (0, a.jsx)("source", {
          src: n.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, a.jsxs)("div", {
        className: g.headerContent,
        style: {
          color: null !== (t = n.textColor) && void 0 !== t ? t : (0, c.getColor)(m.Color.WHITE_100)
        },
        children: [(0, a.jsx)("div", {
          className: g.badgeContainer,
          style: {
            visibility: null != n.badge ? "visible" : "hidden"
          },
          children: null != n.badge && (0, a.jsx)(r.Text, {
            variant: "text-xs/bold",
            className: g.badge,
            children: n.badge.label()
          })
        }), (0, a.jsxs)("div", {
          className: g.logoAndDescriptionContainer,
          children: [null != n.logoSrc && (0, a.jsx)("img", {
            src: n.logoSrc,
            alt: "",
            className: g.logo
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
      className: g.overflowImage,
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
    f.default.track(m.AnalyticEvents.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
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
    return (0, a.jsx)(S, {
      config: e,
      text: n,
      handleCTAClick: d,
      reducedMotion: h,
      index: t
    })
  }, [I, d, h]), T = l.useCallback(e => {
    var t;
    return null === (t = p.COLLECTIBLES_HEADERS[e]) || void 0 === t ? void 0 : t.id
  }, []);
  return (0, a.jsx)("div", {
    className: g.carouselContainer,
    children: (0, a.jsx)(E.SlideCarousel, {
      carouselId: "collectibles_shop_header_carousel",
      className: g.carousel,
      items: p.COLLECTIBLES_HEADERS,
      renderItem: _,
      getItemId: T,
      controlsClassName: g.paginationControls,
      paginationButtonClassName: g.paginationButton,
      delay: 6e3,
      analyticsLocations: c,
      unidirectional: !0
    })
  })
}