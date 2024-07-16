s.d(t, {
  E8: function() {
return R;
  },
  yc: function() {
return k;
  }
});
var n = s(180650),
  r = s(44315),
  a = s(981631),
  o = s(689938),
  i = s(994745),
  l = s(341364),
  c = s(763542),
  d = s(354873),
  u = s(525071),
  p = s(737140),
  g = s(194349),
  f = s(523569),
  C = s(55817),
  m = s(696228),
  _ = s(202796),
  h = s(570593),
  b = s(199546),
  x = s(613540),
  I = s(769411),
  E = s(125257),
  L = s(6412),
  S = s(238286);
let v = () => o.Z.Messages.LIMITED_TIME,
  T = () => o.Z.Messages.MOST_POPULAR,
  N = () => o.Z.Messages.APPLICATION_STORE_NEW_RELEASE,
  O = () => o.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
  j = () => o.Z.Messages.TAKE_ME_THERE,
  Z = [{
  id: 'category_tide',
  backgroundStaticSrc: S,
  overflowSrcStatic: L,
  logoSrc: E,
  textColor: (0, r.Lq)(a.Ilk.WHITE_100),
  badge: {
    label: v
  },
  cta: {
    label: j,
    categorySkuId: n.T.TIDE
  }
},
{
  id: 'category_anime',
  backgroundStaticSrc: p,
  backgroundVideoSrc: i,
  overflowSrcStatic: u,
  overflowSrcAnimatedBackground: d,
  overflowSrcAnimated: c,
  logoSrc: l,
  textColor: (0, r.Lq)(a.Ilk.BLACK_500),
  badge: {
    label: T
  },
  cta: {
    label: j,
    categorySkuId: n.T.ANIME_V2
  }
},
{
  id: 'category_galaxy',
  backgroundStaticSrc: I,
  backgroundVideoSrc: b,
  logoSrc: x,
  textColor: (0, r.Lq)(a.Ilk.WHITE_100),
  badge: {
    label: N
  },
  cta: {
    label: j,
    categorySkuId: n.T.GALAXY
  }
},
{
  id: 'category_disxcore',
  backgroundStaticSrc: h,
  overflowSrcStatic: _,
  logoSrc: m,
  textColor: (0, r.Lq)(a.Ilk.WHITE_100),
  badge: {
    label: O
  },
  cta: {
    label: j,
    categorySkuId: n.T.DISXCORE
  }
},
{
  id: 'category_cyberpunk',
  backgroundStaticSrc: C,
  backgroundVideoSrc: g,
  logoSrc: f,
  textColor: (0, r.Lq)(a.Ilk.WHITE_100),
  badge: {
    label: T
  },
  cta: {
    label: j,
    categorySkuId: n.T.CYBERPUNK
  }
}
  ],
  k = e => Z.filter(t => {
var s;
let n = null === (s = t.cta) || void 0 === s ? void 0 : s.categorySkuId;
return null == n || null != e[n];
  }),
  R = (e, t) => {
let {
  overflowSrcStatic: s,
  overflowSrcAnimated: n,
  overflowSrcAnimatedBackground: r
} = e;
return null == s ? [] : t || null == n ? [s] : null == r ? [n] : [
  r,
  n
];
  };