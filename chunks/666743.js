"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("314897");

function n(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function l(e) {
  return class extends r.Component {
    componentDidMount() {
      i.default.addChangeListener(this.onStoreChange)
    }
    componentWillUnmount() {
      i.default.removeChangeListener(this.onStoreChange)
    }
    render() {
      return (0, a.jsx)(e, {
        ...this.props,
        isAuthenticated: this.state.isAuthenticated
      })
    }
    constructor(...e) {
      super(...e), n(this, "state", {
        isAuthenticated: i.default.isAuthenticated()
      }), n(this, "onStoreChange", () => {
        this.setState({
          isAuthenticated: i.default.isAuthenticated()
        })
      })
    }
  }
}