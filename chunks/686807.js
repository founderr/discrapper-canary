"use strict";
i.r(s), i.d(s, {
  default: function() {
    return N
  }
});
var n = i("735250");
i("470079");
var t = i("481060"),
  E = i("201895"),
  r = i("471445"),
  S = i("908434"),
  o = i("823379"),
  _ = i("303737"),
  l = i("293810"),
  a = i("689938"),
  I = i("262129");

function u(e) {
  let {
    channelId: s
  } = e, i = (0, _.useChannelWithTemplateFallback)(s);
  if (null == i) return (0, n.jsx)(n.Fragment, {
    children: "[".concat(a.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, "]")
  });
  let o = i.isMediaChannel() ? S.default : (0, r.getSimpleChannelIconComponent)(i.type);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(t.HiddenVisually, {
      children: (0, E.default)({
        channel: i
      })
    }), (0, n.jsxs)("div", {
      "aria-hidden": !0,
      children: [null != o && (0, n.jsx)(o, {
        className: I.icon,
        "aria-hidden": !0
      }), i.name]
    })]
  })
}

function N(e) {
  switch (e.ref_type) {
    case l.GuildRoleSubscriptionBenefitTypes.CHANNEL:
      return (0, n.jsx)(u, {
        channelId: e.ref_id
      });
    case l.GuildRoleSubscriptionBenefitTypes.INTANGIBLE:
      return e.name;
    default:
      (0, o.assertNever)(e)
  }
}