"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("653047"),
  i = n("233069"),
  r = n("813006"),
  u = n("766274"),
  o = n("800118"),
  d = n("570683"),
  c = n("49111"),
  f = n("782340"),
  E = n("182092");
let _ = e => {
  let {
    state: t
  } = e;
  switch (t) {
    case c.InviteStates.ACCEPTING:
    case c.InviteStates.APP_OPENING:
      return !0;
    default:
      return !1
  }
};

function I(e) {
  let {
    invite: t,
    onAcceptInvite: n,
    disableUser: I = !1
  } = e;
  if (null == t) return null;
  let p = null != t.guild ? new r.default(t.guild) : null,
    h = null != t.channel ? (0, i.createChannelRecordFromInvite)(t.channel) : null,
    T = null != t.target_application ? new l.default(t.target_application) : null,
    N = I || null == t.inviter ? null : new u.default(t.inviter),
    m = null != t.approximate_member_count && t.approximate_member_count > o.LARGE_SERVER_MEMBER_THRESHOLD || null != p && p.hasFeature(c.GuildFeatures.COMMUNITY),
    g = !m && null != N && (0, o.isGroupInvite)(t),
    A = _(t),
    S = {
      invite: t,
      user: N,
      guild: p,
      channel: h,
      application: T
    };
  return (0, o.isEnhancedCommunityInvite)(t) ? (0, s.jsx)(d.default, {
    invite: t,
    channel: h,
    isSubmitting: A,
    onAcceptInvite: n
  }) : (0, s.jsxs)("div", {
    className: E.container,
    children: [(0, s.jsx)(o.InviteDestinationIcon, {
      application: T,
      guild: p,
      user: g || (0, o.isDirectInvite)(t) ? N : null
    }), (0, o.isDirectInvite)(t) ? null : (0, s.jsx)(o.InviteJoinContext, {
      ...S,
      showBigUserIcon: g
    }), (0, s.jsx)(o.InviteHeader, {
      ...S,
      showBigUserIcon: g
    }), (0, s.jsx)(o.InviteMemberCounts, {
      ...S
    }), (0, s.jsx)(a.Button, {
      onClick: n,
      submitting: A,
      className: E.acceptButton,
      children: f.default.Messages.INSTANT_INVITE_ACCEPT
    })]
  })
}