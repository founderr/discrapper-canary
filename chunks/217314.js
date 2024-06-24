n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250);
n(470079);
var i = n(399606),
  s = n(481060),
  a = n(210975),
  r = n(158776),
  o = n(699516),
  c = n(594174),
  u = n(51144),
  d = n(984370),
  h = n(689938),
  m = n(175803);

function p(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    p = (0, i.e7)([c.default], () => c.default.getUser(t)),
    E = (0, i.e7)([r.Z], () => r.Z.getStatus(t)),
    g = (0, i.e7)([r.Z], () => r.Z.isMobileOnline(t)),
    f = (0, i.e7)([o.Z], () => o.Z.getNickname(t)),
    C = u.ZP.useUserTag(p),
    _ = (0, a.m$)(e.channel.id);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.HiddenVisually, {
      children: h.Z.Messages.DIRECT_MESSAGE
    }), null != p && !n && (0, l.jsx)("div", {
      children: (0, l.jsx)(s.Avatar, {
        status: E,
        isMobile: g,
        className: m.avatar,
        size: s.AvatarSizes.SIZE_24,
        "aria-label": u.ZP.getName(p),
        src: p.getAvatarURL(void 0, 24)
      })
    }), (0, l.jsx)(d.Z.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? m.cursorPointer : null,
      children: (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.TooltipContainer, {
          text: C,
          position: "bottom",
          children: null != f ? f : u.ZP.getName(p)
        }), _ && (0, l.jsx)(s.ShieldLockIcon, {
          size: "xxs",
          "aria-label": h.Z.Messages.E2EE_CALL_VERIFIED_A11Y,
          color: s.tokens.colors.INTERACTIVE_NORMAL,
          className: m.secureFramesIcon
        })]
      })
    })]
  })
}