s.d(i, {
  Z: function() {
    return N
  }
});
var n = s(735250);
s(470079);
var l = s(442837),
  t = s(481060),
  o = s(666520),
  r = s(706454),
  a = s(430824),
  d = s(914010),
  c = s(785717),
  u = s(532776),
  I = s(648067),
  E = s(588822),
  Z = s(900927),
  f = s(678738),
  _ = s(652853),
  S = s(335191),
  v = s(351707),
  m = s(228168),
  x = s(689938),
  h = s(143599);

function N(e) {
  let {
    user: i,
    currentUser: s,
    displayProfile: N,
    subsection: g,
    onClose: T
  } = e, {
    theme: R
  } = (0, _.z)(), {
    trackUserProfileAction: C
  } = (0, c.KZ)(), A = null == N ? void 0 : N.guildId, M = (0, l.e7)([a.Z], () => null != A ? a.Z.getGuild(A) : null), p = (0, l.e7)([d.Z], () => d.Z.getGuildId()), j = (0, l.e7)([r.default], () => r.default.locale), U = (0, I.Z)(i.id), L = (0, u.Z)(i.id);
  return (0, n.jsxs)(t.ScrollerThin, {
    fade: !0,
    className: h.scroller,
    children: [(null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== "" && (0, n.jsx)(E.Z, {
      userBio: N.bio,
      setLineClamp: !1
    }), null != M && (0, n.jsx)(v.Z, {
      user: i,
      currentUser: s,
      guild: M,
      scrollIntoView: g === m.Tb.ROLES
    }), (0, n.jsx)(f.Z, {
      title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, n.jsx)(Z.Z, {
        userId: i.id,
        guildId: null == N ? void 0 : N.guildId,
        tooltipDelay: m.vB
      })
    }), U.length > 0 && (0, n.jsx)(f.Z, {
      title: x.Z.Messages.CONNECTIONS,
      children: (0, n.jsx)(S.OA, {
        connectedAccounts: U,
        className: h.connections,
        userId: i.id,
        theme: R,
        locale: j
      })
    }), L.length > 0 && (0, n.jsx)(f.Z, {
      title: x.Z.Messages.APPS,
      children: L.map(e => (0, n.jsx)(S.tH, {
        className: h.appsConnections,
        applicationRoleConnection: e,
        locale: j,
        onApplicationClicked: () => {
          C({
            action: "PRESS_APP_CONNECTION"
          }), T()
        },
        selectedGuildId: null != p ? p : void 0
      }, e.application.id))
    }), (0, n.jsx)(f.Z, {
      title: x.Z.Messages.NOTE,
      scrollIntoView: g === m.Tb.NOTE,
      children: (0, n.jsx)(o.Z, {
        userId: i.id,
        className: h.note,
        autoFocus: g === m.Tb.NOTE,
        onUpdate: () => C({
          action: "SET_NOTE"
        })
      })
    })]
  })
}