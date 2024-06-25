i.d(n, {
  Z: function() {
    return g
  }
});
var t = i(735250);
i(470079);
var s = i(442837),
  o = i(481060),
  l = i(666520),
  a = i(706454),
  r = i(430824),
  d = i(914010),
  c = i(785717),
  u = i(532776),
  I = i(648067),
  f = i(588822),
  E = i(900927),
  _ = i(678738),
  S = i(652853),
  Z = i(335191),
  m = i(351707),
  v = i(228168),
  x = i(689938),
  h = i(143599);

function g(e) {
  let {
    user: n,
    currentUser: i,
    displayProfile: g,
    subsection: N,
    onClose: p
  } = e, {
    theme: T
  } = (0, S.z)(), {
    trackUserProfileAction: C
  } = (0, c.KZ)(), R = null == g ? void 0 : g.guildId, A = (0, s.e7)([r.Z], () => null != R ? r.Z.getGuild(R) : null), M = (0, s.e7)([d.Z], () => d.Z.getGuildId()), j = (0, s.e7)([a.default], () => a.default.locale), U = (0, I.Z)(n.id), P = (0, u.Z)(n.id);
  return (0, t.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: h.scroller,
    children: [(null == g ? void 0 : g.bio) != null && (null == g ? void 0 : g.bio) !== "" && (0, t.jsx)(f.Z, {
      userBio: g.bio,
      setLineClamp: !1
    }), null != A && (0, t.jsx)(m.Z, {
      user: n,
      currentUser: i,
      guild: A,
      scrollIntoView: N === v.Tb.ROLES
    }), (0, t.jsx)(_.Z, {
      title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, t.jsx)(E.Z, {
        userId: n.id,
        guildId: null == g ? void 0 : g.guildId,
        tooltipDelay: v.vB
      })
    }), U.length > 0 && (0, t.jsx)(_.Z, {
      title: x.Z.Messages.CONNECTIONS,
      children: (0, t.jsx)(Z.OA, {
        connectedAccounts: U,
        className: h.connections,
        userId: n.id,
        theme: T,
        locale: j
      })
    }), P.length > 0 && (0, t.jsx)(_.Z, {
      title: x.Z.Messages.APPS,
      children: P.map(e => (0, t.jsx)(Z.tH, {
        className: h.appsConnections,
        applicationRoleConnection: e,
        locale: j,
        onApplicationClicked: () => {
          C({
            action: "PRESS_APP_CONNECTION"
          }), p()
        },
        selectedGuildId: null != M ? M : void 0
      }, e.application.id))
    }), (0, t.jsx)(_.Z, {
      title: x.Z.Messages.NOTE,
      scrollIntoView: N === v.Tb.NOTE,
      children: (0, t.jsx)(l.Z, {
        userId: n.id,
        className: h.note,
        autoFocus: N === v.Tb.NOTE,
        onUpdate: () => C({
          action: "SET_NOTE"
        })
      })
    })]
  })
}