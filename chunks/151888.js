t(47120);
var l, n = t(735250),
  i = t(470079),
  a = t(120356),
  r = t.n(a),
  o = t(153066),
  d = t(805766);

function c(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let u = {
    XSMALL: d.xsmall,
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large
  },
  h = {
    DEFAULT: "default",
    STATIC: "static"
  };
class m extends(l = i.PureComponent) {
  render() {
    let {
      size: e,
      src: s,
      srcHover: t,
      className: l,
      ...i
    } = this.props, {
      hovered: a
    } = this.state, c = this.getMode();
    return (0, n.jsx)("button", {
      className: r()((0, o.l)(d, "iconButton", c), l, e),
      style: {
        backgroundImage: "url('".concat(a && null != t ? t : s, "')")
      },
      onMouseEnter: this.handleHover,
      onFocus: this.handleHover,
      onMouseLeave: this.handleBlur,
      onBlur: this.handleBlur,
      ...i
    })
  }
  constructor(...e) {
    super(...e), c(this, "state", {
      hovered: !1
    }), c(this, "getMode", () => null != this.props.srcHover ? h.STATIC : h.DEFAULT), c(this, "handleHover", e => {
      let {
        onMouseEnter: s
      } = this.props;
      null == s || s(e), !this.state.hovered && this.setState({
        hovered: !0
      })
    }), c(this, "handleBlur", e => {
      let {
        onMouseLeave: s
      } = this.props;
      null == s || s(e), this.state.hovered && this.setState({
        hovered: !1
      })
    })
  }
}
c(m, "Sizes", u), c(m, "defaultProps", {
  size: u.MEDIUM,
  disabled: !1
}), s.Z = m