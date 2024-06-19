l.d(n, {
  Z: function() {
    return I
  }
});
var t = l(735250),
  s = l(470079),
  i = l(442837),
  a = l(100527),
  o = l(906732),
  r = l(613464),
  d = l(6025),
  c = l(433355),
  u = l(430824),
  _ = l(981631),
  E = l(872686);

function I(e) {
  let {
    guildId: n
  } = e, l = (0, i.e7)([u.Z], () => u.Z.getGuild(n)), {
    analyticsLocations: I
  } = (0, o.ZP)(a.Z.MEMBER_SAFETY_PAGE), N = (0, i.e7)([c.ZP], () => c.ZP.getGuildSidebarState(n), [n]), x = s.useCallback(() => {
    d.Z.closeGuildSidebar(n)
  }, [n]), h = null != N;
  return null != l && h && null != N ? (0, t.jsx)(o.Gt, {
    value: I,
    children: (0, t.jsx)("div", {
      className: E.__invalid_sidebarContainer,
      style: {
        width: _.$Y6
      },
      children: (0, t.jsx)(r.Z, {
        userId: N.details.userId,
        guildId: N.details.guildId,
        onClose: x
      })
    })
  }) : null
}