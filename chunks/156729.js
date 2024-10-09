t(47120);
var n,
    a = t(735250),
    i = t(470079),
    r = t(120356),
    o = t.n(r),
    l = t(873546),
    c = t(442837),
    d = t(481060),
    _ = t(570140),
    u = t(355467),
    E = t(117938),
    T = t(46141),
    S = t(351402),
    I = t(823379),
    N = t(464179),
    C = t(211667),
    A = t(244526),
    m = t(689938),
    g = t(635994);
function h(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
let O = 'isDefault';
class p extends (n = i.PureComponent) {
    componentWillUnmount() {
        _.Z.wait(() => {
            (0, u._H)(), (0, u.w7)();
        });
    }
    renderError() {
        let { updateError: e, removeError: s } = this.props;
        return null == e || e.hasCardError() || e.hasAddressError()
            ? null != s
                ? (0, a.jsx)(d.FormErrorBlock, {
                      className: g.formError,
                      children: s.message
                  })
                : null
            : (0, a.jsx)(d.FormErrorBlock, {
                  className: g.formError,
                  children: e.message
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: s, paymentSource: t } = this.props,
            n = (0, E.L)(t);
        return (0, a.jsxs)('div', {
            className: g.addressSection,
            children: [
                (0, a.jsx)(d.Text, {
                    className: g.sectionHeader,
                    variant: 'text-sm/normal',
                    children: m.Z.Messages.BILLING_ADDRESS
                }),
                (0, a.jsx)(N.ZP, {
                    ...e,
                    mode: N.ZP.Modes.EDIT,
                    layout: n,
                    onBillingAddressChange: this.handleAddressUpdate,
                    error: s
                })
            ]
        });
    }
    renderCardExpirationSection() {
        let { expiresMonth: e, expiresYear: s } = this.state;
        if (null == e || null == s) return null;
        let t = ''.concat(e.toString().padStart(2, '0'), '/').concat(s.toString().padStart(2, '0').slice(-2));
        return (0, a.jsxs)('div', {
            className: g.addressSection,
            children: [
                (0, a.jsx)(d.Text, {
                    className: g.sectionHeader,
                    variant: 'text-sm/normal',
                    children: m.Z.Messages.BILLING_STEP_CREDIT_CARD_INFORMATION
                }),
                (0, a.jsx)(C.Z, {
                    expirationDate: t,
                    onCardInfoChange: this.handleExpirationDateUpdate,
                    error: this.props.updateError
                })
            ]
        });
    }
    renderActions() {
        let { submitting: e, removing: s, isForSubscription: t } = this.props,
            { billingAddressValid: n, expirationValid: i } = this.state;
        return (0, a.jsxs)('div', {
            className: g.formActions,
            children: [
                (0, a.jsx)('div', {
                    className: g.__invalid_leftAlignedButtons,
                    children: (0, a.jsxs)('div', {
                        className: g.disabledTooltipWrapper,
                        children: [
                            t
                                ? (0, a.jsx)(d.Tooltip, {
                                      text: m.Z.Messages.PAYMENT_SOURCE_DELETE_DISABLED_TOOLTIP,
                                      children: (e) =>
                                          (0, a.jsx)('div', {
                                              'aria-hidden': !0,
                                              className: g.disabledTooltipTarget,
                                              ...e
                                          })
                                  })
                                : null,
                            (0, a.jsx)(d.Button, {
                                type: 'button',
                                disabled: t || e,
                                submitting: s,
                                onClick: this.handleDelete,
                                look: d.Button.Looks.OUTLINED,
                                color: d.Button.Colors.RED,
                                size: l.tq ? d.ButtonSizes.SMALL : d.ButtonSizes.MEDIUM,
                                children: l.tq ? m.Z.Messages.DELETE : m.Z.Messages.PAYMENT_SOURCE_DELETE
                            })
                        ]
                    })
                }),
                (0, a.jsxs)('div', {
                    className: g.rightAlignedButtons,
                    children: [
                        (0, a.jsx)(d.Button, {
                            type: 'button',
                            disabled: e || s,
                            onClick: this.handleCancel,
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.PRIMARY,
                            size: l.tq ? d.ButtonSizes.SMALL : d.ButtonSizes.MEDIUM,
                            children: m.Z.Messages.CANCEL
                        }),
                        (0, a.jsx)(d.Button, {
                            submitting: e,
                            disabled: !n || s || !i,
                            type: 'submit',
                            color: d.Button.Colors.GREEN,
                            size: l.tq ? d.ButtonSizes.SMALL : d.ButtonSizes.MEDIUM,
                            children: m.Z.Messages.SAVE
                        })
                    ]
                })
            ]
        });
    }
    render() {
        let { paymentSource: e, isDefault: s, locale: t, className: n, isForSubscription: i } = this.props,
            { isDefault: r } = this.state,
            l = e instanceof T.qo;
        return (0, a.jsx)(d.Card, {
            editable: !0,
            className: o()(g.card, n),
            children: (0, a.jsxs)('form', {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, a.jsxs)('div', {
                        className: g.__invalid_paymentSection,
                        children: [
                            (0, a.jsx)(A.Z, {
                                paymentSource: e,
                                isDefault: s,
                                isForSubscription: i,
                                locale: t,
                                showLabels: !0,
                                showPaymentSourceIcon: !0
                            }),
                            e.invalid
                                ? (0, a.jsx)('div', {
                                      className: g.errorSubText,
                                      children: m.Z.Messages.PAYMENT_SOURCE_INVALID_HELP
                                  })
                                : null,
                            (0, a.jsx)('div', {
                                className: g.subText,
                                children: l ? m.Z.Messages.PAYMENT_SOURCE_EDIT_HELP_PAYPAL.format({ paypalURL: 'https://www.paypal.com' }) : m.Z.Messages.PAYMENT_SOURCE_EDIT_HELP_CARD
                            })
                        ]
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, a.jsx)(d.Checkbox, {
                        name: O,
                        value: r,
                        onChange: (e, s) => this.handleFieldChange(s, O),
                        type: d.Checkbox.Types.INVERTED,
                        className: g.defaultSection,
                        children: (0, a.jsx)(d.Text, {
                            className: g.defaultCheckboxLabel,
                            variant: 'text-sm/normal',
                            children: m.Z.Messages.PAYMENT_SOURCE_MAKE_DEFAULT
                        })
                    }),
                    (0, a.jsx)(d.FormDivider, {}),
                    this.renderActions()
                ]
            })
        });
    }
    constructor(e) {
        var s, t, n, a, i, r, o;
        super(e),
            h(this, 'handleSubmit', (e) => {
                if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(I.lm).length)) this.props.onCancel();
                else {
                    let { billingAddress: e, isDefault: s, expiresMonth: t, expiresYear: n } = this.state;
                    this.props.onSubmit(this.props.paymentSource.id, {
                        billingAddress: e,
                        expiresMonth: t,
                        expiresYear: n,
                        isDefault: s
                    });
                }
            }),
            h(this, 'handleCancel', () => {
                this.props.onCancel();
            }),
            h(this, 'handleDelete', () => {
                let { onDelete: e, paymentSource: s } = this.props;
                e(s.id);
            }),
            h(this, 'handleAddressUpdate', (e, s, t) => {
                this.setState({
                    billingAddress: e,
                    billingAddressValid: s,
                    dirtyFields: {
                        ...this.state.dirtyFields,
                        billingAddress: t
                    }
                });
            }),
            h(this, 'handleExpirationDateUpdate', (e, s) => {
                let { expirationDate: t } = e;
                if ((this.setState({ expirationValid: s }), null == t || '' === t)) return;
                let [n, a] = t.split('/');
                this.handleFieldChange(Number(n), 'expiresMonth'), this.handleFieldChange(Number(''.concat(new Date().getFullYear().toString().slice(0, 2)).concat(a)), 'expiresYear');
            }),
            h(this, 'handleFieldChange', (e, s) => {
                null != s &&
                    this.setState({
                        [s]: e,
                        dirtyFields: {
                            ...this.state.dirtyFields,
                            [s]: !0
                        }
                    });
            });
        let { paymentSource: l, isDefault: c } = e,
            d = l.billingAddress;
        this.state = {
            billingAddress: {
                name: null !== (s = d.name) && void 0 !== s ? s : '',
                line1: null !== (t = d.line1) && void 0 !== t ? t : '',
                line2: null !== (n = d.line2) && void 0 !== n ? n : '',
                country: null !== (a = d.country) && void 0 !== a ? a : '',
                state: null !== (i = d.state) && void 0 !== i ? i : '',
                city: null !== (r = d.city) && void 0 !== r ? r : '',
                postalCode: null !== (o = d.postalCode) && void 0 !== o ? o : ''
            },
            expiresMonth: l instanceof T.dm ? l.expiresMonth : void 0,
            expiresYear: l instanceof T.dm ? l.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: c,
            expirationValid: !0,
            dirtyFields: {}
        };
    }
}
h(p, 'defaultProps', {
    onDelete: () => {},
    onSubmit: () => {},
    onCancel: () => {}
}),
    (s.Z = c.ZP.connectStores([S.Z], () => ({
        updateError: S.Z.editSourceError,
        removeError: S.Z.removeSourceError
    }))(p));
