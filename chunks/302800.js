n.d(t, {
  LM: function() {
    return i
  },
  M7: function() {
    return m
  },
  QQ: function() {
    return A
  },
  UY: function() {
    return p
  },
  k2: function() {
    return s
  }
}), n(627341);
var s, i, a, l, r = n(278074),
  c = n(180650),
  o = n(704215),
  d = n(689938),
  u = n(714953),
  E = n(160506),
  _ = n(263660),
  h = n(22344),
  T = n(848359),
  I = n(782984),
  C = n(186077),
  N = n(376477),
  g = n(224941);
(a = s || (s = {}))[a.NONE = 0] = "NONE", a[a.TOOLTIP = 1] = "TOOLTIP", a[a.COACHTIP = 2] = "COACHTIP", (l = i || (i = {})).NONE = "NONE", l.SHY = "SHY", l.LOFI_VIBES = "LOFI_VIBES", l.GALAXY = "GALAXY", l.RETRO_AND_PIRATES = "RETRO_AND_PIRATES", l.ARCADE = "ARCADE", l.TIDE = "TIDE";
let A = {
    [o.z.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: N,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_09de63526a45be1ddac70e84718ee04a", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: E,
        srcLight: _
      },
      entryPointClassName: "shyButton"
    },
    [o.z.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_DESCRIPTION,
      imageSrc: I,
      assetIds: ["a_49c479e15533fb4c02eb320c9c137433", "a_77b7b6a740a9451e1ef39c0252154ef8", "a_e8c11f139e55dac538cdaafb3caa2317"]
    },
    [o.z.COLLECTIBLES_SHOP_GALAXY_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_DESCRIPTION,
      imageSrc: T,
      assetIds: ["a_a47890109a231f72dae7b17b27164676", "a_c9b84ee80a335a9d59b69352e34574f6", "a_9a6bf0ab30a6719d6eb09fa4996984ca"]
    },
    [o.z.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_DESCRIPTION,
      imageSrc: u,
      assetIds: ["a_89155faed81b205d59fbbefa4316952d", "a_9cc1c1426ea5478aac7be6cdefdbc568", "a_f11c214394044d001d81c983dcab354f", "a_798a5bcbb11067e4d9ab339e51d2a16c"]
    },
    [o.z.COLLECTIBLES_SHOP_ARCADE_COACHTIP]: {
      type: 2,
      title: () => d.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_TITLE,
      body: () => d.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_DESCRIPTION,
      imageSrc: g,
      assetIds: ["a_e72e44eeea89e92dc02c9bec8b02d158", "a_492f6b54b761c0a14d9dbc9c98aaa0f5", "a_46750412a18f4988de71f4cf14991b38"]
    }
  },
  m = e => (0, r.EQ)(e).with(c.T.SHY, () => ({
    label: () => d.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
    backgroundColor: "rgba(255, 70, 85, 1)",
    boxShadow: "0 0 12px 0 rgba(255, 70, 85, 0.5)",
    labelColor: "rgba(15, 25, 35, 1)",
    iconSrc: C
  })).otherwise(() => null),
  f = {
    confettiAssetSrc: h,
    style: {
      position: "absolute",
      width: "600px"
    }
  },
  p = e => (0, r.EQ)(e).with("1220513977683935373", () => f).with("1220432647453409384", () => f).with("1220432697718083614", () => f).otherwise(() => null)