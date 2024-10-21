t.d(a, {
    w: function () {
        return m;
    }
}),
    t(47120);
var n,
    s,
    r = t(200651),
    l = t(192379),
    o = t(481060),
    i = t(285888),
    c = t(754103),
    u = t(689938),
    d = t(251316),
    E = t(7539);
function _(e) {
    let { onChange: a, billingAddressInfo: t, error: n } = e,
        [s, i] = l.useState({}),
        [E, _] = l.useState({}),
        A = {
            name: 'email',
            title: () => u.Z.Messages.EMAIL,
            autoComplete: 'cc-name',
            placeholder: () => u.Z.Messages.EMAIL,
            getClassNameForLayout: () => d.width100,
            renderInput: (e) => (0, r.jsx)(o.TextInput, { ...e })
        },
        m = {
            name: 'name',
            title: () => u.Z.Messages.CREDIT_CARD_NAME,
            autoComplete: 'cc-name',
            placeholder: () => u.Z.Messages.CREDIT_CARD_NAME,
            getClassNameForLayout: () => d.width100,
            renderInput: (e) => (0, r.jsx)(o.TextInput, { ...e })
        };
    return (0, r.jsx)(c.Z, {
        form: [{ fields: [A] }, { fields: [m] }],
        errors: E,
        formError: n,
        values: {
            name: t.name,
            email: t.email
        },
        onFieldChange: function (e, n) {
            if (null != n)
                !s[n] && '' !== e && i((e) => ((e[n] = !0), e)),
                    s[n] && '' === e ? _((e) => ('email' === n && (e[n] = u.Z.Messages.PAYMENT_SOURCE_EMAIL_ERROR_REQUIRED), 'name' === n && (e[n] = u.Z.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), e)) : _((e) => (delete e[n], e)),
                    a({
                        name: t.name,
                        email: t.email,
                        [n]: e
                    });
        }
    });
}
((s = n || (n = {})).EMAIL = 'email'), (s.NAME = 'name');
let A = [
    {
        label: 'Alior Bank',
        value: 'alior_bank'
    },
    {
        label: 'Bank Millenium',
        value: 'bank_millennium'
    },
    {
        label: 'Bank Nowy BFG S.A.',
        value: 'bank_nowy_bfg_sa'
    },
    {
        label: 'Bank PEKAO S.A',
        value: 'bank_pekao_sa'
    },
    {
        label: 'Banki SpBdzielcze',
        value: 'banki_spbdzielcze'
    },
    {
        label: 'Blik via redirect',
        value: 'blik'
    },
    {
        label: 'BNP Paribas',
        value: 'bnp_paribas'
    },
    {
        label: 'BOZ',
        value: 'boz'
    },
    {
        label: 'CitiHandlowy',
        value: 'citi_handlowy'
    },
    {
        label: 'Credit Agricole',
        value: 'credit_agricole'
    },
    {
        label: 'EnveloBank',
        value: 'envelobank'
    },
    {
        label: 'e-Transfer Poctowy24',
        value: 'etransfer_pocztowy24'
    },
    {
        label: 'Getin Bank',
        value: 'getin_bank'
    },
    {
        label: 'IdeaBank',
        value: 'ideabank'
    },
    {
        label: 'ING',
        value: 'ing'
    },
    {
        label: 'inteligo',
        value: 'inteligo'
    },
    {
        label: 'mBank-mtransfer',
        value: 'mbank_mtransfer'
    },
    {
        label: 'Nest Przelew',
        value: 'nest_przelew'
    },
    {
        label: 'Noble Pay',
        value: 'noble_pay'
    },
    {
        label: 'PBac z iPKO (PKO+BP)',
        value: 'pbac_z_ipko'
    },
    {
        label: 'Plus Bank',
        value: 'plus_bank'
    },
    {
        label: 'Santander-przelew24',
        value: 'santander_przelew24'
    },
    {
        label: 'T-Mobile Usbugi Bankowe',
        value: 'tmobile_usbugi_bankowe'
    },
    {
        label: 'Toyota Bank',
        value: 'toyota_bank'
    },
    {
        label: 'Volkswagen Bank',
        value: 'volkswagen_bank'
    }
];
function m(e) {
    let { onDetailsChange: a, onP24BankChange: t, error: n, billingAddressInfo: s, p24BankValue: o } = e,
        [m, N] = l.useState(o),
        p = 'p24Bank',
        h = [
            {
                fields: [
                    {
                        name: p,
                        title: () => u.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
                        getClassNameForLayout: () => d.width100,
                        renderInput: (e) =>
                            (0, r.jsx)(i.Z, {
                                maxMenuHeight: 190,
                                menuPlacement: i.Z.MenuPlacements.TOP,
                                clearable: !1,
                                options: A,
                                value: e.value,
                                onChange: (e) => {
                                    let { value: a } = e;
                                    t(a), N(a);
                                }
                            })
                    }
                ]
            }
        ];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, {
                error: n,
                billingAddressInfo: s,
                onChange: a
            }),
            (0, r.jsx)(c.Z, {
                className: E.p24Form,
                form: h,
                errors: {},
                formError: n,
                values: { [p]: m }
            })
        ]
    });
}
a.Z = _;
