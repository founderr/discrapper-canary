n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(314897);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    return class extends r.Component {
        componentDidMount() {
            a.default.addChangeListener(this.onStoreChange);
        }
        componentWillUnmount() {
            a.default.removeChangeListener(this.onStoreChange);
        }
        render() {
            return (0, i.jsx)(e, {
                ...this.props,
                isAuthenticated: this.state.isAuthenticated
            });
        }
        constructor(...e) {
            super(...e),
                l(this, 'state', { isAuthenticated: a.default.isAuthenticated() }),
                l(this, 'onStoreChange', () => {
                    this.setState({ isAuthenticated: a.default.isAuthenticated() });
                });
        }
    };
}
