"use strict";
l.r(t), l("47120");
var s, a = l("735250"),
  n = l("470079"),
  i = l("120356"),
  r = l.n(i),
  o = l("153066"),
  d = l("190929");

function u(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let c = {
    XSMALL: d.xsmall,
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large
  },
  h = {
    DEFAULT: "default",
    STATIC: "static"
  };
class m extends(s = n.PureComponent) {
  render() {
    let {
      size: e,
      src: t,
      srcHover: l,
      className: s,
      ...n
    } = this.props, {
      hovered: i
    } = this.state, u = this.getMode();
    return (0, a.jsx)("button", {
      className: r()((0, o.getClass)(d, "iconButton", u), s, e),
      style: {
        backgroundImage: "url('".concat(i && null != l ? l : t, "')")
      },
      onMouseEnter: this.handleHover,
      onFocus: this.handleHover,
      onMouseLeave: this.handleBlur,
      onBlur: this.handleBlur,
      ...n
    })
  }
  constructor(...e) {
    super(...e), u(this, "state", {
      hovered: !1
    }), u(this, "getMode", () => null != this.props.srcHover ? h.STATIC : h.DEFAULT), u(this, "handleHover", e => {
      let {
        onMouseEnter: t
      } = this.props;
      null == t || t(e), !this.state.hovered && this.setState({
        hovered: !0
      })
    }), u(this, "handleBlur", e => {
      let {
        onMouseLeave: t
      } = this.props;
      null == t || t(e), this.state.hovered && this.setState({
        hovered: !1
      })
    })
  }
}
u(m, "Sizes", c), u(m, "defaultProps", {
  size: c.MEDIUM,
  disabled: !1
}), t.default = m