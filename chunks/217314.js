n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(735250);
n(470079);
var i = n(399606),
  s = n(481060),
  a = n(158776),
  r = n(699516),
  o = n(594174),
  c = n(51144),
  u = n(984370),
  d = n(689938),
  h = n(175803);

function m(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    m = (0, i.e7)([o.default], () => o.default.getUser(t)),
    p = (0, i.e7)([a.Z], () => a.Z.getStatus(t)),
    E = (0, i.e7)([a.Z], () => a.Z.isMobileOnline(t)),
    g = (0, i.e7)([r.Z], () => r.Z.getNickname(t)),
    f = c.ZP.useUserTag(m);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.HiddenVisually, {
      children: d.Z.Messages.DIRECT_MESSAGE
    }), null != m && !n && (0, l.jsx)("div", {
      children: (0, l.jsx)(s.Avatar, {
        status: p,
        isMobile: E,
        className: h.avatar,
        size: s.AvatarSizes.SIZE_24,
        "aria-label": c.ZP.getName(m),
        src: m.getAvatarURL(void 0, 24)
      })
    }), (0, l.jsx)(u.Z.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? h.cursorPointer : null,
      children: (0, l.jsx)(s.TooltipContainer, {
        text: f,
        position: "bottom",
        children: null != g ? g : c.ZP.getName(m)
      })
    })]
  })
}