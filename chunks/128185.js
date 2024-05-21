"use strict";
a.r(t), a.d(t, {
  CollectiblesShopHeaderCarousel: function() {
    return g
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("481060"),
  n = a("44315"),
  i = a("731081"),
  o = a("206895"),
  c = a("810090"),
  u = a("948625"),
  d = a("981631"),
  f = a("139557");
let C = {
  tension: 20,
  friction: 30,
  clamp: !0
};

function m(e) {
  var t, a, i;
  let {
    config: o,
    text: u,
    handleScrollToCategory: C
  } = e, m = s.useCallback(() => {
    var e;
    (null === (e = o.cta) || void 0 === e ? void 0 : e.categorySkuId) != null && C(o.cta.categorySkuId)
  }, [null === (t = o.cta) || void 0 === t ? void 0 : t.categorySkuId, C]);
  return (0, l.jsxs)("div", {
    className: f.headerContainer,
    children: [null != o.headerVideoSrc ? (0, l.jsx)(c.default, {
      autoPlay: !0,
      muted: !0,
      loop: !0,
      playsInline: !0,
      responsive: !0,
      className: f.headerAsset,
      children: (0, l.jsx)("source", {
        src: o.headerVideoSrc,
        type: "video/mp4"
      })
    }) : (0, l.jsx)("img", {
      src: o.headerImageSrc,
      alt: "",
      className: f.headerAsset
    }), (0, l.jsxs)("div", {
      className: f.headerContent,
      style: {
        color: null !== (a = o.textColor) && void 0 !== a ? a : (0, n.getColor)(d.Color.WHITE_100)
      },
      children: [(0, l.jsx)("div", {
        className: f.badgeContainer,
        style: {
          visibility: null != o.badge ? "visible" : "hidden"
        },
        children: null != o.badge && (0, l.jsx)(r.Text, {
          variant: "text-xs/bold",
          className: f.badge,
          children: o.badge.label()
        })
      }), (0, l.jsxs)("div", {
        className: f.logoAndDescriptionContainer,
        children: [null != o.logoImageSrc && (0, l.jsx)("img", {
          src: o.logoImageSrc,
          alt: "",
          className: f.logo
        }), (null != o.description || null != u) && (0, l.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          children: null !== (i = o.description) && void 0 !== i ? i : u
        })]
      }), (0, l.jsx)("div", {
        children: null != o.cta && (0, l.jsx)(r.Button, {
          onClick: m,
          children: o.cta.label()
        })
      })]
    })]
  })
}

function p(e) {
  let {
    step: t,
    direction: a
  } = e, s = u.COLLECTIBLES_HEADERS[t];
  return (0, l.jsx)("div", {
    className: f.overflowSlideAnimatorContainer,
    children: (0, l.jsx)(o.default, {
      step: t,
      direction: a,
      className: f.overflowSlideAnimator,
      springSettings: C,
      fadeInOut: !0,
      children: null != s && null != s.overflowImageSrc && (0, l.jsx)("img", {
        src: s.overflowImageSrc,
        alt: "",
        className: f.overflowImage
      })
    })
  })
}

function g(e) {
  let {
    categories: t,
    handleScrollToCategory: a
  } = e, r = s.useMemo(() => {
    let e = {};
    for (let a of t) e[a.skuId] = a.summary;
    return e
  }, [t]), n = s.useCallback(e => {
    var t;
    let s = null === (t = e.cta) || void 0 === t ? void 0 : t.categorySkuId,
      n = null != s ? r[s] : void 0;
    return (0, l.jsx)(m, {
      config: e,
      text: n,
      handleScrollToCategory: a
    })
  }, [r, a]);
  return (0, l.jsx)("div", {
    className: f.carouselContainer,
    children: (0, l.jsx)(i.default, {
      delay: 5e3,
      items: u.COLLECTIBLES_HEADERS,
      className: f.carousel,
      aspectRatio: 1060 / 292,
      slideAnimatorClassName: f.slideAnimator,
      slideAnimatorSpringSettings: C,
      slideAnimatorFadeInOut: !0,
      paginationClassName: f.paginationControls,
      paginationArrowClassName: f.paginationArrow,
      paginationArrowIconType: i.PaginationArrowIconType.CARET,
      paginationDotClassName: f.paginationDot,
      paginationDotSelectedClassName: f.paginationDotSelected,
      renderItem: n,
      children: e => (0, l.jsx)(p, {
        step: e.step,
        direction: e.direction
      })
    })
  })
}