"use strict";
n.d(t, {
  ZX: function() {
    return A
  },
  gt: function() {
    return m
  },
  rH: function() {
    return a
  }
});
var i, r, s, o, a, l, u = n(735250),
  _ = n(470079),
  c = n(120356),
  d = n.n(c),
  E = n(748780),
  I = n(481060),
  T = n(727637),
  h = n(285952),
  f = n(650234);
(i = a || (a = {})).DEFAULT = "default", i.SMALL = "small";
let S = {
    default: f.shineDefault,
    small: f.shineSmall
  },
  N = {
    default: f.shineInnerDefault,
    small: f.shineInnerSmall
  };
class A extends(l = _.PureComponent) {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...i
    } = this.props;
    return (0, u.jsx)(E.Z.div, {
      ...i,
      className: d()(f.shineContainer, e, {
        [f.shinePaused]: n
      }),
      children: (0, u.jsx)(h.Z, {
        align: h.Z.Align.CENTER,
        justify: h.Z.Justify.CENTER,
        className: S[t],
        children: (0, u.jsx)("div", {
          className: N[t]
        })
      })
    })
  }
}
o = {
  shineSize: "default"
}, (s = "defaultProps") in(r = A) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o;
let m = e => {
  let {
    children: t,
    className: n,
    disabled: i,
    submitting: r,
    pauseAnimation: s,
    shineSize: o = "default",
    shinePaused: a,
    buttonShineClassName: l,
    onlyShineOnHover: c,
    ...E
  } = e, h = _.createRef(), S = (0, T.Z)(h), N = !i && !r && !0 !== s && (!c || S);
  return (0, u.jsxs)(I.Button, {
    buttonRef: h,
    ...E,
    className: d()(f.shinyButton, n),
    disabled: i,
    submitting: r,
    children: [t, N ? (0, u.jsx)(A, {
      shinePaused: a,
      className: d()(f.buttonShine, c ? f.onlyShineOnHover : void 0, l),
      shineSize: o
    }) : null]
  })
};
m.ShineSizes = a