"use strict";
t.r(r), t.d(r, {
  default: function() {
    return g
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("848246"),
  l = t("442837"),
  o = t("481060"),
  s = t("570140"),
  c = t("485731"),
  d = t("594174"),
  u = t("246992"),
  h = t("519634");
let p = [{
    label: "No Override",
    value: !1
  }, {
    label: "Available: true",
    value: !0
  }],
  m = [{
    label: "No Override",
    value: !1
  }, {
    label: "Success",
    value: !0
  }];

function g() {
  let e = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    [r, t] = n.useState(!1),
    [g, f] = n.useState(!1);
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)(o.FormSection, {
      title: "Override HQ Streaming: Available",
      className: h.formElement,
      tag: o.FormTitleTags.H3,
      children: (0, a.jsx)(o.SingleSelect, {
        options: p,
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
        options: m,
        value: g,
        onChange: e => {
          f(e)
        },
        popoutLayerContext: u.devToolsLayerContext
      })
    }), (0, a.jsx)(o.Button, {
      onClick: () => void(s.default.dispatch({
        type: "PREMIUM_PERKS_DEMO_OVERRIDE",
        perkType: i.EntitlementFeatureNames.STREAM_HIGH_QUALITY,
        user: e,
        available: r,
        activateSuccess: g
      }), (0, c.hqStreamingSetEnabled)(!1), (0, c.hqStreamingPopoutDismissed)(!1), (0, c.hqStreamingFrameAnimationPlayed)(!1)),
      children: "Update"
    })]
  })
}