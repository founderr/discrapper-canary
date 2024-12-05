n(47120);
var i,
    s = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(481060),
    c = n(355467),
    d = n(159351),
    u = n(600164),
    m = n(212895),
    g = n(709054),
    h = n(156729),
    p = n(244526),
    x = n(981631),
    T = n(388032),
    S = n(912891);
function _(e, t, n) {
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
class E extends (i = r.PureComponent) {
    render() {
        let { paymentSource: e, isDefault: t, isEditing: n, index: i, hideDivider: r, isForSubscription: l, locale: a, removing: c, submitting: d, onSubmit: m, onCancel: g, onDelete: x } = this.props;
        return n
            ? (0, s.jsx)(h.Z, {
                  paymentSource: e,
                  isDefault: t,
                  removing: c,
                  submitting: d,
                  locale: a,
                  isForSubscription: l,
                  onSubmit: m,
                  onCancel: g,
                  onDelete: x
              })
            : (0, s.jsxs)('div', {
                  className: S.__invalid_paymentSourceItem,
                  children: [
                      i > 0 && !r ? (0, s.jsx)(o.FormDivider, { className: S.__invalid_sourceDivider }) : null,
                      (0, s.jsxs)(u.Z, {
                          align: u.Z.Align.CENTER,
                          justify: u.Z.Justify.BETWEEN,
                          className: S.paymentSourceRow,
                          children: [
                              (0, s.jsx)(p.Z, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: l,
                                  locale: a,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0
                              }),
                              n
                                  ? null
                                  : (0, s.jsx)(o.Button, {
                                        color: o.Button.Colors.PRIMARY,
                                        onClick: this.handleEditClick,
                                        size: o.Button.Sizes.SMALL,
                                        children: T.intl.string(T.t.bt75u7)
                                    })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleEditClick', () => {
                this.props.onEditClick(this.props.paymentSource.id);
            });
    }
}
_(E, 'defaultProps', {
    isEditing: !1,
    hideDivider: !1,
    onEditClick: () => {}
});
class C extends r.PureComponent {
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, s.jsxs)(u.Z, {
            justify: u.Z.Justify.END,
            className: S.footer,
            children: [
                0 === Object.keys(e).length
                    ? (0, s.jsxs)(u.Z.Child, {
                          children: [
                              (0, s.jsx)(o.Text, {
                                  variant: 'text-sm/normal',
                                  children: T.intl.string(T.t.aRHpAA)
                              }),
                              (0, s.jsx)('div', {
                                  className: S.subText,
                                  children: T.intl.string(T.t.o9bOIi)
                              })
                          ]
                      })
                    : null,
                (0, s.jsx)(o.Button, {
                    onClick: this.handleAddPaymentMethod,
                    children: T.intl.string(T.t.CpOiEB)
                })
            ]
        });
    }
    render() {
        let { defaultPaymentSourceId: e, paymentSources: t, locale: n, removing: i, submitting: r, premiumSubscriptionPaymentSourceId: l } = this.props,
            c = a()
                .values(t)
                .sort((t, n) => (t.id === e ? -1 : n.id === e ? 1 : g.default.compare(t.id, n.id))),
            d = this.state.editingPayment,
            m = c.findIndex((e) => e.id === d),
            h = c.map((t, a) =>
                (0, s.jsx)(
                    E,
                    {
                        locale: n,
                        paymentSource: t,
                        isDefault: e === t.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: t.id === l,
                        hideDivider: m === a - 1,
                        onSubmit: this.handleSubmit,
                        index: a,
                        submitting: r,
                        removing: i,
                        isEditing: d === t.id,
                        onEditClick: this.handleEditClick
                    },
                    t.id
                )
            );
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(o.FormTitle, {
                    tag: 'h1',
                    children: (0, s.jsxs)(u.Z, {
                        align: u.Z.Align.CENTER,
                        children: [
                            (0, s.jsx)(o.Tooltip, {
                                position: 'left',
                                text: T.intl.string(T.t.h6V3uL),
                                children: (e) =>
                                    (0, s.jsx)(o.LockIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: S.lockIcon,
                                        ...e
                                    })
                            }),
                            T.intl.string(T.t.W26xGR)
                        ]
                    })
                }),
                h,
                m !== c.length - 1 ? (0, s.jsx)(o.FormDivider, { className: S.__invalid_sourceDivider }) : null,
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', { editingPayment: null }),
            _(this, 'handleEditClick', async (e) => {
                try {
                    await c.lO(e), this.setState({ editingPayment: e });
                } catch (e) {}
            }),
            _(this, 'handleCancel', () => {
                this.setState({ editingPayment: null });
            }),
            _(this, 'handleDelete', async (e) => {
                try {
                    await c.xt(e), this.setState({ editingPayment: null });
                } catch (e) {}
            }),
            _(this, 'handleSubmit', async (e, t) => {
                if (null != e)
                    try {
                        await c.LI(e, t), this.setState({ editingPayment: null });
                    } catch (e) {}
            }),
            _(this, 'handlePaymentSourceAdded', async (e) => {
                await (0, m.i1)(e.id);
            }),
            _(this, 'handleAddPaymentMethod', () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 623573));
                        return (t) =>
                            (0, s.jsx)(e, {
                                ...t,
                                onAddPaymentSource: this.handlePaymentSourceAdded
                            });
                    },
                    {
                        onCloseCallback: () => {
                            (0, d.fw)();
                        },
                        onCloseRequest: x.dG4
                    }
                );
            });
    }
}
t.Z = C;
