"use strict";
a.r(t), a.d(t, {
  CollectiblesDCToDisplayOptions: function() {
    return u
  },
  CollectiblesMarketingVariant: function() {
    return s
  },
  ShopCoachtipEditions: function() {
    return c
  },
  getCountdownDisplayOptions: function() {
    return S
  },
  getCustomConfettiDisplayOptions: function() {
    return A
  }
}), a("627341");
var s, c, i, C, n = a("278074"),
  _ = a("180650"),
  o = a("524437"),
  d = a("689938"),
  I = a("714953"),
  E = a("160506"),
  f = a("263660"),
  L = a("22344"),
  b = a("848359"),
  r = a("782984"),
  O = a("186077"),
  T = a("376477"),
  l = a("224941");
(i = s || (s = {}))[i.NONE = 0] = "NONE", i[i.TOOLTIP = 1] = "TOOLTIP", i[i.COACHTIP = 2] = "COACHTIP", (C = c || (c = {})).NONE = "NONE", C.SHY = "SHY", C.LOFI_VIBES = "LOFI_VIBES", C.GALAXY = "GALAXY", C.RETRO_AND_PIRATES = "RETRO_AND_PIRATES", C.ARCADE = "ARCADE";
let u = {
    [o.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => d.default.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => d.default.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: T,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_09de63526a45be1ddac70e84718ee04a", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: E,
        srcLight: f
      },
      entryPointClassName: "shyButton"
    },
    [o.DismissibleContent.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP]: {
      type: 2,
      title: () => d.default.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_TITLE,
      body: () => d.default.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_DESCRIPTION,
      imageSrc: r,
      assetIds: ["a_49c479e15533fb4c02eb320c9c137433", "a_77b7b6a740a9451e1ef39c0252154ef8", "a_e8c11f139e55dac538cdaafb3caa2317"]
    },
    [o.DismissibleContent.COLLECTIBLES_SHOP_GALAXY_COACHTIP]: {
      type: 2,
      title: () => d.default.Messages.COLLECTIBLES_GALAXY_COACHTIP_TITLE,
      body: () => d.default.Messages.COLLECTIBLES_GALAXY_COACHTIP_DESCRIPTION,
      imageSrc: b,
      assetIds: ["a_a47890109a231f72dae7b17b27164676", "a_c9b84ee80a335a9d59b69352e34574f6", "a_9a6bf0ab30a6719d6eb09fa4996984ca"]
    },
    [o.DismissibleContent.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP]: {
      type: 2,
      title: () => d.default.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_TITLE,
      body: () => d.default.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_DESCRIPTION,
      imageSrc: I,
      assetIds: ["a_89155faed81b205d59fbbefa4316952d", "a_9cc1c1426ea5478aac7be6cdefdbc568", "a_f11c214394044d001d81c983dcab354f", "a_798a5bcbb11067e4d9ab339e51d2a16c"]
    },
    [o.DismissibleContent.COLLECTIBLES_SHOP_ARCADE_COACHTIP]: {
      type: 2,
      title: () => d.default.Messages.COLLECTIBLES_ARCADE_COACHTIP_TITLE,
      body: () => d.default.Messages.COLLECTIBLES_ARCADE_COACHTIP_DESCRIPTION,
      imageSrc: l,
      assetIds: ["a_e72e44eeea89e92dc02c9bec8b02d158", "a_492f6b54b761c0a14d9dbc9c98aaa0f5", "a_46750412a18f4988de71f4cf14991b38"]
    }
  },
  S = e => (0, n.match)(e).with(_.CollectiblesCategorySkuId.SHY, () => ({
    label: () => d.default.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
    backgroundColor: "rgba(255, 70, 85, 1)",
    boxShadow: "0 0 12px 0 rgba(255, 70, 85, 0.5)",
    labelColor: "rgba(15, 25, 35, 1)",
    iconSrc: O
  })).otherwise(() => null),
  p = {
    SHY: {
      confettiAssetSrc: L,
      style: {
        position: "absolute",
        width: "600px"
      }
    }
  },
  A = e => (0, n.match)(e).with("1220513977683935373", () => p.SHY).with("1220432647453409384", () => p.SHY).with("1220432697718083614", () => p.SHY).otherwise(() => null)