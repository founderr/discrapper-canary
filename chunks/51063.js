"use strict";
n.d(t, {
  Z: function() {
    return I
  }
}), n(789020);
var i = n(735250);
n(470079);
var r = n(913527),
  s = n.n(r),
  o = n(481060),
  a = n(835473),
  l = n(366695),
  u = n(630388),
  _ = n(981631),
  c = n(689938),
  d = n(966833);

function E(e) {
  let {
    application: t,
    messageTimestamp: n
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      size: l.Z.Sizes.LARGE,
      game: t
    }), (0, i.jsxs)("div", {
      className: d.textContainer,
      children: [(0, i.jsx)(o.Text, {
        className: d.timestamp,
        variant: "text-xs/medium",
        color: "text-muted",
        children: s()(n).format("LLLL")
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "interactive-active",
        children: c.Z.Messages.MESSAGE_GAME_ICON_TOOLTIP_CONTENT.format({
          applicationName: t.name
        })
      })]
    })]
  })
}

function I(e) {
  let {
    message: t
  } = e, n = (0, a.q)(t.applicationId);
  return null != n && (0, u.yE)(n.flags, _.udG.SOCIAL_LAYER_INTEGRATION) ? (0, i.jsx)(o.Tooltip, {
    hideOnClick: !0,
    position: "top",
    "aria-label": c.Z.Messages.MESSAGE_GAME_ICON_TOOLTIP,
    tooltipClassName: d.gameMessageTooltip,
    tooltipContentClassName: d.gameMessageTooltipContent,
    text: (0, i.jsx)(E, {
      application: n,
      messageTimestamp: t.timestamp
    }),
    children: e => (0, i.jsx)(o.Clickable, {
      tag: "span",
      ...e,
      children: (0, i.jsx)(l.Z, {
        className: d.gameIcon,
        size: l.Z.Sizes.XXSMALL,
        game: n
      })
    })
  }) : null
}