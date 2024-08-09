n.d(s, {
  Z: function() {
return v;
  }
});
var i = n(735250);
n(470079);
var l = n(442837),
  o = n(481060),
  t = n(666520),
  r = n(592125),
  a = n(430824),
  d = n(944486),
  c = n(785717),
  u = n(621853),
  _ = n(588822),
  I = n(940730),
  E = n(900927),
  f = n(678738),
  m = n(351707),
  S = n(228168),
  Z = n(689938),
  x = n(247321);

function v(e) {
  var s;
  let {
user: n,
currentUser: v,
displayProfile: h,
subsection: T,
onClose: p
  } = e, {
trackUserProfileAction: g
  } = (0, c.KZ)(), N = (0, l.e7)([a.Z], () => (null == h ? void 0 : h.guildId) != null ? a.Z.getGuild(h.guildId) : null), C = (0, l.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
  }), j = (0, l.e7)([
r.Z,
d.Z
  ], () => r.Z.getChannel(d.Z.getChannelId()));
  return (0, i.jsxs)(o.ScrollerThin, {
fade: !0,
className: x.scroller,
children: [
  (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, i.jsx)(_.Z, {
    userBio: h.bio,
    setLineClamp: !1
  }),
  (null == C ? void 0 : C.popularApplicationCommandIds) != null && null != j && (0, i.jsx)(I.Z, {
    applicationId: C.id,
    commandIds: C.popularApplicationCommandIds,
    channel: j,
    guildId: null !== (s = null == h ? void 0 : h.guildId) && void 0 !== s ? s : void 0,
    onClick: p
  }),
  null != N && (0, i.jsx)(m.Z, {
    user: n,
    currentUser: v,
    guild: N,
    scrollIntoView: T === S.Tb.ROLES
  }),
  (0, i.jsx)(f.Z, {
    heading: Z.Z.Messages.BOT_PROFILE_CREATED_ON,
    children: (0, i.jsx)(E.Z, {
      userId: n.id,
      guildId: null == h ? void 0 : h.guildId,
      tooltipDelay: S.vB
    })
  }),
  (0, i.jsx)(f.Z, {
    heading: Z.Z.Messages.NOTE,
    scrollIntoView: T === S.Tb.NOTE,
    children: (0, i.jsx)(t.Z, {
      userId: n.id,
      className: x.note,
      autoFocus: T === S.Tb.NOTE,
      onUpdate: () => g({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}