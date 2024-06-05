"use strict";
s.r(t), s.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return m
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  r = s("442837"),
  n = s("481060"),
  i = s("607070"),
  o = s("44315"),
  c = s("810090"),
  u = s("530915"),
  d = s("948625"),
  f = s("981631"),
  C = s("139557");

function p(e) {
  var t, s, r;
  let {
    config: i,
    handleScrollToCategory: u,
    text: p,
    reducedMotion: m = !1
  } = e, g = l.useMemo(() => (0, d.getOverflowImages)(i, m), [i, m]), E = l.useCallback(() => {
    var e;
    (null === (e = i.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && u(i.cta.categorySkuId)
  }, [null === (t = i.cta) || void 0 === t ? void 0 : t.categorySkuId, u]);
  return (0, a.jsxs)("div", {
    className: C.headerContainer,
    children: [(0, a.jsxs)("div", {
      className: C.headerInnerContainer,
      children: [null == i.backgroundVideoSrc || m ? (0, a.jsx)("img", {
        src: i.backgroundStaticSrc,
        alt: "",
        className: C.headerAsset
      }) : (0, a.jsx)(c.default, {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        playsInline: !0,
        responsive: !0,
        className: C.headerAsset,
        children: (0, a.jsx)("source", {
          src: i.backgroundVideoSrc,
          type: "video/mp4"
        })
      }), (0, a.jsxs)("div", {
        className: C.headerContent,
        style: {
          color: null !== (s = i.textColor) && void 0 !== s ? s : (0, o.getColor)(f.Color.WHITE_100)
        },
        children: [(0, a.jsx)("div", {
          className: C.badgeContainer,
          style: {
            visibility: null != i.badge ? "visible" : "hidden"
          },
          children: null != i.badge && (0, a.jsx)(n.Text, {
            variant: "text-xs/bold",
            className: C.badge,
            children: i.badge.label()
          })
        }), (0, a.jsxs)("div", {
          className: C.logoAndDescriptionContainer,
          children: [null != i.logoSrc && (0, a.jsx)("img", {
            src: i.logoSrc,
            alt: "",
            className: C.logo
          }), (null != i.description || null != p) && (0, a.jsx)(n.Text, {
            variant: "text-md/medium",
            color: "currentColor",
            children: null !== (r = i.description) && void 0 !== r ? r : p
          })]
        }), (0, a.jsx)("div", {
          children: null != i.cta && (0, a.jsx)(n.Button, {
            onClick: E,
            children: i.cta.label()
          })
        })]
      })]
    }), g.map((e, t) => (0, a.jsx)("img", {
      src: e,
      className: C.overflowImage,
      alt: ""
    }, t))]
  })
}

function m(e) {
  let {
    categories: t,
    handleScrollToCategory: s
  } = e, n = (0, r.useStateFromStores)([i.default], () => i.default.useReducedMotion), o = l.useMemo(() => {
    let e = {};
    for (let s of t) e[s.skuId] = s.summary;
    return e
  }, [t]), c = l.useCallback(e => {
    var t;
    let l = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      r = null != l ? o[l] : void 0;
    return (0, a.jsx)(p, {
      config: e,
      text: r,
      handleScrollToCategory: s,
      reducedMotion: n
    })
  }, [o, s, n]);
  return (0, a.jsx)("div", {
    className: C.carouselContainer,
    children: (0, a.jsx)(u.SlideCarousel, {
      delay: 6e3,
      items: d.COLLECTIBLES_HEADERS,
      className: C.carousel,
      renderItem: c,
      controlsClassName: C.paginationControls,
      paginationButtonClassName: C.paginationButton
    })
  })
}