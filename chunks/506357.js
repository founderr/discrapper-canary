"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
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
  E = n("346656"),
  f = n("630641"),
  _ = n("644766"),
  T = n("626135"),
  I = n("528011"),
  m = n("666657"),
  N = n("533244"),
  p = n("981631"),
  S = n("176505"),
  C = n("689938"),
  A = n("352370");

function h(e) {
  var t, h;
  let {
    onDismiss: g
  } = e, M = (0, l.useStateFromStores)([c.default], () => c.default.getGuildId()), O = (0, l.useStateFromStores)([d.default], () => null != M ? d.default.getChannelId(M) : null, [M]), R = null != M ? M : null, v = (0, l.useStateFromStores)([u.default], () => null != R ? u.default.getGuild(R) : null, [R]), {
    shouldShowIncidentActions: L,
    incidentData: P,
    isUnderLockdown: x
  } = (0, I.useGuildIncidentsState)(R), D = (0, r.useCanAccessMemberSafetyPage)(null !== (t = null == v ? void 0 : v.id) && void 0 !== t ? t : p.EMPTY_STRING_SNOWFLAKE_ID), y = a.useCallback(() => null != v && (0, o.goToMemberSafetyDashboard)(v.id), [v]);
  if (null == v || null == P || !L) return null;
  let U = e => {
      if (e && D && O !== S.StaticChannelRoute.MEMBER_SAFETY && y()) {
        T.default.track(p.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: p.NoticeTypes.GUILD_RAID_NOTIFICATION,
          guild_id: v.id
        });
        return
      }(0, i.openModalLazy)(async () => {
        let e = {
            source: m.GuildIncidentActionSources.NAGBAR,
            alertType: (0, N.getIncidentAlertType)(P)
          },
          {
            default: t
          } = await Promise.all([n.e("99387"), n.e("61536")]).then(n.bind(n, "664452"));
        return n => (0, s.jsx)(t, {
          ...n,
          guildId: v.id,
          analyticsData: e
        })
      })
    },
    j = (0, s.jsx)(E.default, {
      className: A.guildIcon,
      guild: v,
      size: E.default.Sizes.MINI
    }),
    b = (0, N.getSecurityActionDetailsString)(P, v.name);
  if (null != (null !== (h = P.dmsDisabledUntil) && void 0 !== h ? h : P.invitesDisabledUntil) && x) return (0, s.jsxs)(_.default, {
    className: A.notice,
    color: _.NoticeColors.NEUTRAL,
    children: [(0, s.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: p.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), j, b, (0, s.jsx)(_.NoticeButton, {
      className: A.actionButton,
      onClick: () => U(!1),
      children: (0, s.jsxs)("div", {
        className: A.actionButtonInner,
        children: [(0, s.jsx)(f.default, {
          width: 16,
          height: 16
        }), (0, s.jsx)("span", {
          children: C.default.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
        })]
      })
    })]
  });
  let G = (0, N.hasDetectedRaid)(P) ? C.default.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
      guildName: v.name
    }) : (0, N.hasDetectedDMRaid)(P) ? C.default.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
      guildName: v.name
    }) : C.default.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
      guildName: v.name
    }),
    B = D && O === S.StaticChannelRoute.MEMBER_SAFETY;
  return (0, s.jsxs)(_.default, {
    className: A.notice,
    color: _.NoticeColors.WARNING,
    children: [(0, s.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: p.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), j, G, !B && (0, s.jsx)(_.NoticeButton, {
      className: A.actionButton,
      onClick: () => U(!0),
      children: (0, s.jsx)("div", {
        className: A.actionButtonInner,
        children: (0, s.jsx)("span", {
          children: C.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
        })
      })
    })]
  })
}