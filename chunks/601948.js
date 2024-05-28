"use strict";
s.r(t), s.d(t, {
  OverridePremiumTypeDropDown: function() {
    return T
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("246992"),
  r = s("535664"),
  o = s("502087"),
  d = s("921801"),
  u = s("594174"),
  c = s("726985"),
  S = s("474936"),
  E = s("7811");
let T = e => {
  let {
    isDevTools: t = !1
  } = e, s = (0, n.useStateFromStores)([u.default], () => u.default.getCurrentUser()), T = (0, n.useStateFromStores)([o.default], () => {
    let e = o.default.getCreatedAtOverride();
    return null != e ? e.toISOString().substring(0, 10) : ""
  }), _ = (0, n.useStateFromStores)([o.default], () => o.default.getPremiumTypeOverride()), f = e => {
    (0, r.updateClientCreatedAtOverride)(new Date(e))
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(d.Subsetting, {
      setting: c.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, a.jsx)(l.FormSection, {
        title: "Override Client-Side Premium Type",
        tag: l.FormTitleTags.H3,
        children: (0, a.jsx)(l.SingleSelect, {
          options: S.PREMIUM_TYPE_OVERRIDE_OPTIONS,
          value: _,
          onChange: e => {
            (0, r.updateClientPremiumTypeOverride)(e, s)
          },
          popoutLayerContext: t ? i.devToolsLayerContext : void 0
        })
      }), (0, a.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        style: {
          padding: "0"
        },
        onClick: () => {
          (0, r.updateClientPremiumTypeOverride)(S.UNSELECTED_PREMIUM_TYPE_OVERRIDE, s)
        },
        children: "Reset premium type override"
      })]
    }), (0, a.jsxs)(d.Subsetting, {
      setting: c.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, a.jsx)(l.FormSection, {
        title: "Override Client-Side Account Created At Date",
        tag: l.FormTitleTags.H3,
        children: (0, a.jsx)("input", {
          type: "date",
          value: T,
          onChange: e => f(e.target.value),
          className: E.datePicker
        })
      }), (0, a.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        style: {
          padding: "0"
        },
        type: "submit",
        onClick: () => (0, r.updateClientCreatedAtOverride)(void 0),
        children: "Reset account created at override"
      })]
    })]
  })
}