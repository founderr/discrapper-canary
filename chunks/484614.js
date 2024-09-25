var s,
    a = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    i = n(846519),
    d = n(481060),
    u = n(572004),
    c = n(689938),
    E = n(681130);
function C(e, t, n) {
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
class m extends (s = r.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { isVertical: e, value: t, text: n, className: s, inputClassName: r } = this.props,
            { mode: l } = this.state,
            i = l === d.CopyInput.Modes.SUCCESS ? c.Z.Messages.COPIED : n;
        return e
            ? (0, a.jsxs)('div', {
                  className: o()(s, l),
                  children: [
                      (0, a.jsx)(d.TextInput, {
                          value: t,
                          inputClassName: r
                      }),
                      (0, a.jsx)(d.Button, {
                          className: E.button,
                          onClick: this.handleCopy,
                          size: d.Button.Sizes.MIN,
                          color: this.getVerticalButtonColor(l),
                          look: d.Button.Looks.FILLED,
                          children: i
                      })
                  ]
              })
            : (0, a.jsx)(d.CopyInput, {
                  ...this.props,
                  onCopy: this.handleCopy,
                  mode: l,
                  text: i
              });
    }
    handleCopy() {
        let { onCopy: e, value: t, delay: n } = this.props,
            s = (0, u.JG)(t);
        this.setState({ mode: s ? d.CopyInput.Modes.SUCCESS : d.CopyInput.Modes.ERROR }), this._timeout.start(n, () => this.setState({ mode: d.CopyInput.Modes.DEFAULT })), null == e || e();
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case d.CopyInput.Modes.SUCCESS:
                return d.Button.Colors.GREEN;
            case d.CopyInput.Modes.ERROR:
                return d.Button.Colors.RED;
            default:
                return d.Button.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), C(this, '_timeout', void 0), (this.state = { mode: d.CopyInput.Modes.DEFAULT }), (this._timeout = new i.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
C(m, 'defaultProps', {
    isVertical: !1,
    delay: 300
}),
    (t.Z = m);
