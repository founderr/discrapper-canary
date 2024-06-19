r.d(s, {
  c2: function() {
    return m
  },
  cK: function() {
    return t
  }
});
var o, t, a, n, l = r(735250),
  i = r(470079),
  c = r(253483),
  d = r(655481);

function C(e, s, r) {
  return s in e ? Object.defineProperty(e, s, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = r, e
}(o = t || (t = {})).SIZE_40 = "SIZE_40", o.SIZE_60 = "SIZE_60";
let u = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  _ = r(515695);
class f extends(a = i.PureComponent) {
  render() {
    let {
      className: e,
      text: s,
      ...r
    } = this.props;
    return (0, l.jsx)("div", {
      style: {
        padding: 8,
        borderRadius: 4,
        width: r.size,
        height: r.size,
        backgroundColor: r.bgColor
      },
      className: e,
      children: (0, l.jsx)(c.default, {
        value: s,
        level: "M",
        ...r
      })
    })
  }
}
C(f, "defaultProps", {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
class m extends(n = i.PureComponent) {
  render() {
    let {
      overlaySize: e
    } = this.props, s = u[null != e ? e : "SIZE_40"];
    return (0, l.jsxs)("div", {
      className: d.qrCodeContainer,
      children: [(0, l.jsx)(f, {
        ...this.props
      }), (0, l.jsx)("div", {
        className: d.qrCodeOverlay,
        children: (0, l.jsx)("img", {
          className: d[s],
          src: _,
          alt: ""
        })
      })]
    })
  }
}
C(m, "defaultProps", {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
}), s.ZP = f