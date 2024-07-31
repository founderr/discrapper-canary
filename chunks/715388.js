i.d(n, {
  Z: function() {
return h;
  }
});
var s = i(735250);
i(470079);
var l = i(442837),
  t = i(481060),
  o = i(666520),
  a = i(592125),
  r = i(430824),
  d = i(944486),
  c = i(785717),
  u = i(621853),
  I = i(588822),
  _ = i(940730),
  f = i(900927),
  m = i(678738),
  E = i(351707),
  x = i(228168),
  v = i(689938),
  Z = i(247321);

function h(e) {
  var n;
  let {
user: i,
currentUser: h,
displayProfile: S,
subsection: p,
onClose: g
  } = e, {
trackUserProfileAction: j
  } = (0, c.KZ)(), T = (0, l.e7)([r.Z], () => (null == S ? void 0 : S.guildId) != null ? r.Z.getGuild(S.guildId) : null), N = (0, l.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(i.id)) || void 0 === e ? void 0 : e.application;
  }), C = (0, l.e7)([
a.Z,
d.Z
  ], () => a.Z.getChannel(d.Z.getChannelId()));
  return (0, s.jsxs)(t.ScrollerThin, {
fade: !0,
className: Z.scroller,
children: [
  (null == S ? void 0 : S.bio) != null && (null == S ? void 0 : S.bio) !== '' && (0, s.jsx)(I.Z, {
    userBio: S.bio,
    setLineClamp: !1
  }),
  (null == N ? void 0 : N.popularApplicationCommandIds) != null && null != C && (0, s.jsx)(_.Z, {
    applicationId: N.id,
    commandIds: N.popularApplicationCommandIds,
    channel: C,
    guildId: null !== (n = null == S ? void 0 : S.guildId) && void 0 !== n ? n : void 0,
    onClick: g
  }),
  null != T && (0, s.jsx)(E.Z, {
    user: i,
    currentUser: h,
    guild: T,
    scrollIntoView: p === x.Tb.ROLES
  }),
  (0, s.jsx)(m.Z, {
    heading: v.Z.Messages.BOT_PROFILE_CREATED_ON,
    children: (0, s.jsx)(f.Z, {
      userId: i.id,
      guildId: null == S ? void 0 : S.guildId,
      tooltipDelay: x.vB
    })
  }),
  (0, s.jsx)(m.Z, {
    heading: v.Z.Messages.NOTE,
    scrollIntoView: p === x.Tb.NOTE,
    children: (0, s.jsx)(o.Z, {
      userId: i.id,
      className: Z.note,
      autoFocus: p === x.Tb.NOTE,
      onUpdate: () => j({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}