"use strict";
s.d(t, {
  h: function() {
    return x
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  a = s(442837),
  i = s(481060),
  l = s(607070),
  o = s(100527),
  c = s(906732),
  u = s(44315),
  d = s(810090),
  C = s(626135),
  f = s(328347),
  p = s(530915),
  E = s(948625),
  g = s(981631),
  m = s(421812);

function h(e) {
  var t, s;
  let {
    config: a,
    index: l,
    handleCTAClick: o,
    text: c,
    reducedMotion: C = !1
  } = e, f = r.useMemo(() => (0, E.E8)(a, C), [a, C]);
  return (0, n.jsxs)("div", {
    className: m.headerContainer,
    children: [(0, n.jsxs)("div", {
      className: m.headerInnerContainer,
      children: [null == a.backgroundVideoSrc || C ? (0, n.jsx)("img", {
        src: a.backgroundStaticSrc,
        alt: "",
        className: m.headerAsset
      }) : (0, n.jsx)(d.Z, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: m.headerAsset,
        children: (0, n.jsx)("source", {
          src: a.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, n.jsxs)("div", {
        className: m.headerContent,
        style: {
          color: null !== (t = a.textColor) && void 0 !== t ? t : (0, u.Lq)(g.Ilk.WHITE_100)
        },
        children: [(0, n.jsx)("div", {
          className: m.badgeContainer,
          style: {
            visibility: null != a.badge ? "visible" : "hidden"
          },
          children: null != a.badge && (0, n.jsx)(i.Text, {
            variant: "text-xs/bold",
            className: m.badge,
            children: a.badge.label()
          })
        }), (0, n.jsxs)("div", {
          className: m.logoAndDescriptionContainer,
          children: [null != a.logoSrc && (0, n.jsx)("img", {
            src: a.logoSrc,
            alt: "",
            className: m.logo
          }), (null != a.description || null != c) && (0, n.jsx)(i.Text, {
            variant: "text-md/medium",
            color: "currentColor",
            children: null !== (s = a.description) && void 0 !== s ? s : c
          })]
        }), (0, n.jsx)("div", {
          children: null != a.cta && (0, n.jsx)(i.Button, {
            onClick: () => o(a, l),
            children: a.cta.label()
          })
        })]
      })]
    }), f.map((e, t) => (0, n.jsx)("img", {
      src: e,
      className: m.overflowImage,
      alt: ""
    }, t))]
  })
}

function x(e) {
  let {
    categories: t,
    handleScrollToCategory: s
  } = e, {
    analyticsLocations: i
  } = (0, a.cj)([f.Z], () => f.Z.getAnalytics()), {
    analyticsLocations: u
  } = (0, c.ZP)([...i, o.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL]), d = r.useCallback((e, t) => {
    let n = e.cta;
    C.default.track(g.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
      location_stack: u,
      slide_id: e.id,
      slide_index: t,
      sku_id: null == n ? void 0 : n.categorySkuId
    }), (null == n ? void 0 : n.categorySkuId) != null && s(n.categorySkuId)
  }, [u, s]), x = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), I = r.useMemo(() => {
    let e = {};
    for (let s of t) e[s.skuId] = s.summary;
    return e
  }, [t]), _ = r.useCallback((e, t) => {
    var s;
    let r = null === (s = e.cta) || void 0 === s ? void 0 : s.categorySkuId,
      a = null != r ? I[r] : void 0;
    return (0, n.jsx)(h, {
      config: e,
      text: a,
      handleCTAClick: d,
      reducedMotion: x,
      index: t
    })
  }, [I, d, x]), L = r.useCallback(e => {
    var t;
    return null === (t = E.T8[e]) || void 0 === t ? void 0 : t.id
  }, []);
  return (0, n.jsx)("div", {
    className: m.carouselContainer,
    children: (0, n.jsx)(p.U, {
      carouselId: "collectibles_shop_header_carousel",
      className: m.carousel,
      items: E.T8,
      renderItem: _,
      getItemId: L,
      controlsClassName: m.paginationControls,
      paginationButtonClassName: m.paginationButton,
      delay: 6e3,
      analyticsLocations: u,
      unidirectional: !0
    })
  })
}