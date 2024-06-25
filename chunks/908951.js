n.d(t, {
  Z: function() {
    return M
  }
}), n(47120), n(411104);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  r = n(512722),
  l = n.n(r),
  c = n(442837),
  d = n(481060),
  u = n(976255),
  _ = n(366939),
  p = n(623573),
  m = n(190947),
  f = n(275850),
  E = n(906732),
  I = n(15640),
  C = n(246946),
  h = n(853872),
  N = n(509545),
  P = n(74538),
  g = n(212895),
  T = n(296848),
  S = n(374649),
  R = n(981631),
  A = n(689938),
  b = n(663950),
  x = n(83922);

function M(e) {
  let {
    subscription: t,
    onPaymentSourceAdded: n,
    highlightAddPaymentMethodButton: i,
    dropdownClassName: r,
    analyticsLocation: M,
    currentInvoicePreview: y,
    disabled: B = !1
  } = e, D = (0, c.e7)([C.Z], () => C.Z.hidePersonalInformation), [O, v] = (0, c.Wu)([h.Z], () => [h.Z.paymentSources, h.Z.hasFetchedPaymentSources]), U = (0, I.V)((0, T.yb)(t)), {
    analyticsLocations: Z
  } = (0, E.ZP)(), j = a.useMemo(() => Object.values(O).filter(e => !e.invalid), [O]), [w, k] = a.useState(!1), [G, F] = a.useState(t.currency), Y = async (e, n) => {
    if (null == t) throw Error("missing subscription and paymentSource");
    null == e ? await _.fG(t, n, Z, M) : await _.tq(t, e, n, Z, M), k(!1), F(n)
  }, H = async (e, n, s) => {
    k(!0);
    let a = await (0, S.hz)({
      subscriptionId: t.id,
      paymentSourceId: null == e ? void 0 : e.id,
      renewal: !0,
      currency: n,
      analyticsLocations: Z,
      analyticsLocation: M
    });
    y.currency !== a.currency || y.currency === a.currency && y.total !== a.total ? await L(a, () => {
      s(e, n)
    }, () => {
      k(!1)
    }) : s(e, n)
  }, W = e => {
    let n = N.Z.get(t.planIdForCurrencies);
    l()(null != e, "paymentSource not specified for change"), l()(null != n, "Unable to fetch plan");
    let s = (0, g.DE)(n.id, e.id, !1);
    return s.length > 0 ? s[0] : R.pKx.USD
  }, V = e => {
    null != e && H(e, W(e), Y)
  }, z = e => {
    (0, g.i1)(e.id, (0, T.yb)(t)).then(() => {
      H(e, W(e), Y)
    }), "function" == typeof n && n(e.id)
  }, K = () => {
    (0, d.openModalLazy)(async () => e => (0, s.jsx)(p.default, {
      ...e,
      onAddPaymentSource: z,
      analyticsLocation: M
    }), {
      onCloseCallback: () => {
        (0, u.fw)()
      },
      onCloseRequest: R.dG4
    })
  };
  if (t.isPurchasedExternally) return (e => {
    l()(null != e.paymentGateway, "Expected payment gateway when managed externally");
    let t = (0, P.JE)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
    return (0, s.jsx)(d.Anchor, {
      href: t,
      useDefaultUnderlineStyles: !1,
      className: b.externalLink,
      children: (0, s.jsx)(d.Button, {
        fullWidth: !0,
        look: d.Button.Looks.FILLED,
        color: d.Button.Colors.PRIMARY,
        children: A.Z.Messages.BILLING_MANAGE_BILLING
      })
    })
  })(t);
  if (!v || !U) return (0, s.jsx)(d.Spinner, {});
  if (!(j.length > 0)) return (0, s.jsx)(d.Button, {
    fullWidth: !0,
    look: d.Button.Looks.FILLED,
    color: i ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
    onClick: K,
    children: A.Z.Messages.BILLING_ADD_PAYMENT_METHOD
  });
  else {
    let e = N.Z.get(t.planIdForCurrencies);
    l()(null != e, "Unable to fetch plan");
    let n = (0, g.DE)(e, t.paymentSourceId, !1);
    return (0, s.jsxs)(s.Fragment, {
      children: [(() => {
        let e = t.paymentSourceId;
        return (0, s.jsx)(f.Z, {
          prependOption: null == e ? {
            label: A.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
            value: null
          } : null,
          className: r,
          paymentSources: j,
          hidePersonalInformation: D,
          selectedPaymentSourceId: e,
          onChange: V,
          onPaymentSourceAdd: K,
          dropdownLoading: w,
          disabled: B
        })
      })(), null != t.paymentSourceId ? (0, s.jsx)(m.b, {
        currencies: n,
        children: (0, s.jsxs)("div", {
          className: o()(b.currency, x.flex, x.alignCenter),
          children: [(0, s.jsx)("div", {
            children: A.Z.Messages.PAYMENT_CURRENCY_PAYING_IN
          }), (0, s.jsx)(m.Z, {
            className: b.currencyDropdown,
            selectedCurrency: G,
            currencies: n,
            onChange: e => {
              H(void 0, e, Y)
            }
          })]
        })
      }) : null]
    })
  }
}
let L = async (e, t, a) => {
  let i = await (0, d.openModalLazy)(async () => {
    let {
      default: i
    } = await n.e("97516").then(n.bind(n, 358927));
    return n => (0, s.jsx)(i, {
      newInvoice: e,
      onConfirm: t,
      onCancel: a,
      modalProps: n
    })
  }, {
    onCloseRequest: () => {
      null != i && (0, d.closeModal)(i), a()
    }
  })
}