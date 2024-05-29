"use strict";
t.r(n), t.d(n, {
  default: function() {
    return E
  }
}), t("411104"), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  r = t.n(l),
  s = t("692547"),
  u = t("481060"),
  o = t("987032"),
  c = t("46141"),
  I = t("912454"),
  d = t("759231"),
  T = t("63063"),
  _ = t("981631"),
  m = t("231338"),
  P = t("689938"),
  f = t("885651");
let v = "***@***.***",
  N = new c.CreditCardSourceRecord({
    id: "new_payment_source_id",
    brand: I.default.Types.UNKNOWN,
    type: _.PaymentSourceTypes.CARD
  });

function E(e) {
  var n, t;
  let l, {
      selectedPaymentSourceId: E,
      paymentSources: R,
      prependOption: S,
      hidePersonalInformation: M,
      onChange: p,
      onPaymentSourceAdd: b,
      isTrial: A = !1,
      disabled: U = !1,
      className: L,
      optionClassName: O,
      dropdownLoading: C
    } = e,
    g = 0 === R.length,
    x = [...null != S ? [S] : [], ...R, N].map((e, n) => {
      if (e instanceof c.default) {
        let {
          brand: n,
          label: t
        } = function(e, n) {
          if (e instanceof c.CreditCardSourceRecord) return e.id === N.id ? {
            brand: null,
            label: P.default.Messages.PAYMENT_SOURCES_ADD
          } : {
            brand: n ? I.default.Types.UNKNOWN : e.brand,
            label: P.default.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
              last4: n ? "****" : e.last4
            })
          };
          if (e instanceof c.PaypalSourceRecord) return {
            brand: I.default.Types.PAYPAL,
            label: n ? v : e.email
          };
          if (e instanceof c.SofortSourceRecord) return {
            brand: I.default.Types.SOFORT,
            label: n ? v : e.email
          };
          else if (e instanceof c.GiropaySourceRecord) return {
            brand: I.default.Types.GIROPAY,
            label: P.default.Messages.PAYMENT_SOURCE_GIROPAY
          };
          else if (e instanceof c.Przelewy24SourceRecord) return {
            brand: I.default.Types.PRZELEWY24,
            label: n ? v : e.email
          };
          else if (e instanceof c.PaysafeSourceRecord) return {
            brand: I.default.Types.PAYSAFECARD,
            label: P.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
          };
          else if (e instanceof c.GcashSourceRecord) return {
            brand: I.default.Types.GCASH,
            label: P.default.Messages.PAYMENT_SOURCE_GCASH
          };
          else if (e instanceof c.GrabPayMySourceRecord) return {
            brand: I.default.Types.GRABPAY,
            label: P.default.Messages.PAYMENT_SOURCE_GRABPAY
          };
          else if (e instanceof c.MomoWalletSourceRecord) return {
            brand: I.default.Types.MOMO_WALLET,
            label: P.default.Messages.PAYMENT_SOURCE_MOMO_WALLET
          };
          else if (e instanceof c.VenmoSourceRecord) return {
            brand: I.default.Types.VENMO,
            label: n ? "***" : "@" + e.username
          };
          else if (e instanceof c.KaKaoPaySourceRecord) return {
            brand: I.default.Types.KAKAOPAY,
            label: P.default.Messages.PAYMENT_SOURCE_KAKAOPAY
          };
          else if (e instanceof c.GoPayWalletSourceRecord) return {
            brand: I.default.Types.GOPAY_WALLET,
            label: P.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET
          };
          else if (e instanceof c.BancontactSourceRecord) return {
            brand: I.default.Types.BANCONTACT,
            label: P.default.Messages.PAYMENT_SOURCE_BANCONTACT
          };
          else if (e instanceof c.EPSSourceRecord) return {
            brand: I.default.Types.EPS,
            label: P.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
              bank: (0, o.getEPSBankDisplayNameFromBankName)(e.bank)
            })
          };
          else if (e instanceof c.IdealSourceRecord) return {
            brand: I.default.Types.IDEAL,
            label: P.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
              bank: (0, o.getIdealBankDisplayNameFromBankName)(e.bank)
            })
          };
          else if (e instanceof c.CashAppSourceRecord) return {
            brand: I.default.Types.CASH_APP,
            label: n ? "***" : e.username
          };
          throw Error("Invalid Payment Source")
        }(e, M);
        return {
          value: e.id,
          label: (0, a.jsxs)("div", {
            className: f.paymentSourceSelectedOption,
            children: [null != n ? (0, a.jsx)(I.default, {
              type: I.default.getType(n)
            }) : null, (0, a.jsx)("div", {
              className: r()(f.paymentSourceLabel, {
                [f.error]: e.invalid
              }),
              children: t
            })]
          })
        }
      }
      return {
        key: n,
        value: e.value,
        label: (0, a.jsx)("div", {
          className: f.paymentSourceLabel,
          children: e.label
        })
      }
    }),
    y = i.useMemo(() => R.find(e => e.id === E), [R, E]);
  let D = (n = A, t = y, l = null, n && null != t && !t.canRedeemTrial() ? l = P.default.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : n && null != t && t.hasFlag(m.PaymentSourceFlags.NEW) && (l = P.default.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
    helpDeskArticle: T.default.getArticleURL(_.HelpdeskArticles.PAYMENT_AUTHORIZATION_CHARGE)
  })), l);
  return (0, a.jsxs)(a.Fragment, {
    children: [g ? (0, a.jsx)(u.Button, {
      color: u.ButtonColors.BRAND,
      fullWidth: !0,
      onClick: b,
      children: P.default.Messages.PAYMENT_SOURCES_ADD
    }) : (0, a.jsx)(u.SingleSelect, {
      options: x,
      value: E,
      onChange: e => {
        if (e === N.id) null != b && b();
        else {
          let n = R.find(n => n.id === e);
          null != p && p(n)
        }
      },
      isDisabled: U,
      className: r()({
        [f.paymentSourceHasWarning]: null != D
      }, L),
      optionClassName: O,
      placeholder: P.default.Messages.PAYMENT_SOURCE_TYPE_SELECT,
      renderOptionValue: e => {
        let [n] = e;
        return C ? (0, a.jsx)(u.Spinner, {
          type: u.SpinnerTypes.SPINNING_CIRCLE
        }) : n.label
      }
    }), null != D ? (0, a.jsxs)("div", {
      className: f.paymentSourceWarning,
      children: [(0, a.jsx)(d.default, {
        className: f.paymentSourceWarningIcon,
        color: s.default.unsafe_rawColors.YELLOW_300.css
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        children: D
      })]
    }) : null]
  })
}