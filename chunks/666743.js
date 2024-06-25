n.d(t, {
  Z: function() {
    return r
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(314897);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function r(e) {
  return class extends i.Component {
    componentDidMount() {
      l.default.addChangeListener(this.onStoreChange)
    }
    componentWillUnmount() {
      l.default.removeChangeListener(this.onStoreChange)
    }
    render() {
      return (0, s.jsx)(e, {
        ...this.props,
        isAuthenticated: this.state.isAuthenticated
      })
    }
    constructor(...e) {
      super(...e), a(this, "state", {
        isAuthenticated: l.default.isAuthenticated()
      }), a(this, "onStoreChange", () => {
        this.setState({
          isAuthenticated: l.default.isAuthenticated()
        })
      })
    }
  }
}