s.d(n, {
  Z: function() {
return p;
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

function p(e) {
  let {
user: n,
currentUser: s,
displayProfile: p,
subsection: T,
onClose: g
  } = e, {
theme: N
  } = (0, m.z)(), {
trackUserProfileAction: C
  } = (0, c.KZ)(), j = null == p ? void 0 : p.guildId, A = (0, l.e7)([a.Z], () => null != j ? a.Z.getGuild(j) : null), O = (0, l.e7)([d.Z], () => d.Z.getGuildId()), L = (0, l.e7)([r.default], () => r.default.locale), R = (0, I.Z)(n.id), U = (0, u.Z)(n.id);
  return (0, i.jsxs)(o.ScrollerThin, {
fade: !0,
className: h.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, i.jsx)(_.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  null != A && (0, i.jsx)(Z.Z, {
    user: n,
    currentUser: s,
    guild: A,
    scrollIntoView: T === v.Tb.ROLES
  }),
  (0, i.jsx)(E.Z, {
    title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, i.jsx)(f.Z, {
      userId: n.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: v.vB
    })
  }),
  R.length > 0 && (0, i.jsx)(E.Z, {
    title: x.Z.Messages.CONNECTIONS,
    children: (0, i.jsx)(S.OA, {
      connectedAccounts: R,
      className: h.connections,
      userId: n.id,
      theme: N,
      locale: L
    })
  }),
  U.length > 0 && (0, i.jsx)(E.Z, {
    title: x.Z.Messages.APPS,
    children: U.map(e => (0, i.jsx)(S.tH, {
      className: h.appsConnections,
      applicationRoleConnection: e,
      locale: L,
      onApplicationClicked: () => {
        C({
          action: 'PRESS_APP_CONNECTION'
        }), g();
      },
      selectedGuildId: null != O ? O : void 0
    }, e.application.id))
  }),
  (0, i.jsx)(E.Z, {
    title: x.Z.Messages.NOTE,
    scrollIntoView: T === v.Tb.NOTE,
    children: (0, i.jsx)(t.Z, {
      userId: n.id,
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