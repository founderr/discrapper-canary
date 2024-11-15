n(47120), n(411104);
var a,
    r,
    l,
    i,
    s,
    o,
    c,
    u = n(200651),
    d = n(192379),
    m = n(588391),
    p = n(217986),
    h = n(971809),
    A = n(481060),
    E = n(313201),
    N = n(823379),
    f = n(754103),
    b = n(388032),
    _ = n(279526);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let P = ['AE', 'AG', 'AN', 'AO', 'AW', 'BF', 'BI', 'BJ', 'BM', 'BO', 'BQ', 'BS', 'BW', 'BZ', 'CD', 'CF', 'CG', 'CI', 'CK', 'CM', 'CW', 'DJ', 'DM', 'ER', 'FJ', 'GA', 'GD', 'GH', 'GM', 'GQ', 'GY', 'HK', 'HM', 'IE', 'JM', 'KE', 'KI', 'KM', 'KN', 'KP', 'LY', 'ML', 'MO', 'MR', 'MW', 'NA', 'NR', 'NU', 'QA', 'RW', 'SB', 'SC', 'SL', 'SR', 'ST', 'SX', 'SY', 'TD', 'TF', 'TG', 'TK', 'TL', 'TO', 'TV', 'UG', 'VU', 'YE', 'ZA', 'ZW'],
    g = p.Z.map((e) => ({
        value: e.alpha2,
        label: e.name
    })).filter((e) => 'KP' !== e.value && 'SY' !== e.value),
    C = (0, E.hQ)(),
    I = (0, E.hQ)(),
    T = (0, E.hQ)(),
    S = (0, E.hQ)(),
    v = (0, E.hQ)(),
    x = (0, E.hQ)(),
    L = (0, E.hQ)();
((s = a || (a = {})).NAME = 'name'), (s.COUNTRY = 'country'), (s.LINE1 = 'line1'), (s.LINE2 = 'line2'), (s.CITY = 'city'), (s.POSTAL_CODE = 'postalCode'), (s.STATE = 'state'), ((o = r || (r = {})).MODAL_US = 'modalUS'), (o.MODAL_INTL = 'modalInternational'), (o.MODAL_US_WITH_NAME = 'modalUSWithName'), (o.MODAL_INTL_WITH_NAME = 'modalInternationalWithName'), (o.SETTINGS_US = 'settingsUS'), (o.SETTINGS_INTL = 'settingsInternational'), (o.SETTINGS_INTL_NO_NAME = 'settingsInternationalWithoutName'), (o.SETTINGS_US_MOBILE = 'settingsUSMobile'), (o.SETTINGS_INTL_MOBILE = 'settingsInternationalMobile'), (o.SETTINGS_INTL_NO_NAME_MOBILE = 'settingsInternationalWithoutNameMobile'), ((c = l || (l = {})).EDIT = 'edit'), (c.CREATE = 'create');
let R = {
        US: h.G,
        CA: m.X
    },
    O = (e) => ({
        name: 'name',
        id: C,
        title: () => b.intl.string(b.t.vyuULS),
        autoComplete: 'name',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? _.width100 : _.width60),
        renderInput: (e) => (0, u.jsx)(A.TextInput, { ...e })
    }),
    M = (e) => ({
        name: 'country',
        id: I,
        title: () => b.intl.string(b.t.eDdrAA),
        autoComplete: 'country',
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalUS':
                case 'modalInternational':
                case 'modalUSWithName':
                case 'modalInternationalWithName':
                    return _.width100;
                default:
                    return _.width75;
            }
        },
        renderInput(e, t) {
            let { onChange: n, ...a } = e;
            return (0, u.jsx)(A.SearchableSelect, {
                ...a,
                autoFocus: !0,
                maxVisibleItems: 8,
                isDisabled: 'edit' === t.mode,
                options: g,
                onChange: (t) => {
                    null != n && n(t, e.name);
                }
            });
        }
    }),
    D = (e) => ({
        name: 'line1',
        id: T,
        title: () => b.intl.string(b.t.x0beVV),
        autoComplete: 'address-line1',
        placeholder: () => b.intl.string(b.t['ynII//']),
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? _.width100 : _.width60),
        renderInput: (e) => (0, u.jsx)(A.TextInput, { ...e })
    }),
    w = (e) => ({
        name: 'line2',
        id: S,
        title: () => b.intl.string(b.t.i2Z0gI),
        placeholder: () => b.intl.string(b.t.fKLoNj),
        autoComplete: 'address-line2',
        getClassNameForLayout: (e) => (['modalUS', 'modalInternational', 'modalUSWithName', 'modalInternationalWithName', 'settingsUSMobile', 'settingsInternationalMobile', 'settingsInternationalWithoutNameMobile'].includes(e) ? _.width100 : _.width40),
        renderInput: (e) => (0, u.jsx)(A.TextInput, { ...e })
    }),
    Z = (e) => ({
        name: 'city',
        id: v,
        title: () => b.intl.string(b.t.bUSWl5),
        autoComplete: 'address-level2',
        placeholder: () => b.intl.string(b.t['5rRx39']),
        getClassNameForLayout: (e) => {
            switch (e) {
                case 'modalInternational':
                case 'modalUS':
                case 'modalInternationalWithName':
                case 'modalUSWithName':
                case 'settingsUSMobile':
                case 'settingsInternationalMobile':
                case 'settingsInternationalWithoutNameMobile':
                    return _.width100;
                case 'settingsInternational':
                    return _.width60;
                default:
                    return _.width50;
            }
        },
        renderInput: (e) => (0, u.jsx)(A.TextInput, { ...e })
    }),
    j = (e) => {
        let t, n;
        switch (e) {
            case 'US':
                (t = b.intl.string(b.t['/95CeH'])), (n = b.intl.string(b.t['9xLNmp']));
                break;
            case 'CA':
                (t = b.intl.string(b.t.mfpJ9v)), (n = b.intl.string(b.t.Nc4Rzs));
                break;
            default:
                t = b.intl.string(b.t.mfpJ9v);
        }
        return {
            name: 'postalCode',
            id: x,
            title: () => t,
            autoComplete: 'postal-code',
            placeholder: () => n,
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                        return _.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return _.width50;
                    case 'settingsInternational':
                        return _.width30;
                    default:
                        return _.width25;
                }
            },
            renderInput: (e) => (0, u.jsx)(A.TextInput, { ...e })
        };
    },
    k = (e) => {
        let t;
        switch (e) {
            case 'US':
                t = b.intl.string(b.t.PNfx5e);
                break;
            case 'CA':
                t = b.intl.string(b.t['7A/tEx']);
                break;
            default:
                t = b.intl.string(b.t.w0xG2t);
        }
        return {
            name: 'state',
            id: L,
            title: () => t,
            autoComplete: 'address-level1',
            getClassNameForLayout: (e) => {
                switch (e) {
                    case 'modalInternational':
                    case 'modalInternationalWithName':
                    case 'settingsUSMobile':
                    case 'settingsInternationalMobile':
                    case 'settingsInternationalWithoutNameMobile':
                        return _.width100;
                    case 'modalUS':
                    case 'modalUSWithName':
                        return _.width50;
                    case 'settingsInternational':
                        return _.width30;
                    default:
                        return _.width25;
                }
            },
            renderInput(t) {
                let n = R[e],
                    a =
                        null == t.value ||
                        '' === t.value ||
                        (null != n &&
                            null !=
                                n.find((e) => {
                                    let { value: n } = e;
                                    return n === t.value;
                                })),
                    { layout: r, onChange: l, ...i } = t;
                return ['US', 'CA'].includes(e) && a
                    ? (0, u.jsx)(A.SearchableSelect, {
                          ...i,
                          popoutPosition: ['modalUS', 'modalInternational'].includes(r) ? 'top' : void 0,
                          options: n,
                          onChange: (e) => {
                              null != l && l(e, t.name);
                          }
                      })
                    : (0, u.jsx)(A.TextInput, { ...t });
            }
        };
    },
    H = {
        modalUS: [[M], [D], [w], [Z], [k, j]],
        modalInternational: [[M], [D], [w], [Z], [k], [j]],
        modalUSWithName: [[M], [O], [D], [w], [Z], [k, j]],
        modalInternationalWithName: [[M], [O], [D], [w], [Z], [k], [j]],
        settingsUS: [[O], [D, w], [Z, k, j], [M]],
        settingsUSMobile: [[O], [D], [w], [Z], [k], [j], [M]],
        settingsInternational: [[O], [D, w], [Z], [k, j], [M]],
        settingsInternationalMobile: [[O], [D], [w], [Z], [k], [j], [M]],
        settingsInternationalWithoutName: [[D, w], [Z], [k, j], [M]],
        settingsInternationalWithoutNameMobile: [[D], [w], [Z], [k], [j], [M]]
    };
class B extends (i = d.PureComponent) {
    componentDidMount() {
        this.handleInfoChange();
    }
    componentDidUpdate(e, t) {
        this.state !== t && this.handleInfoChange();
    }
    hasValue(e) {
        return null != e && '' !== e;
    }
    validateForm(e) {
        let { values: t, dirtyFields: n } = this.state,
            a = {};
        (!e || n.name) && !this.hasValue(t.name) && 'edit' === this.props.mode && (a.name = b.intl.string(b.t.KU5mWF)), (!e || n.country) && !this.hasValue(t.country) && (a.country = b.intl.string(b.t['+bm+zM'])), (!e || n.line1) && !this.hasValue(t.line1) && (a.line1 = b.intl.string(b.t['6HMkBw'])), (!e || n.city) && !this.hasValue(t.city) && (a.city = b.intl.string(b.t.kOrBmZ));
        let r = t.country;
        switch (r) {
            case 'US':
                if (!e || n.postalCode) {
                    let e = t.postalCode;
                    this.hasValue(e) ? (5 !== e.length ? (a.postalCode = b.intl.string(b.t['+zjAbm'])) : !/^\d{5}$/.test(e) && (a.postalCode = b.intl.string(b.t.CuZPeX))) : (a.postalCode = b.intl.string(b.t['iXID+/']));
                }
                (!e || n.state) && !this.hasValue(t.state) && (a.state = b.intl.string(b.t.RIaPdH));
                break;
            case 'CA':
                (!e || n.postalCode) && !this.hasValue(t.postalCode) && (a.postalCode = b.intl.string(b.t.LRlhb2)), (!e || n.state) && !this.hasValue(t.state) && (a.state = b.intl.string(b.t.PsJCcn));
                break;
            default:
                (!e || n.postalCode) && !this.hasValue(t.postalCode) && !P.includes(null != r ? r : '') && (a.postalCode = b.intl.string(b.t.LRlhb2));
        }
        return a;
    }
    handleInfoChange() {
        let { values: e, dirtyFields: t } = this.state,
            n = this.validateForm(!1);
        this.props.onBillingAddressChange(e, 0 === Object.keys(n).length, Object.keys(t).length > 0);
    }
    render() {
        let { errors: e, values: t } = this.state,
            { layout: n, mode: a, className: r, error: l } = this.props,
            i = H[n];
        if (null == i) throw Error('Provide a proper layout property.');
        let s = t.country,
            o = i
                .map((e) => {
                    let t = e.map((e) => e(null != s ? s : '')).filter(N.lm);
                    return t.length > 0 ? { fields: t } : null;
                })
                .filter(N.lm);
        return (0, u.jsx)(f.Z, {
            className: r,
            form: o,
            layout: n,
            values: t,
            errors: e,
            formError: l,
            onFieldChange: this.handleFieldChange,
            onFieldBlur: this.handleFieldBlur,
            mode: a
        });
    }
    constructor(...e) {
        super(...e),
            y(this, 'state', {
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
            y(this, 'handleFieldBlur', () => {
                this.setState({ errors: this.validateForm(!0) });
            }),
            y(this, 'handleFieldChange', (e, t) => {
                if (null == t) return;
                let { values: n, errors: a, dirtyFields: r } = this.state;
                delete a[t],
                    this.setState({
                        values: {
                            ...n,
                            [t]: e
                        },
                        dirtyFields: {
                            ...r,
                            [t]: !0
                        },
                        errors: a
                    });
            });
    }
}
y(B, 'Layouts', r),
    y(B, 'Modes', l),
    y(B, 'defaultProps', {
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
    (t.ZP = B);
