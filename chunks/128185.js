"use strict";
n.d(t, {
  h: function() {
    return h
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(481060),
  s = n(607070),
  c = n(100527),
  l = n(906732),
  d = n(44315),
  u = n(810090),
  p = n(626135),
  f = n(328347),
  g = n(530915),
  _ = n(948625),
  C = n(981631),
  b = n(421812);

function m(e) {
  var t, n;
  let {
    config: a,
    index: s,
    handleCTAClick: c,
    text: l,
    reducedMotion: p = !1
  } = e, f = i.useMemo(() => (0, _.E8)(a, p), [a, p]);
  return (0, r.jsxs)("div", {
    className: b.headerContainer,
    children: [(0, r.jsxs)("div", {
      className: b.headerInnerContainer,
      children: [null == a.backgroundVideoSrc || p ? (0, r.jsx)("img", {
        src: a.backgroundStaticSrc,
        alt: "",
        className: b.headerAsset
      }) : (0, r.jsx)(u.Z, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: b.headerAsset,
        children: (0, r.jsx)("source", {
          src: a.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, r.jsxs)("div", {
        className: b.headerContent,
        style: {
          color: null !== (t = a.textColor) && void 0 !== t ? t : (0, d.Lq)(C.Ilk.WHITE_100)
        },
        children: [(0, r.jsx)("div", {
          className: b.badgeContainer,
          style: {
            visibility: null != a.badge ? "visible" : "hidden"
          },
          children: null != a.badge && (0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            className: b.badge,
            children: a.badge.label()
          })
        }), (0, r.jsxs)("div", {
          className: b.logoAndDescriptionContainer,
          children: [null != a.logoSrc && (0, r.jsx)("img", {
            src: a.logoSrc,
            alt: "",
            className: b.logo
          }), (null != a.description || null != l) && (0, r.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "currentColor",
            children: null !== (n = a.description) && void 0 !== n ? n : l
          })]
        }), (0, r.jsx)("div", {
          children: null != a.cta && (0, r.jsx)(o.Button, {
            onClick: () => c(a, s),
            children: a.cta.label()
          })
        })]
      })]
    }), f.map((e, t) => (0, r.jsx)("img", {
      src: e,
      className: b.overflowImage,
      alt: ""
    }, t))]
  })
}

function h(e) {
  let {
    categories: t,
    handleScrollToCategory: n
  } = e, o = i.useMemo(() => {
    let e = {};
    for (let n of t) e[n.skuId] = n;
    return e
  }, [t]), d = i.useMemo(() => (0, _.yc)(o), [o]), {
    analyticsLocations: u
  } = (0, a.cj)([f.Z], () => f.Z.getAnalytics()), {
    analyticsLocations: h
  } = (0, l.ZP)([...u, c.Z.COLLECTIBLES_SHOP_HEADER_CAROUSEL]), x = i.useCallback((e, t) => {
    let r = e.cta;
    p.default.track(C.rMx.SHOP_HEADER_CAROUSEL_CTA_CLICKED, {
      location_stack: h,
      slide_id: e.id,
      slide_index: t,
      sku_id: null == r ? void 0 : r.categorySkuId
    }), (null == r ? void 0 : r.categorySkuId) != null && n(r.categorySkuId)
  }, [h, n]), I = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), E = i.useCallback((e, t) => {
    var n, i;
    let a = null === (n = e.cta) || void 0 === n ? void 0 : n.categorySkuId,
      s = null != a ? null === (i = o[a]) || void 0 === i ? void 0 : i.summary : void 0;
    return (0, r.jsx)(m, {
      config: e,
      text: s,
      handleCTAClick: x,
      reducedMotion: I,
      index: t
    })
  }, [o, x, I]), v = i.useCallback(e => {
    var t;
    return null === (t = d[e]) || void 0 === t ? void 0 : t.id
  }, [d]);
  return (0, r.jsx)("div", {
    className: b.carouselContainer,
    children: (0, r.jsx)(g.U, {
      carouselId: "collectibles_shop_header_carousel",
      className: b.carousel,
      items: d,
      renderItem: E,
      getItemId: v,
      controlsClassName: b.paginationControls,
      paginationButtonClassName: b.paginationButton,
      delay: 6e3,
      analyticsLocations: h,
      unidirectional: !0
    })
  })
}