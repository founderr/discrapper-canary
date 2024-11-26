n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(159351),
    m = n(366939),
    h = n(623573),
    g = n(190947),
    p = n(275850),
    x = n(906732),
    S = n(15640),
    T = n(246946),
    E = n(853872),
    _ = n(509545),
    C = n(74538),
    I = n(212895),
    f = n(296848),
    N = n(374649),
    A = n(981631),
    b = n(388032),
    v = n(140407),
    j = n(652849);
function O(e) {
    let { subscription: t, onPaymentSourceAdded: n, highlightAddPaymentMethodButton: r, dropdownClassName: a, analyticsLocation: O, currentInvoicePreview: P, disabled: D = !1 } = e,
        y = (0, c.e7)([T.Z], () => T.Z.hidePersonalInformation),
        [B, L] = (0, c.Wu)([E.Z], () => [E.Z.paymentSources, E.Z.hasFetchedPaymentSources]),
        Z = (0, S.V)((0, f.yb)(t)),
        { analyticsLocations: F } = (0, x.ZP)(),
        M = s.useMemo(() => Object.values(B).filter((e) => !e.invalid), [B]),
        [k, w] = s.useState(!1),
        [U, V] = s.useState(t.currency),
        G = async (e, n) => {
            if (null == t) throw Error('missing subscription and paymentSource');
            null == e ? await m.fG(t, n, F, O) : await m.tq(t, e, n, F, O), w(!1), V(n);
        },
        Y = async (e, n, i) => {
            w(!0);
            let s = await (0, N.hz)({
                subscriptionId: t.id,
                paymentSourceId: null == e ? void 0 : e.id,
                renewal: !0,
                currency: n,
                analyticsLocations: F,
                analyticsLocation: O
            });
            P.currency !== s.currency || (P.currency === s.currency && P.total !== s.total)
                ? await R(
                      s,
                      () => {
                          i(e, n);
                      },
                      () => {
                          w(!1);
                      }
                  )
                : i(e, n);
        },
        H = (e) => {
            let n = _.Z.get(t.planIdForCurrencies);
            o()(null != e, 'paymentSource not specified for change'), o()(null != n, 'Unable to fetch plan');
            let i = (0, I.DE)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : A.pKx.USD;
        },
        z = (e) => {
            null != e && Y(e, H(e), G);
        },
        W = (e) => {
            (0, I.i1)(e.id, (0, f.yb)(t)).then(() => {
                Y(e, H(e), G);
            }),
                'function' == typeof n && n(e.id);
        },
        K = () => {
            (0, d.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(h.default, {
                        ...e,
                        onAddPaymentSource: W,
                        analyticsLocation: O
                    }),
                {
                    onCloseCallback: () => {
                        (0, u.fw)();
                    },
                    onCloseRequest: A.dG4
                }
            );
        };
    if (t.isPurchasedExternally)
        return ((e) => {
            o()(null != e.paymentGateway, 'Expected payment gateway when managed externally');
            let t = (0, C.JE)(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT');
            return (0, i.jsx)(d.Anchor, {
                href: t,
                useDefaultUnderlineStyles: !1,
                className: v.externalLink,
                children: (0, i.jsx)(d.Button, {
                    fullWidth: !0,
                    look: d.Button.Looks.FILLED,
                    color: d.Button.Colors.PRIMARY,
                    children: b.intl.string(b.t.SgX7RU)
                })
            });
        })(t);
    if (!L || !Z) return (0, i.jsx)(d.Spinner, {});
    if (!(M.length > 0))
        return (0, i.jsx)(d.Button, {
            fullWidth: !0,
            look: d.Button.Looks.FILLED,
            color: r ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
            onClick: K,
            children: b.intl.string(b.t.CpOiEB)
        });
    else {
        let e = _.Z.get(t.planIdForCurrencies);
        o()(null != e, 'Unable to fetch plan');
        let n = (0, I.DE)(e, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (() => {
                    let e = t.paymentSourceId;
                    return (0, i.jsx)(p.Z, {
                        prependOption:
                            null == e
                                ? {
                                      label: b.intl.string(b.t.iA5vAw),
                                      value: null
                                  }
                                : null,
                        className: a,
                        paymentSources: M,
                        hidePersonalInformation: y,
                        selectedPaymentSourceId: e,
                        onChange: z,
                        onPaymentSourceAdd: K,
                        dropdownLoading: k,
                        disabled: D
                    });
                })(),
                null != t.paymentSourceId
                    ? (0, i.jsx)(g.b, {
                          currencies: n,
                          children: (0, i.jsxs)('div', {
                              className: l()(v.currency, j.flex, j.alignCenter),
                              children: [
                                  (0, i.jsx)('div', { children: b.intl.string(b.t['0YjaXV']) }),
                                  (0, i.jsx)(g.Z, {
                                      className: v.currencyDropdown,
                                      selectedCurrency: U,
                                      currencies: n,
                                      onChange: (e) => {
                                          Y(void 0, e, G);
                                      }
                                  })
                              ]
                          })
                      })
                    : null
            ]
        });
    }
}
let R = async (e, t, s) => {
    let r = await (0, d.openModalLazy)(
        async () => {
            let { default: r } = await n.e('97516').then(n.bind(n, 358927));
            return (n) =>
                (0, i.jsx)(r, {
                    newInvoice: e,
                    onConfirm: t,
                    onCancel: s,
                    modalProps: n
                });
        },
        {
            onCloseRequest: () => {
                null != r && (0, d.closeModal)(r), s();
            }
        }
    );
};
