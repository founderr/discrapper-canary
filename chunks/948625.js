"use strict";
l.r(t), l.d(t, {
  COLLECTIBLES_HEADERS: function() {
    return S
  }
});
var a = l("180650"),
  s = l("44315"),
  r = l("981631"),
  n = l("689938"),
  i = l("216299"),
  o = l("994745"),
  c = l("341364"),
  u = l("298132"),
  d = l("999715"),
  f = l("194349"),
  C = l("523569"),
  m = l("967567"),
  p = l("696228"),
  g = l("922140"),
  E = l("927412"),
  h = l("199546"),
  b = l("613540");
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
      categorySkuId: a.CollectiblesCategorySkuId.ANIME_V2
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
      categorySkuId: a.CollectiblesCategorySkuId.GALAXY
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
      categorySkuId: a.CollectiblesCategorySkuId.DISXCORE
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
      categorySkuId: a.CollectiblesCategorySkuId.CYBERPUNK
    }
  }]