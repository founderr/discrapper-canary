"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
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
  I = s("981631"),
  N = s("46140"),
  g = s("313026");

function f() {
  let e = (0, u.useIsEligibleForQuests)({
      location: N.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
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
      children: [t && (0, a.jsx)(S.Subsetting, {
        setting: _.WebSetting.GIFT_NITRO,
        children: (0, a.jsx)(d.default, {
          location: l.default.USER_SETTINGS_GIFT_INVENTORY,
          className: g.giftNitro,
          imageClassName: g.giftNitroImage,
          textContainerOverrideStyles: {
            padding: "32px",
            width: "360px"
          },
          analyticsLocation: {
            page: I.AnalyticsPages.GIFTING_SETTINGS,
            section: I.AnalyticsSections.GIFT_BANNER
          }
        })
      }), (0, a.jsx)(S.Subsetting, {
        setting: _.WebSetting.GIFT_CODE_REDEMPTION,
        children: (0, a.jsx)(n.default, {
          section: I.AnalyticsSections.LIBRARY_INVENTORY_CODE_REDEMPTION,
          children: (0, a.jsx)(E.default, {})
        })
      })]
    }), e && (0, a.jsx)(S.Subsetting, {
      setting: _.WebSetting.GIFT_INVENTORY_QUESTS,
      children: (0, a.jsx)(n.default, {
        section: I.AnalyticsSections.QUESTS,
        children: (0, a.jsx)(c.default, {})
      })
    }), !s && (0, a.jsx)(S.Subsetting, {
      setting: _.WebSetting.GIFT_INVENTORY_LIST,
      children: (0, a.jsx)(n.default, {
        section: I.AnalyticsSections.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, a.jsx)(T.default, {})
      })
    }), s && (0, a.jsx)(S.Subsetting, {
      setting: _.WebSetting.GIFT_BLOCKED_PAYMENTS,
      children: (0, a.jsx)(r.BlockedPaymentsContentSettings, {})
    })]
  })
}