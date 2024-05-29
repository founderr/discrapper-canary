"use strict";
a.r(t), a.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return h
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("442837"),
  n = a("481060"),
  i = a("607070"),
  o = a("44315"),
  c = a("731081"),
  u = a("206895"),
  d = a("810090"),
  f = a("948625"),
  C = a("981631"),
  m = a("139557");
let p = {
  tension: 20,
  friction: 30,
  clamp: !0
};

function g(e) {
  var t, a, r;
  let {
    config: i,
    handleScrollToCategory: c,
    text: u,
    reducedMotion: f = !1
  } = e, p = s.useCallback(() => {
    var e;
    (null === (e = i.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && c(i.cta.categorySkuId)
  }, [null === (t = i.cta) || void 0 === t ? void 0 : t.categorySkuId, c]);
  return (0, l.jsxs)("div", {
    className: m.headerContainer,
    children: [null == i.videoSrc || f ? (0, l.jsx)("img", {
      src: i.staticImageSrc,
      alt: "",
      className: m.headerAsset
    }) : (0, l.jsx)(d.default, {
      autoPlay: !0,
      muted: !0,
      loop: !0,
      playsInline: !0,
      responsive: !0,
      className: m.headerAsset,
      children: (0, l.jsx)("source", {
        src: i.videoSrc,
        type: "video/mp4"
      })
    }), (0, l.jsxs)("div", {
      className: m.headerContent,
      style: {
        color: null !== (a = i.textColor) && void 0 !== a ? a : (0, o.getColor)(C.Color.WHITE_100)
      },
      children: [(0, l.jsx)("div", {
        className: m.badgeContainer,
        style: {
          visibility: null != i.badge ? "visible" : "hidden"
        },
        children: null != i.badge && (0, l.jsx)(n.Text, {
          variant: "text-xs/bold",
          className: m.badge,
          children: i.badge.label()
        })
      }), (0, l.jsxs)("div", {
        className: m.logoAndDescriptionContainer,
        children: [null != i.logoSrc && (0, l.jsx)("img", {
          src: i.logoSrc,
          alt: "",
          className: m.logo
        }), (null != i.description || null != u) && (0, l.jsx)(n.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: null !== (r = i.description) && void 0 !== r ? r : u
        })]
      }), (0, l.jsx)("div", {
        children: null != i.cta && (0, l.jsx)(n.Button, {
          onClick: p,
          children: i.cta.label()
        })
      })]
    })]
  })
}

function E(e) {
  let {
    step: t,
    direction: a,
    reducedMotion: r = !1
  } = e, n = f.COLLECTIBLES_HEADERS[t], i = s.useMemo(() => {
    var e;
    return null == n ? null : r ? n.staticOverflowImageSrc : null !== (e = n.animatedOverflowImageSrc) && void 0 !== e ? e : n.staticOverflowImageSrc
  }, [n, r]);
  return (0, l.jsx)("div", {
    className: m.overflowSlideAnimatorContainer,
    children: (0, l.jsx)(u.default, {
      step: t,
      direction: a,
      className: m.overflowSlideAnimator,
      springSettings: p,
      fadeInOut: !0,
      children: null != i && (0, l.jsx)("img", {
        src: i,
        alt: "",
        className: m.overflowImage
      })
    })
  })
}

function h(e) {
  let {
    categories: t,
    handleScrollToCategory: a
  } = e, n = (0, r.useStateFromStores)([i.default], () => i.default.useReducedMotion), o = s.useMemo(() => {
    let e = {};
    for (let a of t) e[a.skuId] = a.summary;
    return e
  }, [t]), u = s.useCallback(e => {
    var t;
    let s = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      r = null != s ? o[s] : void 0;
    return (0, l.jsx)(g, {
      config: e,
      text: r,
      handleScrollToCategory: a,
      reducedMotion: n
    })
  }, [o, a, n]);
  return (0, l.jsx)("div", {
    className: m.carouselContainer,
    children: (0, l.jsx)(c.default, {
      delay: 5e3,
      items: f.COLLECTIBLES_HEADERS,
      className: m.carousel,
      aspectRatio: 1060 / 292,
      slideAnimatorClassName: m.slideAnimator,
      slideAnimatorSpringSettings: p,
      slideAnimatorFadeInOut: !0,
      paginationClassName: m.paginationControls,
      paginationArrowClassName: m.paginationArrow,
      paginationArrowIconType: c.PaginationArrowIconType.CARET,
      paginationDotClassName: m.paginationDot,
      paginationDotSelectedClassName: m.paginationDotSelected,
      renderItem: u,
      children: e => (0, l.jsx)(E, {
        step: e.step,
        direction: e.direction,
        reducedMotion: n
      })
    })
  })
}