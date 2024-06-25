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
  a = n(44315),
  i = n(981631),
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
    textColor: (0, a.Lq)(i.Ilk.WHITE_100),
    badge: {
      label: T
    },
    cta: {
      label: j,
      categorySkuId: r.T.TIDE
    },
    start: new Date("2024-06-26T18:00:00Z"),
    end: new Date("2024-07-27T03:59:00Z")
  }, {
    id: "category_anime",
    backgroundStaticSrc: p,
    backgroundVideoSrc: s,
    overflowSrcStatic: u,
    overflowSrcAnimatedBackground: d,
    overflowSrcAnimated: l,
    logoSrc: c,
    textColor: (0, a.Lq)(i.Ilk.BLACK_500),
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
    textColor: (0, a.Lq)(i.Ilk.WHITE_100),
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
    textColor: (0, a.Lq)(i.Ilk.WHITE_100),
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
    textColor: (0, a.Lq)(i.Ilk.WHITE_100),
    badge: {
      label: L
    },
    cta: {
      label: j,
      categorySkuId: r.T.CYBERPUNK
    }
  }],
  R = () => {
    let e = new Date;
    return B.filter(t => {
      let n = null == t.start || e >= t.start,
        r = null != t.end && e > t.end;
      return n && !r
    })
  },
  k = (e, t) => {
    let {
      overflowSrcStatic: n,
      overflowSrcAnimated: r,
      overflowSrcAnimatedBackground: a
    } = e;
    return null == n ? [] : t || null == r ? [n] : null == a ? [r] : [a, r]
  }