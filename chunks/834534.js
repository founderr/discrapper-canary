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
  x = i(335191),
  v = i(351707),
  Z = i(228168),
  S = i(689938),
  h = i(408277);

function p(e) {
  let {
user: s,
currentUser: i,
displayProfile: p,
subsection: j,
onClose: T
  } = e, {
theme: g
  } = (0, E.z)(), {
trackUserProfileAction: N
  } = (0, c.KZ)(), C = null == p ? void 0 : p.guildId, A = (0, l.e7)([r.Z], () => null != C ? r.Z.getGuild(C) : null), L = (0, l.e7)([d.Z], () => d.Z.getGuildId()), O = (0, l.e7)([a.default], () => a.default.locale), R = (0, I.Z)(s.id), U = (0, u.Z)(s.id);
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
    scrollIntoView: j === Z.Tb.ROLES
  }),
  (0, n.jsx)(m.Z, {
    title: S.Z.Messages.USER_PROFILE_MEMBER_SINCE,
    children: (0, n.jsx)(f.Z, {
      userId: s.id,
      guildId: null == p ? void 0 : p.guildId,
      tooltipDelay: Z.vB
    })
  }),
  R.length > 0 && (0, n.jsx)(m.Z, {
    title: S.Z.Messages.CONNECTIONS,
    children: (0, n.jsx)(x.OA, {
      connectedAccounts: R,
      className: h.connections,
      userId: s.id,
      theme: g,
      locale: O
    })
  }),
  U.length > 0 && (0, n.jsx)(m.Z, {
    title: S.Z.Messages.APPS,
    children: U.map(e => (0, n.jsx)(x.tH, {
      className: h.appsConnections,
      applicationRoleConnection: e,
      locale: O,
      onApplicationClicked: () => {
        N({
          action: 'PRESS_APP_CONNECTION'
        }), T();
      },
      selectedGuildId: null != L ? L : void 0
    }, e.application.id))
  }),
  (0, n.jsx)(m.Z, {
    title: S.Z.Messages.NOTE,
    scrollIntoView: j === Z.Tb.NOTE,
    children: (0, n.jsx)(o.Z, {
      userId: s.id,
      className: h.note,
      autoFocus: j === Z.Tb.NOTE,
      onUpdate: () => N({
        action: 'SET_NOTE'
      })
    })
  })
]
  });
}