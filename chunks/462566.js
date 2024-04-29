"use strict";
a.r(t), a("47120");
var n, l, s = a("735250"),
  r = a("470079"),
  o = a("120356"),
  u = a.n(o),
  i = a("481060"),
  d = a("812169"),
  c = a("594174"),
  E = a("912454"),
  p = a("153124"),
  m = a("464179"),
  f = a("754103"),
  S = a("12464"),
  _ = a("689938"),
  A = a("598402"),
  N = a("516191");
(l = n || (n = {})).CARD_NUMBER = "cardNumber", l.EXPIRATION_DATE = "cardExpiry", l.CVC = "cardCvc", l.NAME = "name", l.COUNTRY = "country", l.POSTAL_CODE = "postalCode";
let I = (0, p.uid)(),
  T = (0, p.uid)();
t.default = function(e) {
  var t;
  let {
    onCardInfoChange: a,
    error: n
  } = e, l = r.useRef(a), [o, p] = r.useState(!1), [C, y] = r.useState({}), [R, h] = r.useState({
    name: "",
    country: "",
    postalCode: ""
  }), [L, P] = r.useState({}), [M, g] = r.useState({});

  function b(e, t) {
    !!C[e] !== t && y(a => ({
      ...a,
      [e]: t
    }))
  }
  let O = r.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = {},
      a = R.country,
      n = R.postalCode;
    if ((e || L.name) && "" === R.name && (t.name = _.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), 2 === (0, d.reducedPaymentInfoExperiment)().bucket) switch ((e || L.country) && "" === R.country && (t.country = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED), a) {
      case m.UNITED_STATES:
        (e || L.postalCode) && ("" === n ? t.postalCode = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED : n.length !== m.US_POSTAL_CODE_VALID_LENGTH ? t.postalCode = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(n) && (t.postalCode = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID));
        break;
      case m.CANADA:
        (e || L.postalCode) && "" === n && (t.postalCode = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED);
        break;
      default:
        (e || L.postalCode) && "" === n && !m.COUNTRIES_WITHOUT_POSTAL_CODES.includes(a) && (t.postalCode = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
    }
    return t
  }, [L, R]);
  r.useEffect(() => {
    let e = C.cardNumber && C.cardExpiry && C.cardCvc && 0 === Object.keys(O(!0)).length;
    2 === (0, d.reducedPaymentInfoExperiment)().bucket ? l.current(R, !!e) : l.current({
      name: R.name
    }, !!e)
  }, [C, R, O]);
  let D = {
      cardNumber: {
        name: "cardNumber",
        title: () => _.default.Messages.CARD_NUMBER,
        getClassNameForLayout: () => N.width100,
        renderInput: () => (0, s.jsx)(S.default, {
          stripeType: "cardNumber",
          flipped: o,
          updateCompleted: e => b("cardNumber", e)
        })
      },
      cardExpiry: {
        name: "cardExpiry",
        title: () => _.default.Messages.CREDIT_CARD_EXPIRATION_DATE,
        getClassNameForLayout: () => N.width50,
        renderInput: () => (0, s.jsx)(S.default, {
          stripeType: "cardExpiry",
          updateCompleted: e => b("cardExpiry", e)
        })
      },
      cardCvc: {
        name: "cardCvc",
        title: () => _.default.Messages.CREDIT_CARD_CVC,
        getClassNameForLayout: () => N.width50,
        renderInput: () => (0, s.jsx)(S.default, {
          stripeType: "cardCvc",
          updateCompleted: e => b("cardCvc", e),
          onFocus: () => {
            p(!0)
          },
          onBlur: () => {
            p(!1)
          }
        })
      },
      name: {
        id: "card-name",
        name: "name",
        title: () => _.default.Messages.CREDIT_CARD_NAME_ON_CARD,
        autoComplete: "cc-name",
        placeholder: () => _.default.Messages.CREDIT_CARD_NAME,
        getClassNameForLayout: () => N.width100,
        renderInput: e => (0, s.jsx)(i.TextInput, {
          ...e
        })
      }
    },
    v = {
      country: e => ({
        id: I,
        name: "country",
        title: () => _.default.Messages.BILLING_ADDRESS_COUNTRY,
        autoComplete: "country",
        getClassNameForLayout: () => N.width50,
        renderInput(e) {
          let {
            onChange: t,
            ...a
          } = e;
          return (0, s.jsx)(i.SearchableSelect, {
            ...a,
            maxVisibleItems: 8,
            options: m.COUNTRY_CODE_OPTIONS,
            onChange: a => {
              null != t && t(a, e.name)
            }
          })
        }
      }),
      postalCode: e => {
        let t, a;
        switch (e) {
          case m.UNITED_STATES:
            t = _.default.Messages.BILLING_ADDRESS_ZIP_CODE, a = _.default.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
            break;
          case m.CANADA:
            t = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE, a = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
            break;
          default:
            t = _.default.Messages.BILLING_ADDRESS_POSTAL_CODE
        }
        return {
          id: T,
          name: "postalCode",
          title: () => t,
          autoComplete: "postal-code",
          placeholder: () => a,
          getClassNameForLayout: () => N.width50,
          renderInput: e => (0, s.jsx)(i.TextInput, {
            style: {
              minHeight: "45px"
            },
            ...e
          })
        }
      }
    },
    x = [{
      fields: [D.cardNumber]
    }, {
      fields: [D.cardExpiry, D.cardCvc]
    }, {
      fields: [D.name]
    }],
    U = [{
      fields: [v.country, v.postalCode]
    }],
    B = x;
  if (2 === (0, d.reducedPaymentInfoExperiment)().bucket) {
    let e = R.country,
      t = U.map(t => ({
        fields: t.fields.map(t => t(null != e ? e : ""))
      }));
    B = B.concat(t)
  }
  return (0, s.jsxs)("div", {
    children: [(null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) ? (0, s.jsxs)("div", {
      className: A.cardBrands,
      children: [(0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.visa, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.mastercard, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.discover, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.amex, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.jcb, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.dinersclub, A.cardFormHeader)
      })]
    }) : (0, s.jsxs)("div", {
      className: A.cardBrands,
      children: [(0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.visa_monochrome, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.mastercard_monochrome, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.discover_monochrome, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.amex_monochrome, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.jcb_monochrome, A.cardFormHeader)
      }), (0, s.jsx)("div", {
        className: u()(E.IconSizes.SMALL, A.dinersclub_monochrome, A.cardFormHeader)
      })]
    }), (0, s.jsx)(f.default, {
      form: B,
      errors: M,
      formError: n,
      values: R,
      onFieldChange: function(e, t) {
        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
        let a = {
            ...R
          },
          n = {
            ...L
          },
          l = {
            name: M.name
          };
        !L[t] && "" !== e && (n[t] = !0), a[t] = e, n[t] && "" === e ? "name" === t && (l.name = _.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED) : delete l[t], h(a), P(n), g(l)
      },
      onFieldBlur: function() {
        g(O())
      }
    })]
  })
}