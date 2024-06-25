s.d(t, {
  LM: function() {
    return a
  },
  M7: function() {
    return m
  },
  QQ: function() {
    return g
  },
  UY: function() {
    return S
  },
  k2: function() {
    return n
  }
}), s(627341);
var n, a, i, r, l = s(278074),
  o = s(180650),
  c = s(704215),
  E = s(689938),
  _ = s(714953),
  u = s(160506),
  d = s(263660),
  T = s(848359),
  I = s(736088),
  R = s(782984),
  A = s(186077),
  N = s(376477),
  C = s(224941);
(i = n || (n = {}))[i.NONE = 0] = "NONE", i[i.TOOLTIP = 1] = "TOOLTIP", i[i.COACHTIP = 2] = "COACHTIP", (r = a || (a = {})).NONE = "NONE", r.SHY = "SHY", r.LOFI_VIBES = "LOFI_VIBES", r.GALAXY = "GALAXY", r.RETRO_AND_PIRATES = "RETRO_AND_PIRATES", r.ARCADE = "ARCADE", r.TIDE = "TIDE";
let g = {
    [c.z.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => E.Z.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => E.Z.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: N,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_09de63526a45be1ddac70e84718ee04a", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: u,
        srcLight: d
      },
      entryPointClassName: "shyButton"
    },
    [c.z.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP]: {
      type: 2,
      title: () => E.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_TITLE,
      body: () => E.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_DESCRIPTION,
      imageSrc: R,
      assetIds: ["a_49c479e15533fb4c02eb320c9c137433", "a_77b7b6a740a9451e1ef39c0252154ef8", "a_e8c11f139e55dac538cdaafb3caa2317"]
    },
    [c.z.COLLECTIBLES_SHOP_GALAXY_COACHTIP]: {
      type: 2,
      title: () => E.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_TITLE,
      body: () => E.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_DESCRIPTION,
      imageSrc: T,
      assetIds: ["a_a47890109a231f72dae7b17b27164676", "a_c9b84ee80a335a9d59b69352e34574f6", "a_9a6bf0ab30a6719d6eb09fa4996984ca"]
    },
    [c.z.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP]: {
      type: 2,
      title: () => E.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_TITLE,
      body: () => E.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_DESCRIPTION,
      imageSrc: _,
      assetIds: ["a_89155faed81b205d59fbbefa4316952d", "a_9cc1c1426ea5478aac7be6cdefdbc568", "a_f11c214394044d001d81c983dcab354f", "a_798a5bcbb11067e4d9ab339e51d2a16c"]
    },
    [c.z.COLLECTIBLES_SHOP_ARCADE_COACHTIP]: {
      type: 2,
      title: () => E.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_TITLE,
      body: () => E.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_DESCRIPTION,
      imageSrc: C,
      assetIds: ["a_e72e44eeea89e92dc02c9bec8b02d158", "a_492f6b54b761c0a14d9dbc9c98aaa0f5", "a_46750412a18f4988de71f4cf14991b38"]
    }
  },
  m = e => (0, l.EQ)(e).with(o.T.SHY, () => ({
    label: () => E.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
    backgroundColor: "rgba(255, 70, 85, 1)",
    boxShadow: "0 0 12px 0 rgba(255, 70, 85, 0.5)",
    labelColor: "rgba(15, 25, 35, 1)",
    iconSrc: A
  })).otherwise(() => null),
  M = {
    confettiAssetSrc: I,
    style: {
      position: "absolute",
      width: "600px",
      zIndex: 10
    }
  },
  S = e => (0, l.EQ)(e).with("1252405010608951358", () => M).with("1252405017688936508", () => M).otherwise(() => null)