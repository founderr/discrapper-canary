"use strict";
a.r(t), a("47120");
var n, s, l = a("735250"),
  r = a("470079"),
  o = a("120356"),
  i = a.n(o),
  u = a("481060"),
  c = a("812169"),
  d = a("594174"),
  p = a("912454"),
  E = a("153124"),
  m = a("464179"),
  S = a("754103"),
  A = a("12464"),
  f = a("689938"),
  T = a("250776"),
  _ = a("282605");
(s = n || (n = {})).CARD_NUMBER = "cardNumber", s.EXPIRATION_DATE = "cardExpiry", s.CVC = "cardCvc", s.NAME = "name", s.COUNTRY = "country", s.POSTAL_CODE = "postalCode";
let y = (0, E.uid)(),
  N = (0, E.uid)();
t.default = function(e) {
  var t;
  let {
    onCardInfoChange: a,
    error: n
  } = e, s = r.useRef(a), [o, E] = r.useState(!1), [P, C] = r.useState({}), [h, I] = r.useState({
    name: "",
    country: "",
    postalCode: ""
  }), [R, b] = r.useState({}), [M, O] = r.useState({});

  function g(e, t) {
    !!P[e] !== t && C(a => ({
      ...a,
      [e]: t
    }))
  }
  let L = r.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = {},
      a = h.country,
      n = h.postalCode;
    if ((e || R.name) && "" === h.name && (t.name = f.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), 2 === (0, c.reducedPaymentInfoExperiment)().bucket) switch ((e || R.country) && "" === h.country && (t.country = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED), a) {
      case m.UNITED_STATES:
        (e || R.postalCode) && ("" === n ? t.postalCode = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED : n.length !== m.US_POSTAL_CODE_VALID_LENGTH ? t.postalCode = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(n) && (t.postalCode = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID));
        break;
      case m.CANADA:
        (e || R.postalCode) && "" === n && (t.postalCode = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED);
        break;
      default:
        (e || R.postalCode) && "" === n && !m.COUNTRIES_WITHOUT_POSTAL_CODES.includes(a) && (t.postalCode = f.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
    }
    return t
  }, [R, h]);
  r.useEffect(() => {
    let e = P.cardNumber && P.cardExpiry && P.cardCvc && 0 === Object.keys(L(!0)).length;
    2 === (0, c.reducedPaymentInfoExperiment)().bucket ? s.current(h, !!e) : s.current({
      name: h.name
    }, !!e)
  }, [P, h, L]);
  let D = {
      cardNumber: {
        name: "cardNumber",
        title: () => f.default.Messages.CARD_NUMBER,
        getClassNameForLayout: () => _.width100,
        renderInput: () => (0, l.jsx)(A.default, {
          stripeType: "cardNumber",
          flipped: o,
          updateCompleted: e => g("cardNumber", e)
        })
      },
      cardExpiry: {
        name: "cardExpiry",
        title: () => f.default.Messages.CREDIT_CARD_EXPIRATION_DATE,
        getClassNameForLayout: () => _.width50,
        renderInput: () => (0, l.jsx)(A.default, {
          stripeType: "cardExpiry",
          updateCompleted: e => g("cardExpiry", e)
        })
      },
      cardCvc: {
        name: "cardCvc",
        title: () => f.default.Messages.CREDIT_CARD_CVC,
        getClassNameForLayout: () => _.width50,
        renderInput: () => (0, l.jsx)(A.default, {
          stripeType: "cardCvc",
          updateCompleted: e => g("cardCvc", e),
          onFocus: () => {
            E(!0)
          },
          onBlur: () => {
            E(!1)
          }
        })
      },
      name: {
        id: "card-name",
        name: "name",
        title: () => f.default.Messages.CREDIT_CARD_NAME_ON_CARD,
        autoComplete: "cc-name",
        placeholder: () => f.default.Messages.CREDIT_CARD_NAME,
        getClassNameForLayout: () => _.width100,
        renderInput: e => (0, l.jsx)(u.TextInput, {
          ...e
        })
      }
    },
    v = {
      country: e => ({
        id: y,
        name: "country",
        title: () => f.default.Messages.BILLING_ADDRESS_COUNTRY,
        autoComplete: "country",
        getClassNameForLayout: () => _.width50,
        renderInput(e) {
          let {
            onChange: t,
            ...a
          } = e;
          return (0, l.jsx)(u.SearchableSelect, {
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
            t = f.default.Messages.BILLING_ADDRESS_ZIP_CODE, a = f.default.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
            break;
          case m.CANADA:
            t = f.default.Messages.BILLING_ADDRESS_POSTAL_CODE, a = f.default.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
            break;
          default:
            t = f.default.Messages.BILLING_ADDRESS_POSTAL_CODE
        }
        return {
          id: N,
          name: "postalCode",
          title: () => t,
          autoComplete: "postal-code",
          placeholder: () => a,
          getClassNameForLayout: () => _.width50,
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
      fields: [D.cardNumber]
    }, {
      fields: [D.cardExpiry, D.cardCvc]
    }, {
      fields: [D.name]
    }],
    Y = [{
      fields: [v.country, v.postalCode]
    }],
    B = x;
  if (2 === (0, c.reducedPaymentInfoExperiment)().bucket) {
    let e = h.country,
      t = Y.map(t => ({
        fields: t.fields.map(t => t(null != e ? e : ""))
      }));
    B = B.concat(t)
  }
  return (0, l.jsxs)("div", {
    children: [(null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) ? (0, l.jsxs)("div", {
      className: T.cardBrands,
      children: [(0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.visa, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.mastercard, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.discover, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.amex, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.jcb, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.dinersclub, T.cardFormHeader)
      })]
    }) : (0, l.jsxs)("div", {
      className: T.cardBrands,
      children: [(0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.visa_monochrome, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.mastercard_monochrome, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.discover_monochrome, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.amex_monochrome, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.jcb_monochrome, T.cardFormHeader)
      }), (0, l.jsx)("div", {
        className: i()(p.IconSizes.SMALL, T.dinersclub_monochrome, T.cardFormHeader)
      })]
    }), (0, l.jsx)(S.default, {
      form: B,
      errors: M,
      formError: n,
      values: h,
      onFieldChange: function(e, t) {
        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
        let a = {
            ...h
          },
          n = {
            ...R
          },
          s = {
            name: M.name
          };
        !R[t] && "" !== e && (n[t] = !0), a[t] = e, n[t] && "" === e ? "name" === t && (s.name = f.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED) : delete s[t], I(a), b(n), O(s)
      },
      onFieldBlur: function() {
        O(L())
      }
    })]
  })
}