n.d(t, {
    S: function () {
        return o;
    }
});
var r = n(47120);
var i = n(470079);
function a(e, t, n) {
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
class o extends i.PureComponent {
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    componentDidCatch(e, t) {
        console.error('ErrorBoundary caught an error', e, t);
    }
    render() {
        return null != this.state.error ? this.props.fallback : this.props.children;
    }
    constructor(...e) {
        super(...e), a(this, 'state', { error: null });
    }
}
