n.d(s, {
  Z: function() {
    return r
  }
});
var t = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  o = n(481060),
  i = n(813197);

function r(e) {
  let {
    buttonCTA: s,
    onChange: n,
    "aria-label": a,
    multiple: r = !1,
    disabled: c = !1,
    submitting: u = !1,
    ...E
  } = e;
  return (0, t.jsx)(o.FocusRing, {
    within: !0,
    children: (0, t.jsxs)("div", {
      className: l()((0, o.getButtonStyle)({
        ...E,
        submitting: u,
        disabled: c
      })),
      style: {
        width: "max-content"
      },
      "aria-disabled": c,
      children: [(0, t.jsx)("span", {
        "aria-hidden": !0,
        children: s
      }), (0, t.jsx)(i.ZP, {
        tabIndex: 0,
        onChange: n,
        multiple: r,
        "aria-label": null != a ? a : s,
        disabled: c
      })]
    })
  })
}