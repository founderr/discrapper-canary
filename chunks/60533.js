"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("90815"),
  r = s("594174"),
  o = s("815198");

function d(e) {
  let {
    guild: t
  } = e, s = (0, l.useStateFromStores)([r.default], () => {
    let e = r.default.getCurrentUser();
    return null != e && (null == t ? void 0 : t.isOwner(e)) === !0
  }), d = () => {
    (0, i.showNewTerms)(t.id, {
      demonetized: !0
    })
  };
  return (0, a.jsxs)("div", {
    className: o.container,
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: "Monetization Temporarily Disabled"
    }), (0, a.jsx)(n.Spacer, {
      size: 24
    }), (0, a.jsx)(n.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: "This server is overdue for accepting our new terms of service so we've had to temporarily suspend monetization. Don't worry, existing subscribers can still access their benefits and renew their subscription. However, new subscriptions cannot be made until the owner accepts our new terms of service."
    }), (0, a.jsx)(n.Spacer, {
      size: 24
    }), (0, a.jsx)(n.Tooltip, {
      text: "Only the server owner can accept new terms",
      shouldShow: !s,
      children: e => (0, a.jsx)(n.Button, {
        disabled: !s,
        ...e,
        onClick: d,
        children: "Accept New Terms"
      })
    })]
  })
}