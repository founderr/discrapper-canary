"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var E = s("735250");
s("470079");
var _ = s("481060"),
  a = s("201895"),
  n = s("471445"),
  T = s("908434"),
  A = s("823379"),
  u = s("303737"),
  i = s("293810"),
  l = s("689938"),
  I = s("965677");

function L(e) {
  let {
    channelId: t
  } = e, s = (0, u.useChannelWithTemplateFallback)(t);
  if (null == s) return (0, E.jsx)(E.Fragment, {
    children: "[".concat(l.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
  });
  let A = s.isMediaChannel() ? T.default : (0, n.getSimpleChannelIconComponent)(s.type);
  return (0, E.jsxs)(E.Fragment, {
    children: [(0, E.jsx)(_.HiddenVisually, {
      children: (0, a.default)({
        channel: s
      })
    }), (0, E.jsxs)("div", {
      "aria-hidden": !0,
      children: [null != A && (0, E.jsx)(A, {
        className: I.icon,
        "aria-hidden": !0
      }), s.name]
    })]
  })
}

function o(e) {
  switch (e.ref_type) {
    case i.GuildRoleSubscriptionBenefitTypes.CHANNEL:
      return (0, E.jsx)(L, {
        channelId: e.ref_id
      });
    case i.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
      return e.name;
    default:
      (0, A.assertNever)(e)
  }
}