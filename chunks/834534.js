i.d(n, {
  Z: function() {
return p;
  }
});
var s = i(735250);
i(470079);
var l = i(442837),
  t = i(481060),
  o = i(666520),
  a = i(706454),
  r = i(430824),
  d = i(914010),
  c = i(785717),
  u = i(532776),
  I = i(648067),
  _ = i(588822),
  f = i(900927),
  m = i(678738),
  E = i(652853),
  x = i(335191),
  v = i(351707),
  Z = i(228168),
  h = i(689938),
  S = i(247321);

function p(e) {
  let {
user: n,
currentUser: i,
displayProfile: p,
subsection: g,
onClose: j
  } = e, {
theme: N
  } = (0, E.z)(), {
trackUserProfileAction: T
  } = (0, c.KZ)(), C = null == p ? void 0 : p.guildId, A = (0, l.e7)([r.Z], () => null != C ? r.Z.getGuild(C) : null), y = (0, l.e7)([d.Z], () => d.Z.getGuildId()), R = (0, l.e7)([a.default], () => a.default.locale), O = (0, I.Z)(n.id), L = (0, u.Z)(n.id);
  return (0, s.jsxs)(t.ScrollerThin, {
fade: !0,
className: S.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, s.jsx)(_.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  null != A && (0, s.jsx)(v.Z, {
    user: n,
    currentUser: i,
    guild: A,
    scrollIntoView: g === Z.Tb.ROLES
  }),
  (0, s.jsx)(m.Z, {
    heading: h.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, s.jsx)(f.Z, {
      userId: n.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: Z.vB
    })
  }),
  O.length > 0 && (0, s.jsx)(m.Z, {
    heading: h.Z.Messages.CONNECTIONS,
    children: (0, s.jsx)(x.OA, {
      connectedAccounts: O,
      className: S.connections,
      userId: n.id,
      theme: N,
      locale: R
    })
  }),
  L.length > 0 && (0, s.jsx)(m.Z, {
    heading: h.Z.Messages.APPS,
    children: L.map(e => (0, s.jsx)(x.tH, {
      className: S.appsConnections,
      applicationRoleConnection: e,
      locale: R,
      onApplicationClicked: () => {
        T({
          action: 'PRESS_APP_CONNECTION'
        }), j();
      },
      selectedGuildId: null != y ? y : void 0
    }, e.application.id))
  }),
  (0, s.jsx)(m.Z, {
    heading: h.Z.Messages.NOTE,
    scrollIntoView: g === Z.Tb.NOTE,
    children: (0, s.jsx)(o.Z, {
      userId: n.id,
      className: S.note,
      autoFocus: g === Z.Tb.NOTE,
      onUpdate: () => T({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}