"use strict";
s.r(t), s.d(t, {
  QRCodeOverlaySizes: function() {
    return n
  },
  QRCodeWithOverlay: function() {
    return h
  },
  default: function() {
    return f
  }
});
var r, n, a = s("37983"),
  i = s("884691"),
  l = s("82697"),
  o = s("679001");
(r = n || (n = {})).SIZE_40 = "SIZE_40", r.SIZE_60 = "SIZE_60";
let d = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  c = s("527826");
class u extends i.PureComponent {
  render() {
    let {
      className: e,
      text: t,
      ...s
    } = this.props;
    return (0, a.jsx)("div", {
      style: {
        padding: 8,
        borderRadius: 4,
        width: s.size,
        height: s.size,
        backgroundColor: s.bgColor
      },
      className: e,
      children: (0, a.jsx)(l.default, {
        value: t,
        level: "M",
        ...s
      })
    })
  }
}
u.defaultProps = {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
};
class h extends i.PureComponent {
  render() {
    let {
      overlaySize: e
    } = this.props, t = d[null != e ? e : "SIZE_40"];
    return (0, a.jsxs)("div", {
      className: o.qrCodeContainer,
      children: [(0, a.jsx)(u, {
        ...this.props
      }), (0, a.jsx)("div", {
        className: o.qrCodeOverlay,
        children: (0, a.jsx)("img", {
          className: o[t],
          src: c,
          alt: ""
        })
      })]
    })
  }
}
h.defaultProps = {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
};
var f = u