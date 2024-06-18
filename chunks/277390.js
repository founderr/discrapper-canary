"use strict";
s.d(t, {
  c2: function() {
    return p
  },
  cK: function() {
    return r
  }
});
var n, r, i, a, o = s(735250),
  l = s(470079),
  c = s(253483),
  d = s(81834);

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(n = r || (r = {})).SIZE_40 = "SIZE_40", n.SIZE_60 = "SIZE_60";
let h = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  g = s(515695);
class f extends(i = l.PureComponent) {
  render() {
    let {
      className: e,
      text: t,
      ...s
    } = this.props;
    return (0, o.jsx)("div", {
      style: {
        padding: 8,
        borderRadius: 4,
        width: s.size,
        height: s.size,
        backgroundColor: s.bgColor
      },
      className: e,
      children: (0, o.jsx)(c.default, {
        value: t,
        level: "M",
        ...s
      })
    })
  }
}
u(f, "defaultProps", {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
class p extends(a = l.PureComponent) {
  render() {
    let {
      overlaySize: e
    } = this.props, t = h[null != e ? e : "SIZE_40"];
    return (0, o.jsxs)("div", {
      className: d.qrCodeContainer,
      children: [(0, o.jsx)(f, {
        ...this.props
      }), (0, o.jsx)("div", {
        className: d.qrCodeOverlay,
        children: (0, o.jsx)("img", {
          className: d[t],
          src: g,
          alt: ""
        })
      })]
    })
  }
}
u(p, "defaultProps", {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
}), t.ZP = f