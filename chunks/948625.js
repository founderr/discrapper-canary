"use strict";
l.r(t), l.d(t, {
  COLLECTIBLES_HEADERS: function() {
    return L
  }
});
var a = l("180650"),
  s = l("44315"),
  r = l("981631"),
  n = l("689938"),
  i = l("994745"),
  o = l("341364"),
  c = l("763542"),
  u = l("354873"),
  d = l("525071"),
  f = l("737140"),
  C = l("194349"),
  p = l("523569"),
  m = l("55817"),
  g = l("696228"),
  E = l("202796"),
  h = l("570593"),
  b = l("199546"),
  x = l("613540"),
  S = l("769411");
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
      categorySkuId: a.CollectiblesCategorySkuId.ANIME_V2
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
      categorySkuId: a.CollectiblesCategorySkuId.GALAXY
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
      categorySkuId: a.CollectiblesCategorySkuId.DISXCORE
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
      categorySkuId: a.CollectiblesCategorySkuId.CYBERPUNK
    }
  }]