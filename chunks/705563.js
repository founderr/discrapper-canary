n.d(t, {
  Z: function() {
    return C
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(171368),
  r = n(650774),
  o = n(430824),
  c = n(496675),
  u = n(502568),
  d = n(709054),
  h = n(826581),
  m = n(246364),
  p = n(360328),
  E = n(981631),
  g = n(689938),
  f = n(695572);

function C(e) {
  let {
    channelId: t,
    showProfile: n = !1,
    showTrailingDivider: C = !1
  } = e, _ = d.default.cast(t), {
    joinRequest: I,
    isModmin: x,
    guildId: T,
    maxMembers: N
  } = (0, i.cj)([h.Z, o.Z, c.Z], () => {
    let e = h.Z.getRequest(_),
      t = o.Z.getGuild(null == e ? void 0 : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && c.Z.can(E.Plq.KICK_MEMBERS, t),
      guildId: null == t ? void 0 : t.id,
      maxMembers: null == t ? void 0 : t.maxMembers
    }
  }), Z = (0, i.e7)([r.Z], () => null != T ? r.Z.getMemberCount(T) : 0), S = null != N && (null != Z ? Z : 0) >= N, {
    approveRequest: v,
    rejectRequest: A,
    submitting: M
  } = (0, p.s)(null == I ? void 0 : I.guildId, null == I ? void 0 : I.userId);
  return null != I && I.applicationStatus === m.wB.SUBMITTED && x ? (0, l.jsxs)("div", {
    className: f.buttons,
    children: [(0, l.jsx)(s.Tooltip, {
      text: g.Z.Messages.CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
      shouldShow: S,
      children: e => (0, l.jsx)(s.Button, {
        ...e,
        color: s.Button.Colors.GREEN,
        submitting: M,
        onClick: v,
        size: s.ButtonSizes.SMALL,
        disabled: S,
        children: g.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
      })
    }), (0, l.jsx)(s.Button, {
      color: s.Button.Colors.RED,
      onClick: A,
      size: s.ButtonSizes.SMALL,
      disabled: M || I.applicationStatus !== m.wB.SUBMITTED,
      children: g.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
    }), n && (0, l.jsx)(s.Button, {
      color: s.Button.Colors.TRANSPARENT,
      onClick: () => {
        (0, a.openUserProfileModal)({
          userId: I.userId,
          guildId: I.guildId,
          analyticsLocation: {
            section: E.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: E.qAy.JOIN_REQUEST
          }
        })
      },
      size: s.ButtonSizes.SMALL,
      children: g.Z.Messages.VIEW_PROFILE
    }), C && (0, l.jsx)(u.ZP.Divider, {})]
  }) : null
}