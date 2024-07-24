i.d(n, {
  Z: function() {
return x;
  }
});
var s = i(735250);
i(470079);
var l = i(442837),
  o = i(481060),
  t = i(666520),
  r = i(592125),
  a = i(430824),
  d = i(944486),
  c = i(785717),
  u = i(621853),
  I = i(588822),
  _ = i(940730),
  f = i(900927),
  E = i(678738),
  m = i(351707),
  S = i(228168),
  Z = i(689938),
  v = i(408277);

function x(e) {
  var n;
  let {
user: i,
currentUser: x,
displayProfile: h,
subsection: p,
onClose: T
  } = e, {
trackUserProfileAction: g
  } = (0, c.KZ)(), N = (0, l.e7)([a.Z], () => (null == h ? void 0 : h.guildId) != null ? a.Z.getGuild(h.guildId) : null), C = (0, l.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(i.id)) || void 0 === e ? void 0 : e.application;
  }), j = (0, l.e7)([
r.Z,
d.Z
  ], () => r.Z.getChannel(d.Z.getChannelId()));
  return (0, s.jsxs)(o.ScrollerThin, {
fade: !0,
className: v.scroller,
children: [
  (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, s.jsx)(I.Z, {
    userBio: h.bio,
    setLineClamp: !1
  }),
  (null == C ? void 0 : C.popularApplicationCommandIds) != null && null != j && (0, s.jsx)(_.Z, {
    applicationId: C.id,
    commandIds: C.popularApplicationCommandIds,
    channel: j,
    guildId: null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n ? n : void 0,
    onClick: T
  }),
  null != N && (0, s.jsx)(m.Z, {
    user: i,
    currentUser: x,
    guild: N,
    scrollIntoView: p === S.Tb.ROLES
  }),
  (0, s.jsx)(E.Z, {
    title: Z.Z.Messages.BOT_PROFILE_CREATED_ON,
    children: (0, s.jsx)(f.Z, {
      userId: i.id,
      guildId: null == h ? void 0 : h.guildId,
      tooltipDelay: S.vB
    })
  }),
  (0, s.jsx)(E.Z, {
    title: Z.Z.Messages.NOTE,
    scrollIntoView: p === S.Tb.NOTE,
    children: (0, s.jsx)(t.Z, {
      userId: i.id,
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