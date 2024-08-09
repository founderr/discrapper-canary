n.d(s, {
  Z: function() {
return T;
  }
});
var i = n(735250);
n(470079);
var l = n(442837),
  o = n(481060),
  t = n(666520),
  r = n(706454),
  a = n(430824),
  d = n(914010),
  c = n(785717),
  u = n(532776),
  _ = n(648067),
  I = n(588822),
  E = n(900927),
  f = n(678738),
  m = n(652853),
  S = n(335191),
  Z = n(351707),
  x = n(228168),
  v = n(689938),
  h = n(247321);

function T(e) {
  let {
user: s,
currentUser: n,
displayProfile: T,
subsection: p,
onClose: g
  } = e, {
theme: N
  } = (0, m.z)(), {
trackUserProfileAction: C
  } = (0, c.KZ)(), j = null == T ? void 0 : T.guildId, A = (0, l.e7)([a.Z], () => null != j ? a.Z.getGuild(j) : null), O = (0, l.e7)([d.Z], () => d.Z.getGuildId()), R = (0, l.e7)([r.default], () => r.default.locale), L = (0, _.Z)(s.id), U = (0, u.Z)(s.id);
  return (0, i.jsxs)(o.ScrollerThin, {
fade: !0,
className: h.scroller,
children: [
  (null == T ? void 0 : T.bio) != null && (null == T ? void 0 : T.bio) !== '' && (0, i.jsx)(I.Z, {
    userBio: T.bio,
    setLineClamp: !1
  }),
  null != A && (0, i.jsx)(Z.Z, {
    user: s,
    currentUser: n,
    guild: A,
    scrollIntoView: p === x.Tb.ROLES
  }),
  (0, i.jsx)(f.Z, {
    heading: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, i.jsx)(E.Z, {
      userId: s.id,
      guildId: null == T ? void 0 : T.guildId,
      tooltipDelay: x.vB
    })
  }),
  L.length > 0 && (0, i.jsx)(f.Z, {
    heading: v.Z.Messages.CONNECTIONS,
    children: (0, i.jsx)(S.OA, {
      connectedAccounts: L,
      className: h.connections,
      userId: s.id,
      theme: N,
      locale: R
    })
  }),
  U.length > 0 && (0, i.jsx)(f.Z, {
    heading: v.Z.Messages.APPS,
    children: U.map(e => (0, i.jsx)(S.tH, {
      className: h.appsConnections,
      applicationRoleConnection: e,
      locale: R,
      onApplicationClicked: () => {
        C({
          action: 'PRESS_APP_CONNECTION'
        }), g();
      },
      selectedGuildId: null != O ? O : void 0
    }, e.application.id))
  }),
  (0, i.jsx)(f.Z, {
    heading: v.Z.Messages.NOTE,
    scrollIntoView: p === x.Tb.NOTE,
    children: (0, i.jsx)(t.Z, {
      userId: s.id,
      className: h.note,
      autoFocus: p === x.Tb.NOTE,
      onUpdate: () => C({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}