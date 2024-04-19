"use strict";
t.r(r), t.d(r, {
  default: function() {
    return g
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("848246"),
  n = t("442837"),
  o = t("481060"),
  c = t("570140"),
  s = t("485731"),
  d = t("594174"),
  u = t("246992"),
  h = t("519634");
let m = [{
    label: "No Override",
    value: !1
  }, {
    label: "Available: true",
    value: !0
  }],
  p = [{
    label: "No Override",
    value: !1
  }, {
    label: "Success",
    value: !0
  }];

function g() {
  let e = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    [r, t] = i.useState(!1),
    [g, f] = i.useState(!1);
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)(o.FormSection, {
      title: "Override HQ Streaming: Available",
      className: h.formElement,
      tag: o.FormTitleTags.H3,
      children: (0, a.jsx)(o.SingleSelect, {
        options: m,
        value: r,
        onChange: e => {
          t(e)
        },
        popoutLayerContext: u.devToolsLayerContext
      })
    }), (0, a.jsx)(o.FormSection, {
      title: "Override HQ Streaming: Activate",
      className: h.formElement,
      tag: o.FormTitleTags.H3,
      children: (0, a.jsx)(o.SingleSelect, {
        options: p,
        value: g,
        onChange: e => {
          f(e)
        },
        popoutLayerContext: u.devToolsLayerContext
      })
    }), (0, a.jsx)(o.Button, {
      onClick: () => void(c.default.dispatch({
        type: "PREMIUM_PERKS_DEMO_OVERRIDE",
        perkType: l.EntitlementFeatureNames.STREAM_HIGH_QUALITY,
        user: e,
        available: r,
        activateSuccess: g
      }), (0, s.hqStreamingSetEnabled)(!1), (0, s.hqStreamingPopoutDismissed)(!1), (0, s.hqStreamingFrameAnimationPlayed)(!1), (0, s.hqStreamingUnlockAnimationPlayed)(!1)),
      children: "Update"
    })]
  })
}