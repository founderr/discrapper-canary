n(47120);
var s = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(217986),
    r = n(481060),
    h = n(600164),
    u = n(259580),
    d = n(317175),
    c = n(388032),
    p = n(25001),
    m = n(616926),
    f = n(232186);
function g(e, t, n) {
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
class C extends i.PureComponent {
    render() {
        let { countryCode: e, phone: t, open: n } = this.state,
            { className: i, submitting: o } = this.props,
            [, a] = e.split('+');
        return (0, s.jsxs)(h.Z, {
            className: l()(p.phoneField, m.elevationLow, i),
            align: h.Z.Align.CENTER,
            grow: 0,
            children: [
                (0, s.jsxs)(r.Button, {
                    size: r.ButtonSizes.SMALL,
                    className: p.countryButton,
                    color: r.ButtonColors.PRIMARY,
                    innerClassName: p.countryButtonInner,
                    onClick: this.handleTogglePopout,
                    children: [
                        (0, s.jsxs)(h.Z, {
                            className: l()(p.countryCodeContainer, f.marginReset),
                            justify: h.Z.Justify.CENTER,
                            children: [
                                (0, s.jsx)('div', {
                                    className: p.plusSign,
                                    children: '+'
                                }),
                                (0, s.jsx)('div', {
                                    className: p.countryCode,
                                    children: a
                                })
                            ]
                        }),
                        (0, s.jsx)(u.Z, {
                            foreground: p.phoneFieldExpand,
                            expanded: n,
                            width: 16,
                            height: 16
                        })
                    ]
                }),
                (0, s.jsx)('input', {
                    'aria-label': c.intl.string(c.t['64bX0N']),
                    className: p.inputField,
                    value: t,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    autoFocus: !0
                }),
                (0, s.jsx)(r.Button, {
                    className: p.sendButton,
                    size: r.ButtonSizes.SMALL,
                    submitting: o,
                    onClick: this.handleSubmit,
                    children: c.intl.string(c.t.TXNS7e)
                }),
                n ? (0, s.jsx)(d.Z, { onClick: this.handleClick }) : null
            ]
        });
    }
    closePopout() {
        this.state.open && this.setState({ open: !1 });
    }
    constructor(e) {
        super(e),
            g(this, 'handleChange', (e) => {
                this.closePopout(), this.setState({ phone: e.currentTarget.value });
            }),
            g(this, 'handleKeyPress', (e) => {
                this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit());
            }),
            g(this, 'handleSubmit', () => {
                let { onSubmit: e, submitting: t } = this.props,
                    { countryCode: n, phone: s } = this.state;
                !t && (null == e || e(''.concat(n).concat(s)));
            }),
            g(this, 'handleTogglePopout', () => {
                this.setState({ open: !this.state.open });
            }),
            g(this, 'handleClick', (e) => {
                let [t, n] = e.code.split(' ');
                this.setState({
                    open: !1,
                    countryCode: t,
                    phone: null != n ? n : ''
                });
            });
        let [t, n] = a.Z.find((e) => 'United States' === e.name).phoneCountryCode.split(' ');
        this.state = {
            countryCode: t,
            phone: null != n ? n : '',
            open: !1
        };
    }
}
t.Z = C;
