"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("171368"),
  r = n("430824"),
  o = n("496675"),
  u = n("502568"),
  d = n("709054"),
  c = n("826581"),
  f = n("246364"),
  h = n("360328"),
  m = n("981631"),
  p = n("689938"),
  E = n("51011");

function C(e) {
  let {
    channelId: t,
    showProfile: n = !1
  } = e, C = d.default.cast(t), {
    joinRequest: g,
    isModmin: S
  } = (0, l.useStateFromStoresObject)([c.default, r.default, o.default], () => {
    let e = c.default.getRequest(C),
      t = r.default.getGuild(null == e ? void 0 : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && o.default.can(m.Permissions.KICK_MEMBERS, t)
    }
  }), {
    approveRequest: _,
    rejectRequest: T,
    submitting: I
  } = (0, h.useJoinRequestButtonActions)(null == g ? void 0 : g.guildId, null == g ? void 0 : g.userId);
  return null != g && g.applicationStatus === f.GuildJoinRequestApplicationStatuses.SUBMITTED && S ? (0, a.jsxs)("div", {
    className: E.buttons,
    children: [(0, a.jsx)(s.Button, {
      color: s.Button.Colors.GREEN,
      submitting: I,
      onClick: _,
      size: s.ButtonSizes.SMALL,
      children: p.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
    }), (0, a.jsx)(s.Button, {
      color: s.Button.Colors.RED,
      onClick: T,
      size: s.ButtonSizes.SMALL,
      disabled: I || g.applicationStatus !== f.GuildJoinRequestApplicationStatuses.SUBMITTED,
      children: p.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
    }), n && (0, a.jsx)(s.Button, {
      color: s.Button.Colors.TRANSPARENT,
      onClick: () => {
        (0, i.openUserProfileModal)({
          userId: g.userId,
          guildId: g.guildId,
          analyticsLocation: {
            section: m.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: m.AnalyticsObjects.JOIN_REQUEST
          }
        })
      },
      size: s.ButtonSizes.SMALL,
      children: p.default.Messages.VIEW_PROFILE
    }), (0, a.jsx)(u.default.Divider, {})]
  }) : null
}