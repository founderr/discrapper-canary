n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  l = n(481060),
  r = n(831489);

function c(e) {
  let {
    message: t,
    error: n,
    onClick: i,
    submitting: c,
    className: o,
    ctaMessage: d
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(r.container, o),
    children: [(0, s.jsxs)("div", {
      className: r.textContainer,
      children: [(0, s.jsx)(l.CircleExclamationPointIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: r.warningIcon
      }), (0, s.jsx)(l.Spacer, {
        size: 10,
        horizontal: !0
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(l.Spacer, {
          size: 1
        }), (0, s.jsx)(l.Text, {
          className: r.info,
          variant: "text-sm/normal",
          children: t
        }), null != n && (0, s.jsx)(l.Text, {
          className: a()(r.info, r.error),
          variant: "text-sm/normal",
          children: n
        })]
      })]
    }), (0, s.jsx)(l.Spacer, {
      size: 16,
      horizontal: !0
    }), (0, s.jsx)(l.Button, {
      className: r.undoButton,
      color: l.Button.Colors.LINK,
      look: l.Button.Looks.LINK,
      size: l.Button.Sizes.ICON,
      onClick: i,
      submitting: c,
      children: d
    })]
  })
}