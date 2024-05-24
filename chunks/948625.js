"use strict";
a.r(t), a.d(t, {
  COLLECTIBLES_HEADERS: function() {
    return S
  }
});
var l = a("180650"),
  s = a("44315"),
  r = a("981631"),
  n = a("689938"),
  i = a("216299"),
  o = a("994745"),
  c = a("341364"),
  u = a("298132"),
  d = a("999715"),
  f = a("194349"),
  C = a("523569"),
  m = a("967567"),
  p = a("696228"),
  g = a("922140"),
  E = a("927412"),
  h = a("199546"),
  b = a("613540");
let x = {
    MOST_POPULAR: () => n.default.Messages.MOST_POPULAR,
    NEW_RELEASE: () => n.default.Messages.APPLICATION_STORE_NEW_RELEASE,
    NITRO_EXCLUSIVE: () => n.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE
  },
  v = {
    TAKE_ME_THERE: () => n.default.Messages.TAKE_ME_THERE
  },
  S = [{
    staticImageSrc: i,
    videoSrc: o,
    staticOverflowImageSrc: u,
    logoSrc: c,
    textColor: (0, s.getColor)(r.Color.BLACK_500),
    badge: {
      label: x.MOST_POPULAR
    },
    cta: {
      label: v.TAKE_ME_THERE,
      categorySkuId: l.CollectiblesCategorySkuId.ANIME_V2
    }
  }, {
    staticImageSrc: E,
    videoSrc: h,
    logoSrc: b,
    textColor: (0, s.getColor)(r.Color.WHITE_100),
    badge: {
      label: x.NEW_RELEASE,
      date: new Date
    },
    cta: {
      label: v.TAKE_ME_THERE,
      categorySkuId: l.CollectiblesCategorySkuId.GALAXY
    }
  }, {
    staticImageSrc: m,
    staticOverflowImageSrc: g,
    logoSrc: p,
    textColor: (0, s.getColor)(r.Color.WHITE_100),
    badge: {
      label: x.NITRO_EXCLUSIVE
    },
    cta: {
      label: v.TAKE_ME_THERE,
      categorySkuId: l.CollectiblesCategorySkuId.DISXCORE
    }
  }, {
    staticImageSrc: d,
    videoSrc: f,
    logoSrc: C,
    textColor: (0, s.getColor)(r.Color.WHITE_100),
    badge: {
      label: x.MOST_POPULAR
    },
    cta: {
      label: v.TAKE_ME_THERE,
      categorySkuId: l.CollectiblesCategorySkuId.CYBERPUNK
    }
  }]