var n,
    a = r(735250),
    o = r(470079),
    s = r(120356),
    i = r.n(s),
    d = r(846519),
    l = r(481060),
    c = r(572004),
    u = r(689938),
    p = r(681130);
function _(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
class C extends (n = o.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { isVertical: e, value: t, text: r, className: n, inputClassName: o } = this.props,
            { mode: s } = this.state,
            d = s === l.CopyInput.Modes.SUCCESS ? u.Z.Messages.COPIED : r;
        return e
            ? (0, a.jsxs)('div', {
                  className: i()(n, s),
                  children: [
                      (0, a.jsx)(l.TextInput, {
                          value: t,
                          inputClassName: o
                      }),
                      (0, a.jsx)(l.Button, {
                          className: p.button,
                          onClick: this.handleCopy,
                          size: l.Button.Sizes.MIN,
                          color: this.getVerticalButtonColor(s),
                          look: l.Button.Looks.FILLED,
                          children: d
                      })
                  ]
              })
            : (0, a.jsx)(l.CopyInput, {
                  ...this.props,
                  onCopy: this.handleCopy,
                  mode: s,
                  text: d
              });
    }
    handleCopy() {
        let { onCopy: e, value: t, delay: r } = this.props,
            n = (0, c.JG)(t);
        this.setState({ mode: n ? l.CopyInput.Modes.SUCCESS : l.CopyInput.Modes.ERROR }), this._timeout.start(r, () => this.setState({ mode: l.CopyInput.Modes.DEFAULT })), null == e || e();
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case l.CopyInput.Modes.SUCCESS:
                return l.Button.Colors.GREEN;
            case l.CopyInput.Modes.ERROR:
                return l.Button.Colors.RED;
            default:
                return l.Button.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), _(this, '_timeout', void 0), (this.state = { mode: l.CopyInput.Modes.DEFAULT }), (this._timeout = new d.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
_(C, 'defaultProps', {
    isVertical: !1,
    delay: 300
}),
    (t.Z = C);
