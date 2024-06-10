"use strict";
a.r(t), a("47120");
var n, s, r, l, o = a("735250"),
  i = a("470079"),
  u = a("160612"),
  c = a("120356"),
  d = a.n(c),
  p = a("481060"),
  E = a("818083"),
  m = a("912454"),
  S = a("689938"),
  A = a("589695"),
  f = a("12349");
(r = n || (n = {})).CardNumber = "cardNumber", r.CardExpiry = "cardExpiry", r.CardCvc = "cardCvc", (l = s || (s = {})).Change = "change", l.Focus = "focus", l.Blur = "blur";
let T = (0, E.createExperiment)({
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
t.default = function(e) {
  let t = i.useRef(null),
    {
      stripeType: a,
      flipped: n,
      updateCompleted: s,
      onFocus: r,
      onBlur: l
    } = e,
    [c, E] = i.useState(m.IconTypes.UNKNOWN),
    [_, N] = i.useState(!1),
    [y, C] = i.useState(!1),
    [P, h] = i.useState(null),
    [I, R] = i.useState({}),
    O = (0, u.useElements)(),
    {
      disableLink: b
    } = T.useExperiment({
      location: "adding_new_card_modal"
    }, {
      autoTrackExposure: !0
    }),
    M = i.useCallback(() => {
      if (null != O) switch (a) {
        case "cardNumber": {
          let e = O.getElement(u.CardNumberElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardExpiry": {
          let e = O.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardCvc": {
          let e = O.getElement(u.CardCvcElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur")
        }
      }
    }, [O, a]),
    g = i.useCallback(e => {
      !y && !e.empty && C(!0), null != s && s(e.complete), null != e.error && N(!1)
    }, [y, s]),
    L = i.useCallback(() => {
      N(!0), null == r || r()
    }, [r]),
    D = i.useCallback(() => {
      N(!1), null == l || l()
    }, [l]),
    v = i.useCallback(() => {
      if (null != O) switch (a) {
        case "cardNumber": {
          let e = O.getElement(u.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            c !== e.brand && E(e.brand), e.empty && y ? h(S.default.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? h(S.default.Messages.CREDIT_CARD_ERROR_NUMBER) : h(null), g(e)
          }), e.on("focus", L), e.on("blur", D);
          break
        }
        case "cardExpiry": {
          let e = O.getElement(u.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && y ? h(S.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : h(null), g(e)
          }), e.on("focus", L), e.on("blur", D);
          break
        }
        case "cardCvc": {
          let e = O.getElement(u.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && y ? h(S.default.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : h(null), g(e)
          }), e.on("focus", L), e.on("blur", D)
        }
      }
    }, [D, g, L, c, O, y, a]);

  function x() {
    return d()(A.cardInput, {
      [A.cardInputError]: null !== P,
      [A.cardInputFocused]: _,
      [A.cardNumberInput]: "cardNumber" === a
    })
  }
  return i.useEffect(() => (v(), () => {
    M()
  }), [v, M]), i.useLayoutEffect(() => {
    let {
      current: e
    } = t;
    if (null == e) return;
    let a = window.getComputedStyle(e),
      n = window.getComputedStyle(e, "::placeholder"),
      s = a.getPropertyValue("font-family"),
      r = a.getPropertyValue("font-weight"),
      l = a.getPropertyValue("color");
    R({
      base: {
        fontFamily: s,
        fontWeight: r,
        color: l,
        fontSize: a.getPropertyValue("font-size"),
        "::placeholder": {
          color: n.getPropertyValue("color")
        }
      }
    })
  }, [t]), (0, o.jsxs)("div", {
    className: d()(A.cardNumberWrapper),
    "data-stripe-type": a,
    children: [(0, o.jsx)("div", {
      ref: t,
      className: d()(A.hiddenDiv, f.input)
    }), function() {
      let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      switch (a) {
        case "cardNumber":
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(m.default, {
              className: A.cardIcon,
              type: c,
              flipped: n
            }), (0, o.jsx)(u.CardNumberElement, {
              options: {
                style: I,
                placeholder: S.default.Messages.PAYMENT_SOURCE_CARD_NUMBER,
                disableLink: e
              },
              className: x()
            })]
          });
        case "cardExpiry":
          return (0, o.jsx)(u.CardExpiryElement, {
            options: {
              style: I,
              placeholder: S.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
            },
            className: x()
          });
        case "cardCvc":
          return (0, o.jsx)(u.CardCvcElement, {
            options: {
              style: I,
              placeholder: S.default.Messages.CREDIT_CARD_SECURITY_CODE
            },
            className: x()
          })
      }
    }(b), (0, o.jsx)(p.InputError, {
      error: P
    })]
  })
}