"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("241559"),
  o = n("527379"),
  u = n("430824"),
  d = n("944486"),
  c = n("914010"),
  f = n("346656"),
  E = n("630641"),
  _ = n("626135"),
  m = n("528011"),
  T = n("666657"),
  I = n("533244"),
  h = n("981631"),
  p = n("176505"),
  N = n("689938"),
  S = n("352370");

function C(e) {
  var t, C;
  let {
    onDismiss: g
  } = e, A = (0, l.useStateFromStores)([c.default], () => c.default.getGuildId()), M = (0, l.useStateFromStores)([d.default], () => null != A ? d.default.getChannelId(A) : null, [A]), R = null != A ? A : null, v = (0, l.useStateFromStores)([u.default], () => null != R ? u.default.getGuild(R) : null, [R]), {
    shouldShowIncidentActions: O,
    incidentData: x,
    isUnderLockdown: L
  } = (0, m.useGuildIncidentsState)(R), D = (0, r.useCanAccessMemberSafetyPage)(null !== (t = null == v ? void 0 : v.id) && void 0 !== t ? t : h.EMPTY_STRING_SNOWFLAKE_ID), P = a.useCallback(() => null != v && (0, o.goToMemberSafetyDashboard)(v.id), [v]);
  if (null == v || null == x || !O) return null;
  let y = e => {
      if (e && D && M !== p.StaticChannelRoute.MEMBER_SAFETY && P()) {
        _.default.track(h.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: h.NoticeTypes.GUILD_RAID_NOTIFICATION,
          guild_id: v.id
        });
        return
      }(0, i.openModalLazy)(async () => {
        let e = {
            source: T.GuildIncidentActionSources.NAGBAR,
            alertType: (0, I.getIncidentAlertType)(x)
          },
          {
            default: t
          } = await Promise.all([n.e("99387"), n.e("58175")]).then(n.bind(n, "664452"));
        return n => (0, s.jsx)(t, {
          ...n,
          guildId: v.id,
          analyticsData: e
        })
      })
    },
    U = (0, s.jsx)(f.default, {
      className: S.guildIcon,
      guild: v,
      size: f.default.Sizes.MINI
    }),
    j = (0, I.getSecurityActionDetailsString)(x, v.name);
  if (null != (null !== (C = x.dmsDisabledUntil) && void 0 !== C ? C : x.invitesDisabledUntil) && L) return (0, s.jsxs)(i.Notice, {
    className: S.notice,
    color: i.NoticeColors.NEUTRAL,
    children: [(0, s.jsx)(i.NoticeCloseButton, {
      onClick: g,
      noticeType: h.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), U, j, (0, s.jsx)(i.NoticeButton, {
      className: S.actionButton,
      onClick: () => y(!1),
      children: (0, s.jsxs)("div", {
        className: S.actionButtonInner,
        children: [(0, s.jsx)(E.default, {
          width: 16,
          height: 16
        }), (0, s.jsx)("span", {
          children: N.default.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
        })]
      })
    })]
  });
  let b = (0, I.hasDetectedRaid)(x) ? N.default.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
      guildName: v.name
    }) : (0, I.hasDetectedDMRaid)(x) ? N.default.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
      guildName: v.name
    }) : N.default.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
      guildName: v.name
    }),
    F = D && M === p.StaticChannelRoute.MEMBER_SAFETY;
  return (0, s.jsxs)(i.Notice, {
    className: S.notice,
    color: i.NoticeColors.WARNING,
    children: [(0, s.jsx)(i.NoticeCloseButton, {
      onClick: g,
      noticeType: h.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), U, b, !F && (0, s.jsx)(i.NoticeButton, {
      className: S.actionButton,
      onClick: () => y(!0),
      children: (0, s.jsx)("div", {
        className: S.actionButtonInner,
        children: (0, s.jsx)("span", {
          children: N.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
        })
      })
    })]
  })
}