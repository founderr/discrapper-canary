"use strict";
s.d(t, {
  E8: function() {
    return v
  },
  T8: function() {
    return b
  }
});
var n = s(180650),
  r = s(44315),
  a = s(981631),
  i = s(689938),
  l = s(994745),
  o = s(341364),
  c = s(763542),
  u = s(354873),
  d = s(525071),
  C = s(737140),
  f = s(194349),
  p = s(523569),
  E = s(55817),
  g = s(696228),
  m = s(202796),
  h = s(570593),
  x = s(199546),
  I = s(613540),
  _ = s(769411);
let L = () => i.Z.Messages.MOST_POPULAR,
  T = () => i.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
  S = () => i.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
  N = () => i.Z.Messages.TAKE_ME_THERE,
  b = [{
    id: "category_anime",
    backgroundStaticSrc: C,
    backgroundVideoSrc: l,
    overflowSrcStatic: d,
    overflowSrcAnimatedBackground: u,
    overflowSrcAnimated: c,
    logoSrc: o,
    textColor: (0, r.Lq)(a.Ilk.BLACK_500),
    badge: {
      label: L
    },
    cta: {
      label: N,
      categorySkuId: n.T.ANIME_V2
    }
  }, {
    id: "category_galaxy",
    backgroundStaticSrc: _,
    backgroundVideoSrc: x,
    logoSrc: I,
    textColor: (0, r.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: T,
      date: new Date
    },
    cta: {
      label: N,
      categorySkuId: n.T.GALAXY
    }
  }, {
    id: "category_disxcore",
    backgroundStaticSrc: h,
    overflowSrcStatic: m,
    logoSrc: g,
    textColor: (0, r.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: S
    },
    cta: {
      label: N,
      categorySkuId: n.T.DISXCORE
    }
  }, {
    id: "category_cyberpunk",
    backgroundStaticSrc: E,
    backgroundVideoSrc: f,
    logoSrc: p,
    textColor: (0, r.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: L
    },
    cta: {
      label: N,
      categorySkuId: n.T.CYBERPUNK
    }
  }],
  v = (e, t) => {
    let {
      overflowSrcStatic: s,
      overflowSrcAnimated: n,
      overflowSrcAnimatedBackground: r
    } = e;
    return null == s ? [] : t || null == n ? [s] : null == r ? [n] : [r, n]
  }