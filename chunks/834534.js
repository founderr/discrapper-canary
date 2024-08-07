s.d(n, {
  Z: function() {
return T;
  }
});
var i = s(735250);
s(470079);
var l = s(442837),
  o = s(481060),
  t = s(666520),
  r = s(706454),
  a = s(430824),
  d = s(914010),
  c = s(785717),
  u = s(532776),
  I = s(648067),
  _ = s(588822),
  f = s(900927),
  E = s(678738),
  m = s(652853),
  S = s(335191),
  Z = s(351707),
  v = s(228168),
  x = s(689938),
  h = s(247321);

function T(e) {
  let {
user: n,
currentUser: s,
displayProfile: T,
subsection: p,
onClose: g
  } = e, {
theme: N
  } = (0, m.z)(), {
trackUserProfileAction: C
  } = (0, c.KZ)(), j = null == T ? void 0 : T.guildId, A = (0, l.e7)([a.Z], () => null != j ? a.Z.getGuild(j) : null), O = (0, l.e7)([d.Z], () => d.Z.getGuildId()), R = (0, l.e7)([r.default], () => r.default.locale), L = (0, I.Z)(n.id), U = (0, u.Z)(n.id);
  return (0, i.jsxs)(o.ScrollerThin, {
fade: !0,
className: h.scroller,
children: [
  (null == T ? void 0 : T.bio) != null && (null == T ? void 0 : T.bio) !== '' && (0, i.jsx)(_.Z, {
    userBio: T.bio,
    setLineClamp: !1
  }),
  null != A && (0, i.jsx)(Z.Z, {
    user: n,
    currentUser: s,
    guild: A,
    scrollIntoView: p === v.Tb.ROLES
  }),
  (0, i.jsx)(E.Z, {
    heading: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, i.jsx)(f.Z, {
      userId: n.id,
      guildId: null == T ? void 0 : T.guildId,
      tooltipDelay: v.vB
    })
  }),
  L.length > 0 && (0, i.jsx)(E.Z, {
    heading: x.Z.Messages.CONNECTIONS,
    children: (0, i.jsx)(S.OA, {
      connectedAccounts: L,
      className: h.connections,
      userId: n.id,
      theme: N,
      locale: R
    })
  }),
  U.length > 0 && (0, i.jsx)(E.Z, {
    heading: x.Z.Messages.APPS,
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
  (0, i.jsx)(E.Z, {
    heading: x.Z.Messages.NOTE,
    scrollIntoView: p === v.Tb.NOTE,
    children: (0, i.jsx)(t.Z, {
      userId: n.id,
      className: h.note,
      autoFocus: p === v.Tb.NOTE,
      onUpdate: () => C({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}