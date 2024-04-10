"use strict";
t.r(r), t.d(r, {
  default: function() {
    return m
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("454908"),
  o = t("442837"),
  l = t("481060"),
  s = t("570140"),
  c = t("594174"),
  d = t("246992"),
  u = t("519634");
let h = [{
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

function m() {
  let e = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    [r, t] = n.useState(!1),
    [m, g] = n.useState(!1);
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [(0, a.jsx)(l.FormSection, {
      title: "Override HQ Streaming: Available",
      className: u.formElement,
      tag: l.FormTitleTags.H3,
      children: (0, a.jsx)(l.SingleSelect, {
        options: h,
        value: r,
        onChange: e => {
          t(e)
        },
        popoutLayerContext: d.devToolsLayerContext
      })
    }), (0, a.jsx)(l.FormSection, {
      title: "Override HQ Streaming: Activate",
      className: u.formElement,
      tag: l.FormTitleTags.H3,
      children: (0, a.jsx)(l.SingleSelect, {
        options: p,
        value: m,
        onChange: e => {
          g(e)
        },
        popoutLayerContext: d.devToolsLayerContext
      })
    }), (0, a.jsx)(l.Button, {
      onClick: () => void s.default.dispatch({
        type: "PREMIUM_PERKS_DEMO_OVERRIDE",
        perkType: i.NitroPerks.STREAM_HIGH_QUALITY,
        user: e,
        available: r,
        activateSuccess: m
      }),
      children: "Update"
    })]
  })
}