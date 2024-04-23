"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("481060"),
  r = n("241559"),
  o = n("527379"),
  u = n("430824"),
  d = n("944486"),
  c = n("914010"),
  f = n("346656"),
  E = n("630641"),
  _ = n("644766"),
  m = n("626135"),
  T = n("528011"),
  I = n("666657"),
  p = n("533244"),
  h = n("981631"),
  N = n("176505"),
  S = n("689938"),
  C = n("515320");

function A(e) {
  var t, A;
  let {
    onDismiss: g
  } = e, M = (0, a.useStateFromStores)([c.default], () => c.default.getGuildId()), R = (0, a.useStateFromStores)([d.default], () => null != M ? d.default.getChannelId(M) : null, [M]), v = null != M ? M : null, O = (0, a.useStateFromStores)([u.default], () => null != v ? u.default.getGuild(v) : null, [v]), {
    shouldShowIncidentActions: x,
    incidentData: L,
    isUnderLockdown: D
  } = (0, T.useGuildIncidentsState)(v), P = (0, r.useCanAccessMemberSafetyPage)(null !== (t = null == O ? void 0 : O.id) && void 0 !== t ? t : h.EMPTY_STRING_SNOWFLAKE_ID), y = l.useCallback(() => null != O && (0, o.goToMemberSafetyDashboard)(O.id), [O]);
  if (null == O || null == L || !x) return null;
  let U = e => {
      if (e && P && R !== N.StaticChannelRoute.MEMBER_SAFETY && y()) {
        m.default.track(h.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: h.NoticeTypes.GUILD_RAID_NOTIFICATION,
          guild_id: O.id
        });
        return
      }(0, i.openModalLazy)(async () => {
        let e = {
            source: I.GuildIncidentActionSources.NAGBAR,
            alertType: (0, p.getIncidentAlertType)(L)
          },
          {
            default: t
          } = await Promise.all([n.e("99387"), n.e("61536")]).then(n.bind(n, "664452"));
        return n => (0, s.jsx)(t, {
          ...n,
          guildId: O.id,
          analyticsData: e
        })
      })
    },
    j = (0, s.jsx)(f.default, {
      className: C.guildIcon,
      guild: O,
      size: f.default.Sizes.MINI
    }),
    b = (0, p.getSecurityActionDetailsString)(L, O.name);
  if (null != (null !== (A = L.dmsDisabledUntil) && void 0 !== A ? A : L.invitesDisabledUntil) && D) return (0, s.jsxs)(_.default, {
    className: C.notice,
    color: _.NoticeColors.NEUTRAL,
    children: [(0, s.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: h.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), j, b, (0, s.jsx)(_.NoticeButton, {
      className: C.actionButton,
      onClick: () => U(!1),
      children: (0, s.jsxs)("div", {
        className: C.actionButtonInner,
        children: [(0, s.jsx)(E.default, {
          width: 16,
          height: 16
        }), (0, s.jsx)("span", {
          children: S.default.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
        })]
      })
    })]
  });
  let B = (0, p.hasDetectedRaid)(L) ? S.default.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
      guildName: O.name
    }) : (0, p.hasDetectedDMRaid)(L) ? S.default.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
      guildName: O.name
    }) : S.default.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
      guildName: O.name
    }),
    G = P && R === N.StaticChannelRoute.MEMBER_SAFETY;
  return (0, s.jsxs)(_.default, {
    className: C.notice,
    color: _.NoticeColors.WARNING,
    children: [(0, s.jsx)(_.NoticeCloseButton, {
      onClick: g,
      noticeType: h.NoticeTypes.GUILD_RAID_NOTIFICATION
    }), j, B, !G && (0, s.jsx)(_.NoticeButton, {
      className: C.actionButton,
      onClick: () => U(!0),
      children: (0, s.jsx)("div", {
        className: C.actionButtonInner,
        children: (0, s.jsx)("span", {
          children: S.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
        })
      })
    })]
  })
}