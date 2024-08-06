i.d(s, {
  Z: function() {
return p;
  }
});
var n = i(735250);
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
  E = i(678738),
  m = i(652853),
  x = i(335191),
  v = i(351707),
  S = i(228168),
  Z = i(689938),
  h = i(247321);

function p(e) {
  let {
user: s,
currentUser: i,
displayProfile: p,
subsection: T,
onClose: g
  } = e, {
theme: N
  } = (0, m.z)(), {
trackUserProfileAction: j
  } = (0, c.KZ)(), C = null == p ? void 0 : p.guildId, A = (0, l.e7)([r.Z], () => null != C ? r.Z.getGuild(C) : null), R = (0, l.e7)([d.Z], () => d.Z.getGuildId()), O = (0, l.e7)([a.default], () => a.default.locale), L = (0, I.Z)(s.id), M = (0, u.Z)(s.id);
  return (0, n.jsxs)(t.ScrollerThin, {
fade: !0,
className: h.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, n.jsx)(_.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  null != A && (0, n.jsx)(v.Z, {
    user: s,
    currentUser: i,
    guild: A,
    scrollIntoView: T === S.Tb.ROLES
  }),
  (0, n.jsx)(E.Z, {
    heading: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, n.jsx)(f.Z, {
      userId: s.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: S.vB
    })
  }),
  L.length > 0 && (0, n.jsx)(E.Z, {
    heading: Z.Z.Messages.CONNECTIONS,
    children: (0, n.jsx)(x.OA, {
      connectedAccounts: L,
      className: h.connections,
      userId: s.id,
      theme: N,
      locale: O
    })
  }),
  M.length > 0 && (0, n.jsx)(E.Z, {
    heading: Z.Z.Messages.APPS,
    children: M.map(e => (0, n.jsx)(x.tH, {
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
  (0, n.jsx)(E.Z, {
    heading: Z.Z.Messages.NOTE,
    scrollIntoView: T === S.Tb.NOTE,
    children: (0, n.jsx)(o.Z, {
      userId: s.id,
      className: h.note,
      autoFocus: T === S.Tb.NOTE,
      onUpdate: () => j({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}