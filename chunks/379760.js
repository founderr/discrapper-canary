"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var r = n("481060"),
  a = n("985513"),
  o = n("285952"),
  i = n("819570"),
  l = n("689938"),
  u = n("233248"),
  c = n("611273");

function d(e) {
  let {
    title: t,
    subtitle: n,
    error: d,
    onSubmit: h,
    onCancel: f
  } = e;
  return (0, s.jsxs)(o.default, {
    direction: o.default.Direction.VERTICAL,
    children: [(0, s.jsx)(i.Title, {
      className: c.marginBottom8,
      children: t
    }), (0, s.jsx)(i.SubTitle, {
      className: u.subTitle,
      children: n
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(a.default, {
        inputClassName: u.codeInput,
        onSubmit: h
      }), null != d ? (0, s.jsx)(r.Text, {
        className: u.error,
        variant: "text-sm/normal",
        children: d
      }) : null]
    }), null != f && (0, s.jsx)(r.Button, {
      className: u.button,
      onClick: f,
      color: r.Button.Colors.PRIMARY,
      children: l.default.Messages.CANCEL
    })]
  })
}