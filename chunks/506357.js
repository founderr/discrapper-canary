n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(481060),
  l = n(565138),
  o = n(241559),
  c = n(527379),
  u = n(430824),
  d = n(944486),
  _ = n(914010),
  E = n(626135),
  I = n(528011),
  m = n(666657),
  T = n(533244),
  h = n(981631),
  N = n(176505),
  f = n(689938),
  C = n(985343);

function p(e) {
  var t, p;
  let {
onDismiss: g
  } = e, S = (0, a.e7)([_.Z], () => _.Z.getGuildId()), A = (0, a.e7)([d.Z], () => null != S ? d.Z.getChannelId(S) : null, [S]), M = null != S ? S : null, R = (0, a.e7)([u.Z], () => null != M ? u.Z.getGuild(M) : null, [M]), {
shouldShowIncidentActions: O,
incidentData: x,
isUnderLockdown: v
  } = (0, I.mI)(M), Z = (0, o.n2)(null !== (t = null == R ? void 0 : R.id) && void 0 !== t ? t : h.lds), L = s.useCallback(() => null != R && (0, c._X)(R.id), [R]);
  if (null == R || null == x || !O)
return null;
  let P = e => {
  if (e && Z && A !== N.oC.MEMBER_SAFETY && L()) {
    E.default.track(h.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
      notice_type: h.kVF.GUILD_RAID_NOTIFICATION,
      guild_id: R.id
    });
    return;
  }
  (0, r.openModalLazy)(async () => {
    let e = {
        source: m.Zu.NAGBAR,
        alertType: (0, T.T1)(x)
      },
      {
        default: t
      } = await n.e('58175').then(n.bind(n, 664452));
    return n => (0, i.jsx)(t, {
      ...n,
      guildId: R.id,
      analyticsData: e
    });
  });
},
D = (0, i.jsx)(l.Z, {
  className: C.guildIcon,
  guild: R,
  size: l.Z.Sizes.MINI
}),
b = (0, T.OY)(x, R.name);
  if (null != (null !== (p = x.dmsDisabledUntil) && void 0 !== p ? p : x.invitesDisabledUntil) && v)
return (0, i.jsxs)(r.Notice, {
  className: C.notice,
  color: r.NoticeColors.NEUTRAL,
  children: [
    (0, i.jsx)(r.NoticeCloseButton, {
      onClick: g,
      noticeType: h.kVF.GUILD_RAID_NOTIFICATION
    }),
    D,
    b,
    (0, i.jsx)(r.NoticeButton, {
      className: C.actionButton,
      onClick: () => P(!1),
      children: (0, i.jsxs)('div', {
        className: C.actionButtonInner,
        children: [
          (0, i.jsx)(r.LockIcon, {
            size: 'xs',
            color: 'currentColor'
          }),
          (0, i.jsx)('span', {
            children: f.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION
          })
        ]
      })
    })
  ]
});
  let j = (0, T.CG)(x) ? f.Z.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({
  guildName: R.name
}) : (0, T.kk)(x) ? f.Z.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({
  guildName: R.name
}) : f.Z.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({
  guildName: R.name
}),
U = Z && A === N.oC.MEMBER_SAFETY;
  return (0, i.jsxs)(r.Notice, {
className: C.notice,
color: r.NoticeColors.WARNING,
children: [
  (0, i.jsx)(r.NoticeCloseButton, {
    onClick: g,
    noticeType: h.kVF.GUILD_RAID_NOTIFICATION
  }),
  D,
  j,
  !U && (0, i.jsx)(r.NoticeButton, {
    className: C.actionButton,
    onClick: () => P(!0),
    children: (0, i.jsx)('div', {
      className: C.actionButtonInner,
      children: (0, i.jsx)('span', {
        children: f.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW
      })
    })
  })
]
  });
}