n.d(s, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var l = n(442837),
  t = n(481060),
  o = n(666520),
  r = n(706454),
  a = n(430824),
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
  p = n(408277);

function h(e) {
  let {
user: s,
currentUser: n,
displayProfile: h,
subsection: T,
onClose: g
  } = e, {
theme: N
  } = (0, m.z)(), {
trackUserProfileAction: j
  } = (0, c.KZ)(), C = null == h ? void 0 : h.guildId, A = (0, l.e7)([a.Z], () => null != C ? a.Z.getGuild(C) : null), R = (0, l.e7)([d.Z], () => d.Z.getGuildId()), O = (0, l.e7)([r.default], () => r.default.locale), L = (0, _.Z)(s.id), M = (0, u.Z)(s.id);
  return (0, i.jsxs)(t.ScrollerThin, {
fade: !0,
className: p.scroller,
children: [
  (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, i.jsx)(I.Z, {
    userBio: h.bio,
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
      guildId: null == h ? void 0 : h.guildId,
      tooltipDelay: v.vB
    })
  }),
  L.length > 0 && (0, i.jsx)(E.Z, {
    heading: Z.Z.Messages.CONNECTIONS,
    children: (0, i.jsx)(x.OA, {
      connectedAccounts: L,
      className: p.connections,
      userId: s.id,
      theme: N,
      locale: O
    })
  }),
  M.length > 0 && (0, i.jsx)(E.Z, {
    heading: Z.Z.Messages.APPS,
    children: M.map(e => (0, i.jsx)(x.tH, {
      className: p.appsConnections,
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
      className: p.note,
      autoFocus: T === v.Tb.NOTE,
      onUpdate: () => j({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}