n.d(t, {
  GX: function() {
return L;
  },
  LM: function() {
return a;
  },
  M7: function() {
return x;
  },
  UY: function() {
return P;
  },
  fY: function() {
return S;
  },
  k2: function() {
return s;
  },
  v: function() {
return v;
  },
  zM: function() {
return M;
  }
}), n(627341), n(470079);
var s, a, r, i, l = n(278074),
  o = n(691324),
  c = n(180650),
  d = n(704215),
  _ = n(44315),
  u = n(410154),
  E = n(893136),
  T = n(689938),
  I = n(644089),
  R = n(420224),
  C = n(782164),
  g = n(107209),
  p = n(736088),
  A = n(692797),
  m = n(219663),
  N = n(480097),
  f = n(118810),
  h = n(428251);
(r = s || (s = {}))[r.NONE = 0] = 'NONE', r[r.TOOLTIP = 1] = 'TOOLTIP', r[r.COACHTIP = 2] = 'COACHTIP', r[r.COACHTIP_HEADLINE_ONLY = 3] = 'COACHTIP_HEADLINE_ONLY', r[r.BADGE = 4] = 'BADGE', (i = a || (a = {})).NONE = 'NONE', i.SHY = 'SHY', i.LOFI_VIBES = 'LOFI_VIBES', i.GALAXY = 'GALAXY', i.RETRO_AND_PIRATES = 'RETRO_AND_PIRATES', i.ARCADE = 'ARCADE', i.TIDE = 'TIDE', i.DARK_FANTASY = 'DARK_FANTASY', i.ROBERT = 'ROBERT';
let S = {
[d.z.COLLECTIBLES_SHOP_TIDE_COACHTIP]: {
  type: 2,
  title: () => T.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_TITLE,
  body: () => T.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_DESCRIPTION,
  imageSrc: f,
  assetIds: [
    'a_48b8411feb1e80a69048fc65b3275b75',
    'a_0830085f29712a6f3a23a123302050b4',
    'a_949a575b693c81ced8f56a7579d0969f'
  ],
  entryPointClassName: 'tideButton'
},
[d.z.COLLECTIBLES_SHOP_DARK_FANTASY_MARKETING]: {
  type: 2,
  title: () => T.Z.Messages.COLLECTIBLES_DARK_FANTASY_COACHTIP_TITLE,
  body: () => T.Z.Messages.COLLECTIBLES_DARK_FANTASY_COACHTIP_DESCRIPTION,
  imageSrc: I,
  assetIds: [
    'a_ef8d97374ffdbf140df1164be6c69e46',
    'a_4430a4ee89b7fba456e765db21f38485',
    'a_1005898c6acf56a9ac5010baf444f6fd'
  ]
},
[d.z.COLLECTIBLES_SHOP_ROBERT_MARKETING]: {
  type: 2,
  title: () => T.Z.Messages.COLLECTIBLES_ROBERT_COACHTIP_TITLE,
  body: () => T.Z.Messages.COLLECTIBLES_ROBERT_COACHTIP_DESCRIPTION,
  imageSrc: A,
  assetIds: [
    'a_914f20f4984a11b5255f0e42c661fa5b',
    'a_0f7fa66bc185c858f92a7918ea4dd47a',
    'a_bba669bfb28f492b64852e00fde4989d'
  ],
  entryPointIcon: E._,
  entryPointBackgroundAssets: {
    srcDark: m,
    srcLight: N
  },
  entrypointDecorationAssets: {
    srcDark: R,
    srcLight: C
  }
}
  },
  M = {
[d.z.COLLECTIBLES_SHOP_DARK_FANTASY_MARKETING]: {
  type: 3,
  title: () => T.Z.Messages.COLLECTIBLES_DARK_FANTASY_COACHTIP_NEUTRAL_TEXT,
  imageSrc: I,
  assetIds: [
    'a_ef8d97374ffdbf140df1164be6c69e46',
    'a_4430a4ee89b7fba456e765db21f38485',
    'a_1005898c6acf56a9ac5010baf444f6fd'
  ]
}
  },
  x = e => (0, l.EQ)(e).with(c.T.TIDE, () => ({
label: () => T.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
iconSrc: h,
style: {
  background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
  boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
  color: (0, _.Lq)(o.I.WHITE_100)
}
  })).otherwise(() => null),
  b = {
imageSrc: p,
style: {
  position: 'absolute',
  width: '600px',
  zIndex: 10
}
  },
  O = {
imageSrc: g,
style: {
  position: 'absolute',
  width: '400px',
  right: '-200px',
  zIndex: 10
}
  },
  P = e => (0, l.EQ)(e).with('1252405010608951358', () => b).with('1252405017688936508', () => b).otherwise(() => null),
  v = e => (0, l.EQ)(e).with('1262491137386614805', () => O).otherwise(() => null),
  L = {
[u.C5.GALAXY]: {
  artSrc: n(161594)
},
[u.C5.TIDE]: {
  artSrc: n(94899),
  backgroundSrc: n(987583),
  title: () => T.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
  description: () => T.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
},
[u.C5.ROBERT]: {
  artSrc: n(638431),
  backgroundSrc: n(619359),
  title: () => T.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_TITLE,
  description: () => T.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_DESCRIPTION
}
  };