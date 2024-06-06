"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("848246"),
  l = r("442837"),
  o = r("481060"),
  c = r("570140"),
  s = r("485731"),
  d = r("594174"),
  u = r("246992"),
  h = r("416495");
let p = [{
    label: "No Override",
    value: !1
  }, {
    label: "Available: true",
    value: !0
  }],
  g = [{
    label: "No Override",
    value: !1
  }, {
    label: "Success",
    value: !0
  }];

function m() {
  let e = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    [t, r] = i.useState(!1),
    [m, f] = i.useState(!1);
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)(o.FormSection, {
      title: "Override HQ Streaming: Available",
      className: h.formElement,
      tag: o.FormTitleTags.H3,
      children: (0, a.jsx)(o.SingleSelect, {
        options: p,
        value: t,
        onChange: e => {
          r(e)
        },
        popoutLayerContext: u.devToolsLayerContext
      })
    }), (0, a.jsx)(o.FormSection, {
      title: "Override HQ Streaming: Activate",
      className: h.formElement,
      tag: o.FormTitleTags.H3,
      children: (0, a.jsx)(o.SingleSelect, {
        options: g,
        value: m,
        onChange: e => {
          f(e)
        },
        popoutLayerContext: u.devToolsLayerContext
      })
    }), (0, a.jsx)(o.Button, {
      onClick: () => void(c.default.dispatch({
        type: "PREMIUM_PERKS_DEMO_OVERRIDE",
        perkType: n.EntitlementFeatureNames.STREAM_HIGH_QUALITY,
        user: e,
        available: t,
        activateSuccess: m
      }), (0, s.hqStreamingSetEnabled)(!1), (0, s.hqStreamingPopoutDismissed)(!1), (0, s.hqStreamingFrameAnimationPlayed)(!1), (0, s.hqStreamingUnlockAnimationPlayed)(!1)),
      children: "Update"
    })]
  })
}