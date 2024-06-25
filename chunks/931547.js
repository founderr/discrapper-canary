s.d(t, {
  Z: function() {
    return o
  }
});
var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(831489);

function o(e) {
  let {
    message: t,
    error: s,
    onClick: a,
    submitting: o,
    className: c,
    ctaMessage: E
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(l.container, c),
    children: [(0, n.jsxs)("div", {
      className: l.textContainer,
      children: [(0, n.jsx)(r.CircleExclamationPointIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: l.warningIcon
      }), (0, n.jsx)(r.Spacer, {
        size: 10,
        horizontal: !0
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(r.Spacer, {
          size: 1
        }), (0, n.jsx)(r.Text, {
          className: l.info,
          variant: "text-sm/normal",
          children: t
        }), null != s && (0, n.jsx)(r.Text, {
          className: i()(l.info, l.error),
          variant: "text-sm/normal",
          children: s
        })]
      })]
    }), (0, n.jsx)(r.Spacer, {
      size: 16,
      horizontal: !0
    }), (0, n.jsx)(r.Button, {
      className: l.undoButton,
      color: r.Button.Colors.LINK,
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.ICON,
      onClick: a,
      submitting: o,
      children: E
    })]
  })
}