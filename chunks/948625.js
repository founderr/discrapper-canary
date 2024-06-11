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
  m = s("55817"),
  p = s("696228"),
  S = s("202796"),
  g = s("570593"),
  h = s("199546"),
  I = s("613540"),
  _ = s("769411");
let T = {
    MOST_POPULAR: () => r.default.Messages.MOST_POPULAR,
    NEW_RELEASE: () => r.default.Messages.APPLICATION_STORE_NEW_RELEASE,
    NITRO_EXCLUSIVE: () => r.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE
  },
  x = {
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
      label: T.MOST_POPULAR
    },
    cta: {
      label: x.TAKE_ME_THERE,
      categorySkuId: a.CollectiblesCategorySkuId.ANIME_V2
    }
  }, {
    id: "category_galaxy",
    backgroundStaticSrc: _,
    backgroundVideoSrc: h,
    logoSrc: I,
    textColor: (0, l.getColor)(n.Color.WHITE_100),
    badge: {
      label: T.NEW_RELEASE,
      date: new Date
    },
    cta: {
      label: x.TAKE_ME_THERE,
      categorySkuId: a.CollectiblesCategorySkuId.GALAXY
    }
  }, {
    id: "category_disxcore",
    backgroundStaticSrc: g,
    overflowSrcStatic: S,
    logoSrc: p,
    textColor: (0, l.getColor)(n.Color.WHITE_100),
    badge: {
      label: T.NITRO_EXCLUSIVE
    },
    cta: {
      label: x.TAKE_ME_THERE,
      categorySkuId: a.CollectiblesCategorySkuId.DISXCORE
    }
  }, {
    id: "category_cyberpunk",
    backgroundStaticSrc: m,
    backgroundVideoSrc: C,
    logoSrc: E,
    textColor: (0, l.getColor)(n.Color.WHITE_100),
    badge: {
      label: T.MOST_POPULAR
    },
    cta: {
      label: x.TAKE_ME_THERE,
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