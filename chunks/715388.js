s.d(n, {
  Z: function() {
return x;
  }
});
var i = s(735250);
s(470079);
var l = s(442837),
  o = s(481060),
  t = s(666520),
  r = s(592125),
  a = s(430824),
  d = s(944486),
  c = s(785717),
  u = s(621853),
  I = s(588822),
  _ = s(940730),
  f = s(900927),
  E = s(678738),
  m = s(351707),
  S = s(228168),
  Z = s(689938),
  v = s(408277);

function x(e) {
  var n;
  let {
user: s,
currentUser: x,
displayProfile: h,
subsection: p,
onClose: T
  } = e, {
trackUserProfileAction: g
  } = (0, c.KZ)(), N = (0, l.e7)([a.Z], () => (null == h ? void 0 : h.guildId) != null ? a.Z.getGuild(h.guildId) : null), C = (0, l.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(s.id)) || void 0 === e ? void 0 : e.application;
  }), j = (0, l.e7)([
r.Z,
d.Z
  ], () => r.Z.getChannel(d.Z.getChannelId()));
  return (0, i.jsxs)(o.ScrollerThin, {
fade: !0,
className: v.scroller,
children: [
  (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, i.jsx)(I.Z, {
    userBio: h.bio,
    setLineClamp: !1
  }),
  (null == C ? void 0 : C.popularApplicationCommandIds) != null && null != j && (0, i.jsx)(_.Z, {
    applicationId: C.id,
    commandIds: C.popularApplicationCommandIds,
    channel: j,
    guildId: null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n ? n : void 0,
    onClick: T
  }),
  null != N && (0, i.jsx)(m.Z, {
    user: s,
    currentUser: x,
    guild: N,
    scrollIntoView: p === S.Tb.ROLES
  }),
  (0, i.jsx)(E.Z, {
    title: Z.Z.Messages.BOT_PROFILE_CREATED_ON,
    children: (0, i.jsx)(f.Z, {
      userId: s.id,
      guildId: null == h ? void 0 : h.guildId,
      tooltipDelay: S.vB
    })
  }),
  (0, i.jsx)(E.Z, {
    title: Z.Z.Messages.NOTE,
    scrollIntoView: p === S.Tb.NOTE,
    children: (0, i.jsx)(t.Z, {
      userId: s.id,
      className: v.note,
      autoFocus: p === S.Tb.NOTE,
      onUpdate: () => g({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}