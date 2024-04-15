"use strict";
n.r(t), n.d(t, {
  CollectiblesDCToDisplayOptions: function() {
    return S
  },
  CollectiblesMarketingVariant: function() {
    return a
  },
  getCountdownDisplayOptions: function() {
    return I
  },
  getCustomConfettiDisplayOptions: function() {
    return T
  }
}), n("627341");
var a, s, l = n("278074"),
  i = n("180650"),
  r = n("524437"),
  o = n("689938"),
  u = n("160506"),
  d = n("263660"),
  c = n("22344"),
  f = n("165047"),
  E = n("212813"),
  h = n("167087"),
  _ = n("692797"),
  C = n("186077"),
  m = n("376477");
(s = a || (a = {}))[s.NONE = 0] = "NONE", s[s.TOOLTIP = 1] = "TOOLTIP", s[s.COACHTIP = 2] = "COACHTIP";
let S = {
    [r.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]: {
      type: 1,
      title: () => o.default.Messages.COLLECTIBLES_LUNAR_NEW_YEAR_TOOLTIP_TEXT,
      emojiName: "dragon"
    },
    [r.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP]: {
      type: 1,
      title: () => o.default.Messages.COLLECTIBLES_ELEMENTS_TOOLTIP_TITLE,
      emojiName: "fire"
    },
    [r.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]: {
      type: 2,
      title: () => o.default.Messages.COLLECTIBLES_ELEMENTS_COACHTIP_TITLE,
      body: () => o.default.Messages.COLLECTIBLES_ELEMENTS_COACHTIP_DISCRIPTION,
      imageSrc: f,
      assetIds: ["a_a065206df7b011a5510e4e5bca7d49be", "a_554b7c34f7b6c709f19535aacb128e7b", "a_250640ab00a8837a1d56f35879138177", "a_fa014594d4b2b4249e1098c0adc85b47"]
    },
    [r.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP]: {
      type: 2,
      title: () => o.default.Messages.COLLECTIBLES_ANIME_V2_COACHTIP_TITLE,
      body: () => o.default.Messages.COLLECTIBLES_ANIME_V2_COACHTIP_DISCRIPTION,
      imageSrc: _,
      assetIds: ["a_c3cffc19e9784f7d0b005eecdf1b566e", "a_f3af281c65cf0cf590e9e1f59e9c6cf6", "a_51d3bb502109eec26c76386ec980bc8b"]
    },
    [r.DismissibleContent.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP]: {
      type: 2,
      title: () => o.default.Messages.COLLECTIBLES_SPRINGTOONS_COACHTIP_TITLE,
      body: () => o.default.Messages.COLLECTIBLES_SPRINGTOONS_COACHTIP_DESCRIPTION,
      imageSrc: h,
      assetIds: ["a_ab95c78401ce4ec85c25a6d308db9d85", "a_4cd9ae5a8d103c219eacd3674d7730cd", "a_27bbf0b53b1054cf61e9a4c0e8d4027f"]
    },
    [r.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
      type: 2,
      title: () => o.default.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
      body: () => o.default.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
      imageSrc: m,
      assetIds: ["a_98555e40cc6802bd3a4fed906af1d992", "a_09de63526a45be1ddac70e84718ee04a", "a_904b1989077c91fca1168d39bfcaa0a4"],
      entrypointDecorationAssets: {
        srcDark: u,
        srcLight: d
      },
      entryPointClassName: "shyButton"
    },
    [r.DismissibleContent.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP]: {
      type: 2,
      title: () => o.default.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_TITLE,
      body: () => o.default.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_DESCRIPTION,
      imageSrc: E,
      assetIds: ["a_49c479e15533fb4c02eb320c9c137433", "a_77b7b6a740a9451e1ef39c0252154ef8", "a_e8c11f139e55dac538cdaafb3caa2317"]
    }
  },
  I = e => (0, l.match)(e).with(i.CollectiblesCategorySkuId.SHY, () => ({
    label: () => o.default.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
    backgroundColor: "rgba(255, 70, 85, 1)",
    boxShadow: "0 0 12px 0 rgba(255, 70, 85, 0.5)",
    labelColor: "rgba(15, 25, 35, 1)",
    iconSrc: C
  })).otherwise(() => null),
  p = {
    SHY: {
      confettiAssetSrc: c,
      style: {
        position: "absolute",
        width: "600px"
      }
    }
  },
  T = e => (0, l.match)(e).with("1220513977683935373", () => p.SHY).with("1220432647453409384", () => p.SHY).with("1220432697718083614", () => p.SHY).otherwise(() => null)