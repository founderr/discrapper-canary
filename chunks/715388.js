i.d(s, {
  Z: function() {
return S;
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
  _ = i(940730),
  f = i(900927),
  m = i(678738),
  E = i(351707),
  x = i(228168),
  v = i(689938),
  Z = i(247321);

function S(e) {
  var s;
  let {
user: i,
currentUser: S,
displayProfile: h,
subsection: p,
onClose: j
  } = e, {
trackUserProfileAction: T
  } = (0, c.KZ)(), g = (0, l.e7)([r.Z], () => (null == h ? void 0 : h.guildId) != null ? r.Z.getGuild(h.guildId) : null), N = (0, l.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(i.id)) || void 0 === e ? void 0 : e.application;
  }), C = (0, l.e7)([
a.Z,
d.Z
  ], () => a.Z.getChannel(d.Z.getChannelId()));
  return (0, n.jsxs)(t.ScrollerThin, {
fade: !0,
className: Z.scroller,
children: [
  (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, n.jsx)(I.Z, {
    userBio: h.bio,
    setLineClamp: !1
  }),
  (null == N ? void 0 : N.popularApplicationCommandIds) != null && null != C && (0, n.jsx)(_.Z, {
    applicationId: N.id,
    commandIds: N.popularApplicationCommandIds,
    channel: C,
    guildId: null !== (s = null == h ? void 0 : h.guildId) && void 0 !== s ? s : void 0,
    onClick: j
  }),
  null != g && (0, n.jsx)(E.Z, {
    user: i,
    currentUser: S,
    guild: g,
    scrollIntoView: p === x.Tb.ROLES
  }),
  (0, n.jsx)(m.Z, {
    title: v.Z.Messages.BOT_PROFILE_CREATED_ON,
    children: (0, n.jsx)(f.Z, {
      userId: i.id,
      guildId: null == h ? void 0 : h.guildId,
      tooltipDelay: x.vB
    })
  }),
  (0, n.jsx)(m.Z, {
    title: v.Z.Messages.NOTE,
    scrollIntoView: p === x.Tb.NOTE,
    children: (0, n.jsx)(o.Z, {
      userId: i.id,
      className: Z.note,
      autoFocus: p === x.Tb.NOTE,
      onUpdate: () => T({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}