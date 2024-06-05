"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("411104"), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("692547"),
  o = a("481060"),
  u = a("987032"),
  c = a("46141"),
  d = a("912454"),
  I = a("759231"),
  _ = a("63063"),
  f = a("981631"),
  T = a("231338"),
  p = a("689938"),
  P = a("885651");
let m = "***@***.***",
  E = new c.CreditCardSourceRecord({
    id: "new_payment_source_id",
    brand: d.default.Types.UNKNOWN,
    type: f.PaymentSourceTypes.CARD
  });

function A(e) {
  var t, a;
  let s, {
      selectedPaymentSourceId: A,
      paymentSources: S,
      prependOption: N,
      hidePersonalInformation: R,
      onChange: M,
      onPaymentSourceAdd: b,
      isTrial: v = !1,
      disabled: L = !1,
      className: C,
      optionClassName: y,
      dropdownLoading: g
    } = e,
    O = 0 === S.length,
    U = [...null != N ? [N] : [], ...S, E].map((e, t) => {
      if (e instanceof c.default) {
        let {
          brand: t,
          label: a
        } = function(e, t) {
          if (e instanceof c.CreditCardSourceRecord) return e.id === E.id ? {
            brand: null,
            label: p.default.Messages.PAYMENT_SOURCES_ADD
          } : {
            brand: t ? d.default.Types.UNKNOWN : e.brand,
            label: p.default.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
              last4: t ? "****" : e.last4
            })
          };
          if (e instanceof c.PaypalSourceRecord) return {
            brand: d.default.Types.PAYPAL,
            label: t ? m : e.email
          };
          if (e instanceof c.SofortSourceRecord) return {
            brand: d.default.Types.SOFORT,
            label: t ? m : e.email
          };
          else if (e instanceof c.GiropaySourceRecord) return {
            brand: d.default.Types.GIROPAY,
            label: p.default.Messages.PAYMENT_SOURCE_GIROPAY
          };
          else if (e instanceof c.Przelewy24SourceRecord) return {
            brand: d.default.Types.PRZELEWY24,
            label: t ? m : e.email
          };
          else if (e instanceof c.PaysafeSourceRecord) return {
            brand: d.default.Types.PAYSAFECARD,
            label: p.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
          };
          else if (e instanceof c.GcashSourceRecord) return {
            brand: d.default.Types.GCASH,
            label: p.default.Messages.PAYMENT_SOURCE_GCASH
          };
          else if (e instanceof c.GrabPayMySourceRecord) return {
            brand: d.default.Types.GRABPAY,
            label: p.default.Messages.PAYMENT_SOURCE_GRABPAY
          };
          else if (e instanceof c.MomoWalletSourceRecord) return {
            brand: d.default.Types.MOMO_WALLET,
            label: p.default.Messages.PAYMENT_SOURCE_MOMO_WALLET
          };
          else if (e instanceof c.VenmoSourceRecord) return {
            brand: d.default.Types.VENMO,
            label: t ? "***" : "@" + e.username
          };
          else if (e instanceof c.KaKaoPaySourceRecord) return {
            brand: d.default.Types.KAKAOPAY,
            label: p.default.Messages.PAYMENT_SOURCE_KAKAOPAY
          };
          else if (e instanceof c.GoPayWalletSourceRecord) return {
            brand: d.default.Types.GOPAY_WALLET,
            label: p.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET
          };
          else if (e instanceof c.BancontactSourceRecord) return {
            brand: d.default.Types.BANCONTACT,
            label: p.default.Messages.PAYMENT_SOURCE_BANCONTACT
          };
          else if (e instanceof c.EPSSourceRecord) return {
            brand: d.default.Types.EPS,
            label: p.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
              bank: (0, u.getEPSBankDisplayNameFromBankName)(e.bank)
            })
          };
          else if (e instanceof c.IdealSourceRecord) return {
            brand: d.default.Types.IDEAL,
            label: p.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
              bank: (0, u.getIdealBankDisplayNameFromBankName)(e.bank)
            })
          };
          else if (e instanceof c.CashAppSourceRecord) return {
            brand: d.default.Types.CASH_APP,
            label: t ? "***" : e.username
          };
          throw Error("Invalid Payment Source")
        }(e, R);
        return {
          value: e.id,
          label: (0, n.jsxs)("div", {
            className: P.paymentSourceSelectedOption,
            children: [null != t ? (0, n.jsx)(d.default, {
              type: d.default.getType(t)
            }) : null, (0, n.jsx)("div", {
              className: i()(P.paymentSourceLabel, {
                [P.error]: e.invalid
              }),
              children: a
            })]
          })
        }
      }
      return {
        key: t,
        value: e.value,
        label: (0, n.jsx)("div", {
          className: P.paymentSourceLabel,
          children: e.label
        })
      }
    }),
    h = r.useMemo(() => S.find(e => e.id === A), [S, A]);
  let B = (t = v, a = h, s = null, t && null != a && !a.canRedeemTrial() ? s = p.default.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : t && null != a && a.hasFlag(T.PaymentSourceFlags.NEW) && (s = p.default.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
    helpDeskArticle: _.default.getArticleURL(f.HelpdeskArticles.PAYMENT_AUTHORIZATION_CHARGE)
  })), s);
  return (0, n.jsxs)(n.Fragment, {
    children: [O ? (0, n.jsx)(o.Button, {
      color: o.ButtonColors.BRAND,
      fullWidth: !0,
      onClick: b,
      children: p.default.Messages.PAYMENT_SOURCES_ADD
    }) : (0, n.jsx)(o.SingleSelect, {
      options: U,
      value: A,
      onChange: e => {
        if (e === E.id) null != b && b();
        else {
          let t = S.find(t => t.id === e);
          null != M && M(t)
        }
      },
      isDisabled: L,
      className: i()({
        [P.paymentSourceHasWarning]: null != B
      }, C),
      optionClassName: y,
      placeholder: p.default.Messages.PAYMENT_SOURCE_TYPE_SELECT,
      renderOptionValue: e => {
        let [t] = e;
        return g ? (0, n.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE
        }) : t.label
      }
    }), null != B ? (0, n.jsxs)("div", {
      className: P.paymentSourceWarning,
      children: [(0, n.jsx)(I.default, {
        className: P.paymentSourceWarningIcon,
        color: l.default.unsafe_rawColors.YELLOW_300.css
      }), (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: B
      })]
    }) : null]
  })
}