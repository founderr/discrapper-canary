"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("171368"),
  r = n("650774"),
  o = n("430824"),
  u = n("496675"),
  d = n("502568"),
  c = n("709054"),
  f = n("826581"),
  h = n("246364"),
  m = n("360328"),
  p = n("981631"),
  E = n("689938"),
  C = n("299669");

function g(e) {
  let {
    channelId: t,
    showProfile: n = !1,
    showTrailingDivider: g = !1
  } = e, S = c.default.cast(t), {
    joinRequest: _,
    isModmin: T,
    guildId: I,
    maxMembers: A
  } = (0, l.useStateFromStoresObject)([f.default, o.default, u.default], () => {
    let e = f.default.getRequest(S),
      t = o.default.getGuild(null == e ? void 0 : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && u.default.can(p.Permissions.KICK_MEMBERS, t),
      guildId: null == t ? void 0 : t.id,
      maxMembers: null == t ? void 0 : t.maxMembers
    }
  }), v = (0, l.useStateFromStores)([r.default], () => null != I ? r.default.getMemberCount(I) : 0), x = null != A && (null != v ? v : 0) >= A, {
    approveRequest: N,
    rejectRequest: M,
    submitting: R
  } = (0, m.useJoinRequestButtonActions)(null == _ ? void 0 : _.guildId, null == _ ? void 0 : _.userId);
  return null != _ && _.applicationStatus === h.GuildJoinRequestApplicationStatuses.SUBMITTED && T ? (0, a.jsxs)("div", {
    className: C.buttons,
    children: [(0, a.jsx)(s.Tooltip, {
      text: E.default.Messages.CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
      shouldShow: x,
      children: e => (0, a.jsx)(s.Button, {
        ...e,
        color: s.Button.Colors.GREEN,
        submitting: R,
        onClick: N,
        size: s.ButtonSizes.SMALL,
        disabled: x,
        children: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
      })
    }), (0, a.jsx)(s.Button, {
      color: s.Button.Colors.RED,
      onClick: M,
      size: s.ButtonSizes.SMALL,
      disabled: R || _.applicationStatus !== h.GuildJoinRequestApplicationStatuses.SUBMITTED,
      children: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
    }), n && (0, a.jsx)(s.Button, {
      color: s.Button.Colors.TRANSPARENT,
      onClick: () => {
        (0, i.openUserProfileModal)({
          userId: _.userId,
          guildId: _.guildId,
          analyticsLocation: {
            section: p.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: p.AnalyticsObjects.JOIN_REQUEST
          }
        })
      },
      size: s.ButtonSizes.SMALL,
      children: E.default.Messages.VIEW_PROFILE
    }), g && (0, a.jsx)(d.default.Divider, {})]
  }) : null
}