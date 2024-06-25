t.d(a, {
  GX: function() {
    return D
  },
  LM: function() {
    return c
  },
  M7: function() {
    return g
  },
  QQ: function() {
    return l
  },
  UY: function() {
    return H
  },
  k2: function() {
    return n
  }
}), t(627341);
var n, c, o, _, s = t(278074),
  C = t(691324),
  r = t(180650),
  I = t(704215),
  E = t(44315),
  f = t(410154),
  i = t(689938),
  T = t(714953),
  d = t(160506),
  L = t(263660),
  b = t(848359),
  O = t(736088),
  p = t(782984),
  S = t(118810),
  A = t(428251),
  P = t(376477),
  u = t(224941);
(o = n || (n = {}))[o.NONE = 0] = "NONE", o[o.TOOLTIP = 1] = "TOOLTIP", o[o.COACHTIP = 2] = "COACHTIP", (_ = c || (c = {})).NONE = "NONE", _.SHY = "SHY", _.LOFI_VIBES = "LOFI_VIBES", _.GALAXY = "GALAXY", _.RETRO_AND_PIRATES = "RETRO_AND_PIRATES", _.ARCADE = "ARCADE", _.TIDE = "TIDE";
let l = {
    [I.z.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => i.Z.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => i.Z.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: P,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_09de63526a45be1ddac70e84718ee04a", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: d,
        srcLight: L
      },
      entryPointClassName: "shyButton"
    },
    [I.z.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP]: {
      type: 2,
      title: () => i.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_TITLE,
      body: () => i.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_DESCRIPTION,
      imageSrc: p,
      assetIds: ["a_49c479e15533fb4c02eb320c9c137433", "a_77b7b6a740a9451e1ef39c0252154ef8", "a_e8c11f139e55dac538cdaafb3caa2317"]
    },
    [I.z.COLLECTIBLES_SHOP_GALAXY_COACHTIP]: {
      type: 2,
      title: () => i.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_TITLE,
      body: () => i.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_DESCRIPTION,
      imageSrc: b,
      assetIds: ["a_a47890109a231f72dae7b17b27164676", "a_c9b84ee80a335a9d59b69352e34574f6", "a_9a6bf0ab30a6719d6eb09fa4996984ca"]
    },
    [I.z.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP]: {
      type: 2,
      title: () => i.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_TITLE,
      body: () => i.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_DESCRIPTION,
      imageSrc: T,
      assetIds: ["a_89155faed81b205d59fbbefa4316952d", "a_9cc1c1426ea5478aac7be6cdefdbc568", "a_f11c214394044d001d81c983dcab354f", "a_798a5bcbb11067e4d9ab339e51d2a16c"]
    },
    [I.z.COLLECTIBLES_SHOP_ARCADE_COACHTIP]: {
      type: 2,
      title: () => i.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_TITLE,
      body: () => i.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_DESCRIPTION,
      imageSrc: u,
      assetIds: ["a_e72e44eeea89e92dc02c9bec8b02d158", "a_492f6b54b761c0a14d9dbc9c98aaa0f5", "a_46750412a18f4988de71f4cf14991b38"]
    },
    [I.z.COLLECTIBLES_SHOP_TIDE_COACHTIP]: {
      type: 2,
      title: () => i.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_TITLE,
      body: () => i.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_DESCRIPTION,
      imageSrc: S,
      assetIds: ["a_48b8411feb1e80a69048fc65b3275b75", "a_0830085f29712a6f3a23a123302050b4", "a_949a575b693c81ced8f56a7579d0969f"],
      entryPointClassName: "tideButton"
    }
  },
  g = e => (0, s.EQ)(e).with(r.T.TIDE, () => ({
    label: () => i.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
    iconSrc: A,
    style: {
      background: "linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)",
      boxShadow: "0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)",
      color: (0, E.Lq)(C.I.WHITE_100)
    }
  })).otherwise(() => null),
  B = {
    confettiAssetSrc: O,
    style: {
      position: "absolute",
      width: "600px",
      zIndex: 10
    }
  },
  H = e => (0, s.EQ)(e).with("1252405010608951358", () => B).with("1252405017688936508", () => B).otherwise(() => null),
  D = {
    [f.C5.GALAXY]: {
      artSrc: t(161594)
    },
    [f.C5.TIDE]: {
      artSrc: t(94899),
      backgroundSrc: t(987583),
      title: () => i.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
      description: () => i.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
    }
  }