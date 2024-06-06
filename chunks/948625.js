"use strict";
s.r(t), s.d(t, {
  COLLECTIBLES_HEADERS: function() {
    return L
  },
  getOverflowImages: function() {
    return N
  }
});
var a = s("180650"),
  l = s("44315"),
  n = s("981631"),
  r = s("689938"),
  i = s("994745"),
  o = s("341364"),
  u = s("763542"),
  c = s("354873"),
  d = s("525071"),
  f = s("737140"),
  C = s("194349"),
  E = s("523569"),
  p = s("55817"),
  m = s("696228"),
  g = s("202796"),
  S = s("570593"),
  h = s("199546"),
  I = s("613540"),
  T = s("769411");
let x = {
    MOST_POPULAR: () => r.default.Messages.MOST_POPULAR,
    NEW_RELEASE: () => r.default.Messages.APPLICATION_STORE_NEW_RELEASE,
    NITRO_EXCLUSIVE: () => r.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE
  },
  _ = {
    TAKE_ME_THERE: () => r.default.Messages.TAKE_ME_THERE
  },
  L = [{
    id: "category_anime",
    backgroundStaticSrc: f,
    backgroundVideoSrc: i,
    overflowSrcStatic: d,
    overflowSrcAnimatedBackground: c,
    overflowSrcAnimated: u,
    logoSrc: o,
    textColor: (0, l.getColor)(n.Color.BLACK_500),
    badge: {
      label: x.MOST_POPULAR
    },
    cta: {
      label: _.TAKE_ME_THERE,
      categorySkuId: a.CollectiblesCategorySkuId.ANIME_V2
    }
  }, {
    id: "category_galaxy",
    backgroundStaticSrc: T,
    backgroundVideoSrc: h,
    logoSrc: I,
    textColor: (0, l.getColor)(n.Color.WHITE_100),
    badge: {
      label: x.NEW_RELEASE,
      date: new Date
    },
    cta: {
      label: _.TAKE_ME_THERE,
      categorySkuId: a.CollectiblesCategorySkuId.GALAXY
    }
  }, {
    id: "category_disxcore",
    backgroundStaticSrc: S,
    overflowSrcStatic: g,
    logoSrc: m,
    textColor: (0, l.getColor)(n.Color.WHITE_100),
    badge: {
      label: x.NITRO_EXCLUSIVE
    },
    cta: {
      label: _.TAKE_ME_THERE,
      categorySkuId: a.CollectiblesCategorySkuId.DISXCORE
    }
  }, {
    id: "category_cyberpunk",
    backgroundStaticSrc: p,
    backgroundVideoSrc: C,
    logoSrc: E,
    textColor: (0, l.getColor)(n.Color.WHITE_100),
    badge: {
      label: x.MOST_POPULAR
    },
    cta: {
      label: _.TAKE_ME_THERE,
      categorySkuId: a.CollectiblesCategorySkuId.CYBERPUNK
    }
  }],
  N = (e, t) => {
    let {
      overflowSrcStatic: s,
      overflowSrcAnimated: a,
      overflowSrcAnimatedBackground: l
    } = e;
    return null == s ? [] : t || null == a ? [s] : null == l ? [a] : [l, a]
  }