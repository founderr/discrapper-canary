"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("411104"), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  o = n.n(s),
  i = n("692547"),
  l = n("481060"),
  u = n("987032"),
  d = n("46141"),
  c = n("912454"),
  p = n("759231"),
  f = n("63063"),
  y = n("981631"),
  S = n("231338"),
  b = n("689938"),
  A = n("514944");
let m = "***@***.***",
  P = new d.CreditCardSourceRecord({
    id: "new_payment_source_id",
    brand: c.default.Types.UNKNOWN,
    type: y.PaymentSourceTypes.CARD
  });

function _(e) {
  var t, n;
  let s, {
      selectedPaymentSourceId: _,
      paymentSources: h,
      prependOption: C,
      hidePersonalInformation: T,
      onChange: g,
      onPaymentSourceAdd: E,
      isTrial: R = !1,
      disabled: O = !1,
      className: N,
      optionClassName: k,
      dropdownLoading: v
    } = e,
    M = 0 === h.length,
    B = [...null != C ? [C] : [], ...h, P].map((e, t) => {
      if (e instanceof d.default) {
        let {
          brand: t,
          label: n
        } = function(e, t) {
          if (e instanceof d.CreditCardSourceRecord) return e.id === P.id ? {
            brand: null,
            label: b.default.Messages.PAYMENT_SOURCES_ADD
          } : {
            brand: t ? c.default.Types.UNKNOWN : e.brand,
            label: b.default.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
              last4: t ? "****" : e.last4
            })
          };
          if (e instanceof d.PaypalSourceRecord) return {
            brand: c.default.Types.PAYPAL,
            label: t ? m : e.email
          };
          if (e instanceof d.SofortSourceRecord) return {
            brand: c.default.Types.SOFORT,
            label: t ? m : e.email
          };
          else if (e instanceof d.GiropaySourceRecord) return {
            brand: c.default.Types.GIROPAY,
            label: b.default.Messages.PAYMENT_SOURCE_GIROPAY
          };
          else if (e instanceof d.Przelewy24SourceRecord) return {
            brand: c.default.Types.PRZELEWY24,
            label: t ? m : e.email
          };
          else if (e instanceof d.PaysafeSourceRecord) return {
            brand: c.default.Types.PAYSAFECARD,
            label: b.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
          };
          else if (e instanceof d.GcashSourceRecord) return {
            brand: c.default.Types.GCASH,
            label: b.default.Messages.PAYMENT_SOURCE_GCASH
          };
          else if (e instanceof d.GrabPayMySourceRecord) return {
            brand: c.default.Types.GRABPAY,
            label: b.default.Messages.PAYMENT_SOURCE_GRABPAY
          };
          else if (e instanceof d.MomoWalletSourceRecord) return {
            brand: c.default.Types.MOMO_WALLET,
            label: b.default.Messages.PAYMENT_SOURCE_MOMO_WALLET
          };
          else if (e instanceof d.VenmoSourceRecord) return {
            brand: c.default.Types.VENMO,
            label: t ? "***" : "@" + e.username
          };
          else if (e instanceof d.KaKaoPaySourceRecord) return {
            brand: c.default.Types.KAKAOPAY,
            label: b.default.Messages.PAYMENT_SOURCE_KAKAOPAY
          };
          else if (e instanceof d.GoPayWalletSourceRecord) return {
            brand: c.default.Types.GOPAY_WALLET,
            label: b.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET
          };
          else if (e instanceof d.BancontactSourceRecord) return {
            brand: c.default.Types.BANCONTACT,
            label: b.default.Messages.PAYMENT_SOURCE_BANCONTACT
          };
          else if (e instanceof d.EPSSourceRecord) return {
            brand: c.default.Types.EPS,
            label: b.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
              bank: (0, u.getEPSBankDisplayNameFromBankName)(e.bank)
            })
          };
          else if (e instanceof d.IdealSourceRecord) return {
            brand: c.default.Types.IDEAL,
            label: b.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
              bank: (0, u.getIdealBankDisplayNameFromBankName)(e.bank)
            })
          };
          else if (e instanceof d.CashAppSourceRecord) return {
            brand: c.default.Types.CASH_APP,
            label: t ? "***" : e.username
          };
          throw Error("Invalid Payment Source")
        }(e, T);
        return {
          value: e.id,
          label: (0, a.jsxs)("div", {
            className: A.paymentSourceSelectedOption,
            children: [null != t ? (0, a.jsx)(c.default, {
              type: c.default.getType(t)
            }) : null, (0, a.jsx)("div", {
              className: o()(A.paymentSourceLabel, {
                [A.error]: e.invalid
              }),
              children: n
            })]
          })
        }
      }
      return {
        key: t,
        value: e.value,
        label: (0, a.jsx)("div", {
          className: A.paymentSourceLabel,
          children: e.label
        })
      }
    }),
    I = r.useMemo(() => h.find(e => e.id === _), [h, _]);
  let L = (t = R, n = I, s = null, t && null != n && !n.canRedeemTrial() ? s = b.default.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : t && null != n && n.hasFlag(S.PaymentSourceFlags.NEW) && (s = b.default.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
    helpDeskArticle: f.default.getArticleURL(y.HelpdeskArticles.PAYMENT_AUTHORIZATION_CHARGE)
  })), s);
  return (0, a.jsxs)(a.Fragment, {
    children: [M ? (0, a.jsx)(l.Button, {
      color: l.ButtonColors.BRAND,
      fullWidth: !0,
      onClick: E,
      children: b.default.Messages.PAYMENT_SOURCES_ADD
    }) : (0, a.jsx)(l.SingleSelect, {
      options: B,
      value: _,
      onChange: e => {
        if (e === P.id) null != E && E();
        else {
          let t = h.find(t => t.id === e);
          null != g && g(t)
        }
      },
      isDisabled: O,
      className: o()({
        [A.paymentSourceHasWarning]: null != L
      }, N),
      optionClassName: k,
      placeholder: b.default.Messages.PAYMENT_SOURCE_TYPE_SELECT,
      renderOptionValue: e => {
        let [t] = e;
        return v ? (0, a.jsx)(l.Spinner, {
          type: l.SpinnerTypes.SPINNING_CIRCLE
        }) : t.label
      }
    }), null != L ? (0, a.jsxs)("div", {
      className: A.paymentSourceWarning,
      children: [(0, a.jsx)(p.default, {
        className: A.paymentSourceWarningIcon,
        color: i.default.unsafe_rawColors.YELLOW_300.css
      }), (0, a.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: L
      })]
    }) : null]
  })
}