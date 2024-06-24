t.d(a, {
  Ju: function() {
    return O
  },
  Ps: function() {
    return P
  },
  bD: function() {
    return M
  },
  oy: function() {
    return R
  },
  vk: function() {
    return y
  }
}), t(47120), t(411104);
var n, s, l, r, o, i, c, u = t(735250),
  E = t(470079),
  d = t(588391),
  A = t(217986),
  _ = t(971809),
  N = t(481060),
  m = t(812169),
  p = t(153124),
  h = t(823379),
  T = t(754103),
  C = t(689938),
  S = t(538298);

function I(e, a, t) {
  return a in e ? Object.defineProperty(e, a, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = t, e
}
let R = "US",
  P = "CA",
  M = 5,
  O = ["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"],
  y = A.Z.map(e => ({
    value: e.alpha2,
    label: e.name
  })).filter(e => "KP" !== e.value && "SY" !== e.value),
  f = (0, p.hQ)(),
  b = (0, p.hQ)(),
  g = (0, p.hQ)(),
  L = (0, p.hQ)(),
  D = (0, p.hQ)(),
  v = (0, p.hQ)(),
  Z = (0, p.hQ)();
(o = n || (n = {})).NAME = "name", o.COUNTRY = "country", o.LINE1 = "line1", o.LINE2 = "line2", o.CITY = "city", o.POSTAL_CODE = "postalCode", o.STATE = "state", (i = s || (s = {})).MODAL_US = "modalUS", i.MODAL_INTL = "modalInternational", i.MODAL_US_WITH_NAME = "modalUSWithName", i.MODAL_INTL_WITH_NAME = "modalInternationalWithName", i.MODAL_US_REDUCED = "modalUSReduced", i.SETTINGS_US = "settingsUS", i.SETTINGS_INTL = "settingsInternational", i.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName", i.SETTINGS_US_MOBILE = "settingsUSMobile", i.SETTINGS_INTL_MOBILE = "settingsInternationalMobile", i.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile", (c = l || (l = {})).EDIT = "edit", c.CREATE = "create";
let x = {
    [R]: _.G,
    [P]: d.X
  },
  Y = e => ({
    name: "name",
    id: f,
    title: () => C.Z.Messages.BILLING_ADDRESS_NAME,
    autoComplete: "name",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? S.width100 : S.width60,
    renderInput: e => (0, u.jsx)(N.TextInput, {
      ...e
    })
  }),
  U = e => ({
    name: "country",
    id: b,
    title: () => C.Z.Messages.BILLING_ADDRESS_COUNTRY,
    autoComplete: "country",
    getClassNameForLayout: e => {
      switch (e) {
        case "modalUS":
        case "modalInternational":
        case "modalUSWithName":
        case "modalInternationalWithName":
          return S.width100;
        case "modalUSReduced":
          return S.width50;
        default:
          return S.width75
      }
    },
    renderInput(e, a) {
      let {
        onChange: t,
        ...n
      } = e;
      return (0, u.jsx)(N.SearchableSelect, {
        ...n,
        autoFocus: !0,
        maxVisibleItems: 8,
        isDisabled: "edit" === a.mode,
        options: y,
        onChange: a => {
          null != t && t(a, e.name)
        }
      })
    }
  }),
  H = e => ({
    name: "line1",
    id: g,
    title: () => C.Z.Messages.BILLING_ADDRESS_ADDRESS,
    autoComplete: "address-line1",
    placeholder: () => C.Z.Messages.BILLING_ADDRESS_ADDRESS_PLACEHOLDER,
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? S.width100 : S.width60,
    renderInput: e => (0, u.jsx)(N.TextInput, {
      ...e
    })
  }),
  B = e => ({
    name: "line2",
    id: L,
    title: () => C.Z.Messages.BILLING_ADDRESS_ADDRESS2,
    placeholder: () => C.Z.Messages.BILLING_ADDRESS_ADDRESS2_PLACEHOLDER,
    autoComplete: "address-line2",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? S.width100 : S.width40,
    renderInput: e => (0, u.jsx)(N.TextInput, {
      ...e
    })
  }),
  j = e => ({
    name: "city",
    id: D,
    title: () => C.Z.Messages.BILLING_ADDRESS_CITY,
    autoComplete: "address-level2",
    placeholder: () => C.Z.Messages.BILLING_ADDRESS_CITY_PLACEHOLDER,
    getClassNameForLayout: e => {
      switch (e) {
        case "modalInternational":
        case "modalUS":
        case "modalInternationalWithName":
        case "modalUSWithName":
        case "settingsUSMobile":
        case "settingsInternationalMobile":
        case "settingsInternationalWithoutNameMobile":
          return S.width100;
        case "settingsInternational":
          return S.width60;
        default:
          return S.width50
      }
    },
    renderInput: e => (0, u.jsx)(N.TextInput, {
      ...e
    })
  }),
  k = e => {
    let a, t;
    switch (e) {
      case R:
        a = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE, t = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
        break;
      case P:
        a = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE, t = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
        break;
      default:
        a = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE
    }
    return {
      name: "postalCode",
      id: v,
      title: () => a,
      autoComplete: "postal-code",
      placeholder: () => t,
      getClassNameForLayout: e => {
        switch (e) {
          case "modalInternational":
          case "modalInternationalWithName":
            return S.width100;
          case "modalUS":
          case "modalUSWithName":
          case "modalUSReduced":
          case "settingsUSMobile":
          case "settingsInternationalMobile":
          case "settingsInternationalWithoutNameMobile":
            return S.width50;
          case "settingsInternational":
            return S.width30;
          default:
            return S.width25
        }
      },
      renderInput: e => "modalUSReduced" === e.layout ? (0, u.jsx)(N.TextInput, {
        style: {
          minHeight: "45px"
        },
        ...e
      }) : (0, u.jsx)(N.TextInput, {
        ...e
      })
    }
  },
  F = e => {
    let a;
    switch (e) {
      case R:
        a = C.Z.Messages.BILLING_ADDRESS_STATE;
        break;
      case P:
        a = C.Z.Messages.BILLING_ADDRESS_PROVINCE;
        break;
      default:
        a = C.Z.Messages.BILLING_ADDRESS_REGION
    }
    return {
      name: "state",
      id: Z,
      title: () => a,
      autoComplete: "address-level1",
      getClassNameForLayout: e => {
        switch (e) {
          case "modalInternational":
          case "modalInternationalWithName":
          case "settingsUSMobile":
          case "settingsInternationalMobile":
          case "settingsInternationalWithoutNameMobile":
            return S.width100;
          case "modalUS":
          case "modalUSWithName":
            return S.width50;
          case "settingsInternational":
            return S.width30;
          default:
            return S.width25
        }
      },
      renderInput(a) {
        let t = x[e],
          n = null == a.value || "" === a.value || null != t && null != t.find(e => {
            let {
              value: t
            } = e;
            return t === a.value
          }),
          {
            layout: s,
            onChange: l,
            ...r
          } = a;
        return [R, P].includes(e) && n ? (0, u.jsx)(N.SearchableSelect, {
          ...r,
          popoutPosition: ["modalUS", "modalInternational"].includes(s) ? "top" : void 0,
          options: t,
          onChange: e => {
            null != l && l(e, a.name)
          }
        }) : (0, u.jsx)(N.TextInput, {
          ...a
        })
      }
    }
  },
  w = {
    modalUS: [
      [U],
      [H],
      [B],
      [j],
      [F, k]
    ],
    modalInternational: [
      [U],
      [H],
      [B],
      [j],
      [F],
      [k]
    ],
    modalUSWithName: [
      [U],
      [Y],
      [H],
      [B],
      [j],
      [F, k]
    ],
    modalInternationalWithName: [
      [U],
      [Y],
      [H],
      [B],
      [j],
      [F],
      [k]
    ],
    modalUSReduced: [
      [U, k]
    ],
    settingsUS: [
      [Y],
      [H, B],
      [j, F, k],
      [U]
    ],
    settingsUSMobile: [
      [Y],
      [H],
      [B],
      [j],
      [F],
      [k],
      [U]
    ],
    settingsInternational: [
      [Y],
      [H, B],
      [j],
      [F, k],
      [U]
    ],
    settingsInternationalMobile: [
      [Y],
      [H],
      [B],
      [j],
      [F],
      [k],
      [U]
    ],
    settingsInternationalWithoutName: [
      [H, B],
      [j],
      [F, k],
      [U]
    ],
    settingsInternationalWithoutNameMobile: [
      [H],
      [B],
      [j],
      [F],
      [k],
      [U]
    ]
  };
class G extends(r = E.PureComponent) {
  componentDidMount() {
    this.handleInfoChange()
  }
  componentDidUpdate(e, a) {
    this.state !== a && this.handleInfoChange()
  }
  hasValue(e) {
    return null != e && "" !== e
  }
  validateForm(e) {
    let {
      values: a,
      dirtyFields: t
    } = this.state, n = {}, s = (0, m._)({
      autoTrackExposure: !1
    }).enabled;
    (!e || t.name) && !this.hasValue(a.name) && "edit" === this.props.mode && (n.name = C.Z.Messages.BILLING_ADDRESS_NAME_ERROR_REQUIRED), (!e || t.country) && !this.hasValue(a.country) && (n.country = C.Z.Messages.BILLING_ADDRESS_COUNTRY_ERROR_REQUIRED), (!e || t.line1) && !this.hasValue(a.line1) && !s && (n.line1 = C.Z.Messages.BILLING_ADDRESS_ADDRESS_ERROR_REQUIRED), (!e || t.city) && !this.hasValue(a.city) && !s && (n.city = C.Z.Messages.BILLING_ADDRESS_CITY_ERROR_REQUIRED);
    let l = a.country;
    switch (l) {
      case R:
        if (!e || t.postalCode) {
          let e = a.postalCode;
          this.hasValue(e) ? e.length !== M ? n.postalCode = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(e) && (n.postalCode = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID) : n.postalCode = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED
        }(!e || t.state) && !this.hasValue(a.state) && !s && (n.state = C.Z.Messages.BILLING_ADDRESS_STATE_ERROR_REQUIRED);
        break;
      case P:
        (!e || t.postalCode) && !this.hasValue(a.postalCode) && (n.postalCode = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED), (!e || t.state) && !this.hasValue(a.state) && !s && (n.state = C.Z.Messages.BILLING_ADDRESS_PROVINCE_ERROR_REQUIRED);
        break;
      default:
        (!e || t.postalCode) && !this.hasValue(a.postalCode) && !O.includes(null != l ? l : "") && (n.postalCode = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
    }
    return n
  }
  handleInfoChange() {
    let {
      values: e,
      dirtyFields: a
    } = this.state, t = this.validateForm(!1);
    this.props.onBillingAddressChange(e, 0 === Object.keys(t).length, Object.keys(a).length > 0)
  }
  render() {
    let {
      errors: e,
      values: a
    } = this.state, {
      layout: t,
      mode: n,
      className: s,
      error: l
    } = this.props, r = w[t];
    if (null == r) throw Error("Provide a proper layout property.");
    let o = a.country,
      i = r.map(e => {
        let a = e.map(e => e(null != o ? o : "")).filter(h.lm);
        return a.length > 0 ? {
          fields: a
        } : null
      }).filter(h.lm);
    return (0, u.jsx)(T.Z, {
      className: s,
      form: i,
      layout: t,
      values: a,
      errors: e,
      formError: l,
      onFieldChange: this.handleFieldChange,
      onFieldBlur: this.handleFieldBlur,
      mode: n
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
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
    }), I(this, "handleFieldBlur", () => {
      this.setState({
        errors: this.validateForm(!0)
      })
    }), I(this, "handleFieldChange", (e, a) => {
      if (null == a) return;
      let {
        values: t,
        errors: n,
        dirtyFields: s
      } = this.state;
      delete n[a], this.setState({
        values: {
          ...t,
          [a]: e
        },
        dirtyFields: {
          ...s,
          [a]: !0
        },
        errors: n
      })
    })
  }
}
I(G, "Layouts", s), I(G, "Modes", l), I(G, "defaultProps", {
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
}), a.ZP = G