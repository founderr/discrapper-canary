"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250");
s("470079");
var n = s("410575"),
  l = s("100527"),
  i = s("211242"),
  r = s("89057"),
  o = s("223639"),
  d = s("347475"),
  u = s("977156"),
  c = s("97926"),
  S = s("921801"),
  E = s("541540"),
  T = s("206339"),
  _ = s("726985"),
  f = s("981631"),
  m = s("46140"),
  I = s("313026");

function g() {
  let e = (0, u.useIsEligibleForQuests)({
      location: m.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
    }),
    {
      enabled: t
    } = o.default.useExperiment({
      location: "UserSettingsInventory"
    }, {
      autoTrackExposure: !0
    }),
    s = (0, i.useBlockedPaymentsConfig)();
  return (0, a.jsxs)(a.Fragment, {
    children: [!s && (0, a.jsxs)(a.Fragment, {
      children: [t && (0, a.jsx)(d.default, {
        location: l.default.USER_SETTINGS_GIFT_INVENTORY,
        className: I.giftNitro,
        imageClassName: I.giftNitroImage,
        textContainerOverrideStyles: {
          padding: "32px",
          width: "360px"
        },
        analyticsLocation: {
          page: f.AnalyticsPages.GIFTING_SETTINGS,
          section: f.AnalyticsSections.GIFT_BANNER
        }
      }), (0, a.jsx)(n.default, {
        section: f.AnalyticsSections.LIBRARY_INVENTORY_CODE_REDEMPTION,
        children: (0, a.jsx)(E.default, {})
      })]
    }), e && (0, a.jsx)(S.Subsetting, {
      setting: _.WebSetting.GIFT_INVENTORY_QUESTS,
      children: (0, a.jsx)(n.default, {
        section: f.AnalyticsSections.QUESTS,
        children: (0, a.jsx)(c.default, {})
      })
    }), !s && (0, a.jsx)(n.default, {
      section: f.AnalyticsSections.LIBRARY_INVENTORY_GIFTS_LIST,
      children: (0, a.jsx)(T.default, {})
    }), s && (0, a.jsx)(r.BlockedPaymentsContentSettings, {})]
  })
}