"use strict";
n.r(t), n.d(t, {
  ShineSizes: function() {
    return r
  },
  Shine: function() {
    return S
  },
  default: function() {
    return h
  }
});
var i, r, u = n("37983"),
  a = n("884691"),
  s = n("414456"),
  l = n.n(s),
  o = n("458960"),
  c = n("77078"),
  d = n("252744"),
  f = n("145131"),
  E = n("61435");
(i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
let _ = {
    default: E.shineDefault,
    small: E.shineSmall
  },
  T = {
    default: E.shineInnerDefault,
    small: E.shineInnerSmall
  };
class S extends a.PureComponent {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...i
    } = this.props;
    return (0, u.jsx)(o.default.div, {
      ...i,
      className: l(E.shineContainer, e, {
        [E.shinePaused]: n
      }),
      children: (0, u.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        className: _[t],
        children: (0, u.jsx)("div", {
          className: T[t]
        })
      })
    })
  }
}
S.defaultProps = {
  shineSize: "default"
};
let I = e => {
  let {
    children: t,
    className: n,
    disabled: i,
    submitting: r,
    pauseAnimation: s,
    shineSize: o = "default",
    shinePaused: f,
    buttonShineClassName: _,
    onlyShineOnHover: T,
    ...I
  } = e, h = a.createRef(), N = (0, d.default)(h), p = !i && !r && !0 !== s && (!T || N);
  return (0, u.jsxs)(c.Button, {
    buttonRef: h,
    ...I,
    className: l(E.shinyButton, n),
    disabled: i,
    submitting: r,
    children: [t, p ? (0, u.jsx)(S, {
      shinePaused: f,
      className: l(E.buttonShine, T ? E.onlyShineOnHover : void 0, _),
      shineSize: o
    }) : null]
  })
};
I.ShineSizes = r;
var h = I