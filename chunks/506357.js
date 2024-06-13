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
  T = n("528011"),
  m = n("666657"),
  I = n("533244"),
  N = n("981631"),
  p = n("176505"),
  h = n("689938"),
  S = n("352370");

function C(e) {
  var t, C;
  let {
    onDismiss: A
  } = e, g = (0, l.useStateFromStores)([c.default], () => c.default.getGuildId()), M = (0, l.useStateFromStores)([d.default], () => null != g ? d.default.getChannelId(g) : null, [g]), R = null != g ? g : null, O = (0, l.useStateFromStores)([u.default], () => null != R ? u.default.getGuild(R) : null, [R]), {
    shouldShowIncidentActions: v,
    incidentData: x,
    isUnderLockdown: L
  } = (0, T.useGuildIncidentsState)(R), P = (0, r.useCanAccessMemberSafetyPage)(null !== (t = null == O ? void 0 : O.id) && void 0 !== t ? t : N.EMPTY_STRING_SNOWFLAKE_ID), D = a.useCallback(() => null != O && (0, o.goToMemberSafetyDashboard)(O.id), [O]);
  if (null == O || null == x || !v) return null;
  let y = e => {
      if (e && P && M !== p.StaticChannelRoute.MEMBER_SAFETY && D()) {
        _.default.track(N.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: N.NoticeTypes.GUILD_RAID_NOTIFICATION,
          guild_id: O.id
        });
        return
      }(0, i.openModalLazy)(async () => {
        let e = {
            source: m.GuildIncidentActionSources.NAGBAR,
            alertType: (0, I.getIncidentAlertType)(x)
          },
          {
            default: t
          } = await Promise.all([n.e("99387"), n.e("58175")]).then(n.bind(n, "664452"));
        return n => (0, s.jsx)(t, {
          ...n,
          guildId: O.id,
          analyticsData: e
        })
      })
    },
    U = (0, s.jsx)(f.default, {
      className: S.guildIcon,
      guild: O,
      size: f.default.Sizes.MINI
    }),
    j = (0, I.getSecurityActionDetailsString)(x, O.name);
  if (null != (null !== (C = x.dmsDisabledUntil) && void 0 !== C ? C : x.invitesDisabledUntil) && L) return (0, s.jsxs)(i.Notice, {
    className: S.notice,
    color: i.NoticeColors.NEUTRAL,
    children: [(0, s.jsx)(i.NoticeCloseButton, {
      onClick: A,
      noticeType: N.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), U, j, (0, s.jsx)(i.NoticeButton, {
      className: S.actionButton,
      onClick: () => y(!1),
      children: (0, s.jsxs)("div", {
        className: S.actionButtonInner,
        children: [(0, s.jsx)(E.default, {
          width: 16,
          height: 16
        }), (0, s.jsx)("span", {
          children: h.default.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
        })]
      })
    })]
  });
  let b = (0, I.hasDetectedRaid)(x) ? h.default.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
      guildName: O.name
    }) : (0, I.hasDetectedDMRaid)(x) ? h.default.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
      guildName: O.name
    }) : h.default.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
      guildName: O.name
    }),
    G = P && M === p.StaticChannelRoute.MEMBER_SAFETY;
  return (0, s.jsxs)(i.Notice, {
    className: S.notice,
    color: i.NoticeColors.WARNING,
    children: [(0, s.jsx)(i.NoticeCloseButton, {
      onClick: A,
      noticeType: N.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), U, b, !G && (0, s.jsx)(i.NoticeButton, {
      className: S.actionButton,
      onClick: () => y(!0),
      children: (0, s.jsx)("div", {
        className: S.actionButtonInner,
        children: (0, s.jsx)("span", {
          children: h.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
        })
      })
    })]
  })
}