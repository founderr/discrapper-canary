n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  l = n(481060),
  r = n(831489);

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
    className: i()(r.container, c),
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
          className: i()(r.info, r.error),
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
      onClick: a,
      submitting: o,
      children: d
    })]
  })
}