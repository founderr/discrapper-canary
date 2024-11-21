var n,
    o = r(200651),
    a = r(192379),
    s = r(120356),
    i = r.n(s),
    l = r(846519),
    d = r(481060),
    c = r(572004),
    u = r(388032),
    p = r(681130);
function m(e, t, r) {
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
class f extends (n = a.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { isVertical: e, value: t, text: r, className: n, inputClassName: a } = this.props,
            { mode: s } = this.state,
            l = s === d.CopyInput.Modes.SUCCESS ? u.intl.string(u.t['t5VZ8/']) : r;
        return e
            ? (0, o.jsxs)('div', {
                  className: i()(n, s),
                  children: [
                      (0, o.jsx)(d.TextInput, {
                          value: t,
                          inputClassName: a
                      }),
                      (0, o.jsx)(d.Button, {
                          className: p.button,
                          onClick: this.handleCopy,
                          size: d.Button.Sizes.MIN,
                          color: this.getVerticalButtonColor(s),
                          look: d.Button.Looks.FILLED,
                          children: l
                      })
                  ]
              })
            : (0, o.jsx)(d.CopyInput, {
                  ...this.props,
                  onCopy: this.handleCopy,
                  mode: s,
                  text: l
              });
    }
    handleCopy() {
        let { onCopy: e, value: t, delay: r } = this.props,
            n = (0, c.JG)(t);
        this.setState({ mode: n ? d.CopyInput.Modes.SUCCESS : d.CopyInput.Modes.ERROR }), this._timeout.start(r, () => this.setState({ mode: d.CopyInput.Modes.DEFAULT })), null == e || e();
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
        super(e), m(this, '_timeout', void 0), (this.state = { mode: d.CopyInput.Modes.DEFAULT }), (this._timeout = new l.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
m(f, 'defaultProps', {
    isVertical: !1,
    delay: 300
}),
    (t.Z = f);
