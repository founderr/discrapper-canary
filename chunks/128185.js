"use strict";
t.d(s, {
  h: function() {
    return I
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  r = t(442837),
  l = t(481060),
  i = t(607070),
  o = t(100527),
  c = t(906732),
  u = t(44315),
  d = t(810090),
  C = t(626135),
  E = t(328347),
  f = t(530915),
  m = t(948625),
  p = t(981631),
  g = t(421812);

function h(e) {
  var s, t;
  let {
    config: r,
    index: i,
    handleCTAClick: o,
    text: c,
    reducedMotion: C = !1
  } = e, E = a.useMemo(() => (0, m.E8)(r, C), [r, C]);
  return (0, n.jsxs)("div", {
    className: g.headerContainer,
    children: [(0, n.jsxs)("div", {
      className: g.headerInnerContainer,
      children: [null == r.backgroundVideoSrc || C ? (0, n.jsx)("img", {
        src: r.backgroundStaticSrc,
        alt: "",
        className: g.headerAsset
      }) : (0, n.jsx)(d.Z, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: g.headerAsset,
        children: (0, n.jsx)("source", {
          src: r.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, n.jsxs)("div", {
        className: g.headerContent,
        style: {
          color: null !== (s = r.textColor) && void 0 !== s ? s : (0, u.Lq)(p.Ilk.WHITE_100)
        },
        children: [(0, n.jsx)("div", {
          className: g.badgeContainer,
          style: {
            visibility: null != r.badge ? "visible" : "hidden"
          },
          children: null != r.badge && (0, n.jsx)(l.Text, {
            variant: "text-xs/bold",
            className: g.badge,
            children: r.badge.label()
          })
        }), (0, n.jsxs)("div", {
          className: g.logoAndDescriptionContainer,
          children: [null != r.logoSrc && (0, n.jsx)("img", {
            src: r.logoSrc,
            alt: "",
            className: g.logo
          }), (null != r.description || null != c) && (0, n.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "currentColor",
            children: null !== (t = r.description) && void 0 !== t ? t : c
          })]
        }), (0, n.jsx)("div", {
          children: null != r.cta && (0, n.jsx)(l.Button, {
            onClick: () => o(r, i),
            children: r.cta.label()
          })
        })]
      })]
    }), E.map((e, s) => (0, n.jsx)("img", {
      src: e,
      className: g.overflowImage,
      alt: ""
    }, s))]
  })
}

function I(e) {
  let {
    categories: s,
    handleScrollToCategory: t
  } = e, {
    analyticsLocations: l
  } = (0, r.cj)([E.Z], () => E.Z.getAnalytics()), {
    analyticsLocations: u
  } = (0, c.ZP)([...l, o.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL]), d = a.useCallback((e, s) => {
    let n = e.cta;
    C.default.track(p.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
      location_stack: u,
      slide_id: e.id,
      slide_index: s,
      sku_id: null == n ? void 0 : n.categorySkuId
    }), (null == n ? void 0 : n.categorySkuId) != null && t(n.categorySkuId)
  }, [u, t]), I = (0, r.e7)([i.Z], () => i.Z.useReducedMotion), _ = a.useMemo(() => {
    let e = {};
    for (let t of s) e[t.skuId] = t.summary;
    return e
  }, [s]), x = a.useCallback((e, s) => {
    var t;
    let a = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      r = null != a ? _[a] : void 0;
    return (0, n.jsx)(h, {
      config: e,
      text: r,
      handleCTAClick: d,
      reducedMotion: I,
      index: s
    })
  }, [_, d, I]), T = a.useCallback(e => {
    var s;
    return null === (s = m.T8[e]) || void 0 === s ? void 0 : s.id
  }, []);
  return (0, n.jsx)("div", {
    className: g.carouselContainer,
    children: (0, n.jsx)(f.U, {
      carouselId: "collectibles_shop_header_carousel",
      className: g.carousel,
      items: m.T8,
      renderItem: x,
      getItemId: T,
      controlsClassName: g.paginationControls,
      paginationButtonClassName: g.paginationButton,
      delay: 6e3,
      analyticsLocations: u,
      unidirectional: !0
    })
  })
}