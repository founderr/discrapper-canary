"use strict";
a.r(t), a("47120");
var n, s, l = a("735250"),
  r = a("470079"),
  o = a("120356"),
  i = a.n(o),
  u = a("481060"),
  d = a("812169"),
  c = a("594174"),
  E = a("912454"),
  m = a("153124"),
  p = a("464179"),
  _ = a("754103"),
  S = a("12464"),
  f = a("689938"),
  N = a("250776"),
  A = a("282605");
(s = n || (n = {})).CARD_NUMBER = "cardNumber", s.EXPIRATION_DATE = "cardExpiry", s.CVC = "cardCvc", s.NAME = "name", s.COUNTRY = "country", s.POSTAL_CODE = "postalCode";
let I = (0, m.uid)(),
  C = (0, m.uid)();
t.default = function(e) {
  var t;
  let {
    onCardInfoChange: a,
    error: n
  } = e, s = r.useRef(a), [o, m] = r.useState(!1), [T, h] = r.useState({}), [y, R] = r.useState({
    name: "",
    country: "",
    postalCode: ""
  }), [L, P] = r.useState({}), [g, M] = r.useState({});

  function D(e, t) {
    !!T[e] !== t && h(a => ({
      ...a,
      [e]: t
    }))
  }
  let b = r.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = {},
      a = y.country,
      n = y.postalCode;
    if ((e || L.name) && "" === y.name && (t.name = f.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), 2 === (0, d.reducedPaymentInfoExperiment)().bucket) switch ((e || L.country) && "" === y.country && (t.country = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED), a) {
      case p.UNITED_STATES:
        (e || L.postalCode) && ("" === n ? t.postalCode = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED : n.length !== p.US_POSTAL_CODE_VALID_LENGTH ? t.postalCode = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(n) && (t.postalCode = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID));
        break;
      case p.CANADA:
        (e || L.postalCode) && "" === n && (t.postalCode = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED);
        break;
      default:
        (e || L.postalCode) && "" === n && !p.COUNTRIES_WITHOUT_POSTAL_CODES.includes(a) && (t.postalCode = f.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
    }
    return t
  }, [L, y]);
  r.useEffect(() => {
    let e = T.cardNumber && T.cardExpiry && T.cardCvc && 0 === Object.keys(b(!0)).length;
    2 === (0, d.reducedPaymentInfoExperiment)().bucket ? s.current(y, !!e) : s.current({
      name: y.name
    }, !!e)
  }, [T, y, b]);
  let O = {
      cardNumber: {
        name: "cardNumber",
        title: () => f.default.Messages.CARD_NUMBER,
        getClassNameForLayout: () => A.width100,
        renderInput: () => (0, l.jsx)(S.default, {
          stripeType: "cardNumber",
          flipped: o,
          updateCompleted: e => D("cardNumber", e)
        })
      },
      cardExpiry: {
        name: "cardExpiry",
        title: () => f.default.Messages.CREDIT_CARD_EXPIRATION_DATE,
        getClassNameForLayout: () => A.width50,
        renderInput: () => (0, l.jsx)(S.default, {
          stripeType: "cardExpiry",
          updateCompleted: e => D("cardExpiry", e)
        })
      },
      cardCvc: {
        name: "cardCvc",
        title: () => f.default.Messages.CREDIT_CARD_CVC,
        getClassNameForLayout: () => A.width50,
        renderInput: () => (0, l.jsx)(S.default, {
          stripeType: "cardCvc",
          updateCompleted: e => D("cardCvc", e),
          onFocus: () => {
            m(!0)
          },
          onBlur: () => {
            m(!1)
          }
        })
      },
      name: {
        id: "card-name",
        name: "name",
        title: () => f.default.Messages.CREDIT_CARD_NAME_ON_CARD,
        autoComplete: "cc-name",
        placeholder: () => f.default.Messages.CREDIT_CARD_NAME,
        getClassNameForLayout: () => A.width100,
        renderInput: e => (0, l.jsx)(u.TextInput, {
          ...e
        })
      }
    },
    v = {
      country: e => ({
        id: I,
        name: "country",
        title: () => f.default.Messages.BILLING_ADDRESS_COUNTRY,
        autoComplete: "country",
        getClassNameForLayout: () => A.width50,
        renderInput(e) {
          let {
            onChange: t,
            ...a
          } = e;
          return (0, l.jsx)(u.SearchableSelect, {
            ...a,
            maxVisibleItems: 8,
            options: p.COUNTRY_CODE_OPTIONS,
            onChange: a => {
              null != t && t(a, e.name)
            }
          })
        }
      }),
      postalCode: e => {
        let t, a;
        switch (e) {
          case p.UNITED_STATES:
            t = f.default.Messages.BILLING_ADDRESS_ZIP_CODE, a = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
            break;
          case p.CANADA:
            t = f.default.Messages.BILLING_ADDRESS_POSTAL_CODE, a = f.default.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
            break;
          default:
            t = f.default.Messages.BILLING_ADDRESS_POSTAL_CODE
        }
        return {
          id: C,
          name: "postalCode",
          title: () => t,
          autoComplete: "postal-code",
          placeholder: () => a,
          getClassNameForLayout: () => A.width50,
          renderInput: e => (0, l.jsx)(u.TextInput, {
            style: {
              minHeight: "45px"
            },
            ...e
          })
        }
      }
    },
    x = [{
      fields: [O.cardNumber]
    }, {
      fields: [O.cardExpiry, O.cardCvc]
    }, {
      fields: [O.name]
    }],
    U = [{
      fields: [v.country, v.postalCode]
    }],
    B = x;
  if (2 === (0, d.reducedPaymentInfoExperiment)().bucket) {
    let e = y.country,
      t = U.map(t => ({
        fields: t.fields.map(t => t(null != e ? e : ""))
      }));
    B = B.concat(t)
  }
  return (0, l.jsxs)("div", {
    children: [(null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) ? (0, l.jsxs)("div", {
      className: N.cardBrands,
      children: [(0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.visa, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.mastercard, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.discover, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.amex, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.jcb, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.dinersclub, N.cardFormHeader)
      })]
    }) : (0, l.jsxs)("div", {
      className: N.cardBrands,
      children: [(0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.visa_monochrome, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.mastercard_monochrome, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.discover_monochrome, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.amex_monochrome, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.jcb_monochrome, N.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(E.IconSizes.SMALL, N.dinersclub_monochrome, N.cardFormHeader)
      })]
    }), (0, l.jsx)(_.default, {
      form: B,
      errors: g,
      formError: n,
      values: y,
      onFieldChange: function(e, t) {
        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
        let a = {
            ...y
          },
          n = {
            ...L
          },
          s = {
            name: g.name
          };
        !L[t] && "" !== e && (n[t] = !0), a[t] = e, n[t] && "" === e ? "name" === t && (s.name = f.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED) : delete s[t], R(a), P(n), M(s)
      },
      onFieldBlur: function() {
        M(b())
      }
    })]
  })
}