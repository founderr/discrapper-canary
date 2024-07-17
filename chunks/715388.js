n.d(i, {
  Z: function() {
return x;
  }
});
var s = n(735250);
n(470079);
var l = n(442837),
  o = n(481060),
  t = n(666520),
  r = n(592125),
  a = n(430824),
  d = n(944486),
  c = n(785717),
  u = n(621853),
  I = n(588822),
  _ = n(940730),
  f = n(900927),
  E = n(678738),
  m = n(351707),
  S = n(228168),
  Z = n(689938),
  v = n(247321);

function x(e) {
  var i;
  let {
user: n,
currentUser: x,
displayProfile: h,
subsection: p,
onClose: T
  } = e, {
trackUserProfileAction: g
  } = (0, c.KZ)(), N = (0, l.e7)([a.Z], () => (null == h ? void 0 : h.guildId) != null ? a.Z.getGuild(h.guildId) : null), C = (0, l.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
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
    guildId: null !== (i = null == h ? void 0 : h.guildId) && void 0 !== i ? i : void 0,
    onClick: T
  }),
  null != N && (0, s.jsx)(m.Z, {
    user: n,
    currentUser: x,
    guild: N,
    scrollIntoView: p === S.Tb.ROLES
  }),
  (0, s.jsx)(E.Z, {
    title: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, s.jsx)(f.Z, {
      userId: n.id,
      guildId: null == h ? void 0 : h.guildId,
      tooltipDelay: S.vB
    })
  }),
  (0, s.jsx)(E.Z, {
    title: Z.Z.Messages.NOTE,
    scrollIntoView: p === S.Tb.NOTE,
    children: (0, s.jsx)(t.Z, {
      userId: n.id,
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