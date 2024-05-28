"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("314897");

function l(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function i(e) {
  return class extends a.Component {
    componentDidMount() {
      r.default.addChangeListener(this.onStoreChange)
    }
    componentWillUnmount() {
      r.default.removeChangeListener(this.onStoreChange)
    }
    render() {
      return (0, n.jsx)(e, {
        ...this.props,
        isAuthenticated: this.state.isAuthenticated
      })
    }
    constructor(...e) {
      super(...e), l(this, "state", {
        isAuthenticated: r.default.isAuthenticated()
      }), l(this, "onStoreChange", () => {
        this.setState({
          isAuthenticated: r.default.isAuthenticated()
        })
      })
    }
  }
}