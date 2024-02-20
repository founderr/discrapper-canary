"use strict";
n.r(t), n.d(t, {
  getSizeForWidth: function() {
    return u
  },
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  i = n("77078"),
  l = n("145131"),
  o = n("668458");

function u(e) {
  return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
}

function d(e) {
  let {
    onCTAClick: t,
    callToAction: n,
    header: r,
    description: u,
    size: d,
    className: c,
    artURL: f,
    noArt: h = !1,
    selected: p = !1
  } = e;
  return (0, a.jsxs)(l.default, {
    className: c,
    justify: l.default.Justify.CENTER,
    align: l.default.Align.CENTER,
    direction: l.default.Direction.VERTICAL,
    style: {
      padding: 4
    },
    children: [!h && null != f && (0, a.jsx)("div", {
      className: s(o.art, o[d]),
      style: {
        backgroundImage: "url(".concat(f, ")")
      }
    }), null != r ? (0, a.jsx)(i.Text, {
      color: "none",
      variant: "text-md/semibold",
      className: o.header,
      children: r
    }) : null, null != u ? (0, a.jsx)(i.Text, {
      color: "none",
      className: o.description,
      variant: "text-sm/medium",
      children: u
    }) : null, p || null == n ? null : (0, a.jsx)(i.Button, {
      className: o.outerButton,
      size: i.Button.Sizes.NONE,
      color: i.Button.Colors.WHITE,
      look: i.Button.Looks.BLANK,
      innerClassName: o.button,
      onClick: e => {
        e.stopPropagation(), null == t || t(e)
      },
      children: n
    })]
  })
}