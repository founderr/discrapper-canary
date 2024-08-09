n.d(s, {
  Z: function() {
return p;
  }
});
var i = n(735250);
n(470079);
var l = n(442837),
  t = n(481060),
  o = n(666520),
  a = n(706454),
  r = n(430824),
  d = n(914010),
  c = n(785717),
  u = n(532776),
  _ = n(648067),
  I = n(588822),
  f = n(900927),
  E = n(678738),
  m = n(652853),
  x = n(335191),
  S = n(351707),
  v = n(228168),
  Z = n(689938),
  h = n(247321);

function p(e) {
  let {
user: s,
currentUser: n,
displayProfile: p,
subsection: T,
onClose: g
  } = e, {
theme: N
  } = (0, m.z)(), {
trackUserProfileAction: j
  } = (0, c.KZ)(), C = null == p ? void 0 : p.guildId, A = (0, l.e7)([r.Z], () => null != C ? r.Z.getGuild(C) : null), R = (0, l.e7)([d.Z], () => d.Z.getGuildId()), O = (0, l.e7)([a.default], () => a.default.locale), L = (0, _.Z)(s.id), M = (0, u.Z)(s.id);
  return (0, i.jsxs)(t.ScrollerThin, {
fade: !0,
className: h.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, i.jsx)(I.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  null != A && (0, i.jsx)(S.Z, {
    user: s,
    currentUser: n,
    guild: A,
    scrollIntoView: T === v.Tb.ROLES
  }),
  (0, i.jsx)(E.Z, {
    heading: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, i.jsx)(f.Z, {
      userId: s.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: v.vB
    })
  }),
  L.length > 0 && (0, i.jsx)(E.Z, {
    heading: Z.Z.Messages.CONNECTIONS,
    children: (0, i.jsx)(x.OA, {
      connectedAccounts: L,
      className: h.connections,
      userId: s.id,
      theme: N,
      locale: O
    })
  }),
  M.length > 0 && (0, i.jsx)(E.Z, {
    heading: Z.Z.Messages.APPS,
    children: M.map(e => (0, i.jsx)(x.tH, {
      className: h.appsConnections,
      applicationRoleConnection: e,
      locale: O,
      onApplicationClicked: () => {
        j({
          action: 'PRESS_APP_CONNECTION'
        }), g();
      },
      selectedGuildId: null != R ? R : void 0
    }, e.application.id))
  }),
  (0, i.jsx)(E.Z, {
    heading: Z.Z.Messages.NOTE,
    scrollIntoView: T === v.Tb.NOTE,
    children: (0, i.jsx)(o.Z, {
      userId: s.id,
      className: h.note,
      autoFocus: T === v.Tb.NOTE,
      onUpdate: () => j({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}