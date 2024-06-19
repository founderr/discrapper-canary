t(47120);
var n, s, l, r, o = t(735250),
  i = t(470079),
  c = t(160612),
  u = t(120356),
  d = t.n(u),
  E = t(481060),
  A = t(818083),
  p = t(912454),
  _ = t(689938),
  N = t(427522),
  m = t(838009);
(l = n || (n = {})).CardNumber = "cardNumber", l.CardExpiry = "cardExpiry", l.CardCvc = "cardCvc", (r = s || (s = {})).Change = "change", r.Focus = "focus", r.Blur = "blur";
let h = (0, A.B)({
  kind: "user",
  id: "2024-05_enable_stripe_link_on_split_cardelement",
  label: "Enable Stripe Link Experiment on Split CardElement",
  defaultConfig: {
    disableLink: !0
  },
  treatments: [{
    id: 1,
    label: "Enable Stripe Link",
    config: {
      disableLink: !1
    }
  }]
});
a.Z = function(e) {
  let a = i.useRef(null),
    {
      stripeType: t,
      flipped: n,
      updateCompleted: s,
      onFocus: l,
      onBlur: r
    } = e,
    [u, A] = i.useState(p.Qy.UNKNOWN),
    [T, C] = i.useState(!1),
    [S, I] = i.useState(!1),
    [R, P] = i.useState(null),
    [M, b] = i.useState({}),
    f = (0, c.useElements)(),
    {
      disableLink: O
    } = h.useExperiment({
      location: "adding_new_card_modal"
    }, {
      autoTrackExposure: !0
    }),
    y = i.useCallback(() => {
      if (null != f) switch (t) {
        case "cardNumber": {
          let e = f.getElement(c.CardNumberElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardExpiry": {
          let e = f.getElement(c.CardExpiryElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardCvc": {
          let e = f.getElement(c.CardCvcElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur")
        }
      }
    }, [f, t]),
    g = i.useCallback(e => {
      !S && !e.empty && I(!0), null != s && s(e.complete), null != e.error && C(!1)
    }, [S, s]),
    L = i.useCallback(() => {
      C(!0), null == l || l()
    }, [l]),
    D = i.useCallback(() => {
      C(!1), null == r || r()
    }, [r]),
    v = i.useCallback(() => {
      if (null != f) switch (t) {
        case "cardNumber": {
          let e = f.getElement(c.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            u !== e.brand && A(e.brand), e.empty && S ? P(_.Z.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? P(_.Z.Messages.CREDIT_CARD_ERROR_NUMBER) : P(null), g(e)
          }), e.on("focus", L), e.on("blur", D);
          break
        }
        case "cardExpiry": {
          let e = f.getElement(c.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && S ? P(_.Z.Messages.CREDIT_CARD_ERROR_EXPIRATION) : P(null), g(e)
          }), e.on("focus", L), e.on("blur", D);
          break
        }
        case "cardCvc": {
          let e = f.getElement(c.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && S ? P(_.Z.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : P(null), g(e)
          }), e.on("focus", L), e.on("blur", D)
        }
      }
    }, [D, g, L, u, f, S, t]);

  function Z() {
    return d()(N.cardInput, {
      [N.cardInputError]: null !== R,
      [N.cardInputFocused]: T,
      [N.cardNumberInput]: "cardNumber" === t
    })
  }
  return i.useEffect(() => (v(), () => {
    y()
  }), [v, y]), i.useLayoutEffect(() => {
    let {
      current: e
    } = a;
    if (null == e) return;
    let t = window.getComputedStyle(e),
      n = window.getComputedStyle(e, "::placeholder"),
      s = t.getPropertyValue("font-family"),
      l = t.getPropertyValue("font-weight"),
      r = t.getPropertyValue("color");
    b({
      base: {
        fontFamily: s,
        fontWeight: l,
        color: r,
        fontSize: t.getPropertyValue("font-size"),
        "::placeholder": {
          color: n.getPropertyValue("color")
        }
      }
    })
  }, [a]), (0, o.jsxs)("div", {
    className: d()(N.cardNumberWrapper),
    "data-stripe-type": t,
    children: [(0, o.jsx)("div", {
      ref: a,
      className: d()(N.hiddenDiv, m.input)
    }), function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      switch (t) {
        case "cardNumber":
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(p.ZP, {
              className: N.cardIcon,
              type: u,
              flipped: n
            }), (0, o.jsx)(c.CardNumberElement, {
              options: {
                style: M,
                placeholder: _.Z.Messages.PAYMENT_SOURCE_CARD_NUMBER,
                disableLink: e
              },
              className: Z()
            })]
          });
        case "cardExpiry":
          return (0, o.jsx)(c.CardExpiryElement, {
            options: {
              style: M,
              placeholder: _.Z.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
            },
            className: Z()
          });
        case "cardCvc":
          return (0, o.jsx)(c.CardCvcElement, {
            options: {
              style: M,
              placeholder: _.Z.Messages.CREDIT_CARD_SECURITY_CODE
            },
            className: Z()
          })
      }
    }(O), (0, o.jsx)(E.InputError, {
      error: R
    })]
  })
}