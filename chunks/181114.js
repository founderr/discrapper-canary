"use strict";
n.r(t), n.d(t, {
  ShineSizes: function() {
    return r
  },
  Shine: function() {
    return v
  },
  default: function() {
    return S
  }
});
var i, r, s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  u = n.n(a),
  o = n("458960"),
  c = n("77078"),
  d = n("252744"),
  f = n("145131"),
  h = n("61435");
(i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
let E = {
    default: h.shineDefault,
    small: h.shineSmall
  },
  p = {
    default: h.shineInnerDefault,
    small: h.shineInnerSmall
  };
class v extends l.PureComponent {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...i
    } = this.props;
    return (0, s.jsx)(o.default.div, {
      ...i,
      className: u(h.shineContainer, e, {
        [h.shinePaused]: n
      }),
      children: (0, s.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        className: E[t],
        children: (0, s.jsx)("div", {
          className: p[t]
        })
      })
    })
  }
}
v.defaultProps = {
  shineSize: "default"
};
let C = e => {
  let {
    children: t,
    className: n,
    disabled: i,
    submitting: r,
    pauseAnimation: a,
    shineSize: o = "default",
    shinePaused: f,
    buttonShineClassName: E,
    onlyShineOnHover: p,
    ...C
  } = e, S = l.createRef(), _ = (0, d.default)(S), m = !i && !r && !0 !== a && (!p || _);
  return (0, s.jsxs)(c.Button, {
    buttonRef: S,
    ...C,
    className: u(h.shinyButton, n),
    disabled: i,
    submitting: r,
    children: [t, m ? (0, s.jsx)(v, {
      shinePaused: f,
      className: u(h.buttonShine, p ? h.onlyShineOnHover : void 0, E),
      shineSize: o
    }) : null]
  })
};
C.ShineSizes = r;
var S = C