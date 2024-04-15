"use strict";
t.r(r), t.d(r, {
  OverridePremiumTypeDropDown: function() {
    return u
  }
});
var a = t("735250");
t("470079");
var n = t("442837"),
  i = t("481060"),
  l = t("246992"),
  o = t("535664"),
  s = t("502087"),
  c = t("594174"),
  d = t("474936");
let u = e => {
  let {
    isDevTools: r = !1
  } = e, t = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), u = (0, n.useStateFromStores)([s.default], () => s.default.getPremiumTypeOverride());
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.FormSection, {
      title: "Override Client-Side Premium Type",
      tag: i.FormTitleTags.H3,
      children: (0, a.jsx)(i.SingleSelect, {
        options: d.PREMIUM_TYPE_OVERRIDE_OPTIONS,
        value: u,
        onChange: e => {
          (0, o.updateClientPremiumTypeOverride)(e, t)
        },
        popoutLayerContext: r ? l.devToolsLayerContext : void 0
      })
    }), (0, a.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      style: {
        padding: "0"
      },
      onClick: () => {
        (0, o.updateClientPremiumTypeOverride)(d.UNSELECTED_PREMIUM_TYPE_OVERRIDE, t)
      },
      children: "Reset premium type override"
    })]
  })
}