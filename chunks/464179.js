"use strict";
a.r(t), a.d(t, {
  CANADA: function() {
    return y
  },
  COUNTRIES_WITHOUT_POSTAL_CODES: function() {
    return L
  },
  COUNTRY_CODE_OPTIONS: function() {
    return P
  },
  UNITED_STATES: function() {
    return h
  },
  US_POSTAL_CODE_VALID_LENGTH: function() {
    return R
  }
}), a("47120"), a("411104");
var n, s, l, r, o, i, u, d = a("735250"),
  c = a("470079"),
  E = a("588391"),
  m = a("217986"),
  p = a("971809"),
  _ = a("481060"),
  S = a("812169"),
  f = a("153124"),
  N = a("823379"),
  A = a("754103"),
  I = a("689938"),
  C = a("282605");

function T(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let h = "US",
  y = "CA",
  R = 5,
  L = ["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"],
  P = m.default.map(e => ({
    value: e.alpha2,
    label: e.name
  })).filter(e => "KP" !== e.value && "SY" !== e.value),
  g = (0, f.uid)(),
  M = (0, f.uid)(),
  D = (0, f.uid)(),
  b = (0, f.uid)(),
  O = (0, f.uid)(),
  v = (0, f.uid)(),
  x = (0, f.uid)();
(o = n || (n = {})).NAME = "name", o.COUNTRY = "country", o.LINE1 = "line1", o.LINE2 = "line2", o.CITY = "city", o.POSTAL_CODE = "postalCode", o.STATE = "state", (i = s || (s = {})).MODAL_US = "modalUS", i.MODAL_INTL = "modalInternational", i.MODAL_US_WITH_NAME = "modalUSWithName", i.MODAL_INTL_WITH_NAME = "modalInternationalWithName", i.MODAL_US_REDUCED = "modalUSReduced", i.SETTINGS_US = "settingsUS", i.SETTINGS_INTL = "settingsInternational", i.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName", i.SETTINGS_US_MOBILE = "settingsUSMobile", i.SETTINGS_INTL_MOBILE = "settingsInternationalMobile", i.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile", (u = l || (l = {})).EDIT = "edit", u.CREATE = "create";
let U = {
    [h]: p.States,
    [y]: E.CanadaProvinces
  },
  B = {
    name: e => ({
      name: "name",
      id: g,
      title: () => I.default.Messages.BILLING_ADDRESS_NAME,
      autoComplete: "name",
      getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? C.width100 : C.width60,
      renderInput: e => (0, d.jsx)(_.TextInput, {
        ...e
      })
    }),
    country: e => ({
      name: "country",
      id: M,
      title: () => I.default.Messages.BILLING_ADDRESS_COUNTRY,
      autoComplete: "country",
      getClassNameForLayout: e => {
        switch (e) {
          case "modalUS":
          case "modalInternational":
          case "modalUSWithName":
          case "modalInternationalWithName":
            return C.width100;
          case "modalUSReduced":
            return C.width50;
          default:
            return C.width75
        }
      },
      renderInput(e, t) {
        let {
          onChange: a,
          ...n
        } = e;
        return (0, d.jsx)(_.SearchableSelect, {
          ...n,
          autoFocus: !0,
          maxVisibleItems: 8,
          isDisabled: "edit" === t.mode,
          options: P,
          onChange: t => {
            null != a && a(t, e.name)
          }
        })
      }
    }),
    line1: e => ({
      name: "line1",
      id: D,
      title: () => I.default.Messages.BILLING_ADDRESS_ADDRESS,
      autoComplete: "address-line1",
      placeholder: () => I.default.Messages.BILLING_ADDRESS_ADDRESS_PLACEHOLDER,
      getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? C.width100 : C.width60,
      renderInput: e => (0, d.jsx)(_.TextInput, {
        ...e
      })
    }),
    line2: e => ({
      name: "line2",
      id: b,
      title: () => I.default.Messages.BILLING_ADDRESS_ADDRESS2,
      placeholder: () => I.default.Messages.BILLING_ADDRESS_ADDRESS2_PLACEHOLDER,
      autoComplete: "address-line2",
      getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? C.width100 : C.width40,
      renderInput: e => (0, d.jsx)(_.TextInput, {
        ...e
      })
    }),
    city: e => ({
      name: "city",
      id: O,
      title: () => I.default.Messages.BILLING_ADDRESS_CITY,
      autoComplete: "address-level2",
      placeholder: () => I.default.Messages.BILLING_ADDRESS_CITY_PLACEHOLDER,
      getClassNameForLayout: e => {
        switch (e) {
          case "modalInternational":
          case "modalUS":
          case "modalInternationalWithName":
          case "modalUSWithName":
          case "settingsUSMobile":
          case "settingsInternationalMobile":
          case "settingsInternationalWithoutNameMobile":
            return C.width100;
          case "settingsInternational":
            return C.width60;
          default:
            return C.width50
        }
      },
      renderInput: e => (0, d.jsx)(_.TextInput, {
        ...e
      })
    }),
    postalCode: e => {
      let t, a;
      switch (e) {
        case h:
          t = I.default.Messages.BILLING_ADDRESS_ZIP_CODE, a = I.default.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
          break;
        case y:
          t = I.default.Messages.BILLING_ADDRESS_POSTAL_CODE, a = I.default.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
          break;
        default:
          t = I.default.Messages.BILLING_ADDRESS_POSTAL_CODE
      }
      return {
        name: "postalCode",
        id: v,
        title: () => t,
        autoComplete: "postal-code",
        placeholder: () => a,
        getClassNameForLayout: e => {
          switch (e) {
            case "modalInternational":
            case "modalInternationalWithName":
              return C.width100;
            case "modalUS":
            case "modalUSWithName":
            case "modalUSReduced":
            case "settingsUSMobile":
            case "settingsInternationalMobile":
            case "settingsInternationalWithoutNameMobile":
              return C.width50;
            case "settingsInternational":
              return C.width30;
            default:
              return C.width25
          }
        },
        renderInput: e => "modalUSReduced" === e.layout ? (0, d.jsx)(_.TextInput, {
          style: {
            minHeight: "45px"
          },
          ...e
        }) : (0, d.jsx)(_.TextInput, {
          ...e
        })
      }
    },
    state: e => {
      let t;
      switch (e) {
        case h:
          t = I.default.Messages.BILLING_ADDRESS_STATE;
          break;
        case y:
          t = I.default.Messages.BILLING_ADDRESS_PROVINCE;
          break;
        default:
          t = I.default.Messages.BILLING_ADDRESS_REGION
      }
      return {
        name: "state",
        id: x,
        title: () => t,
        autoComplete: "address-level1",
        getClassNameForLayout: e => {
          switch (e) {
            case "modalInternational":
            case "modalInternationalWithName":
            case "settingsUSMobile":
            case "settingsInternationalMobile":
            case "settingsInternationalWithoutNameMobile":
              return C.width100;
            case "modalUS":
            case "modalUSWithName":
              return C.width50;
            case "settingsInternational":
              return C.width30;
            default:
              return C.width25
          }
        },
        renderInput(t) {
          let a = U[e],
            n = null == t.value || "" === t.value || null != a && null != a.find(e => {
              let {
                value: a
              } = e;
              return a === t.value
            }),
            {
              layout: s,
              onChange: l,
              ...r
            } = t;
          return [h, y].includes(e) && n ? (0, d.jsx)(_.SearchableSelect, {
            ...r,
            popoutPosition: ["modalUS", "modalInternational"].includes(s) ? "top" : void 0,
            options: a,
            onChange: e => {
              null != l && l(e, t.name)
            }
          }) : (0, d.jsx)(_.TextInput, {
            ...t
          })
        }
      }
    }
  },
  w = {
    modalUS: [
      [B.country],
      [B.line1],
      [B.line2],
      [B.city],
      [B.state, B.postalCode]
    ],
    modalInternational: [
      [B.country],
      [B.line1],
      [B.line2],
      [B.city],
      [B.state],
      [B.postalCode]
    ],
    modalUSWithName: [
      [B.country],
      [B.name],
      [B.line1],
      [B.line2],
      [B.city],
      [B.state, B.postalCode]
    ],
    modalInternationalWithName: [
      [B.country],
      [B.name],
      [B.line1],
      [B.line2],
      [B.city],
      [B.state],
      [B.postalCode]
    ],
    modalUSReduced: [
      [B.country, B.postalCode]
    ],
    settingsUS: [
      [B.name],
      [B.line1, B.line2],
      [B.city, B.state, B.postalCode],
      [B.country]
    ],
    settingsUSMobile: [
      [B.name],
      [B.line1],
      [B.line2],
      [B.city],
      [B.state],
      [B.postalCode],
      [B.country]
    ],
    settingsInternational: [
      [B.name],
      [B.line1, B.line2],
      [B.city],
      [B.state, B.postalCode],
      [B.country]
    ],
    settingsInternationalMobile: [
      [B.name],
      [B.line1],
      [B.line2],
      [B.city],
      [B.state],
      [B.postalCode],
      [B.country]
    ],
    settingsInternationalWithoutName: [
      [B.line1, B.line2],
      [B.city],
      [B.state, B.postalCode],
      [B.country]
    ],
    settingsInternationalWithoutNameMobile: [
      [B.line1],
      [B.line2],
      [B.city],
      [B.state],
      [B.postalCode],
      [B.country]
    ]
  };
class Y extends(r = c.PureComponent) {
  componentDidMount() {
    this.handleInfoChange()
  }
  componentDidUpdate(e, t) {
    this.state !== t && this.handleInfoChange()
  }
  hasValue(e) {
    return null != e && "" !== e
  }
  validateForm(e) {
    let {
      values: t,
      dirtyFields: a
    } = this.state, n = {}, s = (0, S.reducedPaymentInfoExperiment)({
      autoTrackExposure: !1
    }).enabled;
    (!e || a.name) && !this.hasValue(t.name) && "edit" === this.props.mode && (n.name = I.default.Messages.BILLING_ADDRESS_NAME_ERROR_REQUIRED), (!e || a.country) && !this.hasValue(t.country) && (n.country = I.default.Messages.BILLING_ADDRESS_COUNTRY_ERROR_REQUIRED), (!e || a.line1) && !this.hasValue(t.line1) && !s && (n.line1 = I.default.Messages.BILLING_ADDRESS_ADDRESS_ERROR_REQUIRED), (!e || a.city) && !this.hasValue(t.city) && !s && (n.city = I.default.Messages.BILLING_ADDRESS_CITY_ERROR_REQUIRED);
    let l = t.country;
    switch (l) {
      case h:
        if (!e || a.postalCode) {
          let e = t.postalCode;
          this.hasValue(e) ? e.length !== R ? n.postalCode = I.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(e) && (n.postalCode = I.default.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID) : n.postalCode = I.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED
        }(!e || a.state) && !this.hasValue(t.state) && !s && (n.state = I.default.Messages.BILLING_ADDRESS_STATE_ERROR_REQUIRED);
        break;
      case y:
        (!e || a.postalCode) && !this.hasValue(t.postalCode) && (n.postalCode = I.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED), (!e || a.state) && !this.hasValue(t.state) && !s && (n.state = I.default.Messages.BILLING_ADDRESS_PROVINCE_ERROR_REQUIRED);
        break;
      default:
        (!e || a.postalCode) && !this.hasValue(t.postalCode) && !L.includes(null != l ? l : "") && (n.postalCode = I.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
    }
    return n
  }
  handleInfoChange() {
    let {
      values: e,
      dirtyFields: t
    } = this.state, a = this.validateForm(!1);
    this.props.onBillingAddressChange(e, 0 === Object.keys(a).length, Object.keys(t).length > 0)
  }
  render() {
    let {
      errors: e,
      values: t
    } = this.state, {
      layout: a,
      mode: n,
      className: s,
      error: l
    } = this.props, r = w[a];
    if (null == r) throw Error("Provide a proper layout property.");
    let o = t.country,
      i = r.map(e => {
        let t = e.map(e => e(null != o ? o : "")).filter(N.isNotNullish);
        return t.length > 0 ? {
          fields: t
        } : null
      }).filter(N.isNotNullish);
    return (0, d.jsx)(A.default, {
      className: s,
      form: i,
      layout: a,
      values: t,
      errors: e,
      formError: l,
      onFieldChange: this.handleFieldChange,
      onFieldBlur: this.handleFieldBlur,
      mode: n
    })
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      values: {
        name: this.props.name,
        country: this.props.country,
        line1: this.props.line1,
        line2: this.props.line2,
        city: this.props.city,
        postalCode: this.props.postalCode,
        state: this.props.state
      },
      dirtyFields: {},
      errors: {}
    }), T(this, "handleFieldBlur", () => {
      this.setState({
        errors: this.validateForm(!0)
      })
    }), T(this, "handleFieldChange", (e, t) => {
      if (null == t) return;
      let {
        values: a,
        errors: n,
        dirtyFields: s
      } = this.state;
      delete n[t], this.setState({
        values: {
          ...a,
          [t]: e
        },
        dirtyFields: {
          ...s,
          [t]: !0
        },
        errors: n
      })
    })
  }
}
T(Y, "Layouts", s), T(Y, "Modes", l), T(Y, "defaultProps", {
  name: "",
  country: "",
  line1: "",
  line2: "",
  city: "",
  postalCode: "",
  state: "",
  layout: "modalUS",
  mode: "create",
  error: null
}), t.default = Y