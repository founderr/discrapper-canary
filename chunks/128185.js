"use strict";
a.r(t), a.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return b
  }
}), a("47120");
var s = a("735250"),
  r = a("470079"),
  n = a("442837"),
  l = a("481060"),
  o = a("607070"),
  i = a("44315"),
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
  var t, a, n;
  let {
    config: o,
    handleScrollToCategory: c,
    text: u,
    reducedMotion: f = !1
  } = e, m = r.useCallback(() => {
    var e;
    (null === (e = o.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && c(o.cta.categorySkuId)
  }, [null === (t = o.cta) || void 0 === t ? void 0 : t.categorySkuId, c]);
  return (0, s.jsxs)("div", {
    className: p.headerContainer,
    children: [null == o.videoSrc || f ? (0, s.jsx)("img", {
      src: o.staticImageSrc,
      alt: "",
      className: p.headerAsset
    }) : (0, s.jsx)(d.default, {
      autoPlay: !0,
      muted: !0,
      loop: !0,
      playsInline: !0,
      responsive: !0,
      className: p.headerAsset,
      children: (0, s.jsx)("source", {
        src: o.videoSrc,
        type: "video/mp4"
      })
    }), (0, s.jsxs)("div", {
      className: p.headerContent,
      style: {
        color: null !== (a = o.textColor) && void 0 !== a ? a : (0, i.getColor)(C.Color.WHITE_100)
      },
      children: [(0, s.jsx)("div", {
        className: p.badgeContainer,
        style: {
          visibility: null != o.badge ? "visible" : "hidden"
        },
        children: null != o.badge && (0, s.jsx)(l.Text, {
          variant: "text-xs/bold",
          className: p.badge,
          children: o.badge.label()
        })
      }), (0, s.jsxs)("div", {
        className: p.logoAndDescriptionContainer,
        children: [null != o.logoSrc && (0, s.jsx)("img", {
          src: o.logoSrc,
          alt: "",
          className: p.logo
        }), (null != o.description || null != u) && (0, s.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: null !== (n = o.description) && void 0 !== n ? n : u
        })]
      }), (0, s.jsx)("div", {
        children: null != o.cta && (0, s.jsx)(l.Button, {
          onClick: m,
          children: o.cta.label()
        })
      })]
    })]
  })
}

function E(e) {
  let {
    step: t,
    direction: a,
    reducedMotion: n = !1
  } = e, l = f.COLLECTIBLES_HEADERS[t], o = r.useMemo(() => {
    var e;
    return null == l ? null : n ? l.staticOverflowImageSrc : null !== (e = l.animatedOverflowImageSrc) && void 0 !== e ? e : l.staticOverflowImageSrc
  }, [l, n]);
  return (0, s.jsx)("div", {
    className: p.overflowSlideAnimatorContainer,
    children: (0, s.jsx)(u.default, {
      step: t,
      direction: a,
      className: p.overflowSlideAnimator,
      springSettings: m,
      fadeInOut: !0,
      children: null != o && (0, s.jsx)("img", {
        src: o,
        alt: "",
        className: p.overflowImage
      })
    })
  })
}

function b(e) {
  let {
    categories: t,
    handleScrollToCategory: a
  } = e, l = (0, n.useStateFromStores)([o.default], () => o.default.useReducedMotion), i = r.useMemo(() => {
    let e = {};
    for (let a of t) e[a.skuId] = a.summary;
    return e
  }, [t]), u = r.useCallback(e => {
    var t;
    let r = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      n = null != r ? i[r] : void 0;
    return (0, s.jsx)(g, {
      config: e,
      text: n,
      handleScrollToCategory: a,
      reducedMotion: l
    })
  }, [i, a, l]);
  return (0, s.jsx)("div", {
    className: p.carouselContainer,
    children: (0, s.jsx)(c.default, {
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
      children: e => (0, s.jsx)(E, {
        step: e.step,
        direction: e.direction,
        reducedMotion: l
      })
    })
  })
}