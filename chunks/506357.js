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
  N = n(533244),
  m = n(981631),
  h = n(176505),
  C = n(689938),
  S = n(928112);

function A(e) {
  var t, A;
  let {
    onDismiss: p
  } = e, g = (0, l.e7)([d.Z], () => d.Z.getGuildId()), f = (0, l.e7)([u.Z], () => null != g ? u.Z.getChannelId(g) : null, [g]), O = null != g ? g : null, R = (0, l.e7)([c.Z], () => null != O ? c.Z.getGuild(O) : null, [O]), {
    shouldShowIncidentActions: M,
    incidentData: x,
    isUnderLockdown: v
  } = (0, I.mI)(O), L = (0, r.n2)(null !== (t = null == R ? void 0 : R.id) && void 0 !== t ? t : m.lds), Z = i.useCallback(() => null != R && (0, o._X)(R.id), [R]);
  if (null == R || null == x || !M) return null;
  let P = e => {
      if (e && L && f !== h.oC.MEMBER_SAFETY && Z()) {
        _.default.track(m.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: m.kVF.GUILD_RAID_NOTIFICATION,
          guild_id: R.id
        });
        return
      }(0, a.openModalLazy)(async () => {
        let e = {
            source: T.Zu.NAGBAR,
            alertType: (0, N.T1)(x)
          },
          {
            default: t
          } = await Promise.all([n.e("99387"), n.e("58175")]).then(n.bind(n, 664452));
        return n => (0, s.jsx)(t, {
          ...n,
          guildId: R.id,
          analyticsData: e
        })
      })
    },
    D = (0, s.jsx)(E.Z, {
      className: S.guildIcon,
      guild: R,
      size: E.Z.Sizes.MINI
    }),
    j = (0, N.OY)(x, R.name);
  if (null != (null !== (A = x.dmsDisabledUntil) && void 0 !== A ? A : x.invitesDisabledUntil) && v) return (0, s.jsxs)(a.Notice, {
    className: S.notice,
    color: a.NoticeColors.NEUTRAL,
    children: [(0, s.jsx)(a.NoticeCloseButton, {
      onClick: p,
      noticeType: m.kVF.GUILD_RAID_NOTIFICATION
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
  let U = (0, N.CG)(x) ? C.Z.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
      guildName: R.name
    }) : (0, N.kk)(x) ? C.Z.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
      guildName: R.name
    }) : C.Z.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
      guildName: R.name
    }),
    y = L && f === h.oC.MEMBER_SAFETY;
  return (0, s.jsxs)(a.Notice, {
    className: S.notice,
    color: a.NoticeColors.WARNING,
    children: [(0, s.jsx)(a.NoticeCloseButton, {
      onClick: p,
      noticeType: m.kVF.GUILD_RAID_NOTIFICATION
    }), D, U, !y && (0, s.jsx)(a.NoticeButton, {
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