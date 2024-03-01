"use strict";
n.r(t), n.d(t, {
  ShineSizes: function() {
    return s
  },
  Shine: function() {
    return C
  },
  default: function() {
    return _
  }
});
var i, s, r = n("37983"),
  l = n("884691"),
  a = n("414456"),
  o = n.n(a),
  u = n("458960"),
  c = n("77078"),
  d = n("252744"),
  f = n("145131"),
  h = n("61435");
(i = s || (s = {})).DEFAULT = "default", i.SMALL = "small";
let E = {
    default: h.shineDefault,
    small: h.shineSmall
  },
  p = {
    default: h.shineInnerDefault,
    small: h.shineInnerSmall
  };
class C extends l.PureComponent {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...i
    } = this.props;
    return (0, r.jsx)(u.default.div, {
      ...i,
      className: o(h.shineContainer, e, {
        [h.shinePaused]: n
      }),
      children: (0, r.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        className: E[t],
        children: (0, r.jsx)("div", {
          className: p[t]
        })
      })
    })
  }
}
C.defaultProps = {
  shineSize: "default"
};
let v = e => {
  let {
    children: t,
    className: n,
    disabled: i,
    submitting: s,
    pauseAnimation: a,
    shineSize: u = "default",
    shinePaused: f,
    buttonShineClassName: E,
    onlyShineOnHover: p,
    ...v
  } = e, _ = l.createRef(), S = (0, d.default)(_), I = !i && !s && !0 !== a && (!p || S);
  return (0, r.jsxs)(c.Button, {
    buttonRef: _,
    ...v,
    className: o(h.shinyButton, n),
    disabled: i,
    submitting: s,
    children: [t, I ? (0, r.jsx)(C, {
      shinePaused: f,
      className: o(h.buttonShine, p ? h.onlyShineOnHover : void 0, E),
      shineSize: u
    }) : null]
  })
};
v.ShineSizes = s;
var _ = v