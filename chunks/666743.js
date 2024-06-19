t.d(s, {
  Z: function() {
    return l
  }
}), t(47120);
var n = t(735250),
  r = t(470079),
  i = t(314897);

function a(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
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
      return (0, n.jsx)(e, {
        ...this.props,
        isAuthenticated: this.state.isAuthenticated
      })
    }
    constructor(...e) {
      super(...e), a(this, "state", {
        isAuthenticated: i.default.isAuthenticated()
      }), a(this, "onStoreChange", () => {
        this.setState({
          isAuthenticated: i.default.isAuthenticated()
        })
      })
    }
  }
}