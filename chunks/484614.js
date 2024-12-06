var i,
    l = n(200651),
    s = n(192379),
    r = n(846519),
    a = n(481060),
    o = n(572004),
    c = n(388032);
function d(e, t, n) {
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
class u extends (i = s.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === a.CopyInput.Modes.SUCCESS ? c.intl.string(c.t['t5VZ8/']) : e;
        return (0, l.jsx)(a.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: n,
            supportsCopy: o.wS
        });
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1000 } = this.props,
            i = (0, o.JG)(e);
        this.setState({ mode: i ? a.CopyInput.Modes.SUCCESS : a.CopyInput.Modes.ERROR }), this._timeout.start(n, () => this.setState({ mode: a.CopyInput.Modes.DEFAULT })), null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case a.CopyInput.Modes.SUCCESS:
                return a.Button.Colors.GREEN;
            case a.CopyInput.Modes.ERROR:
                return a.Button.Colors.RED;
            default:
                return a.Button.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), d(this, '_timeout', void 0), (this.state = { mode: a.CopyInput.Modes.DEFAULT }), (this._timeout = new r.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
d(u, 'defaultProps', { delay: 1000 }), (t.Z = u);
