"use strict";
a.r(t), a.d(t, {
  CANADA: function() {
    return h
  },
  COUNTRIES_WITHOUT_POSTAL_CODES: function() {
    return R
  },
  COUNTRY_CODE_OPTIONS: function() {
    return b
  },
  UNITED_STATES: function() {
    return C
  },
  US_POSTAL_CODE_VALID_LENGTH: function() {
    return I
  }
}), a("47120"), a("411104");
var n, s, l, r, o, i, u, c = a("735250"),
  d = a("470079"),
  p = a("588391"),
  E = a("217986"),
  m = a("971809"),
  S = a("481060"),
  A = a("812169"),
  f = a("153124"),
  T = a("823379"),
  _ = a("754103"),
  y = a("689938"),
  N = a("282605");

function P(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let C = "US",
  h = "CA",
  I = 5,
  R = ["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"],
  b = E.default.map(e => ({
    value: e.alpha2,
    label: e.name
  })).filter(e => "KP" !== e.value && "SY" !== e.value),
  M = (0, f.uid)(),
  O = (0, f.uid)(),
  g = (0, f.uid)(),
  L = (0, f.uid)(),
  D = (0, f.uid)(),
  v = (0, f.uid)(),
  x = (0, f.uid)();
(o = n || (n = {})).NAME = "name", o.COUNTRY = "country", o.LINE1 = "line1", o.LINE2 = "line2", o.CITY = "city", o.POSTAL_CODE = "postalCode", o.STATE = "state", (i = s || (s = {})).MODAL_US = "modalUS", i.MODAL_INTL = "modalInternational", i.MODAL_US_WITH_NAME = "modalUSWithName", i.MODAL_INTL_WITH_NAME = "modalInternationalWithName", i.MODAL_US_REDUCED = "modalUSReduced", i.SETTINGS_US = "settingsUS", i.SETTINGS_INTL = "settingsInternational", i.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName", i.SETTINGS_US_MOBILE = "settingsUSMobile", i.SETTINGS_INTL_MOBILE = "settingsInternationalMobile", i.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile", (u = l || (l = {})).EDIT = "edit", u.CREATE = "create";
let Y = {
    [C]: m.States,
    [h]: p.CanadaProvinces
  },
  B = {
    name: e => ({
      name: "name",
      id: M,
      title: () => y.default.Messages.BILLING_ADDRESS_NAME,
      autoComplete: "name",
      getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? N.width100 : N.width60,
      renderInput: e => (0, c.jsx)(S.TextInput, {
        ...e
      })
    }),
    country: e => ({
      name: "country",
      id: O,
      title: () => y.default.Messages.BILLING_ADDRESS_COUNTRY,
      autoComplete: "country",
      getClassNameForLayout: e => {
        switch (e) {
          case "modalUS":
          case "modalInternational":
          case "modalUSWithName":
          case "modalInternationalWithName":
            return N.width100;
          case "modalUSReduced":
            return N.width50;
          default:
            return N.width75
        }
      },
      renderInput(e, t) {
        let {
          onChange: a,
          ...n
        } = e;
        return (0, c.jsx)(S.SearchableSelect, {
          ...n,
          autoFocus: !0,
          maxVisibleItems: 8,
          isDisabled: "edit" === t.mode,
          options: b,
          onChange: t => {
            null != a && a(t, e.name)
          }
        })
      }
    }),
    line1: e => ({
      name: "line1",
      id: g,
      title: () => y.default.Messages.BILLING_ADDRESS_ADDRESS,
      autoComplete: "address-line1",
      placeholder: () => y.default.Messages.BILLING_ADDRESS_ADDRESS_PLACEHOLDER,
      getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? N.width100 : N.width60,
      renderInput: e => (0, c.jsx)(S.TextInput, {
        ...e
      })
    }),
    line2: e => ({
      name: "line2",
      id: L,
      title: () => y.default.Messages.BILLING_ADDRESS_ADDRESS2,
      placeholder: () => y.default.Messages.BILLING_ADDRESS_ADDRESS2_PLACEHOLDER,
      autoComplete: "address-line2",
      getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? N.width100 : N.width40,
      renderInput: e => (0, c.jsx)(S.TextInput, {
        ...e
      })
    }),
    city: e => ({
      name: "city",
      id: D,
      title: () => y.default.Messages.BILLING_ADDRESS_CITY,
      autoComplete: "address-level2",
      placeholder: () => y.default.Messages.BILLING_ADDRESS_CITY_PLACEHOLDER,
      getClassNameForLayout: e => {
        switch (e) {
          case "modalInternational":
          case "modalUS":
          case "modalInternationalWithName":
          case "modalUSWithName":
          case "settingsUSMobile":
          case "settingsInternationalMobile":
          case "settingsInternationalWithoutNameMobile":
            return N.width100;
          case "settingsInternational":
            return N.width60;
          default:
            return N.width50
        }
      },
      renderInput: e => (0, c.jsx)(S.TextInput, {
        ...e
      })
    }),
    postalCode: e => {
      let t, a;
      switch (e) {
        case C:
          t = y.default.Messages.BILLING_ADDRESS_ZIP_CODE, a = y.default.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
          break;
        case h:
          t = y.default.Messages.BILLING_ADDRESS_POSTAL_CODE, a = y.default.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
          break;
        default:
          t = y.default.Messages.BILLING_ADDRESS_POSTAL_CODE
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
              return N.width100;
            case "modalUS":
            case "modalUSWithName":
            case "modalUSReduced":
            case "settingsUSMobile":
            case "settingsInternationalMobile":
            case "settingsInternationalWithoutNameMobile":
              return N.width50;
            case "settingsInternational":
              return N.width30;
            default:
              return N.width25
          }
        },
        renderInput: e => "modalUSReduced" === e.layout ? (0, c.jsx)(S.TextInput, {
          style: {
            minHeight: "45px"
          },
          ...e
        }) : (0, c.jsx)(S.TextInput, {
          ...e
        })
      }
    },
    state: e => {
      let t;
      switch (e) {
        case C:
          t = y.default.Messages.BILLING_ADDRESS_STATE;
          break;
        case h:
          t = y.default.Messages.BILLING_ADDRESS_PROVINCE;
          break;
        default:
          t = y.default.Messages.BILLING_ADDRESS_REGION
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
              return N.width100;
            case "modalUS":
            case "modalUSWithName":
              return N.width50;
            case "settingsInternational":
              return N.width30;
            default:
              return N.width25
          }
        },
        renderInput(t) {
          let a = Y[e],
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
          return [C, h].includes(e) && n ? (0, c.jsx)(S.SearchableSelect, {
            ...r,
            popoutPosition: ["modalUS", "modalInternational"].includes(s) ? "top" : void 0,
            options: a,
            onChange: e => {
              null != l && l(e, t.name)
            }
          }) : (0, c.jsx)(S.TextInput, {
            ...t
          })
        }
      }
    }
  },
  U = {
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
class k extends(r = d.PureComponent) {
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
    } = this.state, n = {}, s = (0, A.reducedPaymentInfoExperiment)({
      autoTrackExposure: !1
    }).enabled;
    (!e || a.name) && !this.hasValue(t.name) && "edit" === this.props.mode && (n.name = y.default.Messages.BILLING_ADDRESS_NAME_ERROR_REQUIRED), (!e || a.country) && !this.hasValue(t.country) && (n.country = y.default.Messages.BILLING_ADDRESS_COUNTRY_ERROR_REQUIRED), (!e || a.line1) && !this.hasValue(t.line1) && !s && (n.line1 = y.default.Messages.BILLING_ADDRESS_ADDRESS_ERROR_REQUIRED), (!e || a.city) && !this.hasValue(t.city) && !s && (n.city = y.default.Messages.BILLING_ADDRESS_CITY_ERROR_REQUIRED);
    let l = t.country;
    switch (l) {
      case C:
        if (!e || a.postalCode) {
          let e = t.postalCode;
          this.hasValue(e) ? e.length !== I ? n.postalCode = y.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(e) && (n.postalCode = y.default.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID) : n.postalCode = y.default.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED
        }(!e || a.state) && !this.hasValue(t.state) && !s && (n.state = y.default.Messages.BILLING_ADDRESS_STATE_ERROR_REQUIRED);
        break;
      case h:
        (!e || a.postalCode) && !this.hasValue(t.postalCode) && (n.postalCode = y.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED), (!e || a.state) && !this.hasValue(t.state) && !s && (n.state = y.default.Messages.BILLING_ADDRESS_PROVINCE_ERROR_REQUIRED);
        break;
      default:
        (!e || a.postalCode) && !this.hasValue(t.postalCode) && !R.includes(null != l ? l : "") && (n.postalCode = y.default.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
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
    } = this.props, r = U[a];
    if (null == r) throw Error("Provide a proper layout property.");
    let o = t.country,
      i = r.map(e => {
        let t = e.map(e => e(null != o ? o : "")).filter(T.isNotNullish);
        return t.length > 0 ? {
          fields: t
        } : null
      }).filter(T.isNotNullish);
    return (0, c.jsx)(_.default, {
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
    super(...e), P(this, "state", {
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
    }), P(this, "handleFieldBlur", () => {
      this.setState({
        errors: this.validateForm(!0)
      })
    }), P(this, "handleFieldChange", (e, t) => {
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
P(k, "Layouts", s), P(k, "Modes", l), P(k, "defaultProps", {
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
}), t.default = k