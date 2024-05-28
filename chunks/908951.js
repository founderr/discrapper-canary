"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("47120"), s("411104");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  r = s.n(i),
  l = s("512722"),
  u = s.n(l),
  o = s("442837"),
  d = s("481060"),
  c = s("976255"),
  p = s("366939"),
  f = s("623573"),
  E = s("190947"),
  m = s("275850"),
  _ = s("906732"),
  S = s("15640"),
  I = s("246946"),
  N = s("853872"),
  P = s("509545"),
  C = s("74538"),
  T = s("212895"),
  h = s("296848"),
  A = s("374649"),
  R = s("981631"),
  M = s("689938"),
  y = s("581339"),
  g = s("961047");

function L(e) {
  let {
    subscription: t,
    onPaymentSourceAdded: s,
    highlightAddPaymentMethodButton: i,
    dropdownClassName: l,
    analyticsLocation: L,
    currentInvoicePreview: D,
    disabled: b = !1
  } = e, U = (0, o.useStateFromStores)([I.default], () => I.default.hidePersonalInformation), [v, O] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.paymentSources, N.default.hasFetchedPaymentSources]), B = (0, S.useSubscriptionPlansLoaded)((0, h.getSubscriptionSKUs)(t)), {
    analyticsLocations: j
  } = (0, _.default)(), G = n.useMemo(() => Object.values(v).filter(e => !e.invalid), [v]), [k, F] = n.useState(!1), [w, Y] = n.useState(t.currency), H = async (e, s) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await p.changeSubscriptionCurrency(t, s, j, L) : await p.changePaymentSource(t, e, s, j, L), F(!1), Y(s)
  }, W = async (e, s, a) => {
    F(!0);
    let n = await (0, A.updateSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      paymentSourceId: null == e ? void 0 : e.id,
      renewal: !0,
      currency: s,
      analyticsLocations: j,
      analyticsLocation: L
    });
    D.currency !== n.currency || D.currency === n.currency && D.total !== n.total ? await x(n, () => {
      a(e, s)
    }, () => {
      F(!1)
    }) : a(e, s)
  }, K = e => {
    let s = P.default.get(t.planIdForCurrencies);
    u()(null != e, "paymentSource not specified for change"), u()(null != s, "Unable to fetch plan");
    let a = (0, T.getCurrencies)(s.id, e.id, !1);
    return a.length > 0 ? a[0] : R.CurrencyCodes.USD
  }, V = e => {
    null != e && W(e, K(e), H)
  }, z = e => {
    (0, T.fetchSubscriptionPlansOnNewPaymentSource)(e.id, (0, h.getSubscriptionSKUs)(t)).then(() => {
      W(e, K(e), H)
    }), "function" == typeof s && s(e.id)
  }, Z = () => {
    (0, d.openModalLazy)(async () => e => (0, a.jsx)(f.default, {
      ...e,
      onAddPaymentSource: z,
      analyticsLocation: L
    }), {
      onCloseCallback: () => {
        (0, c.clearError)()
      },
      onCloseRequest: R.NOOP
    })
  };
  if (t.isPurchasedExternally) return (e => {
    u()(null != e.paymentGateway, "Expected payment gateway when managed externally");
    let t = (0, C.getExternalSubscriptionMethodUrl)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
    return (0, a.jsx)(d.Anchor, {
      href: t,
      useDefaultUnderlineStyles: !1,
      className: y.externalLink,
      children: (0, a.jsx)(d.Button, {
        fullWidth: !0,
        look: d.Button.Looks.FILLED,
        color: d.Button.Colors.PRIMARY,
        children: M.default.Messages.BILLING_MANAGE_BILLING
      })
    })
  })(t);
  if (!O || !B) return (0, a.jsx)(d.Spinner, {});
  if (!(G.length > 0)) return (0, a.jsx)(d.Button, {
    fullWidth: !0,
    look: d.Button.Looks.FILLED,
    color: i ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
    onClick: Z,
    children: M.default.Messages.BILLING_ADD_PAYMENT_METHOD
  });
  else {
    let e = P.default.get(t.planIdForCurrencies);
    u()(null != e, "Unable to fetch plan");
    let s = (0, T.getCurrencies)(e, t.paymentSourceId, !1);
    return (0, a.jsxs)(a.Fragment, {
      children: [(() => {
        let e = t.paymentSourceId;
        return (0, a.jsx)(m.default, {
          prependOption: null == e ? {
            label: M.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
            value: null
          } : null,
          className: l,
          paymentSources: G,
          hidePersonalInformation: U,
          selectedPaymentSourceId: e,
          onChange: V,
          onPaymentSourceAdd: Z,
          dropdownLoading: k,
          disabled: b
        })
      })(), null != t.paymentSourceId ? (0, a.jsx)(E.CurrencyWrapper, {
        currencies: s,
        children: (0, a.jsxs)("div", {
          className: r()(y.currency, g.flex, g.alignCenter),
          children: [(0, a.jsx)("div", {
            children: M.default.Messages.PAYMENT_CURRENCY_PAYING_IN
          }), (0, a.jsx)(E.default, {
            className: y.currencyDropdown,
            selectedCurrency: w,
            currencies: s,
            onChange: e => {
              W(void 0, e, H)
            }
          })]
        })
      }) : null]
    })
  }
}
let x = async (e, t, n) => {
  let i = await (0, d.openModalLazy)(async () => {
    let {
      default: i
    } = await s.e("97516").then(s.bind(s, "358927"));
    return s => (0, a.jsx)(i, {
      newInvoice: e,
      onConfirm: t,
      onCancel: n,
      modalProps: s
    })
  }, {
    onCloseRequest: () => {
      null != i && (0, d.closeModal)(i), n()
    }
  })
}