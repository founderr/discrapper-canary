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
  p = l("139557");
let m = {
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
  } = e, m = s.useCallback(() => {
    var e;
    (null === (e = i.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && c(i.cta.categorySkuId)
  }, [null === (t = i.cta) || void 0 === t ? void 0 : t.categorySkuId, c]);
  return (0, a.jsxs)("div", {
    className: p.headerContainer,
    children: [null == i.backgroundVideoSrc || f ? (0, a.jsx)("img", {
      src: i.backgroundStaticSrc,
      alt: "",
      className: p.headerAsset
    }) : (0, a.jsx)(d.default, {
      autoPlay: !0,
      muted: !0,
      loop: !0,
      playsInline: !0,
      responsive: !0,
      className: p.headerAsset,
      children: (0, a.jsx)("source", {
        src: i.backgroundVideoSrc,
        type: "video/mp4"
      })
    }), (0, a.jsxs)("div", {
      className: p.headerContent,
      style: {
        color: null !== (l = i.textColor) && void 0 !== l ? l : (0, o.getColor)(C.Color.WHITE_100)
      },
      children: [(0, a.jsx)("div", {
        className: p.badgeContainer,
        style: {
          visibility: null != i.badge ? "visible" : "hidden"
        },
        children: null != i.badge && (0, a.jsx)(n.Text, {
          variant: "text-xs/bold",
          className: p.badge,
          children: i.badge.label()
        })
      }), (0, a.jsxs)("div", {
        className: p.logoAndDescriptionContainer,
        children: [null != i.logoSrc && (0, a.jsx)("img", {
          src: i.logoSrc,
          alt: "",
          className: p.logo
        }), (null != i.description || null != u) && (0, a.jsx)(n.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: null !== (r = i.description) && void 0 !== r ? r : u
        })]
      }), (0, a.jsx)("div", {
        children: null != i.cta && (0, a.jsx)(n.Button, {
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
    direction: l,
    reducedMotion: r = !1
  } = e, n = f.COLLECTIBLES_HEADERS[t], i = s.useMemo(() => null == n || null == n.overflowSrcStatic ? null : r || null == n.overflowSrcAnimated ? (0, a.jsx)("img", {
    src: n.overflowSrcStatic,
    alt: "",
    className: p.overflowImage
  }) : (0, a.jsxs)(a.Fragment, {
    children: [null != n.overflowSrcAnimatedBackground && (0, a.jsx)("img", {
      src: n.overflowSrcAnimatedBackground,
      alt: "",
      className: p.overflowImage
    }), (0, a.jsx)("img", {
      src: n.overflowSrcAnimated,
      alt: "",
      className: p.overflowImage
    })]
  }), [n, r]);
  return (0, a.jsx)("div", {
    className: p.overflowSlideAnimatorContainer,
    children: (0, a.jsx)(u.default, {
      step: t,
      direction: l,
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
    className: p.carouselContainer,
    children: (0, a.jsx)(c.default, {
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
      children: e => (0, a.jsx)(E, {
        step: e.step,
        direction: e.direction,
        reducedMotion: n
      })
    })
  })
}