"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
}), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("454908"),
  l = r("442837"),
  o = r("481060"),
  s = r("570140"),
  c = r("594174"),
  d = r("246992"),
  u = r("519634");
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
  let e = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    [t, r] = n.useState(!1),
    [m, g] = n.useState(!1);
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [(0, a.jsx)(o.FormSection, {
      title: "Override HQ Streaming: Available",
      className: u.formElement,
      tag: o.FormTitleTags.H3,
      children: (0, a.jsx)(o.SingleSelect, {
        options: h,
        value: t,
        onChange: e => {
          r(e)
        },
        popoutLayerContext: d.devToolsLayerContext
      })
    }), (0, a.jsx)(o.FormSection, {
      title: "Override HQ Streaming: Activate",
      className: u.formElement,
      tag: o.FormTitleTags.H3,
      children: (0, a.jsx)(o.SingleSelect, {
        options: p,
        value: m,
        onChange: e => {
          g(e)
        },
        popoutLayerContext: d.devToolsLayerContext
      })
    }), (0, a.jsx)(o.Button, {
      onClick: () => void s.default.dispatch({
        type: "PREMIUM_PERKS_DEMO_OVERRIDE",
        perkType: i.NitroPerks.STREAM_HIGH_QUALITY,
        user: e,
        available: t,
        activateSuccess: m
      }),
      children: "Update"
    })]
  })
}