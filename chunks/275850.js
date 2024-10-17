t.d(n, {
    Z: function () {
        return M;
    }
}),
    t(411104),
    t(47120);
var a = t(735250),
    s = t(470079),
    r = t(120356),
    i = t.n(r),
    l = t(692547),
    o = t(481060),
    c = t(987032),
    u = t(219929),
    d = t(46141),
    _ = t(63063),
    I = t(981631),
    E = t(231338),
    T = t(689938),
    A = t(235183);
let N = '***@***.***',
    P = new d.dm({
        id: 'new_payment_source_id',
        brand: u.ZP.Types.UNKNOWN,
        type: I.HeQ.CARD
    });
function M(e) {
    var n, t;
    let r,
        { selectedPaymentSourceId: M, paymentSources: p, prependOption: R, hidePersonalInformation: L, onChange: f, onPaymentSourceAdd: S, isTrial: C = !1, disabled: m = !1, className: b, optionClassName: v, dropdownLoading: g } = e,
        O = 0 === p.length,
        h = [...(null != R ? [R] : []), ...p, P].map((e, n) => {
            if (e instanceof d.ZP) {
                let { brand: n, label: t } = (function (e, n) {
                    if (e instanceof d.dm)
                        return e.id === P.id
                            ? {
                                  brand: null,
                                  label: T.Z.Messages.PAYMENT_SOURCES_ADD
                              }
                            : {
                                  brand: n ? u.ZP.Types.UNKNOWN : e.brand,
                                  label: T.Z.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({ last4: n ? '****' : e.last4 })
                              };
                    if (e instanceof d.qo)
                        return {
                            brand: u.ZP.Types.PAYPAL,
                            label: n ? N : e.email
                        };
                    if (e instanceof d.Sf)
                        return {
                            brand: u.ZP.Types.SOFORT,
                            label: n ? N : e.email
                        };
                    else if (e instanceof d.fv)
                        return {
                            brand: u.ZP.Types.GIROPAY,
                            label: T.Z.Messages.PAYMENT_SOURCE_GIROPAY
                        };
                    else if (e instanceof d.Vg)
                        return {
                            brand: u.ZP.Types.PRZELEWY24,
                            label: n ? N : e.email
                        };
                    else if (e instanceof d.sn)
                        return {
                            brand: u.ZP.Types.PAYSAFECARD,
                            label: T.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
                        };
                    else if (e instanceof d.o_)
                        return {
                            brand: u.ZP.Types.GCASH,
                            label: T.Z.Messages.PAYMENT_SOURCE_GCASH
                        };
                    else if (e instanceof d.kX)
                        return {
                            brand: u.ZP.Types.GRABPAY,
                            label: T.Z.Messages.PAYMENT_SOURCE_GRABPAY
                        };
                    else if (e instanceof d.z)
                        return {
                            brand: u.ZP.Types.MOMO_WALLET,
                            label: T.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
                        };
                    else if (e instanceof d.Xc)
                        return {
                            brand: u.ZP.Types.VENMO,
                            label: n ? '***' : '@' + e.username
                        };
                    else if (e instanceof d.Om)
                        return {
                            brand: u.ZP.Types.KAKAOPAY,
                            label: T.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
                        };
                    else if (e instanceof d.JC)
                        return {
                            brand: u.ZP.Types.GOPAY_WALLET,
                            label: T.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                        };
                    else if (e instanceof d.U4)
                        return {
                            brand: u.ZP.Types.BANCONTACT,
                            label: T.Z.Messages.PAYMENT_SOURCE_BANCONTACT
                        };
                    else if (e instanceof d.D0)
                        return {
                            brand: u.ZP.Types.EPS,
                            label: T.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({ bank: (0, c.Ul)(e.bank) })
                        };
                    else if (e instanceof d.jc)
                        return {
                            brand: u.ZP.Types.IDEAL,
                            label: T.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({ bank: (0, c.YE)(e.bank) })
                        };
                    else if (e instanceof d.u_)
                        return {
                            brand: u.ZP.Types.CASH_APP,
                            label: n ? '***' : e.username
                        };
                    throw Error('Invalid Payment Source');
                })(e, L);
                return {
                    value: e.id,
                    label: (0, a.jsxs)('div', {
                        className: A.paymentSourceSelectedOption,
                        children: [
                            null != n ? (0, a.jsx)(u.ZP, { type: u.ZP.getType(n) }) : null,
                            (0, a.jsx)('div', {
                                className: i()(A.paymentSourceLabel, { [A.error]: e.invalid }),
                                children: t
                            })
                        ]
                    })
                };
            }
            return {
                key: n,
                value: e.value,
                label: (0, a.jsx)('div', {
                    className: A.paymentSourceLabel,
                    children: e.label
                })
            };
        }),
        U = s.useMemo(() => p.find((e) => e.id === M), [p, M]);
    let y = ((n = C), (t = U), (r = null), n && null != t && !t.canRedeemTrial() ? (r = T.Z.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID) : n && null != t && t.hasFlag(E.Cw.NEW) && (r = T.Z.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({ helpDeskArticle: _.Z.getArticleURL(I.BhN.PAYMENT_AUTHORIZATION_CHARGE) })), r);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            O
                ? (0, a.jsx)(o.Button, {
                      color: o.ButtonColors.BRAND,
                      fullWidth: !0,
                      onClick: S,
                      children: T.Z.Messages.PAYMENT_SOURCES_ADD
                  })
                : (0, a.jsx)(o.SingleSelect, {
                      options: h,
                      value: M,
                      onChange: (e) => {
                          if (e === P.id) null != S && S();
                          else {
                              let n = p.find((n) => n.id === e);
                              null != f && f(n);
                          }
                      },
                      isDisabled: m,
                      className: i()({ [A.paymentSourceHasWarning]: null != y }, b),
                      optionClassName: v,
                      placeholder: T.Z.Messages.PAYMENT_SOURCE_TYPE_SELECT,
                      renderOptionValue: (e) => {
                          let [n] = e;
                          return g ? (0, a.jsx)(o.Spinner, { type: o.SpinnerTypes.SPINNING_CIRCLE }) : n.label;
                      }
                  }),
            null != y
                ? (0, a.jsxs)('div', {
                      className: A.paymentSourceWarning,
                      children: [
                          (0, a.jsx)(o.CircleWarningIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              className: A.paymentSourceWarningIcon,
                              color: l.Z.unsafe_rawColors.YELLOW_300.css
                          }),
                          (0, a.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              children: y
                          })
                      ]
                  })
                : null
        ]
    });
}
