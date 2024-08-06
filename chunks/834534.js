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
  m = i(678738),
  E = i(652853),
  S = i(335191),
  x = i(351707),
  v = i(228168),
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
  } = (0, E.z)(), {
trackUserProfileAction: j
  } = (0, c.KZ)(), A = null == p ? void 0 : p.guildId, C = (0, l.e7)([r.Z], () => null != A ? r.Z.getGuild(A) : null), R = (0, l.e7)([d.Z], () => d.Z.getGuildId()), O = (0, l.e7)([a.default], () => a.default.locale), M = (0, I.Z)(s.id), U = (0, u.Z)(s.id);
  return (0, n.jsxs)(t.ScrollerThin, {
fade: !0,
className: h.scroller,
children: [
  (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, n.jsx)(_.Z, {
    userBio: p.bio,
    setLineClamp: !1
  }),
  null != C && (0, n.jsx)(x.Z, {
    user: s,
    currentUser: i,
    guild: C,
    scrollIntoView: T === v.Tb.ROLES
  }),
  (0, n.jsx)(m.Z, {
    heading: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, n.jsx)(f.Z, {
      userId: s.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: v.vB
    })
  }),
  M.length > 0 && (0, n.jsx)(m.Z, {
    heading: Z.Z.Messages.CONNECTIONS,
    children: (0, n.jsx)(S.OA, {
      connectedAccounts: M,
      className: h.connections,
      userId: s.id,
      theme: N,
      locale: O
    })
  }),
  U.length > 0 && (0, n.jsx)(m.Z, {
    heading: Z.Z.Messages.APPS,
    children: U.map(e => (0, n.jsx)(S.tH, {
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
  (0, n.jsx)(m.Z, {
    heading: Z.Z.Messages.NOTE,
    scrollIntoView: T === v.Tb.NOTE,
    children: (0, n.jsx)(o.Z, {
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