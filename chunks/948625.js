"use strict";
a.r(t), a.d(t, {
  COLLECTIBLES_HEADERS: function() {
    return L
  }
});
var l = a("180650"),
  s = a("44315"),
  r = a("981631"),
  n = a("689938"),
  i = a("994745"),
  o = a("341364"),
  c = a("763542"),
  u = a("354873"),
  d = a("525071"),
  f = a("737140"),
  C = a("194349"),
  p = a("523569"),
  m = a("55817"),
  g = a("696228"),
  E = a("202796"),
  h = a("570593"),
  b = a("199546"),
  x = a("613540"),
  S = a("769411");
let v = {
    MOST_POPULAR: () => n.default.Messages.MOST_POPULAR,
    NEW_RELEASE: () => n.default.Messages.APPLICATION_STORE_NEW_RELEASE,
    NITRO_EXCLUSIVE: () => n.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE
  },
  I = {
    TAKE_ME_THERE: () => n.default.Messages.TAKE_ME_THERE
  },
  L = [{
    backgroundStaticSrc: f,
    backgroundVideoSrc: i,
    overflowSrcStatic: d,
    overflowSrcAnimatedBackground: u,
    overflowSrcAnimated: c,
    logoSrc: o,
    textColor: (0, s.getColor)(r.Color.BLACK_500),
    badge: {
      label: v.MOST_POPULAR
    },
    cta: {
      label: I.TAKE_ME_THERE,
      categorySkuId: l.CollectiblesCategorySkuId.ANIME_V2
    }
  }, {
    backgroundStaticSrc: S,
    backgroundVideoSrc: b,
    logoSrc: x,
    textColor: (0, s.getColor)(r.Color.WHITE_100),
    badge: {
      label: v.NEW_RELEASE,
      date: new Date
    },
    cta: {
      label: I.TAKE_ME_THERE,
      categorySkuId: l.CollectiblesCategorySkuId.GALAXY
    }
  }, {
    backgroundStaticSrc: h,
    overflowSrcStatic: E,
    logoSrc: g,
    textColor: (0, s.getColor)(r.Color.WHITE_100),
    badge: {
      label: v.NITRO_EXCLUSIVE
    },
    cta: {
      label: I.TAKE_ME_THERE,
      categorySkuId: l.CollectiblesCategorySkuId.DISXCORE
    }
  }, {
    backgroundStaticSrc: m,
    backgroundVideoSrc: C,
    logoSrc: p,
    textColor: (0, s.getColor)(r.Color.WHITE_100),
    badge: {
      label: v.MOST_POPULAR
    },
    cta: {
      label: I.TAKE_ME_THERE,
      categorySkuId: l.CollectiblesCategorySkuId.CYBERPUNK
    }
  }]