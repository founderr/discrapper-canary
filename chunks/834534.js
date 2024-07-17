n.d(i, {
  Z: function() {
return p;
  }
});
var s = n(735250);
n(470079);
var l = n(442837),
  o = n(481060),
  t = n(666520),
  r = n(706454),
  a = n(430824),
  d = n(914010),
  c = n(785717),
  u = n(532776),
  I = n(648067),
  _ = n(588822),
  f = n(900927),
  E = n(678738),
  m = n(652853),
  S = n(335191),
  Z = n(351707),
  v = n(228168),
  x = n(689938),
  h = n(247321);

function p(e) {
  let {
user: i,
currentUser: n,
displayProfile: p,
subsection: T,
onClose: g
  } = e, {
theme: N
  } = (0, m.z)(), {
trackUserProfileAction: C
  } = (0, c.KZ)(), j = null == p ? void 0 : p.guildId, A = (0, l.e7)([a.Z], () => null != j ? a.Z.getGuild(j) : null), M = (0, l.e7)([d.Z], () => d.Z.getGuildId()), L = (0, l.e7)([r.default], () => r.default.locale), R = (0, I.Z)(i.id), U = (0, u.Z)(i.id);
  return (0, s.jsxs)(o.ScrollerThin, {
fade: !0,
className: h.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, s.jsx)(_.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  null != A && (0, s.jsx)(Z.Z, {
    user: i,
    currentUser: n,
    guild: A,
    scrollIntoView: T === v.Tb.ROLES
  }),
  (0, s.jsx)(E.Z, {
    title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, s.jsx)(f.Z, {
      userId: i.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: v.vB
    })
  }),
  R.length > 0 && (0, s.jsx)(E.Z, {
    title: x.Z.Messages.CONNECTIONS,
    children: (0, s.jsx)(S.OA, {
      connectedAccounts: R,
      className: h.connections,
      userId: i.id,
      theme: N,
      locale: L
    })
  }),
  U.length > 0 && (0, s.jsx)(E.Z, {
    title: x.Z.Messages.APPS,
    children: U.map(e => (0, s.jsx)(S.tH, {
      className: h.appsConnections,
      applicationRoleConnection: e,
      locale: L,
      onApplicationClicked: () => {
        C({
          action: 'PRESS_APP_CONNECTION'
        }), g();
      },
      selectedGuildId: null != M ? M : void 0
    }, e.application.id))
  }),
  (0, s.jsx)(E.Z, {
    title: x.Z.Messages.NOTE,
    scrollIntoView: T === v.Tb.NOTE,
    children: (0, s.jsx)(t.Z, {
      userId: i.id,
      className: h.note,
      autoFocus: T === v.Tb.NOTE,
      onUpdate: () => C({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}