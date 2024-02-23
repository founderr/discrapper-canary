"use strict";
n.r(t), n.d(t, {
  ShineSizes: function() {
    return l
  },
  Shine: function() {
    return C
  },
  default: function() {
    return p
  }
});
var i, l, r = n("37983"),
  s = n("884691"),
  a = n("414456"),
  u = n.n(a),
  o = n("458960"),
  d = n("77078"),
  c = n("252744"),
  f = n("145131"),
  h = n("61435");
(i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
let E = {
    default: h.shineDefault,
    small: h.shineSmall
  },
  v = {
    default: h.shineInnerDefault,
    small: h.shineInnerSmall
  };
class C extends s.PureComponent {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...i
    } = this.props;
    return (0, r.jsx)(o.default.div, {
      ...i,
      className: u(h.shineContainer, e, {
        [h.shinePaused]: n
      }),
      children: (0, r.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        className: E[t],
        children: (0, r.jsx)("div", {
          className: v[t]
        })
      })
    })
  }
}
C.defaultProps = {
  shineSize: "default"
};
let _ = e => {
  let {
    children: t,
    className: n,
    disabled: i,
    submitting: l,
    pauseAnimation: a,
    shineSize: o = "default",
    shinePaused: f,
    buttonShineClassName: E,
    onlyShineOnHover: v,
    ..._
  } = e, p = s.createRef(), S = (0, c.default)(p), m = !i && !l && !0 !== a && (!v || S);
  return (0, r.jsxs)(d.Button, {
    buttonRef: p,
    ..._,
    className: u(h.shinyButton, n),
    disabled: i,
    submitting: l,
    children: [t, m ? (0, r.jsx)(C, {
      shinePaused: f,
      className: u(h.buttonShine, v ? h.onlyShineOnHover : void 0, E),
      shineSize: o
    }) : null]
  })
};
_.ShineSizes = l;
var p = _