n.d(t, {
    w: function () {
        return A;
    }
}),
    n(47120);
var a,
    r,
    l = n(200651),
    i = n(192379),
    s = n(481060),
    o = n(285888),
    c = n(754103),
    u = n(388032),
    d = n(251316),
    m = n(7539);
function p(e) {
    let { onChange: t, billingAddressInfo: n, error: a } = e,
        [r, o] = i.useState({}),
        [m, p] = i.useState({}),
        h = {
            name: 'email',
            title: () => u.intl.string(u.t['w/qqKC']),
            autoComplete: 'cc-name',
            placeholder: () => u.intl.string(u.t['w/qqKC']),
            getClassNameForLayout: () => d.width100,
            renderInput: (e) => (0, l.jsx)(s.TextInput, { ...e })
        },
        A = {
            name: 'name',
            title: () => u.intl.string(u.t.yf7ms7),
            autoComplete: 'cc-name',
            placeholder: () => u.intl.string(u.t.yf7ms7),
            getClassNameForLayout: () => d.width100,
            renderInput: (e) => (0, l.jsx)(s.TextInput, { ...e })
        };
    return (0, l.jsx)(c.Z, {
        form: [{ fields: [h] }, { fields: [A] }],
        errors: m,
        formError: a,
        values: {
            name: n.name,
            email: n.email
        },
        onFieldChange: function (e, a) {
            if (null != a)
                !r[a] && '' !== e && o((e) => ((e[a] = !0), e)),
                    r[a] && '' === e ? p((e) => ('email' === a && (e[a] = u.intl.string(u.t.HLcCVl)), 'name' === a && (e[a] = u.intl.string(u.t.lIkVsr)), e)) : p((e) => (delete e[a], e)),
                    t({
                        name: n.name,
                        email: n.email,
                        [a]: e
                    });
        }
    });
}
((r = a || (a = {})).EMAIL = 'email'), (r.NAME = 'name');
let h = [
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
function A(e) {
    let { onDetailsChange: t, onP24BankChange: n, error: a, billingAddressInfo: r, p24BankValue: s } = e,
        [A, E] = i.useState(s),
        N = 'p24Bank',
        f = [
            {
                fields: [
                    {
                        name: N,
                        title: () => u.intl.string(u.t.De3b8v),
                        getClassNameForLayout: () => d.width100,
                        renderInput: (e) =>
                            (0, l.jsx)(o.Z, {
                                maxMenuHeight: 190,
                                menuPlacement: o.Z.MenuPlacements.TOP,
                                clearable: !1,
                                options: h,
                                value: e.value,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    n(t), E(t);
                                }
                            })
                    }
                ]
            }
        ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(p, {
                error: a,
                billingAddressInfo: r,
                onChange: t
            }),
            (0, l.jsx)(c.Z, {
                className: m.p24Form,
                form: f,
                errors: {},
                formError: a,
                values: { [N]: A }
            })
        ]
    });
}
t.Z = p;
