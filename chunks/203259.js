n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(39604),
  a = n(176127),
  r = n(689938),
  o = n(907339);

function c(e) {
  let {
    onOpenClipsGallery: t,
    clipIconRef: n,
    lastClipsSession: c
  } = e;
  return (0, s.jsxs)(i.TooltipLayer, {
    tooltipClassName: o.reminderTooltip,
    tooltipContentClassName: o.tooltipContent,
    targetElementRef: {
      current: n
    },
    position: "bottom",
    color: i.TooltipColors.PRIMARY,
    children: [(0, s.jsx)(a.Z, {}), (0, s.jsx)(i.Heading, {
      variant: "heading-md/extrabold",
      children: r.Z.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({
        count: c.newClipIds.length
      })
    }), (0, s.jsxs)("div", {
      className: o.buttonContainer,
      children: [(0, s.jsx)(i.Button, {
        color: i.Button.Colors.TRANSPARENT,
        onClick: l.eL,
        children: r.Z.Messages.DISMISS
      }), (0, s.jsx)(i.Button, {
        color: i.Button.Colors.BRAND,
        onClick: t,
        children: r.Z.Messages.CLIPS_REVIEW_NOW
      })]
    })]
  })
}