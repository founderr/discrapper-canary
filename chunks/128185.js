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
  p = a("139557");
let m = {
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
  } = e, m = s.useCallback(() => {
    var e;
    (null === (e = i.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && c(i.cta.categorySkuId)
  }, [null === (t = i.cta) || void 0 === t ? void 0 : t.categorySkuId, c]);
  return (0, l.jsxs)("div", {
    className: p.headerContainer,
    children: [null == i.backgroundVideoSrc || f ? (0, l.jsx)("img", {
      src: i.backgroundStaticSrc,
      alt: "",
      className: p.headerAsset
    }) : (0, l.jsx)(d.default, {
      autoPlay: !0,
      muted: !0,
      loop: !0,
      playsInline: !0,
      responsive: !0,
      className: p.headerAsset,
      children: (0, l.jsx)("source", {
        src: i.backgroundVideoSrc,
        type: "video/mp4"
      })
    }), (0, l.jsxs)("div", {
      className: p.headerContent,
      style: {
        color: null !== (a = i.textColor) && void 0 !== a ? a : (0, o.getColor)(C.Color.WHITE_100)
      },
      children: [(0, l.jsx)("div", {
        className: p.badgeContainer,
        style: {
          visibility: null != i.badge ? "visible" : "hidden"
        },
        children: null != i.badge && (0, l.jsx)(n.Text, {
          variant: "text-xs/bold",
          className: p.badge,
          children: i.badge.label()
        })
      }), (0, l.jsxs)("div", {
        className: p.logoAndDescriptionContainer,
        children: [null != i.logoSrc && (0, l.jsx)("img", {
          src: i.logoSrc,
          alt: "",
          className: p.logo
        }), (null != i.description || null != u) && (0, l.jsx)(n.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: null !== (r = i.description) && void 0 !== r ? r : u
        })]
      }), (0, l.jsx)("div", {
        children: null != i.cta && (0, l.jsx)(n.Button, {
          onClick: m,
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
  } = e, n = f.COLLECTIBLES_HEADERS[t], i = s.useMemo(() => null == n || null == n.overflowSrcStatic ? null : r || null == n.overflowSrcAnimated ? (0, l.jsx)("img", {
    src: n.overflowSrcStatic,
    alt: "",
    className: p.overflowImage
  }) : (0, l.jsxs)(l.Fragment, {
    children: [null != n.overflowSrcAnimatedBackground && (0, l.jsx)("img", {
      src: n.overflowSrcAnimatedBackground,
      alt: "",
      className: p.overflowImage
    }), (0, l.jsx)("img", {
      src: n.overflowSrcAnimated,
      alt: "",
      className: p.overflowImage
    })]
  }), [n, r]);
  return (0, l.jsx)("div", {
    className: p.overflowSlideAnimatorContainer,
    children: (0, l.jsx)(u.default, {
      step: t,
      direction: a,
      className: p.overflowSlideAnimator,
      springSettings: m,
      fadeInOut: !0,
      children: i
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
    className: p.carouselContainer,
    children: (0, l.jsx)(c.default, {
      delay: 5e3,
      items: f.COLLECTIBLES_HEADERS,
      className: p.carousel,
      aspectRatio: 1060 / 292,
      slideAnimatorClassName: p.slideAnimator,
      slideAnimatorSpringSettings: m,
      slideAnimatorFadeInOut: !0,
      paginationClassName: p.paginationControls,
      paginationArrowClassName: p.paginationArrow,
      paginationArrowIconType: c.PaginationArrowIconType.CARET,
      paginationDotClassName: p.paginationDot,
      paginationDotSelectedClassName: p.paginationDotSelected,
      renderItem: u,
      children: e => (0, l.jsx)(E, {
        step: e.step,
        direction: e.direction,
        reducedMotion: n
      })
    })
  })
}