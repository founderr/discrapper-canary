"use strict";
s.r(t), s.d(t, {
  COLLECTIBLES_HEADERS: function() {
    return L
  },
  getOverflowImages: function() {
    return T
  }
});
var a = s("180650"),
  l = s("44315"),
  r = s("981631"),
  n = s("689938"),
  i = s("994745"),
  o = s("341364"),
  c = s("763542"),
  u = s("354873"),
  d = s("525071"),
  f = s("737140"),
  C = s("194349"),
  p = s("523569"),
  m = s("55817"),
  g = s("696228"),
  E = s("202796"),
  h = s("570593"),
  b = s("199546"),
  x = s("613540"),
  S = s("769411");
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
    textColor: (0, l.getColor)(r.Color.BLACK_500),
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
    textColor: (0, l.getColor)(r.Color.WHITE_100),
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
    textColor: (0, l.getColor)(r.Color.WHITE_100),
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
    textColor: (0, l.getColor)(r.Color.WHITE_100),
    badge: {
      label: v.MOST_POPULAR
    },
    cta: {
      label: I.TAKE_ME_THERE,
      categorySkuId: a.CollectiblesCategorySkuId.CYBERPUNK
    }
  }],
  T = (e, t) => {
    let {
      overflowSrcStatic: s,
      overflowSrcAnimated: a,
      overflowSrcAnimatedBackground: l
    } = e;
    return null == s ? [] : t || null == a ? [s] : null == l ? [a] : [l, a]
  }