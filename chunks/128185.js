"use strict";
t.d(s, {
  h: function() {
    return h
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  r = t(442837),
  i = t(481060),
  l = t(607070),
  o = t(100527),
  c = t(906732),
  u = t(44315),
  d = t(810090),
  C = t(626135),
  f = t(328347),
  E = t(530915),
  p = t(948625),
  g = t(981631),
  m = t(421812);

function x(e) {
  var s, t;
  let {
    config: r,
    index: l,
    handleCTAClick: o,
    text: c,
    reducedMotion: C = !1
  } = e, f = a.useMemo(() => (0, p.E8)(r, C), [r, C]);
  return (0, n.jsxs)("div", {
    className: m.headerContainer,
    children: [(0, n.jsxs)("div", {
      className: m.headerInnerContainer,
      children: [null == r.backgroundVideoSrc || C ? (0, n.jsx)("img", {
        src: r.backgroundStaticSrc,
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
          src: r.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, n.jsxs)("div", {
        className: m.headerContent,
        style: {
          color: null !== (s = r.textColor) && void 0 !== s ? s : (0, u.Lq)(g.Ilk.WHITE_100)
        },
        children: [(0, n.jsx)("div", {
          className: m.badgeContainer,
          style: {
            visibility: null != r.badge ? "visible" : "hidden"
          },
          children: null != r.badge && (0, n.jsx)(i.Text, {
            variant: "text-xs/bold",
            className: m.badge,
            children: r.badge.label()
          })
        }), (0, n.jsxs)("div", {
          className: m.logoAndDescriptionContainer,
          children: [null != r.logoSrc && (0, n.jsx)("img", {
            src: r.logoSrc,
            alt: "",
            className: m.logo
          }), (null != r.description || null != c) && (0, n.jsx)(i.Text, {
            variant: "text-md/medium",
            color: "currentColor",
            children: null !== (t = r.description) && void 0 !== t ? t : c
          })]
        }), (0, n.jsx)("div", {
          children: null != r.cta && (0, n.jsx)(i.Button, {
            onClick: () => o(r, l),
            children: r.cta.label()
          })
        })]
      })]
    }), f.map((e, s) => (0, n.jsx)("img", {
      src: e,
      className: m.overflowImage,
      alt: ""
    }, s))]
  })
}

function h(e) {
  let {
    categories: s,
    handleScrollToCategory: t
  } = e, {
    analyticsLocations: i
  } = (0, r.cj)([f.Z], () => f.Z.getAnalytics()), {
    analyticsLocations: u
  } = (0, c.ZP)([...i, o.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL]), d = a.useCallback((e, s) => {
    let n = e.cta;
    C.default.track(g.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
      location_stack: u,
      slide_id: e.id,
      slide_index: s,
      sku_id: null == n ? void 0 : n.categorySkuId
    }), (null == n ? void 0 : n.categorySkuId) != null && t(n.categorySkuId)
  }, [u, t]), h = (0, r.e7)([l.Z], () => l.Z.useReducedMotion), I = a.useMemo(() => {
    let e = {};
    for (let t of s) e[t.skuId] = t.summary;
    return e
  }, [s]), _ = a.useCallback((e, s) => {
    var t;
    let a = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      r = null != a ? I[a] : void 0;
    return (0, n.jsx)(x, {
      config: e,
      text: r,
      handleCTAClick: d,
      reducedMotion: h,
      index: s
    })
  }, [I, d, h]), T = a.useCallback(e => {
    var s;
    return null === (s = p.T8[e]) || void 0 === s ? void 0 : s.id
  }, []);
  return (0, n.jsx)("div", {
    className: m.carouselContainer,
    children: (0, n.jsx)(E.U, {
      carouselId: "collectibles_shop_header_carousel",
      className: m.carousel,
      items: p.T8,
      renderItem: _,
      getItemId: T,
      controlsClassName: m.paginationControls,
      paginationButtonClassName: m.paginationButton,
      delay: 6e3,
      analyticsLocations: u,
      unidirectional: !0
    })
  })
}