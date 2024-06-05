"use strict";
s.r(t), s.d(t, {
  QRCodeOverlaySizes: function() {
    return n
  },
  QRCodeWithOverlay: function() {
    return E
  }
});
var a, n, i, l, r = s("735250"),
  o = s("470079"),
  u = s("253483"),
  d = s("81834");

function c(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(a = n || (n = {})).SIZE_40 = "SIZE_40", a.SIZE_60 = "SIZE_60";
let p = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  f = s("515695");
class m extends(i = o.PureComponent) {
  render() {
    let {
      className: e,
      text: t,
      ...s
    } = this.props;
    return (0, r.jsx)("div", {
      style: {
        padding: 8,
        borderRadius: 4,
        width: s.size,
        height: s.size,
        backgroundColor: s.bgColor
      },
      className: e,
      children: (0, r.jsx)(u.default, {
        value: t,
        level: "M",
        ...s
      })
    })
  }
}
c(m, "defaultProps", {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
class E extends(l = o.PureComponent) {
  render() {
    let {
      overlaySize: e
    } = this.props, t = p[null != e ? e : "SIZE_40"];
    return (0, r.jsxs)("div", {
      className: d.qrCodeContainer,
      children: [(0, r.jsx)(m, {
        ...this.props
      }), (0, r.jsx)("div", {
        className: d.qrCodeOverlay,
        children: (0, r.jsx)("img", {
          className: d[t],
          src: f,
          alt: ""
        })
      })]
    })
  }
}
c(E, "defaultProps", {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
}), t.default = m