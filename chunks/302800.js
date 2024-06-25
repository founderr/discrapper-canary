s.d(t, {
  GX: function() {
    return x
  },
  LM: function() {
    return a
  },
  M7: function() {
    return h
  },
  QQ: function() {
    return p
  },
  UY: function() {
    return O
  },
  k2: function() {
    return n
  }
}), s(627341);
var n, a, i, r, l = s(278074),
  o = s(691324),
  c = s(180650),
  E = s(704215),
  _ = s(44315),
  u = s(410154),
  d = s(689938),
  T = s(714953),
  I = s(160506),
  R = s(263660),
  A = s(848359),
  N = s(736088),
  C = s(782984),
  g = s(118810),
  m = s(428251),
  M = s(376477),
  S = s(224941);
(i = n || (n = {}))[i.NONE = 0] = "NONE", i[i.TOOLTIP = 1] = "TOOLTIP", i[i.COACHTIP = 2] = "COACHTIP", (r = a || (a = {})).NONE = "NONE", r.SHY = "SHY", r.LOFI_VIBES = "LOFI_VIBES", r.GALAXY = "GALAXY", r.RETRO_AND_PIRATES = "RETRO_AND_PIRATES", r.ARCADE = "ARCADE", r.TIDE = "TIDE";
let p = {
    [E.z.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: M,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_09de63526a45be1ddac70e84718ee04a", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: I,
        srcLight: R
      },
      entryPointClassName: "shyButton"
    },
    [E.z.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_DESCRIPTION,
      imageSrc: C,
      assetIds: ["a_49c479e15533fb4c02eb320c9c137433", "a_77b7b6a740a9451e1ef39c0252154ef8", "a_e8c11f139e55dac538cdaafb3caa2317"]
    },
    [E.z.COLLECTIBLES_SHOP_GALAXY_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_DESCRIPTION,
      imageSrc: A,
      assetIds: ["a_a47890109a231f72dae7b17b27164676", "a_c9b84ee80a335a9d59b69352e34574f6", "a_9a6bf0ab30a6719d6eb09fa4996984ca"]
    },
    [E.z.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_DESCRIPTION,
      imageSrc: T,
      assetIds: ["a_89155faed81b205d59fbbefa4316952d", "a_9cc1c1426ea5478aac7be6cdefdbc568", "a_f11c214394044d001d81c983dcab354f", "a_798a5bcbb11067e4d9ab339e51d2a16c"]
    },
    [E.z.COLLECTIBLES_SHOP_ARCADE_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_DESCRIPTION,
      imageSrc: S,
      assetIds: ["a_e72e44eeea89e92dc02c9bec8b02d158", "a_492f6b54b761c0a14d9dbc9c98aaa0f5", "a_46750412a18f4988de71f4cf14991b38"]
    },
    [E.z.COLLECTIBLES_SHOP_TIDE_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_DESCRIPTION,
      imageSrc: g,
      assetIds: ["a_48b8411feb1e80a69048fc65b3275b75", "a_0830085f29712a6f3a23a123302050b4", "a_949a575b693c81ced8f56a7579d0969f"],
      entryPointClassName: "tideButton"
    }
  },
  h = e => (0, l.EQ)(e).with(c.T.TIDE, () => ({
    label: () => d.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
    iconSrc: m,
    style: {
      background: "linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)",
      boxShadow: "0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)",
      color: (0, _.Lq)(o.I.WHITE_100)
    }
  })).otherwise(() => null),
  f = {
    confettiAssetSrc: N,
    style: {
      position: "absolute",
      width: "600px",
      zIndex: 10
    }
  },
  O = e => (0, l.EQ)(e).with("1252405010608951358", () => f).with("1252405017688936508", () => f).otherwise(() => null),
  x = {
    [u.C5.GALAXY]: {
      artSrc: s(161594)
    },
    [u.C5.TIDE]: {
      artSrc: s(94899),
      backgroundSrc: s(987583),
      title: () => d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
      description: () => d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
    }
  }