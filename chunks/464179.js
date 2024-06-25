t.d(a, {
  Ju: function() {
    return f
  },
  Ps: function() {
    return b
  },
  bD: function() {
    return R
  },
  oy: function() {
    return P
  },
  vk: function() {
    return y
  }
}), t(47120), t(411104);
var n, r, s, l, o, i, c, u = t(735250),
  d = t(470079),
  E = t(588391),
  _ = t(217986),
  p = t(971809),
  m = t(481060),
  A = t(812169),
  N = t(153124),
  h = t(823379),
  T = t(754103),
  I = t(689938),
  S = t(538298);

function C(e, a, t) {
  return a in e ? Object.defineProperty(e, a, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = t, e
}
let P = "US",
  b = "CA",
  R = 5,
  f = ["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"],
  y = _.Z.map(e => ({
    value: e.alpha2,
    label: e.name
  })).filter(e => "KP" !== e.value && "SY" !== e.value),
  M = (0, N.hQ)(),
  g = (0, N.hQ)(),
  O = (0, N.hQ)(),
  L = (0, N.hQ)(),
  D = (0, N.hQ)(),
  v = (0, N.hQ)(),
  Z = (0, N.hQ)();
(o = n || (n = {})).NAME = "name", o.COUNTRY = "country", o.LINE1 = "line1", o.LINE2 = "line2", o.CITY = "city", o.POSTAL_CODE = "postalCode", o.STATE = "state", (i = r || (r = {})).MODAL_US = "modalUS", i.MODAL_INTL = "modalInternational", i.MODAL_US_WITH_NAME = "modalUSWithName", i.MODAL_INTL_WITH_NAME = "modalInternationalWithName", i.MODAL_US_REDUCED = "modalUSReduced", i.SETTINGS_US = "settingsUS", i.SETTINGS_INTL = "settingsInternational", i.SETTINGS_INTL_NO_NAME = "settingsInternationalWithoutName", i.SETTINGS_US_MOBILE = "settingsUSMobile", i.SETTINGS_INTL_MOBILE = "settingsInternationalMobile", i.SETTINGS_INTL_NO_NAME_MOBILE = "settingsInternationalWithoutNameMobile", (c = s || (s = {})).EDIT = "edit", c.CREATE = "create";
let x = {
    [P]: p.G,
    [b]: E.X
  },
  Y = e => ({
    name: "name",
    id: M,
    title: () => I.Z.Messages.BILLING_ADDRESS_NAME,
    autoComplete: "name",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? S.width100 : S.width60,
    renderInput: e => (0, u.jsx)(m.TextInput, {
      ...e
    })
  }),
  U = e => ({
    name: "country",
    id: g,
    title: () => I.Z.Messages.BILLING_ADDRESS_COUNTRY,
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
      return (0, u.jsx)(m.SearchableSelect, {
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
  w = e => ({
    name: "line1",
    id: O,
    title: () => I.Z.Messages.BILLING_ADDRESS_ADDRESS,
    autoComplete: "address-line1",
    placeholder: () => I.Z.Messages.BILLING_ADDRESS_ADDRESS_PLACEHOLDER,
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? S.width100 : S.width60,
    renderInput: e => (0, u.jsx)(m.TextInput, {
      ...e
    })
  }),
  B = e => ({
    name: "line2",
    id: L,
    title: () => I.Z.Messages.BILLING_ADDRESS_ADDRESS2,
    placeholder: () => I.Z.Messages.BILLING_ADDRESS_ADDRESS2_PLACEHOLDER,
    autoComplete: "address-line2",
    getClassNameForLayout: e => ["modalUS", "modalInternational", "modalUSWithName", "modalInternationalWithName", "settingsUSMobile", "settingsInternationalMobile", "settingsInternationalWithoutNameMobile"].includes(e) ? S.width100 : S.width40,
    renderInput: e => (0, u.jsx)(m.TextInput, {
      ...e
    })
  }),
  H = e => ({
    name: "city",
    id: D,
    title: () => I.Z.Messages.BILLING_ADDRESS_CITY,
    autoComplete: "address-level2",
    placeholder: () => I.Z.Messages.BILLING_ADDRESS_CITY_PLACEHOLDER,
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
    renderInput: e => (0, u.jsx)(m.TextInput, {
      ...e
    })
  }),
  k = e => {
    let a, t;
    switch (e) {
      case P:
        a = I.Z.Messages.BILLING_ADDRESS_ZIP_CODE, t = I.Z.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER;
        break;
      case b:
        a = I.Z.Messages.BILLING_ADDRESS_POSTAL_CODE, t = I.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER;
        break;
      default:
        a = I.Z.Messages.BILLING_ADDRESS_POSTAL_CODE
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
      renderInput: e => "modalUSReduced" === e.layout ? (0, u.jsx)(m.TextInput, {
        style: {
          minHeight: "45px"
        },
        ...e
      }) : (0, u.jsx)(m.TextInput, {
        ...e
      })
    }
  },
  j = e => {
    let a;
    switch (e) {
      case P:
        a = I.Z.Messages.BILLING_ADDRESS_STATE;
        break;
      case b:
        a = I.Z.Messages.BILLING_ADDRESS_PROVINCE;
        break;
      default:
        a = I.Z.Messages.BILLING_ADDRESS_REGION
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
            layout: r,
            onChange: s,
            ...l
          } = a;
        return [P, b].includes(e) && n ? (0, u.jsx)(m.SearchableSelect, {
          ...l,
          popoutPosition: ["modalUS", "modalInternational"].includes(r) ? "top" : void 0,
          options: t,
          onChange: e => {
            null != s && s(e, a.name)
          }
        }) : (0, u.jsx)(m.TextInput, {
          ...a
        })
      }
    }
  },
  F = {
    modalUS: [
      [U],
      [w],
      [B],
      [H],
      [j, k]
    ],
    modalInternational: [
      [U],
      [w],
      [B],
      [H],
      [j],
      [k]
    ],
    modalUSWithName: [
      [U],
      [Y],
      [w],
      [B],
      [H],
      [j, k]
    ],
    modalInternationalWithName: [
      [U],
      [Y],
      [w],
      [B],
      [H],
      [j],
      [k]
    ],
    modalUSReduced: [
      [U, k]
    ],
    settingsUS: [
      [Y],
      [w, B],
      [H, j, k],
      [U]
    ],
    settingsUSMobile: [
      [Y],
      [w],
      [B],
      [H],
      [j],
      [k],
      [U]
    ],
    settingsInternational: [
      [Y],
      [w, B],
      [H],
      [j, k],
      [U]
    ],
    settingsInternationalMobile: [
      [Y],
      [w],
      [B],
      [H],
      [j],
      [k],
      [U]
    ],
    settingsInternationalWithoutName: [
      [w, B],
      [H],
      [j, k],
      [U]
    ],
    settingsInternationalWithoutNameMobile: [
      [w],
      [B],
      [H],
      [j],
      [k],
      [U]
    ]
  };
class W extends(l = d.PureComponent) {
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
    } = this.state, n = {}, r = (0, A._)({
      autoTrackExposure: !1
    }).enabled;
    (!e || t.name) && !this.hasValue(a.name) && "edit" === this.props.mode && (n.name = I.Z.Messages.BILLING_ADDRESS_NAME_ERROR_REQUIRED), (!e || t.country) && !this.hasValue(a.country) && (n.country = I.Z.Messages.BILLING_ADDRESS_COUNTRY_ERROR_REQUIRED), (!e || t.line1) && !this.hasValue(a.line1) && !r && (n.line1 = I.Z.Messages.BILLING_ADDRESS_ADDRESS_ERROR_REQUIRED), (!e || t.city) && !this.hasValue(a.city) && !r && (n.city = I.Z.Messages.BILLING_ADDRESS_CITY_ERROR_REQUIRED);
    let s = a.country;
    switch (s) {
      case P:
        if (!e || t.postalCode) {
          let e = a.postalCode;
          this.hasValue(e) ? e.length !== R ? n.postalCode = I.Z.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH : !/^\d{5}$/.test(e) && (n.postalCode = I.Z.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID) : n.postalCode = I.Z.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED
        }(!e || t.state) && !this.hasValue(a.state) && !r && (n.state = I.Z.Messages.BILLING_ADDRESS_STATE_ERROR_REQUIRED);
        break;
      case b:
        (!e || t.postalCode) && !this.hasValue(a.postalCode) && (n.postalCode = I.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED), (!e || t.state) && !this.hasValue(a.state) && !r && (n.state = I.Z.Messages.BILLING_ADDRESS_PROVINCE_ERROR_REQUIRED);
        break;
      default:
        (!e || t.postalCode) && !this.hasValue(a.postalCode) && !f.includes(null != s ? s : "") && (n.postalCode = I.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED)
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
      className: r,
      error: s
    } = this.props, l = F[t];
    if (null == l) throw Error("Provide a proper layout property.");
    let o = a.country,
      i = l.map(e => {
        let a = e.map(e => e(null != o ? o : "")).filter(h.lm);
        return a.length > 0 ? {
          fields: a
        } : null
      }).filter(h.lm);
    return (0, u.jsx)(T.Z, {
      className: r,
      form: i,
      layout: t,
      values: a,
      errors: e,
      formError: s,
      onFieldChange: this.handleFieldChange,
      onFieldBlur: this.handleFieldBlur,
      mode: n
    })
  }
  constructor(...e) {
    super(...e), C(this, "state", {
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
    }), C(this, "handleFieldBlur", () => {
      this.setState({
        errors: this.validateForm(!0)
      })
    }), C(this, "handleFieldChange", (e, a) => {
      if (null == a) return;
      let {
        values: t,
        errors: n,
        dirtyFields: r
      } = this.state;
      delete n[a], this.setState({
        values: {
          ...t,
          [a]: e
        },
        dirtyFields: {
          ...r,
          [a]: !0
        },
        errors: n
      })
    })
  }
}
C(W, "Layouts", r), C(W, "Modes", s), C(W, "defaultProps", {
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
}), a.ZP = W