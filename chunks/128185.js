"use strict";
a.r(t), a.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return m
  }
}), a("47120");
var s = a("735250"),
  l = a("470079"),
  r = a("442837"),
  n = a("481060"),
  i = a("607070"),
  o = a("44315"),
  c = a("810090"),
  u = a("530915"),
  d = a("948625"),
  f = a("981631"),
  C = a("139557");

function p(e) {
  var t, a, r;
  let {
    config: i,
    handleScrollToCategory: u,
    text: p,
    reducedMotion: m = !1
  } = e, g = l.useMemo(() => (0, d.getOverflowImages)(i, m), [i, m]), E = l.useCallback(() => {
    var e;
    (null === (e = i.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && u(i.cta.categorySkuId)
  }, [null === (t = i.cta) || void 0 === t ? void 0 : t.categorySkuId, u]);
  return (0, s.jsxs)("div", {
    className: C.headerContainer,
    children: [(0, s.jsxs)("div", {
      className: C.headerInnerContainer,
      children: [null == i.backgroundVideoSrc || m ? (0, s.jsx)("img", {
        src: i.backgroundStaticSrc,
        alt: "",
        className: C.headerAsset
      }) : (0, s.jsx)(c.default, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: C.headerAsset,
        children: (0, s.jsx)("source", {
          src: i.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, s.jsxs)("div", {
        className: C.headerContent,
        style: {
          color: null !== (a = i.textColor) && void 0 !== a ? a : (0, o.getColor)(f.Color.WHITE_100)
        },
        children: [(0, s.jsx)("div", {
          className: C.badgeContainer,
          style: {
            visibility: null != i.badge ? "visible" : "hidden"
          },
          children: null != i.badge && (0, s.jsx)(n.Text, {
            variant: "text-xs/bold",
            className: C.badge,
            children: i.badge.label()
          })
        }), (0, s.jsxs)("div", {
          className: C.logoAndDescriptionContainer,
          children: [null != i.logoSrc && (0, s.jsx)("img", {
            src: i.logoSrc,
            alt: "",
            className: C.logo
          }), (null != i.description || null != p) && (0, s.jsx)(n.Text, {
            variant: "text-md/medium",
            color: "currentColor",
            children: null !== (r = i.description) && void 0 !== r ? r : p
          })]
        }), (0, s.jsx)("div", {
          children: null != i.cta && (0, s.jsx)(n.Button, {
            onClick: E,
            children: i.cta.label()
          })
        })]
      })]
    }), g.map((e, t) => (0, s.jsx)("img", {
      src: e,
      className: C.overflowImage,
      alt: ""
    }, t))]
  })
}

function m(e) {
  let {
    categories: t,
    handleScrollToCategory: a
  } = e, n = (0, r.useStateFromStores)([i.default], () => i.default.useReducedMotion), o = l.useMemo(() => {
    let e = {};
    for (let a of t) e[a.skuId] = a.summary;
    return e
  }, [t]), c = l.useCallback(e => {
    var t;
    let l = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      r = null != l ? o[l] : void 0;
    return (0, s.jsx)(p, {
      config: e,
      text: r,
      handleScrollToCategory: a,
      reducedMotion: n
    })
  }, [o, a, n]);
  return (0, s.jsx)("div", {
    className: C.carouselContainer,
    children: (0, s.jsx)(u.SlideCarousel, {
      delay: 6e3,
      items: d.COLLECTIBLES_HEADERS,
      className: C.carousel,
      renderItem: c,
      controlsClassName: C.paginationControls,
      paginationButtonClassName: C.paginationButton
    })
  })
}