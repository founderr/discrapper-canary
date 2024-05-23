"use strict";
l.r(t), l.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return h
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l("442837"),
  n = l("481060"),
  i = l("607070"),
  o = l("44315"),
  c = l("731081"),
  u = l("206895"),
  d = l("810090"),
  f = l("948625"),
  C = l("981631"),
  m = l("139557");
let p = {
  tension: 20,
  friction: 30,
  clamp: !0
};

function g(e) {
  var t, l, r;
  let {
    config: i,
    handleScrollToCategory: c,
    text: u,
    reducedMotion: f = !1
  } = e, p = s.useCallback(() => {
    var e;
    (null === (e = i.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && c(i.cta.categorySkuId)
  }, [null === (t = i.cta) || void 0 === t ? void 0 : t.categorySkuId, c]);
  return (0, a.jsxs)("div", {
    className: m.headerContainer,
    children: [null == i.videoSrc || f ? (0, a.jsx)("img", {
      src: i.staticImageSrc,
      alt: "",
      className: m.headerAsset
    }) : (0, a.jsx)(d.default, {
      autoPlay: !0,
      muted: !0,
      loop: !0,
      playsInline: !0,
      responsive: !0,
      className: m.headerAsset,
      children: (0, a.jsx)("source", {
        src: i.videoSrc,
        type: "video/mp4"
      })
    }), (0, a.jsxs)("div", {
      className: m.headerContent,
      style: {
        color: null !== (l = i.textColor) && void 0 !== l ? l : (0, o.getColor)(C.Color.WHITE_100)
      },
      children: [(0, a.jsx)("div", {
        className: m.badgeContainer,
        style: {
          visibility: null != i.badge ? "visible" : "hidden"
        },
        children: null != i.badge && (0, a.jsx)(n.Text, {
          variant: "text-xs/bold",
          className: m.badge,
          children: i.badge.label()
        })
      }), (0, a.jsxs)("div", {
        className: m.logoAndDescriptionContainer,
        children: [null != i.logoSrc && (0, a.jsx)("img", {
          src: i.logoSrc,
          alt: "",
          className: m.logo
        }), (null != i.description || null != u) && (0, a.jsx)(n.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: null !== (r = i.description) && void 0 !== r ? r : u
        })]
      }), (0, a.jsx)("div", {
        children: null != i.cta && (0, a.jsx)(n.Button, {
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
    direction: l,
    reducedMotion: r = !1
  } = e, n = f.COLLECTIBLES_HEADERS[t], i = s.useMemo(() => {
    var e;
    return null == n ? null : r ? n.staticOverflowImageSrc : null !== (e = n.animatedOverflowImageSrc) && void 0 !== e ? e : n.staticOverflowImageSrc
  }, [n, r]);
  return (0, a.jsx)("div", {
    className: m.overflowSlideAnimatorContainer,
    children: (0, a.jsx)(u.default, {
      step: t,
      direction: l,
      className: m.overflowSlideAnimator,
      springSettings: p,
      fadeInOut: !0,
      children: null != i && (0, a.jsx)("img", {
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
    handleScrollToCategory: l
  } = e, n = (0, r.useStateFromStores)([i.default], () => i.default.useReducedMotion), o = s.useMemo(() => {
    let e = {};
    for (let l of t) e[l.skuId] = l.summary;
    return e
  }, [t]), u = s.useCallback(e => {
    var t;
    let s = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      r = null != s ? o[s] : void 0;
    return (0, a.jsx)(g, {
      config: e,
      text: r,
      handleScrollToCategory: l,
      reducedMotion: n
    })
  }, [o, l, n]);
  return (0, a.jsx)("div", {
    className: m.carouselContainer,
    children: (0, a.jsx)(c.default, {
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
      children: e => (0, a.jsx)(E, {
        step: e.step,
        direction: e.direction,
        reducedMotion: n
      })
    })
  })
}