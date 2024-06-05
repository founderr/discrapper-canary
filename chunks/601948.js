"use strict";
r.r(t), r.d(t, {
  OverridePremiumTypeDropDown: function() {
    return h
  }
});
var a = r("735250");
r("470079");
var n = r("442837"),
  i = r("481060"),
  l = r("246992"),
  o = r("535664"),
  s = r("502087"),
  c = r("594174"),
  d = r("474936"),
  u = r("7811");
let h = e => {
  let {
    isDevTools: t = !1
  } = e, r = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), h = (0, n.useStateFromStores)([s.default], () => {
    let e = s.default.getCreatedAtOverride();
    return null != e ? e.toISOString().substring(0, 10) : ""
  }), p = (0, n.useStateFromStores)([s.default], () => s.default.getPremiumTypeOverride()), m = e => {
    (0, o.updateClientCreatedAtOverride)(new Date(e))
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.FormSection, {
      title: "Override Client-Side Premium Type",
      tag: i.FormTitleTags.H3,
      children: (0, a.jsx)(i.SingleSelect, {
        options: d.PREMIUM_TYPE_OVERRIDE_OPTIONS,
        value: p,
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
    }), (0, a.jsx)(i.FormSection, {
      title: "Override Client-Side Account Created At Date",
      tag: i.FormTitleTags.H3,
      children: (0, a.jsx)("input", {
        type: "date",
        value: h,
        onChange: e => m(e.target.value),
        className: u.datePicker
      })
    }), (0, a.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      style: {
        padding: "0"
      },
      type: "submit",
      onClick: () => (0, o.updateClientCreatedAtOverride)(void 0),
      children: "Reset account created at override"
    })]
  })
}