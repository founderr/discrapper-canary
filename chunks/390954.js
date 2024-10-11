t(47120);
var n,
    a = t(735250),
    i = t(470079),
    r = t(392711),
    o = t.n(r),
    l = t(481060),
    c = t(355467),
    d = t(976255),
    _ = t(600164),
    u = t(212895),
    E = t(709054),
    T = t(156729),
    S = t(244526),
    I = t(981631),
    N = t(689938),
    m = t(736922);
function C(e, s, t) {
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
class A extends (n = i.PureComponent) {
    render() {
        let { paymentSource: e, isDefault: s, isEditing: t, index: n, hideDivider: i, isForSubscription: r, locale: o, removing: c, submitting: d, onSubmit: u, onCancel: E, onDelete: I } = this.props;
        return t
            ? (0, a.jsx)(T.Z, {
                  paymentSource: e,
                  isDefault: s,
                  removing: c,
                  submitting: d,
                  locale: o,
                  isForSubscription: r,
                  onSubmit: u,
                  onCancel: E,
                  onDelete: I
              })
            : (0, a.jsxs)('div', {
                  className: m.__invalid_paymentSourceItem,
                  children: [
                      n > 0 && !i ? (0, a.jsx)(l.FormDivider, { className: m.__invalid_sourceDivider }) : null,
                      (0, a.jsxs)(_.Z, {
                          align: _.Z.Align.CENTER,
                          justify: _.Z.Justify.BETWEEN,
                          className: m.paymentSourceRow,
                          children: [
                              (0, a.jsx)(S.Z, {
                                  paymentSource: e,
                                  isDefault: s,
                                  isForSubscription: r,
                                  locale: o,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0
                              }),
                              t
                                  ? null
                                  : (0, a.jsx)(l.Button, {
                                        color: l.Button.Colors.PRIMARY,
                                        onClick: this.handleEditClick,
                                        size: l.Button.Sizes.SMALL,
                                        children: N.Z.Messages.EDIT
                                    })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            C(this, 'handleEditClick', () => {
                this.props.onEditClick(this.props.paymentSource.id);
            });
    }
}
C(A, 'defaultProps', {
    isEditing: !1,
    hideDivider: !1,
    onEditClick: () => {}
});
class g extends i.PureComponent {
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, a.jsxs)(_.Z, {
            justify: _.Z.Justify.END,
            className: m.footer,
            children: [
                0 === Object.keys(e).length
                    ? (0, a.jsxs)(_.Z.Child, {
                          children: [
                              (0, a.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  children: N.Z.Messages.BILLING_NO_PAYMENT_METHOD
                              }),
                              (0, a.jsx)('div', {
                                  className: m.subText,
                                  children: N.Z.Messages.BILLING_NO_PAYMENT_METHOD_DESCRIPTION
                              })
                          ]
                      })
                    : null,
                (0, a.jsx)(l.Button, {
                    onClick: this.handleAddPaymentMethod,
                    children: N.Z.Messages.BILLING_ADD_PAYMENT_METHOD
                })
            ]
        });
    }
    render() {
        let { defaultPaymentSourceId: e, paymentSources: s, locale: t, removing: n, submitting: i, premiumSubscriptionPaymentSourceId: r } = this.props,
            c = o()
                .values(s)
                .sort((s, t) => (s.id === e ? -1 : t.id === e ? 1 : E.default.compare(s.id, t.id))),
            d = this.state.editingPayment,
            u = c.findIndex((e) => e.id === d),
            T = c.map((s, o) =>
                (0, a.jsx)(
                    A,
                    {
                        locale: t,
                        paymentSource: s,
                        isDefault: e === s.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: s.id === r,
                        hideDivider: u === o - 1,
                        onSubmit: this.handleSubmit,
                        index: o,
                        submitting: i,
                        removing: n,
                        isEditing: d === s.id,
                        onEditClick: this.handleEditClick
                    },
                    s.id
                )
            );
        return (0, a.jsxs)('div', {
            children: [
                (0, a.jsx)(l.FormTitle, {
                    tag: 'h1',
                    children: (0, a.jsxs)(_.Z, {
                        align: _.Z.Align.CENTER,
                        children: [
                            (0, a.jsx)(l.Tooltip, {
                                position: 'left',
                                text: N.Z.Messages.BILLING_SECURE_TOOLTIP,
                                children: (e) =>
                                    (0, a.jsx)(l.LockIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: m.lockIcon,
                                        ...e
                                    })
                            }),
                            N.Z.Messages.BILLING_PAYMENT_SOURCES
                        ]
                    })
                }),
                T,
                u !== c.length - 1 ? (0, a.jsx)(l.FormDivider, { className: m.__invalid_sourceDivider }) : null,
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'state', { editingPayment: null }),
            C(this, 'handleEditClick', async (e) => {
                try {
                    await c.lO(e), this.setState({ editingPayment: e });
                } catch (e) {}
            }),
            C(this, 'handleCancel', () => {
                this.setState({ editingPayment: null });
            }),
            C(this, 'handleDelete', async (e) => {
                try {
                    await c.xt(e), this.setState({ editingPayment: null });
                } catch (e) {}
            }),
            C(this, 'handleSubmit', async (e, s) => {
                if (null != e)
                    try {
                        await c.LI(e, s), this.setState({ editingPayment: null });
                    } catch (e) {}
            }),
            C(this, 'handlePaymentSourceAdded', async (e) => {
                await (0, u.i1)(e.id);
            }),
            C(this, 'handleAddPaymentMethod', () => {
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(t.bind(t, 623573));
                        return (s) =>
                            (0, a.jsx)(e, {
                                ...s,
                                onAddPaymentSource: this.handlePaymentSourceAdded
                            });
                    },
                    {
                        onCloseCallback: () => {
                            (0, d.fw)();
                        },
                        onCloseRequest: I.dG4
                    }
                );
            });
    }
}
s.Z = g;
