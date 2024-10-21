t(47120), t(411104);
var n,
    s,
    r,
    l,
    o,
    i,
    c,
    u = t(200651),
    d = t(192379),
    E = t(588391),
    _ = t(217986),
    A = t(971809),
    m = t(481060),
    N = t(313201),
    p = t(823379),
    h = t(754103),
    C = t(689938),
    I = t(251316);
function T(e, a, t) {
    return (
        a in e
            ? Object.defineProperty(e, a, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[a] = t),
        e
    );
}
let P = ['AE', 'AG', 'AN', 'AO', 'AW', 'BF', 'BI', 'BJ', 'BM', 'BO', 'BQ', 'BS', 'BW', 'BZ', 'CD', 'CF', 'CG', 'CI', 'CK', 'CM', 'CW', 'DJ', 'DM', 'ER', 'FJ', 'GA', 'GD', 'GH', 'GM', 'GQ', 'GY', 'HK', 'HM', 'IE', 'JM', 'KE', 'KI', 'KM', 'KN', 'KP', 'LY', 'ML', 'MO', 'MR', 'MW', 'NA', 'NR', 'NU', 'QA', 'RW', 'SB', 'SC', 'SL', 'SR', 'ST', 'SX', 'SY', 'TD', 'TF', 'TG', 'TK', 'TL', 'TO', 'TV', 'UG', 'VU', 'YE', 'ZA', 'ZW'],
    S = _.Z.map((e) => ({
        value: e.alpha2,
        label: e.name
    })).filter((e) => 'KP' !== e.value && 'SY' !== e.value),
    R = (0, N.hQ)(),
    f = (0, N.hQ)(),
    M = (0, N.hQ)(),
    O = (0, N.hQ)(),
    b = (0, N.hQ)(),
    y = (0, N.hQ)(),
    g = (0, N.hQ)();
((o = n || (n = {})).NAME = 'name'), (o.COUNTRY = 'country'), (o.LINE1 = 'line1'), (o.LINE2 = 'line2'), (o.CITY = 'city'), (o.POSTAL_CODE = 'postalCode'), (o.STATE = 'state'), ((i = s || (s = {})).MODAL_US = 'modalUS'), (i.MODAL_INTL = 'modalInternational'), (i.MODAL_US_WITH_NAME = 'modalUSWithName'), (i.MODAL_INTL_WITH_NAME = 'modalInternationalWithName'), (i.SETTINGS_US = 'settingsUS'), (i.SETTINGS_INTL = 'settingsInternational'), (i.SETTINGS_INTL_NO_NAME = 'settingsInternationalWithoutName'), (i.SETTINGS_US_MOBILE = 'settingsUSMobile'), (i.SETTINGS_INTL_MOBILE = 'settingsInternationalMobile'), (i.SETTINGS_INTL_NO_NAME_MOBILE = 'settingsInternationalWithoutNameMobile'), ((c = r || (r = {})).EDIT = 'edit'), (c.CREATE = 'create');
let L = {
        US: A.G,
        CA: E.X
    },
    D = (e) => ({
        name: 'name',
        id: R,
        title: () => C.Z.Messages.BILLING_ADDRESS_NAME,
        autoComplete: 'name',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? I.width100 : I.width60),
        renderInput: (e) => (0, u.jsx)(m.TextInput, { ...e })
    }),
    v = (e) => ({
        name: 'country',
        id: f,
        title: () => C.Z.Messages.BILLING_ADDRESS_COUNTRY,
        autoComplete: 'country',
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalUS':
                case 'modalInternational':
                case 'modalUSWithName':
                case 'modalInternationalWithName':
                    return I.width100;
                default:
                    return I.width75;
            }
        },
        renderInput(e, a) {
            let { onChange: t, ...n } = e;
            return (0, u.jsx)(m.SearchableSelect, {
                ...n,
                autoFocus: !0,
                maxVisibleItems: 8,
                isDisabled: 'edit' === a.mode,
                options: S,
                onChange: (a) => {
                    null != t && t(a, e.name);
                }
            });
        }
    }),
    Z = (e) => ({
        name: 'line1',
        id: M,
        title: () => C.Z.Messages.BILLING_ADDRESS_ADDRESS,
        autoComplete: 'address-line1',
        placeholder: () => C.Z.Messages.BILLING_ADDRESS_ADDRESS_PLACEHOLDER,
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? I.width100 : I.width60),
        renderInput: (e) => (0, u.jsx)(m.TextInput, { ...e })
    }),
    x = (e) => ({
        name: 'line2',
        id: O,
        title: () => C.Z.Messages.BILLING_ADDRESS_ADDRESS2,
        placeholder: () => C.Z.Messages.BILLING_ADDRESS_ADDRESS2_PLACEHOLDER,
        autoComplete: 'address-line2',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? I.width100 : I.width40),
        renderInput: (e) => (0, u.jsx)(m.TextInput, { ...e })
    }),
    Y = (e) => ({
        name: 'city',
        id: b,
        title: () => C.Z.Messages.BILLING_ADDRESS_CITY,
        autoComplete: 'address-level2',
        placeholder: () => C.Z.Messages.BILLING_ADDRESS_CITY_PLACEHOLDER,
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalInternational':
                case 'modalUS':
                case 'modalInternationalWithName':
                case 'modalUSWithName':
                case 'settingsUSMobile':
                case 'settingsInternationalMobile':
                case 'settingsInternationalWithoutNameMobile':
                    return I.width100;
                case 'settingsInternational':
                    return I.width60;
                default:
                    return I.width50;
            }
        },
        renderInput: (e) => (0, u.jsx)(m.TextInput, { ...e })
    }),
    U = (e) => {
        let a, t;
        switch (e) {
            case 'US':
                (a = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE), (t = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE_PLACEHOLDER);
                break;
            case 'CA':
                (a = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE), (t = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_CANADA_PLACEHOLDER);
                break;
            default:
                a = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE;
        }
        return {
            name: 'postalCode',
            id: y,
            title: () => a,
            autoComplete: 'postal-code',
            placeholder: () => t,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                        return I.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return I.width50;
                    case 'settingsInternational':
                        return I.width30;
                    default:
                        return I.width25;
                }
            },
            renderInput: (e) => (0, u.jsx)(m.TextInput, { ...e })
        };
    },
    B = (e) => {
        let a;
        switch (e) {
            case 'US':
                a = C.Z.Messages.BILLING_ADDRESS_STATE;
                break;
            case 'CA':
                a = C.Z.Messages.BILLING_ADDRESS_PROVINCE;
                break;
            default:
                a = C.Z.Messages.BILLING_ADDRESS_REGION;
        }
        return {
            name: 'state',
            id: g,
            title: () => a,
            autoComplete: 'address-level1',
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return I.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                        return I.width50;
                    case 'settingsInternational':
                        return I.width30;
                    default:
                        return I.width25;
                }
            },
            renderInput(a) {
                let t = L[e],
                    n =
                        null == a.value ||
                        '' === a.value ||
                        (null != t &&
                            null !=
                                t.find((e) => {
                                    let { value: t } = e;
                                    return t === a.value;
                                })),
                    { layout: s, onChange: r, ...l } = a;
                return ['US', 'CA'].includes(e) && n
                    ? (0, u.jsx)(m.SearchableSelect, {
                          ...l,
                          popoutPosition: ['modalUS', 'modalInternational'].includes(s) ? 'top' : void 0,
                          options: t,
                          onChange: (e) => {
                              null != r && r(e, a.name);
                          }
                      })
                    : (0, u.jsx)(m.TextInput, { ...a });
            }
        };
    },
    H = {
        modalUS: [[v], [Z], [x], [Y], [B, U]],
        modalInternational: [[v], [Z], [x], [Y], [B], [U]],
        modalUSWithName: [[v], [D], [Z], [x], [Y], [B, U]],
        modalInternationalWithName: [[v], [D], [Z], [x], [Y], [B], [U]],
        settingsUS: [[D], [Z, x], [Y, B, U], [v]],
        settingsUSMobile: [[D], [Z], [x], [Y], [B], [U], [v]],
        settingsInternational: [[D], [Z, x], [Y], [B, U], [v]],
        settingsInternationalMobile: [[D], [Z], [x], [Y], [B], [U], [v]],
        settingsInternationalWithoutName: [[Z, x], [Y], [B, U], [v]],
        settingsInternationalWithoutNameMobile: [[Z], [x], [Y], [B], [U], [v]]
    };
class w extends (l = d.PureComponent) {
    componentDidMount() {
        this.handleInfoChange();
    }
    componentDidUpdate(e, a) {
        this.state !== a && this.handleInfoChange();
    }
    hasValue(e) {
        return null != e && '' !== e;
    }
    validateForm(e) {
        let { values: a, dirtyFields: t } = this.state,
            n = {};
        (!e || t.name) && !this.hasValue(a.name) && 'edit' === this.props.mode && (n.name = C.Z.Messages.BILLING_ADDRESS_NAME_ERROR_REQUIRED), (!e || t.country) && !this.hasValue(a.country) && (n.country = C.Z.Messages.BILLING_ADDRESS_COUNTRY_ERROR_REQUIRED), (!e || t.line1) && !this.hasValue(a.line1) && (n.line1 = C.Z.Messages.BILLING_ADDRESS_ADDRESS_ERROR_REQUIRED), (!e || t.city) && !this.hasValue(a.city) && (n.city = C.Z.Messages.BILLING_ADDRESS_CITY_ERROR_REQUIRED);
        let s = a.country;
        switch (s) {
            case 'US':
                if (!e || t.postalCode) {
                    let e = a.postalCode;
                    this.hasValue(e) ? (5 !== e.length ? (n.postalCode = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_LENGTH) : !/^\d{5}$/.test(e) && (n.postalCode = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE_INVALID)) : (n.postalCode = C.Z.Messages.BILLING_ADDRESS_ZIP_CODE_ERROR_REQUIRED);
                }
                (!e || t.state) && !this.hasValue(a.state) && (n.state = C.Z.Messages.BILLING_ADDRESS_STATE_ERROR_REQUIRED);
                break;
            case 'CA':
                (!e || t.postalCode) && !this.hasValue(a.postalCode) && (n.postalCode = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED), (!e || t.state) && !this.hasValue(a.state) && (n.state = C.Z.Messages.BILLING_ADDRESS_PROVINCE_ERROR_REQUIRED);
                break;
            default:
                (!e || t.postalCode) && !this.hasValue(a.postalCode) && !P.includes(null != s ? s : '') && (n.postalCode = C.Z.Messages.BILLING_ADDRESS_POSTAL_CODE_ERROR_REQUIRED);
        }
        return n;
    }
    handleInfoChange() {
        let { values: e, dirtyFields: a } = this.state,
            t = this.validateForm(!1);
        this.props.onBillingAddressChange(e, 0 === Object.keys(t).length, Object.keys(a).length > 0);
    }
    render() {
        let { errors: e, values: a } = this.state,
            { layout: t, mode: n, className: s, error: r } = this.props,
            l = H[t];
        if (null == l) throw Error('Provide a proper layout property.');
        let o = a.country,
            i = l
                .map((e) => {
                    let a = e.map((e) => e(null != o ? o : '')).filter(p.lm);
                    return a.length > 0 ? { fields: a } : null;
                })
                .filter(p.lm);
        return (0, u.jsx)(h.Z, {
            className: s,
            form: i,
            layout: t,
            values: a,
            errors: e,
            formError: r,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: n
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', {
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
            }),
            T(this, 'handleFieldBlur', () => {
                this.setState({ errors: this.validateForm(!0) });
            }),
            T(this, 'handleFieldChange', (e, a) => {
                if (null == a) return;
                let { values: t, errors: n, dirtyFields: s } = this.state;
                delete n[a],
                    this.setState({
                        values: {
                            ...t,
                            [a]: e
                        },
                        dirtyFields: {
                            ...s,
                            [a]: !0
                        },
                        errors: n
                    });
            });
    }
}
T(w, 'Layouts', s),
    T(w, 'Modes', r),
    T(w, 'defaultProps', {
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: '',
        layout: 'modalUS',
        mode: 'create',
        error: null
    }),
    (a.ZP = w);
