n.d(t, {
  Z: function() {
    return _
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(399606),
  a = n(846519),
  r = n(481060),
  o = n(317632),
  c = n(174767),
  u = n(594174),
  d = n(689938),
  E = n(573688);

function _(e) {
  let {
    inboxIconRef: t,
    recentsPopoutShown: n
  } = e, [_, I] = i.useState(!1), T = (0, l.e7)([o.Z], () => o.Z.getLastUnseenInvite()), m = (0, l.e7)([u.default], () => null != T ? u.default.getUser(T.inviter_id) : null);
  return (i.useEffect(() => {
    n && I(!1)
  }, [n]), i.useEffect(() => {
    if (null == T) {
      I(!1);
      return
    }(0, c.Br)(T), I(!0);
    let e = new a.V7;
    return e.start(5e3, () => {
      I(!1)
    }), () => {
      e.stop()
    }
  }, [T]), _ && null != T && null != m) ? (0, s.jsxs)(r.TooltipLayer, {
    tooltipClassName: E.tooltip,
    tooltipContentClassName: E.tooltipContent,
    targetElementRef: t,
    position: "bottom",
    color: r.TooltipColors.BLACK,
    children: [(0, s.jsxs)("div", {
      className: E.iconContainer,
      children: [(0, s.jsx)("img", {
        className: E.inviteImage,
        src: T.application_asset,
        alt: "Game Invite"
      }), (0, s.jsx)("div", {
        className: E.offsetAvatarContainer,
        children: (0, s.jsx)(r.Avatar, {
          "aria-label": "Inviter",
          className: E.inviterImage,
          src: m.getAvatarURL(null, 24),
          size: r.AvatarSizes.SIZE_24
        })
      })]
    }), (0, s.jsxs)("div", {
      className: E.titleContainer,
      children: [(0, s.jsx)(r.Text, {
        className: E.__invalid_title,
        variant: "text-xs/semibold",
        children: d.Z.Messages.GAME_INVITES_INVITE_FROM.format({
          username: m.username
        })
      }), (0, s.jsx)(r.Text, {
        className: E.__invalid_subtitle,
        variant: "text-xxs/medium",
        children: T.application_name
      })]
    })]
  }) : null
}