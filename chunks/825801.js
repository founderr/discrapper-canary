"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(404975),
  l = n(317179),
  u = n(785717),
  _ = n(689938),
  c = n(517117);

function d(e) {
  let {
    isHovering: t,
    location: n,
    className: r
  } = e, {
    trackUserProfileAction: d
  } = (0, u.KZ)(), {
    statusReactReplyEnabled: E
  } = (0, l.t)({
    location: n
  });
  return E ? (0, i.jsxs)(a.ZP, {
    className: s()(r, c.popover, {
      [c.visible]: t
    }),
    children: [(0, i.jsx)(o.TooltipContainer, {
      text: _.Z.Messages.USER_PROFILE_SEND_REACTION,
      children: (0, i.jsx)(a.zx, {
        className: c.button,
        "aria-label": _.Z.Messages.USER_PROFILE_SEND_REACTION,
        onClick: () => {
          d({
            action: "PRESS_REACT"
          })
        },
        children: (0, i.jsx)(o.ReactionIcon, {
          className: c.icon
        })
      })
    }), (0, i.jsx)(o.TooltipContainer, {
      text: _.Z.Messages.USER_PROFILE_REPLY,
      children: (0, i.jsx)(a.zx, {
        className: c.button,
        "aria-label": _.Z.Messages.USER_PROFILE_REPLY,
        onClick: () => {
          d({
            action: "PRESS_REPLY"
          })
        },
        children: (0, i.jsx)(o.ArrowAngleLeftUpIcon, {
          className: c.icon
        })
      })
    })]
  }) : null
}