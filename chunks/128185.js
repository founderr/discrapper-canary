"use strict";
l.r(t), l.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return g
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l("442837"),
  n = l("481060"),
  i = l("607070"),
  o = l("44315"),
  c = l("810090"),
  u = l("530915"),
  d = l("948625"),
  f = l("981631"),
  C = l("139557");
let p = {
  mass: 1,
  tension: 100,
  friction: 30,
  clamp: !0
};

function m(e) {
  var t, l, r;
  let {
    config: i,
    handleScrollToCategory: u,
    text: p,
    reducedMotion: m = !1
  } = e, g = s.useMemo(() => (0, d.getOverflowImages)(i, m), [i, m]), E = s.useCallback(() => {
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
          color: null !== (l = i.textColor) && void 0 !== l ? l : (0, o.getColor)(f.Color.WHITE_100)
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

function g(e) {
  let {
    categories: t,
    handleScrollToCategory: l
  } = e, n = (0, r.useStateFromStores)([i.default], () => i.default.useReducedMotion), o = s.useMemo(() => {
    let e = {};
    for (let l of t) e[l.skuId] = l.summary;
    return e
  }, [t]), c = s.useCallback(e => {
    var t;
    let s = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      r = null != s ? o[s] : void 0;
    return (0, a.jsx)(m, {
      config: e,
      text: r,
      handleScrollToCategory: l,
      reducedMotion: n
    })
  }, [o, l, n]);
  return (0, a.jsx)("div", {
    className: C.carouselContainer,
    children: (0, a.jsx)(u.SlideCarousel, {
      delay: 6e3,
      items: d.COLLECTIBLES_HEADERS,
      className: C.carousel,
      springConfig: p,
      renderItem: c,
      controlsClassName: C.paginationControls,
      paginationButtonClassName: C.paginationButton
    })
  })
}