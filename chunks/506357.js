n.d(t, {
  Z: function() {
    return A
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(241559),
  o = n(527379),
  c = n(430824),
  u = n(944486),
  d = n(914010),
  E = n(346656),
  _ = n(626135),
  I = n(528011),
  T = n(666657),
  m = n(533244),
  N = n(981631),
  h = n(176505),
  C = n(689938),
  S = n(928112);

function A(e) {
  var t, A;
  let {
    onDismiss: g
  } = e, p = (0, l.e7)([d.Z], () => d.Z.getGuildId()), f = (0, l.e7)([u.Z], () => null != p ? u.Z.getChannelId(p) : null, [p]), R = null != p ? p : null, O = (0, l.e7)([c.Z], () => null != R ? c.Z.getGuild(R) : null, [R]), {
    shouldShowIncidentActions: M,
    incidentData: x,
    isUnderLockdown: v
  } = (0, I.mI)(R), L = (0, r.n2)(null !== (t = null == O ? void 0 : O.id) && void 0 !== t ? t : N.lds), Z = i.useCallback(() => null != O && (0, o._X)(O.id), [O]);
  if (null == O || null == x || !M) return null;
  let P = e => {
      if (e && L && f !== h.oC.MEMBER_SAFETY && Z()) {
        _.default.track(N.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: N.kVF.GUILD_RAID_NOTIFICATION,
          guild_id: O.id
        });
        return
      }(0, a.openModalLazy)(async () => {
        let e = {
            source: T.Zu.NAGBAR,
            alertType: (0, m.T1)(x)
          },
          {
            default: t
          } = await Promise.all([n.e("99387"), n.e("58175")]).then(n.bind(n, 664452));
        return n => (0, s.jsx)(t, {
          ...n,
          guildId: O.id,
          analyticsData: e
        })
      })
    },
    D = (0, s.jsx)(E.Z, {
      className: S.guildIcon,
      guild: O,
      size: E.Z.Sizes.MINI
    }),
    j = (0, m.OY)(x, O.name);
  if (null != (null !== (A = x.dmsDisabledUntil) && void 0 !== A ? A : x.invitesDisabledUntil) && v) return (0, s.jsxs)(a.Notice, {
    className: S.notice,
    color: a.NoticeColors.NEUTRAL,
    children: [(0, s.jsx)(a.NoticeCloseButton, {
      onClick: g,
      noticeType: N.kVF.GUILD_RAID_NOTIFICATION
    }), D, j, (0, s.jsx)(a.NoticeButton, {
      className: S.actionButton,
      onClick: () => P(!1),
      children: (0, s.jsxs)("div", {
        className: S.actionButtonInner,
        children: [(0, s.jsx)(a.LockIcon, {
          size: "xs",
          color: "currentColor"
        }), (0, s.jsx)("span", {
          children: C.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
        })]
      })
    })]
  });
  let U = (0, m.CG)(x) ? C.Z.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
      guildName: O.name
    }) : (0, m.kk)(x) ? C.Z.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
      guildName: O.name
    }) : C.Z.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
      guildName: O.name
    }),
    b = L && f === h.oC.MEMBER_SAFETY;
  return (0, s.jsxs)(a.Notice, {
    className: S.notice,
    color: a.NoticeColors.WARNING,
    children: [(0, s.jsx)(a.NoticeCloseButton, {
      onClick: g,
      noticeType: N.kVF.GUILD_RAID_NOTIFICATION
    }), D, U, !b && (0, s.jsx)(a.NoticeButton, {
      className: S.actionButton,
      onClick: () => P(!0),
      children: (0, s.jsx)("div", {
        className: S.actionButtonInner,
        children: (0, s.jsx)("span", {
          children: C.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
        })
      })
    })]
  })
}