n.d(s, {
  Z: function() {
return Z;
  }
});
var i = n(735250);
n(470079);
var l = n(442837),
  t = n(481060),
  o = n(666520),
  r = n(592125),
  a = n(430824),
  d = n(944486),
  c = n(785717),
  u = n(621853),
  _ = n(588822),
  I = n(940730),
  f = n(900927),
  E = n(678738),
  m = n(351707),
  x = n(228168),
  S = n(689938),
  v = n(408277);

function Z(e) {
  var s;
  let {
user: n,
currentUser: Z,
displayProfile: p,
subsection: h,
onClose: T
  } = e, {
trackUserProfileAction: g
  } = (0, c.KZ)(), N = (0, l.e7)([a.Z], () => (null == p ? void 0 : p.guildId) != null ? a.Z.getGuild(p.guildId) : null), j = (0, l.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
  }), C = (0, l.e7)([
r.Z,
d.Z
  ], () => r.Z.getChannel(d.Z.getChannelId()));
  return (0, i.jsxs)(t.ScrollerThin, {
fade: !0,
className: v.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, i.jsx)(_.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  (null == j ? void 0 : j.popularApplicationCommandIds) != null && null != C && (0, i.jsx)(I.Z, {
    applicationId: j.id,
    commandIds: j.popularApplicationCommandIds,
    channel: C,
    guildId: null !== (s = null == p ? void 0 : p.guildId) && void 0 !== s ? s : void 0,
    onClick: T
  }),
  null != N && (0, i.jsx)(m.Z, {
    user: n,
    currentUser: Z,
    guild: N,
    scrollIntoView: h === x.Tb.ROLES
  }),
  (0, i.jsx)(E.Z, {
    heading: S.Z.Messages.BOT_PROFILE_CREATED_ON,
    children: (0, i.jsx)(f.Z, {
      userId: n.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: x.vB
    })
  }),
  (0, i.jsx)(E.Z, {
    heading: S.Z.Messages.NOTE,
    scrollIntoView: h === x.Tb.NOTE,
    children: (0, i.jsx)(o.Z, {
      userId: n.id,
      className: v.note,
      autoFocus: h === x.Tb.NOTE,
      onUpdate: () => g({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}