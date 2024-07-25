n.d(i, {
  Z: function() {
return p;
  }
});
var s = n(735250);
n(470079);
var l = n(442837),
  t = n(481060),
  o = n(666520),
  a = n(706454),
  r = n(430824),
  d = n(914010),
  c = n(785717),
  u = n(532776),
  I = n(648067),
  _ = n(588822),
  f = n(900927),
  m = n(678738),
  E = n(652853),
  x = n(335191),
  v = n(351707),
  h = n(228168),
  S = n(689938),
  Z = n(247321);

function p(e) {
  let {
user: i,
currentUser: n,
displayProfile: p,
subsection: g,
onClose: j
  } = e, {
theme: T
  } = (0, E.z)(), {
trackUserProfileAction: N
  } = (0, c.KZ)(), C = null == p ? void 0 : p.guildId, A = (0, l.e7)([r.Z], () => null != C ? r.Z.getGuild(C) : null), R = (0, l.e7)([d.Z], () => d.Z.getGuildId()), L = (0, l.e7)([a.default], () => a.default.locale), y = (0, I.Z)(i.id), O = (0, u.Z)(i.id);
  return (0, s.jsxs)(t.ScrollerThin, {
fade: !0,
className: Z.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, s.jsx)(_.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  null != A && (0, s.jsx)(v.Z, {
    user: i,
    currentUser: n,
    guild: A,
    scrollIntoView: g === h.Tb.ROLES
  }),
  (0, s.jsx)(m.Z, {
    heading: S.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, s.jsx)(f.Z, {
      userId: i.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: h.vB
    })
  }),
  y.length > 0 && (0, s.jsx)(m.Z, {
    heading: S.Z.Messages.CONNECTIONS,
    children: (0, s.jsx)(x.OA, {
      connectedAccounts: y,
      className: Z.connections,
      userId: i.id,
      theme: T,
      locale: L
    })
  }),
  O.length > 0 && (0, s.jsx)(m.Z, {
    heading: S.Z.Messages.APPS,
    children: O.map(e => (0, s.jsx)(x.tH, {
      className: Z.appsConnections,
      applicationRoleConnection: e,
      locale: L,
      onApplicationClicked: () => {
        N({
          action: 'PRESS_APP_CONNECTION'
        }), j();
      },
      selectedGuildId: null != R ? R : void 0
    }, e.application.id))
  }),
  (0, s.jsx)(m.Z, {
    heading: S.Z.Messages.NOTE,
    scrollIntoView: g === h.Tb.NOTE,
    children: (0, s.jsx)(o.Z, {
      userId: i.id,
      className: Z.note,
      autoFocus: g === h.Tb.NOTE,
      onUpdate: () => N({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}