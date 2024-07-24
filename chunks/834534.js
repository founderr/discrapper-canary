i.d(n, {
  Z: function() {
return p;
  }
});
var s = i(735250);
i(470079);
var l = i(442837),
  o = i(481060),
  t = i(666520),
  r = i(706454),
  a = i(430824),
  d = i(914010),
  c = i(785717),
  u = i(532776),
  I = i(648067),
  _ = i(588822),
  f = i(900927),
  E = i(678738),
  m = i(652853),
  S = i(335191),
  Z = i(351707),
  v = i(228168),
  x = i(689938),
  h = i(408277);

function p(e) {
  let {
user: n,
currentUser: i,
displayProfile: p,
subsection: T,
onClose: g
  } = e, {
theme: N
  } = (0, m.z)(), {
trackUserProfileAction: C
  } = (0, c.KZ)(), j = null == p ? void 0 : p.guildId, A = (0, l.e7)([a.Z], () => null != j ? a.Z.getGuild(j) : null), O = (0, l.e7)([d.Z], () => d.Z.getGuildId()), L = (0, l.e7)([r.default], () => r.default.locale), U = (0, I.Z)(n.id), M = (0, u.Z)(n.id);
  return (0, s.jsxs)(o.ScrollerThin, {
fade: !0,
className: h.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, s.jsx)(_.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  null != A && (0, s.jsx)(Z.Z, {
    user: n,
    currentUser: i,
    guild: A,
    scrollIntoView: T === v.Tb.ROLES
  }),
  (0, s.jsx)(E.Z, {
    title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, s.jsx)(f.Z, {
      userId: n.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: v.vB
    })
  }),
  U.length > 0 && (0, s.jsx)(E.Z, {
    title: x.Z.Messages.CONNECTIONS,
    children: (0, s.jsx)(S.OA, {
      connectedAccounts: U,
      className: h.connections,
      userId: n.id,
      theme: N,
      locale: L
    })
  }),
  M.length > 0 && (0, s.jsx)(E.Z, {
    title: x.Z.Messages.APPS,
    children: M.map(e => (0, s.jsx)(S.tH, {
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
  (0, s.jsx)(E.Z, {
    title: x.Z.Messages.NOTE,
    scrollIntoView: T === v.Tb.NOTE,
    children: (0, s.jsx)(t.Z, {
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