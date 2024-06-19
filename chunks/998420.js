a.r(s);
var n = a(735250),
  t = a(470079),
  l = a(442837),
  r = a(100527),
  i = a(906732),
  o = a(252618),
  c = a(598077),
  I = a(430824),
  d = a(693546),
  u = a(863249),
  E = a(328977),
  T = a(208257),
  _ = a(853486),
  N = a(689938),
  R = a(807761);
s.default = function(e) {
  let {
    guildId: s
  } = e, {
    analyticsLocations: a
  } = (0, i.ZP)(r.Z.GUILD_MEMBER_APPLICATION_REVIEW), M = (0, E.L)({
    guildId: s
  }), {
    user: C
  } = null != M ? M : {}, m = t.useMemo(() => null != C ? new c.Z(C) : null, [C]), A = (0, l.e7)([I.Z], () => I.Z.getGuild(s), [s]);
  return (0, o.Tt)({
    subsection: N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
    location: null == A ? void 0 : A.name
  }), t.useEffect(() => {
    u.Z.fetchVerificationForm(s)
  }, [s]), (0, n.jsxs)(i.Gt, {
    value: a,
    children: [(0, n.jsx)("div", {
      className: R.content,
      children: (0, n.jsx)(T.Z, {
        guildId: s
      })
    }), null != M && null != A && null != m && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: R.sidebarSeparator
      }), (0, n.jsx)("section", {
        className: R.sidebar,
        children: (0, n.jsx)(_.Z, {
          guild: A,
          guildJoinRequest: M,
          guildJoinRequestUser: m,
          onClose: () => d.Z.setSelectedGuildJoinRequest(s, null)
        })
      })]
    })]
  })
}