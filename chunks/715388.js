n.d(i, {
  Z: function() {
return h;
  }
});
var s = n(735250);
n(470079);
var l = n(442837),
  t = n(481060),
  o = n(666520),
  a = n(592125),
  r = n(430824),
  d = n(944486),
  c = n(785717),
  u = n(621853),
  I = n(588822),
  _ = n(940730),
  f = n(900927),
  m = n(678738),
  E = n(351707),
  x = n(228168),
  v = n(689938),
  Z = n(247321);

function h(e) {
  var i;
  let {
user: n,
currentUser: h,
displayProfile: S,
subsection: p,
onClose: g
  } = e, {
trackUserProfileAction: j
  } = (0, c.KZ)(), T = (0, l.e7)([r.Z], () => (null == S ? void 0 : S.guildId) != null ? r.Z.getGuild(S.guildId) : null), N = (0, l.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
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
    guildId: null !== (i = null == S ? void 0 : S.guildId) && void 0 !== i ? i : void 0,
    onClick: g
  }),
  null != T && (0, s.jsx)(E.Z, {
    user: n,
    currentUser: h,
    guild: T,
    scrollIntoView: p === x.Tb.ROLES
  }),
  (0, s.jsx)(m.Z, {
    heading: v.Z.Messages.BOT_PROFILE_CREATED_ON,
    children: (0, s.jsx)(f.Z, {
      userId: n.id,
      guildId: null == S ? void 0 : S.guildId,
      tooltipDelay: x.vB
    })
  }),
  (0, s.jsx)(m.Z, {
    heading: v.Z.Messages.NOTE,
    scrollIntoView: p === x.Tb.NOTE,
    children: (0, s.jsx)(o.Z, {
      userId: n.id,
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