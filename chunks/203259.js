"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("39604"),
  i = n("176127"),
  r = n("689938"),
  o = n("95806");

function u(e) {
  let {
    onOpenClipsGallery: t,
    clipIconRef: n,
    lastClipsSession: u
  } = e;
  return (0, a.jsxs)(l.TooltipLayer, {
    tooltipClassName: o.reminderTooltip,
    tooltipContentClassName: o.tooltipContent,
    targetElementRef: {
      current: n
    },
    position: "bottom",
    color: l.TooltipColors.PRIMARY,
    children: [(0, a.jsx)(i.default, {}), (0, a.jsx)(l.Heading, {
      variant: "heading-md/extrabold",
      children: r.default.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({
        count: u.newClipIds.length
      })
    }), (0, a.jsxs)("div", {
      className: o.buttonContainer,
      children: [(0, a.jsx)(l.Button, {
        color: l.Button.Colors.TRANSPARENT,
        onClick: s.clearClipsSession,
        children: r.default.Messages.DISMISS
      }), (0, a.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        onClick: t,
        children: r.default.Messages.CLIPS_REVIEW_NOW
      })]
    })]
  })
}