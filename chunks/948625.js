"use strict";
t.d(s, {
  E8: function() {
    return v
  },
  T8: function() {
    return b
  }
});
var n = t(180650),
  a = t(44315),
  r = t(981631),
  i = t(689938),
  l = t(994745),
  o = t(341364),
  c = t(763542),
  u = t(354873),
  d = t(525071),
  C = t(737140),
  f = t(194349),
  E = t(523569),
  p = t(55817),
  g = t(696228),
  m = t(202796),
  x = t(570593),
  h = t(199546),
  I = t(613540),
  _ = t(769411);
let T = () => i.Z.Messages.MOST_POPULAR,
  N = () => i.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
  L = () => i.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
  S = () => i.Z.Messages.TAKE_ME_THERE,
  b = [{
    id: "category_anime",
    backgroundStaticSrc: C,
    backgroundVideoSrc: l,
    overflowSrcStatic: d,
    overflowSrcAnimatedBackground: u,
    overflowSrcAnimated: c,
    logoSrc: o,
    textColor: (0, a.Lq)(r.Ilk.BLACK_500),
    badge: {
      label: T
    },
    cta: {
      label: S,
      categorySkuId: n.T.ANIME_V2
    }
  }, {
    id: "category_galaxy",
    backgroundStaticSrc: _,
    backgroundVideoSrc: h,
    logoSrc: I,
    textColor: (0, a.Lq)(r.Ilk.WHITE_100),
    badge: {
      label: N,
      date: new Date
    },
    cta: {
      label: S,
      categorySkuId: n.T.GALAXY
    }
  }, {
    id: "category_disxcore",
    backgroundStaticSrc: x,
    overflowSrcStatic: m,
    logoSrc: g,
    textColor: (0, a.Lq)(r.Ilk.WHITE_100),
    badge: {
      label: L
    },
    cta: {
      label: S,
      categorySkuId: n.T.DISXCORE
    }
  }, {
    id: "category_cyberpunk",
    backgroundStaticSrc: p,
    backgroundVideoSrc: f,
    logoSrc: E,
    textColor: (0, a.Lq)(r.Ilk.WHITE_100),
    badge: {
      label: T
    },
    cta: {
      label: S,
      categorySkuId: n.T.CYBERPUNK
    }
  }],
  v = (e, s) => {
    let {
      overflowSrcStatic: t,
      overflowSrcAnimated: n,
      overflowSrcAnimatedBackground: a
    } = e;
    return null == t ? [] : s || null == n ? [t] : null == a ? [n] : [a, n]
  }