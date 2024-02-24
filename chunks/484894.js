"use strict";
r.r(t), r.d(t, {
  OverridePremiumTypeDropDown: function() {
    return u
  }
});
var a = r("37983");
r("884691");
var n = r("446674"),
  i = r("77078"),
  l = r("811199"),
  o = r("285471"),
  s = r("400205"),
  c = r("697218"),
  d = r("646718");
let u = e => {
  let {
    isDevTools: t = !1
  } = e, r = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), u = (0, n.useStateFromStores)([s.default], () => s.default.getPremiumTypeOverride());
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.FormSection, {
      title: "Override Client-Side Premium Type",
      tag: i.FormTitleTags.H3,
      children: (0, a.jsx)(i.SingleSelect, {
        options: d.PREMIUM_TYPE_OVERRIDE_OPTIONS,
        value: u,
        onChange: e => {
          (0, o.updateClientPremiumTypeOverride)(e, r)
        },
        popoutLayerContext: t ? l.devToolsLayerContext : void 0
      })
    }), (0, a.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      style: {
        padding: "0"
      },
      onClick: () => {
        (0, o.updateClientPremiumTypeOverride)(d.UNSELECTED_PREMIUM_TYPE_OVERRIDE, r)
      },
      children: "Reset premium type override"
    })]
  })
}