"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("399606"),
  i = n("846519"),
  r = n("481060"),
  o = n("317632"),
  u = n("174767"),
  d = n("594174"),
  c = n("689938"),
  f = n("860789");

function h(e) {
  let {
    inboxIconRef: t,
    recentsPopoutShown: n
  } = e, [h, E] = l.useState(!1), m = (0, s.useStateFromStores)([o.default], () => o.default.getLastUnseenInvite()), p = (0, s.useStateFromStores)([d.default], () => null != m ? d.default.getUser(m.inviter_id) : null);
  return (l.useEffect(() => {
    n && E(!1)
  }, [n]), l.useEffect(() => {
    if (null == m) {
      E(!1);
      return
    }(0, u.updateInviteStatus)(m), E(!0);
    let e = new i.Timeout;
    return e.start(5e3, () => {
      E(!1)
    }), () => {
      e.stop()
    }
  }, [m]), h && null != m && null != p) ? (0, a.jsxs)(r.TooltipLayer, {
    tooltipClassName: f.tooltip,
    tooltipContentClassName: f.tooltipContent,
    targetElementRef: t,
    position: "bottom",
    color: r.TooltipColors.BLACK,
    children: [(0, a.jsxs)("div", {
      className: f.iconContainer,
      children: [(0, a.jsx)("img", {
        className: f.inviteImage,
        src: m.application_asset,
        alt: "Game Invite"
      }), (0, a.jsx)("div", {
        className: f.offsetAvatarContainer,
        children: (0, a.jsx)(r.Avatar, {
          "aria-label": "Inviter",
          className: f.inviterImage,
          src: p.getAvatarURL(null, 24),
          size: r.AvatarSizes.SIZE_24
        })
      })]
    }), (0, a.jsxs)("div", {
      className: f.titleContainer,
      children: [(0, a.jsx)(r.Text, {
        className: f.__invalid_title,
        variant: "text-xs/semibold",
        children: c.default.Messages.GAME_INVITES_INVITE_FROM.format({
          username: p.username
        })
      }), (0, a.jsx)(r.Text, {
        className: f.__invalid_subtitle,
        variant: "text-xxs/medium",
        children: m.application_name
      })]
    })]
  }) : null
}