"use strict";
s.d(t, {
  E8: function() {
    return j
  },
  yc: function() {
    return R
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
  g = s(55817),
  E = s(696228),
  m = s(202796),
  h = s(570593),
  x = s(199546),
  I = s(613540),
  _ = s(769411),
  T = s(125257),
  L = s(6412),
  N = s(238286);
let S = () => i.Z.Messages.LIMITED_TIME,
  b = () => i.Z.Messages.MOST_POPULAR,
  v = () => i.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
  O = () => i.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
  Z = () => i.Z.Messages.TAKE_ME_THERE,
  A = [{
    id: "category_tide",
    backgroundStaticSrc: N,
    overflowSrcStatic: L,
    logoSrc: T,
    textColor: (0, r.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: S
    },
    cta: {
      label: Z,
      categorySkuId: n.T.TIDE
    },
    start: new Date("2024-06-25T00:31:00Z"),
    end: new Date("2024-07-27T03:59:00Z")
  }, {
    id: "category_anime",
    backgroundStaticSrc: C,
    backgroundVideoSrc: l,
    overflowSrcStatic: d,
    overflowSrcAnimatedBackground: u,
    overflowSrcAnimated: c,
    logoSrc: o,
    textColor: (0, r.Lq)(a.Ilk.BLACK_500),
    badge: {
      label: b
    },
    cta: {
      label: Z,
      categorySkuId: n.T.ANIME_V2
    }
  }, {
    id: "category_galaxy",
    backgroundStaticSrc: _,
    backgroundVideoSrc: x,
    logoSrc: I,
    textColor: (0, r.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: v
    },
    cta: {
      label: Z,
      categorySkuId: n.T.GALAXY
    }
  }, {
    id: "category_disxcore",
    backgroundStaticSrc: h,
    overflowSrcStatic: m,
    logoSrc: E,
    textColor: (0, r.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: O
    },
    cta: {
      label: Z,
      categorySkuId: n.T.DISXCORE
    }
  }, {
    id: "category_cyberpunk",
    backgroundStaticSrc: g,
    backgroundVideoSrc: f,
    logoSrc: p,
    textColor: (0, r.Lq)(a.Ilk.WHITE_100),
    badge: {
      label: b
    },
    cta: {
      label: Z,
      categorySkuId: n.T.CYBERPUNK
    }
  }],
  R = () => {
    let e = new Date;
    return A.filter(t => {
      let s = null == t.start || e >= t.start,
        n = null != t.end && e > t.end;
      return s && !n
    })
  },
  j = (e, t) => {
    let {
      overflowSrcStatic: s,
      overflowSrcAnimated: n,
      overflowSrcAnimatedBackground: r
    } = e;
    return null == s ? [] : t || null == n ? [s] : null == r ? [n] : [r, n]
  }