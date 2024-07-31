i.d(s, {
  Z: function() {
return Z;
  }
});
var n = i(735250);
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
  f = i(940730),
  _ = i(900927),
  m = i(678738),
  E = i(351707),
  v = i(228168),
  x = i(689938),
  S = i(247321);

function Z(e) {
  var s;
  let {
user: i,
currentUser: Z,
displayProfile: h,
subsection: p,
onClose: g
  } = e, {
trackUserProfileAction: T
  } = (0, c.KZ)(), N = (0, l.e7)([r.Z], () => (null == h ? void 0 : h.guildId) != null ? r.Z.getGuild(h.guildId) : null), j = (0, l.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(i.id)) || void 0 === e ? void 0 : e.application;
  }), C = (0, l.e7)([
a.Z,
d.Z
  ], () => a.Z.getChannel(d.Z.getChannelId()));
  return (0, n.jsxs)(t.ScrollerThin, {
fade: !0,
className: S.scroller,
children: [
  (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, n.jsx)(I.Z, {
    userBio: h.bio,
    setLineClamp: !1
  }),
  (null == j ? void 0 : j.popularApplicationCommandIds) != null && null != C && (0, n.jsx)(f.Z, {
    applicationId: j.id,
    commandIds: j.popularApplicationCommandIds,
    channel: C,
    guildId: null !== (s = null == h ? void 0 : h.guildId) && void 0 !== s ? s : void 0,
    onClick: g
  }),
  null != N && (0, n.jsx)(E.Z, {
    user: i,
    currentUser: Z,
    guild: N,
    scrollIntoView: p === v.Tb.ROLES
  }),
  (0, n.jsx)(m.Z, {
    heading: x.Z.Messages.BOT_PROFILE_CREATED_ON,
    children: (0, n.jsx)(_.Z, {
      userId: i.id,
      guildId: null == h ? void 0 : h.guildId,
      tooltipDelay: v.vB
    })
  }),
  (0, n.jsx)(m.Z, {
    heading: x.Z.Messages.NOTE,
    scrollIntoView: p === v.Tb.NOTE,
    children: (0, n.jsx)(o.Z, {
      userId: i.id,
      className: S.note,
      autoFocus: p === v.Tb.NOTE,
      onUpdate: () => T({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}