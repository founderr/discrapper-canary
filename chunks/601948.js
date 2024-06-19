t.d(s, {
  S: function() {
    return S
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(246992),
  r = t(535664),
  o = t(502087),
  c = t(921801),
  E = t(594174),
  d = t(726985),
  _ = t(474936),
  T = t(429026);
let S = e => {
  let {
    isDevTools: s = !1
  } = e, t = (0, i.e7)([E.default], () => E.default.getCurrentUser()), S = (0, i.e7)([o.Z], () => {
    let e = o.Z.getCreatedAtOverride();
    return null != e ? e.toISOString().substring(0, 10) : ""
  }), u = (0, i.e7)([o.Z], () => o.Z.getPremiumTypeOverride()), I = e => {
    (0, r.u)(new Date(e))
  };
  return (0, n.jsxs)("div", {
    children: [(0, n.jsxs)(c.F, {
      setting: d.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
      children: [(0, n.jsx)(a.FormSection, {
        title: "Override Client-Side Premium Type",
        tag: a.FormTitleTags.H3,
        children: (0, n.jsx)(a.SingleSelect, {
          options: _.b6,
          value: u,
          onChange: e => {
            (0, r.C)(e, t)
          },
          popoutLayerContext: s ? l.O$ : void 0
        })
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        style: {
          padding: "0"
        },
        onClick: () => {
          (0, r.C)(_.F_, t)
        },
        children: "Reset premium type override"
      })]
    }), (0, n.jsxs)(c.F, {
      setting: d.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
      children: [(0, n.jsx)(a.FormSection, {
        title: "Override Client-Side Account Created At Date",
        tag: a.FormTitleTags.H3,
        children: (0, n.jsx)("input", {
          type: "date",
          value: S,
          onChange: e => I(e.target.value),
          className: T.datePicker
        })
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        style: {
          padding: "0"
        },
        type: "submit",
        onClick: () => (0, r.u)(void 0),
        children: "Reset account created at override"
      })]
    })]
  })
}