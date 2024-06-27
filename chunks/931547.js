n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(481060),
  l = n(831489);

function o(e) {
  let {
    message: t,
    error: n,
    onClick: a,
    submitting: o,
    className: c,
    ctaMessage: d
  } = e;
  return (0, s.jsxs)("div", {
    className: i()(l.container, c),
    children: [(0, s.jsxs)("div", {
      className: l.textContainer,
      children: [(0, s.jsx)(r.CircleExclamationPointIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: l.warningIcon
      }), (0, s.jsx)(r.Spacer, {
        size: 10,
        horizontal: !0
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(r.Spacer, {
          size: 1
        }), (0, s.jsx)(r.Text, {
          className: l.info,
          variant: "text-sm/normal",
          children: t
        }), null != n && (0, s.jsx)(r.Text, {
          className: i()(l.info, l.error),
          variant: "text-sm/normal",
          children: n
        })]
      })]
    }), (0, s.jsx)(r.Spacer, {
      size: 16,
      horizontal: !0
    }), (0, s.jsx)(r.Button, {
      className: l.undoButton,
      color: r.Button.Colors.LINK,
      look: r.Button.Looks.LINK,
      size: r.Button.Sizes.ICON,
      onClick: a,
      submitting: o,
      children: d
    })]
  })
}