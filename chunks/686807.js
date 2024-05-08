"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  i = s("201895"),
  E = s("471445"),
  l = s("908434"),
  _ = s("823379"),
  r = s("303737"),
  u = s("293810"),
  o = s("689938"),
  T = s("262129");

function d(e) {
  let {
    channelId: t
  } = e, s = (0, r.useChannelWithTemplateFallback)(t);
  if (null == s) return (0, a.jsx)(a.Fragment, {
    children: "[".concat(o.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
  });
  let _ = s.isMediaChannel() ? l.default : (0, E.getSimpleChannelIconComponent)(s.type);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.HiddenVisually, {
      children: (0, i.default)({
        channel: s
      })
    }), (0, a.jsxs)("div", {
      "aria-hidden": !0,
      children: [null != _ && (0, a.jsx)(_, {
        className: T.icon,
        "aria-hidden": !0
      }), s.name]
    })]
  })
}

function A(e) {
  switch (e.ref_type) {
    case u.GuildRoleSubscriptionBenefitTypes.CHANNEL:
      return (0, a.jsx)(d, {
        channelId: e.ref_id
      });
    case u.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
      return e.name;
    default:
      (0, _.assertNever)(e)
  }
}