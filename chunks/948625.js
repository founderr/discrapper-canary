"use strict";
n.d(t, {
  E8: function() {
    return k
  },
  yc: function() {
    return R
  }
});
var r = n(180650),
  i = n(44315),
  a = n(981631),
  o = n(689938),
  s = n(994745),
  c = n(341364),
  l = n(763542),
  d = n(354873),
  u = n(525071),
  p = n(737140),
  f = n(194349),
  g = n(523569),
  _ = n(55817),
  C = n(696228),
  b = n(202796),
  m = n(570593),
  h = n(199546),
  x = n(613540),
  I = n(769411),
  E = n(125257),
  v = n(6412),
  S = n(238286);
let T = () => o.Z.Messages.LIMITED_TIME,
  L = () => o.Z.Messages.MOST_POPULAR,
  N = () => o.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
  O = () => o.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
  j = () => o.Z.Messages.TAKE_ME_THERE,
  B = [{
    id: "category_tide",
    backgroundStaticSrc: S,
    overflowSrcStatic: v,
    logoSrc: E,
    textColor: (0, i.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: T
    },
    cta: {
      label: j,
      categorySkuId: r.T.TIDE
    }
  }, {
    id: "category_anime",
    backgroundStaticSrc: p,
    backgroundVideoSrc: s,
    overflowSrcStatic: u,
    overflowSrcAnimatedBackground: d,
    overflowSrcAnimated: l,
    logoSrc: c,
    textColor: (0, i.Lq)(a.Ilk.BLACK_500),
    badge: {
      label: L
    },
    cta: {
      label: j,
      categorySkuId: r.T.ANIME_V2
    }
  }, {
    id: "category_galaxy",
    backgroundStaticSrc: I,
    backgroundVideoSrc: h,
    logoSrc: x,
    textColor: (0, i.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: N
    },
    cta: {
      label: j,
      categorySkuId: r.T.GALAXY
    }
  }, {
    id: "category_disxcore",
    backgroundStaticSrc: m,
    overflowSrcStatic: b,
    logoSrc: C,
    textColor: (0, i.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: O
    },
    cta: {
      label: j,
      categorySkuId: r.T.DISXCORE
    }
  }, {
    id: "category_cyberpunk",
    backgroundStaticSrc: _,
    backgroundVideoSrc: f,
    logoSrc: g,
    textColor: (0, i.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: L
    },
    cta: {
      label: j,
      categorySkuId: r.T.CYBERPUNK
    }
  }],
  R = e => B.filter(t => {
    var n;
    let r = null === (n = t.cta) || void 0 === n ? void 0 : n.categorySkuId;
    return null == r || null != e[r]
  }),
  k = (e, t) => {
    let {
      overflowSrcStatic: n,
      overflowSrcAnimated: r,
      overflowSrcAnimatedBackground: i
    } = e;
    return null == n ? [] : t || null == r ? [n] : null == i ? [r] : [i, r]
  }