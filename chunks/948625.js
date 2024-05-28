"use strict";
a.r(t), a.d(t, {
  COLLECTIBLES_HEADERS: function() {
    return v
  }
});
var s = a("180650"),
  r = a("44315"),
  n = a("981631"),
  l = a("689938"),
  o = a("216299"),
  i = a("994745"),
  c = a("341364"),
  u = a("298132"),
  d = a("999715"),
  f = a("194349"),
  C = a("523569"),
  p = a("967567"),
  m = a("696228"),
  g = a("922140"),
  E = a("927412"),
  b = a("199546"),
  h = a("613540");
let S = {
    MOST_POPULAR: () => l.default.Messages.MOST_POPULAR,
    NEW_RELEASE: () => l.default.Messages.APPLICATION_STORE_NEW_RELEASE,
    NITRO_EXCLUSIVE: () => l.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE
  },
  T = {
    TAKE_ME_THERE: () => l.default.Messages.TAKE_ME_THERE
  },
  v = [{
    staticImageSrc: o,
    videoSrc: i,
    staticOverflowImageSrc: u,
    logoSrc: c,
    textColor: (0, r.getColor)(n.Color.BLACK_500),
    badge: {
      label: S.MOST_POPULAR
    },
    cta: {
      label: T.TAKE_ME_THERE,
      categorySkuId: s.CollectiblesCategorySkuId.ANIME_V2
    }
  }, {
    staticImageSrc: E,
    videoSrc: b,
    logoSrc: h,
    textColor: (0, r.getColor)(n.Color.WHITE_100),
    badge: {
      label: S.NEW_RELEASE,
      date: new Date
    },
    cta: {
      label: T.TAKE_ME_THERE,
      categorySkuId: s.CollectiblesCategorySkuId.GALAXY
    }
  }, {
    staticImageSrc: p,
    staticOverflowImageSrc: g,
    logoSrc: m,
    textColor: (0, r.getColor)(n.Color.WHITE_100),
    badge: {
      label: S.NITRO_EXCLUSIVE
    },
    cta: {
      label: T.TAKE_ME_THERE,
      categorySkuId: s.CollectiblesCategorySkuId.DISXCORE
    }
  }, {
    staticImageSrc: d,
    videoSrc: f,
    logoSrc: C,
    textColor: (0, r.getColor)(n.Color.WHITE_100),
    badge: {
      label: S.MOST_POPULAR
    },
    cta: {
      label: T.TAKE_ME_THERE,
      categorySkuId: s.CollectiblesCategorySkuId.CYBERPUNK
    }
  }]