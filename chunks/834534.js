i.d(n, {
  Z: function() {
    return C
  }
});
var l = i(735250);
i(470079);
var s = i(120356),
  t = i.n(s),
  o = i(442837),
  a = i(481060),
  r = i(666520),
  d = i(706454),
  u = i(430824),
  c = i(914010),
  I = i(785717),
  E = i(532776),
  f = i(648067),
  Z = i(588822),
  _ = i(900927),
  S = i(678738),
  m = i(652853),
  v = i(335191),
  N = i(351707),
  x = i(228168),
  h = i(689938),
  g = i(143599);

function C(e) {
  let {
    user: n,
    currentUser: i,
    displayProfile: s,
    subsection: C,
    className: T,
    onClose: R
  } = e, {
    theme: A
  } = (0, m.z)(), {
    trackUserProfileAction: M
  } = (0, I.KZ)(), j = null == s ? void 0 : s.guildId, p = (0, o.e7)([u.Z], () => null != j ? u.Z.getGuild(j) : null), U = (0, o.e7)([c.Z], () => c.Z.getGuildId()), O = (0, o.e7)([d.default], () => d.default.locale), P = (0, f.Z)(n.id), L = (0, E.Z)(n.id);
  return (0, l.jsxs)(a.ScrollerThin, {
    fade: !0,
    className: t()(g.scroller, T),
    children: [(null == s ? void 0 : s.bio) != null && (null == s ? void 0 : s.bio) !== "" && (0, l.jsx)(Z.Z, {
      userBio: s.bio,
      setLineClamp: !1
    }), null != p && (0, l.jsx)(N.Z, {
      user: n,
      currentUser: i,
      guild: p,
      scrollIntoView: C === x.Tb.ROLES
    }), (0, l.jsx)(S.Z, {
      title: h.Z.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, l.jsx)(_.Z, {
        userId: n.id,
        guildId: null == s ? void 0 : s.guildId,
        tooltipDelay: x.vB
      })
    }), P.length > 0 && (0, l.jsx)(S.Z, {
      title: h.Z.Messages.CONNECTIONS,
      children: (0, l.jsx)(v.OA, {
        connectedAccounts: P,
        className: g.connections,
        userId: n.id,
        theme: A,
        locale: O
      })
    }), L.length > 0 && (0, l.jsx)(S.Z, {
      title: h.Z.Messages.APPS,
      children: L.map(e => (0, l.jsx)(v.tH, {
        className: g.appsConnections,
        applicationRoleConnection: e,
        locale: O,
        onApplicationClicked: () => {
          M({
            action: "PRESS_APP_CONNECTION"
          }), R()
        },
        selectedGuildId: null != U ? U : void 0
      }, e.application.id))
    }), (0, l.jsx)(S.Z, {
      title: h.Z.Messages.NOTE,
      scrollIntoView: C === x.Tb.NOTE,
      children: (0, l.jsx)(r.Z, {
        userId: n.id,
        className: g.note,
        autoFocus: C === x.Tb.NOTE,
        onUpdate: () => M({
          action: "SET_NOTE"
        })
      })
    })]
  })
}