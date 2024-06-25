s.d(t, {
  GX: function() {
    return f
  },
  LM: function() {
    return a
  },
  M7: function() {
    return S
  },
  QQ: function() {
    return M
  },
  UY: function() {
    return h
  },
  k2: function() {
    return n
  }
}), s(627341);
var n, a, i, r, l = s(278074),
  o = s(180650),
  c = s(704215),
  E = s(410154),
  _ = s(689938),
  u = s(714953),
  d = s(160506),
  T = s(263660),
  I = s(848359),
  R = s(736088),
  A = s(782984),
  N = s(186077),
  C = s(118810),
  g = s(376477),
  m = s(224941);
(i = n || (n = {}))[i.NONE = 0] = "NONE", i[i.TOOLTIP = 1] = "TOOLTIP", i[i.COACHTIP = 2] = "COACHTIP", (r = a || (a = {})).NONE = "NONE", r.SHY = "SHY", r.LOFI_VIBES = "LOFI_VIBES", r.GALAXY = "GALAXY", r.RETRO_AND_PIRATES = "RETRO_AND_PIRATES", r.ARCADE = "ARCADE", r.TIDE = "TIDE";
let M = {
    [c.z.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => _.Z.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => _.Z.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: g,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_09de63526a45be1ddac70e84718ee04a", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: d,
        srcLight: T
      },
      entryPointClassName: "shyButton"
    },
    [c.z.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP]: {
      type: 2,
      title: () => _.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_TITLE,
      body: () => _.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_DESCRIPTION,
      imageSrc: A,
      assetIds: ["a_49c479e15533fb4c02eb320c9c137433", "a_77b7b6a740a9451e1ef39c0252154ef8", "a_e8c11f139e55dac538cdaafb3caa2317"]
    },
    [c.z.COLLECTIBLES_SHOP_GALAXY_COACHTIP]: {
      type: 2,
      title: () => _.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_TITLE,
      body: () => _.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_DESCRIPTION,
      imageSrc: I,
      assetIds: ["a_a47890109a231f72dae7b17b27164676", "a_c9b84ee80a335a9d59b69352e34574f6", "a_9a6bf0ab30a6719d6eb09fa4996984ca"]
    },
    [c.z.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP]: {
      type: 2,
      title: () => _.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_TITLE,
      body: () => _.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_DESCRIPTION,
      imageSrc: u,
      assetIds: ["a_89155faed81b205d59fbbefa4316952d", "a_9cc1c1426ea5478aac7be6cdefdbc568", "a_f11c214394044d001d81c983dcab354f", "a_798a5bcbb11067e4d9ab339e51d2a16c"]
    },
    [c.z.COLLECTIBLES_SHOP_ARCADE_COACHTIP]: {
      type: 2,
      title: () => _.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_TITLE,
      body: () => _.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_DESCRIPTION,
      imageSrc: m,
      assetIds: ["a_e72e44eeea89e92dc02c9bec8b02d158", "a_492f6b54b761c0a14d9dbc9c98aaa0f5", "a_46750412a18f4988de71f4cf14991b38"]
    },
    [c.z.COLLECTIBLES_SHOP_TIDE_COACHTIP]: {
      type: 2,
      title: () => _.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_TITLE,
      body: () => _.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_DESCRIPTION,
      imageSrc: C,
      assetIds: ["a_48b8411feb1e80a69048fc65b3275b75", "a_0830085f29712a6f3a23a123302050b4", "a_949a575b693c81ced8f56a7579d0969f"],
      entryPointClassName: "tideButton"
    }
  },
  S = e => (0, l.EQ)(e).with(o.T.SHY, () => ({
    label: () => _.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
    backgroundColor: "rgba(255, 70, 85, 1)",
    boxShadow: "0 0 12px 0 rgba(255, 70, 85, 0.5)",
    labelColor: "rgba(15, 25, 35, 1)",
    iconSrc: N
  })).otherwise(() => null),
  p = {
    confettiAssetSrc: R,
    style: {
      position: "absolute",
      width: "600px",
      zIndex: 10
    }
  },
  h = e => (0, l.EQ)(e).with("1252405010608951358", () => p).with("1252405017688936508", () => p).otherwise(() => null),
  f = {
    [E.C5.GALAXY]: {
      artSrc: s(161594)
    },
    [E.C5.TIDE]: {
      artSrc: s(94899),
      backgroundSrc: s(987583),
      title: () => _.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
      description: () => _.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
    }
  }