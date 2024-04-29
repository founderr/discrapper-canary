"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("946314"),
  r = a("921944"),
  o = a("689938"),
  u = a("100982");

function d(e) {
  let {
    onClick: t,
    onSecondaryClick: a,
    onComponentMount: d,
    markAsDismissed: c
  } = e;
  s.useEffect(() => {
    null == d || d()
  }, [d]);
  let f = s.useCallback(e => {
      t(e), null == c || c(r.ContentDismissActionType.PRIMARY)
    }, [t, c]),
    E = s.useCallback(() => {
      null == a || a(), null == c || c(r.ContentDismissActionType.SECONDARY)
    }, [a, c]);
  return (0, n.jsxs)("div", {
    className: u.tooltipWrapper,
    children: [(0, n.jsx)(l.Heading, {
      className: u.tooltipHeader,
      variant: "heading-md/semibold",
      children: o.default.Messages.SERVER_DISCOVERY_TOOLTIP_TITLE
    }), (0, n.jsx)(l.Text, {
      className: u.tooltipText,
      variant: "text-sm/normal",
      children: o.default.Messages.SERVER_DISCOVERY_TOOLTIP_DESCRIPTION.format({
        count: i.LOWERED_MINIMUM_SIZE
      })
    }), (0, n.jsxs)("div", {
      className: u.buttonsContainer,
      children: [(0, n.jsx)(l.Button, {
        fullWidth: !0,
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.BRAND,
        onClick: f,
        children: o.default.Messages.LEARN_MORE
      }), (0, n.jsx)(l.Button, {
        fullWidth: !0,
        size: l.Button.Sizes.SMALL,
        look: l.Button.Looks.BLANK,
        onClick: E,
        children: o.default.Messages.NO_THANKS
      })]
    })]
  })
}