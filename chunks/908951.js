t.d(s, {
  Z: function() {
    return x
  }
}), t(47120), t(411104);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(512722),
  o = t.n(r),
  c = t(442837),
  u = t(481060),
  d = t(976255),
  E = t(366939),
  _ = t(623573),
  p = t(190947),
  I = t(275850),
  m = t(906732),
  N = t(15640),
  C = t(246946),
  h = t(853872),
  P = t(509545),
  T = t(74538),
  A = t(212895),
  R = t(296848),
  S = t(374649),
  M = t(981631),
  f = t(689938),
  g = t(663950),
  L = t(83922);

function x(e) {
  let {
    subscription: s,
    onPaymentSourceAdded: t,
    highlightAddPaymentMethodButton: i,
    dropdownClassName: r,
    analyticsLocation: x,
    currentInvoicePreview: D,
    disabled: y = !1
  } = e, U = (0, c.e7)([C.Z], () => C.Z.hidePersonalInformation), [Z, v] = (0, c.Wu)([h.Z], () => [h.Z.paymentSources, h.Z.hasFetchedPaymentSources]), B = (0, N.V)((0, R.yb)(s)), {
    analyticsLocations: j
  } = (0, m.ZP)(), b = a.useMemo(() => Object.values(Z).filter(e => !e.invalid), [Z]), [G, k] = a.useState(!1), [w, Y] = a.useState(s.currency), F = async (e, t) => {
    if (null == s) throw Error("missing subscription and paymentSource");
    null == e ? await E.fG(s, t, j, x) : await E.tq(s, e, t, j, x), k(!1), Y(t)
  }, H = async (e, t, n) => {
    k(!0);
    let a = await (0, S.hz)({
      subscriptionId: s.id,
      paymentSourceId: null == e ? void 0 : e.id,
      renewal: !0,
      currency: t,
      analyticsLocations: j,
      analyticsLocation: x
    });
    D.currency !== a.currency || D.currency === a.currency && D.total !== a.total ? await O(a, () => {
      n(e, t)
    }, () => {
      k(!1)
    }) : n(e, t)
  }, W = e => {
    let t = P.Z.get(s.planIdForCurrencies);
    o()(null != e, "paymentSource not specified for change"), o()(null != t, "Unable to fetch plan");
    let n = (0, A.DE)(t.id, e.id, !1);
    return n.length > 0 ? n[0] : M.pKx.USD
  }, V = e => {
    null != e && H(e, W(e), F)
  }, z = e => {
    (0, A.i1)(e.id, (0, R.yb)(s)).then(() => {
      H(e, W(e), F)
    }), "function" == typeof t && t(e.id)
  }, K = () => {
    (0, u.openModalLazy)(async () => e => (0, n.jsx)(_.default, {
      ...e,
      onAddPaymentSource: z,
      analyticsLocation: x
    }), {
      onCloseCallback: () => {
        (0, d.fw)()
      },
      onCloseRequest: M.dG4
    })
  };
  if (s.isPurchasedExternally) return (e => {
    o()(null != e.paymentGateway, "Expected payment gateway when managed externally");
    let s = (0, T.JE)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
    return (0, n.jsx)(u.Anchor, {
      href: s,
      useDefaultUnderlineStyles: !1,
      className: g.externalLink,
      children: (0, n.jsx)(u.Button, {
        fullWidth: !0,
        look: u.Button.Looks.FILLED,
        color: u.Button.Colors.PRIMARY,
        children: f.Z.Messages.BILLING_MANAGE_BILLING
      })
    })
  })(s);
  if (!v || !B) return (0, n.jsx)(u.Spinner, {});
  if (!(b.length > 0)) return (0, n.jsx)(u.Button, {
    fullWidth: !0,
    look: u.Button.Looks.FILLED,
    color: i ? u.Button.Colors.BRAND : u.Button.Colors.PRIMARY,
    onClick: K,
    children: f.Z.Messages.BILLING_ADD_PAYMENT_METHOD
  });
  else {
    let e = P.Z.get(s.planIdForCurrencies);
    o()(null != e, "Unable to fetch plan");
    let t = (0, A.DE)(e, s.paymentSourceId, !1);
    return (0, n.jsxs)(n.Fragment, {
      children: [(() => {
        let e = s.paymentSourceId;
        return (0, n.jsx)(I.Z, {
          prependOption: null == e ? {
            label: f.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION,
            value: null
          } : null,
          className: r,
          paymentSources: b,
          hidePersonalInformation: U,
          selectedPaymentSourceId: e,
          onChange: V,
          onPaymentSourceAdd: K,
          dropdownLoading: G,
          disabled: y
        })
      })(), null != s.paymentSourceId ? (0, n.jsx)(p.b, {
        currencies: t,
        children: (0, n.jsxs)("div", {
          className: l()(g.currency, L.flex, L.alignCenter),
          children: [(0, n.jsx)("div", {
            children: f.Z.Messages.PAYMENT_CURRENCY_PAYING_IN
          }), (0, n.jsx)(p.Z, {
            className: g.currencyDropdown,
            selectedCurrency: w,
            currencies: t,
            onChange: e => {
              H(void 0, e, F)
            }
          })]
        })
      }) : null]
    })
  }
}
let O = async (e, s, a) => {
  let i = await (0, u.openModalLazy)(async () => {
    let {
      default: i
    } = await t.e("97516").then(t.bind(t, 358927));
    return t => (0, n.jsx)(i, {
      newInvoice: e,
      onConfirm: s,
      onCancel: a,
      modalProps: t
    })
  }, {
    onCloseRequest: () => {
      null != i && (0, u.closeModal)(i), a()
    }
  })
}