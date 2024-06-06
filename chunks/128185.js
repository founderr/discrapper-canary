"use strict";
s.r(t), s.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return p
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  r = s("481060"),
  i = s("607070"),
  o = s("44315"),
  u = s("810090"),
  c = s("530915"),
  d = s("948625"),
  f = s("981631"),
  C = s("139557");

function E(e) {
  var t, s, n;
  let {
    config: i,
    handleScrollToCategory: c,
    text: E,
    reducedMotion: p = !1
  } = e, m = l.useMemo(() => (0, d.getOverflowImages)(i, p), [i, p]), g = l.useCallback(() => {
    var e;
    (null === (e = i.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && c(i.cta.categorySkuId)
  }, [null === (t = i.cta) || void 0 === t ? void 0 : t.categorySkuId, c]);
  return (0, a.jsxs)("div", {
    className: C.headerContainer,
    children: [(0, a.jsxs)("div", {
      className: C.headerInnerContainer,
      children: [null == i.backgroundVideoSrc || p ? (0, a.jsx)("img", {
        src: i.backgroundStaticSrc,
        alt: "",
        className: C.headerAsset
      }) : (0, a.jsx)(u.default, {
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
          children: null != i.badge && (0, a.jsx)(r.Text, {
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
          }), (null != i.description || null != E) && (0, a.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "currentColor",
            children: null !== (n = i.description) && void 0 !== n ? n : E
          })]
        }), (0, a.jsx)("div", {
          children: null != i.cta && (0, a.jsx)(r.Button, {
            onClick: g,
            children: i.cta.label()
          })
        })]
      })]
    }), m.map((e, t) => (0, a.jsx)("img", {
      src: e,
      className: C.overflowImage,
      alt: ""
    }, t))]
  })
}

function p(e) {
  let {
    categories: t,
    handleScrollToCategory: s
  } = e, r = (0, n.useStateFromStores)([i.default], () => i.default.useReducedMotion), o = l.useMemo(() => {
    let e = {};
    for (let s of t) e[s.skuId] = s.summary;
    return e
  }, [t]), u = l.useCallback(e => {
    var t;
    let l = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      n = null != l ? o[l] : void 0;
    return (0, a.jsx)(E, {
      config: e,
      text: n,
      handleScrollToCategory: s,
      reducedMotion: r
    })
  }, [o, s, r]);
  return (0, a.jsx)("div", {
    className: C.carouselContainer,
    children: (0, a.jsx)(c.SlideCarousel, {
      delay: 6e3,
      items: d.COLLECTIBLES_HEADERS,
      className: C.carousel,
      renderItem: u,
      controlsClassName: C.paginationControls,
      paginationButtonClassName: C.paginationButton,
      unidirectional: !0
    })
  })
}