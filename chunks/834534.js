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
  f = n(588822),
  _ = n(900927),
  E = n(678738),
  m = n(652853),
  S = n(335191),
  Z = n(351707),
  x = n(228168),
  v = n(689938),
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
  } = (0, c.KZ)(), j = null == p ? void 0 : p.guildId, A = (0, l.e7)([a.Z], () => null != j ? a.Z.getGuild(j) : null), U = (0, l.e7)([d.Z], () => d.Z.getGuildId()), R = (0, l.e7)([r.default], () => r.default.locale), O = (0, I.Z)(i.id), M = (0, u.Z)(i.id);
  return (0, s.jsxs)(o.ScrollerThin, {
fade: !0,
className: h.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, s.jsx)(f.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  null != A && (0, s.jsx)(Z.Z, {
    user: i,
    currentUser: n,
    guild: A,
    scrollIntoView: T === x.Tb.ROLES
  }),
  (0, s.jsx)(E.Z, {
    title: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, s.jsx)(_.Z, {
      userId: i.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: x.vB
    })
  }),
  O.length > 0 && (0, s.jsx)(E.Z, {
    title: v.Z.Messages.CONNECTIONS,
    children: (0, s.jsx)(S.OA, {
      connectedAccounts: O,
      className: h.connections,
      userId: i.id,
      theme: N,
      locale: R
    })
  }),
  M.length > 0 && (0, s.jsx)(E.Z, {
    title: v.Z.Messages.APPS,
    children: M.map(e => (0, s.jsx)(S.tH, {
      className: h.appsConnections,
      applicationRoleConnection: e,
      locale: R,
      onApplicationClicked: () => {
        C({
          action: 'PRESS_APP_CONNECTION'
        }), g();
      },
      selectedGuildId: null != U ? U : void 0
    }, e.application.id))
  }),
  (0, s.jsx)(E.Z, {
    title: v.Z.Messages.NOTE,
    scrollIntoView: T === x.Tb.NOTE,
    children: (0, s.jsx)(t.Z, {
      userId: i.id,
      className: h.note,
      autoFocus: T === x.Tb.NOTE,
      onUpdate: () => C({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}