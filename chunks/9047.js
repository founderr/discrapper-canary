"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("901582"),
  i = s("812204"),
  r = s("619935"),
  o = s("245187"),
  d = s("388817"),
  u = s("835618"),
  c = s("374023"),
  S = s("49470"),
  E = s("566126"),
  f = s("832837"),
  T = s("49111"),
  m = s("188338");

function _() {
  let {
    enabled: e
  } = c.default.useExperiment({
    location: "UserSettingsInventory"
  }), {
    enabled: t
  } = d.default.useExperiment({
    location: "UserSettingsInventory"
  }, {
    autoTrackExposure: !0
  }), s = (0, r.useBlockedPaymentsConfig)();
  return s ? (0, a.jsx)(o.BlockedPaymentsContentSettings, {}) : (0, a.jsxs)(a.Fragment, {
    children: [t && (0, a.jsx)(u.default, {
      location: i.default.USER_SETTINGS_GIFT_INVENTORY,
      className: m.giftNitro,
      imageClassName: m.giftNitroImage,
      textContainerOverrideStyles: {
        padding: "32px",
        width: "360px"
      },
      analyticsLocation: {
        page: T.AnalyticsPages.GIFTING_SETTINGS,
        section: T.AnalyticsSections.GIFT_BANNER
      }
    }), (0, a.jsx)(l.default, {
      section: T.AnalyticsSections.LIBRARY_INVENTORY_CODE_REDEMPTION,
      children: (0, a.jsx)(E.default, {})
    }), e && (0, a.jsx)(l.default, {
      section: T.AnalyticsSections.QUESTS,
      children: (0, a.jsx)(S.default, {})
    }), (0, a.jsx)(n.FormDivider, {
      className: m.divider
    }), (0, a.jsx)(l.default, {
      section: T.AnalyticsSections.LIBRARY_INVENTORY_GIFTS_LIST,
      children: (0, a.jsx)(f.default, {})
    })]
  })
}