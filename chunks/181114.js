"use strict";
n.r(t), n.d(t, {
  ShineSizes: function() {
    return r
  },
  Shine: function() {
    return T
  },
  default: function() {
    return h
  }
});
var i, r, l = n("37983"),
  u = n("884691"),
  a = n("414456"),
  s = n.n(a),
  o = n("458960"),
  d = n("77078"),
  c = n("252744"),
  f = n("145131"),
  E = n("61435");
(i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
let _ = {
    default: E.shineDefault,
    small: E.shineSmall
  },
  S = {
    default: E.shineInnerDefault,
    small: E.shineInnerSmall
  };
class T extends u.PureComponent {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...i
    } = this.props;
    return (0, l.jsx)(o.default.div, {
      ...i,
      className: s(E.shineContainer, e, {
        [E.shinePaused]: n
      }),
      children: (0, l.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        className: _[t],
        children: (0, l.jsx)("div", {
          className: S[t]
        })
      })
    })
  }
}
T.defaultProps = {
  shineSize: "default"
};
let I = e => {
  let {
    children: t,
    className: n,
    disabled: i,
    submitting: r,
    pauseAnimation: a,
    shineSize: o = "default",
    shinePaused: f,
    buttonShineClassName: _,
    onlyShineOnHover: S,
    ...I
  } = e, h = u.createRef(), v = (0, c.default)(h), N = !i && !r && !0 !== a && (!S || v);
  return (0, l.jsxs)(d.Button, {
    buttonRef: h,
    ...I,
    className: s(E.shinyButton, n),
    disabled: i,
    submitting: r,
    children: [t, N ? (0, l.jsx)(T, {
      shinePaused: f,
      className: s(E.buttonShine, S ? E.onlyShineOnHover : void 0, _),
      shineSize: o
    }) : null]
  })
};
I.ShineSizes = r;
var h = I