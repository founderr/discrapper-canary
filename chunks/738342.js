"use strict";
a.r(t), a.d(t, {
  P24DetailForm: function() {
    return S
  }
}), a("47120");
var n, s, l = a("735250"),
  r = a("470079"),
  o = a("481060"),
  i = a("987134"),
  u = a("754103"),
  c = a("689938"),
  d = a("282605"),
  p = a("267382");

function E(e) {
  let {
    onChange: t,
    billingAddressInfo: a,
    error: n
  } = e, [s, i] = r.useState({}), [p, E] = r.useState({}), m = {
    email: {
      name: "email",
      title: () => c.default.Messages.EMAIL,
      autoComplete: "cc-name",
      placeholder: () => c.default.Messages.EMAIL,
      getClassNameForLayout: () => d.width100,
      renderInput: e => (0, l.jsx)(o.TextInput, {
        ...e
      })
    },
    name: {
      name: "name",
      title: () => c.default.Messages.CREDIT_CARD_NAME,
      autoComplete: "cc-name",
      placeholder: () => c.default.Messages.CREDIT_CARD_NAME,
      getClassNameForLayout: () => d.width100,
      renderInput: e => (0, l.jsx)(o.TextInput, {
        ...e
      })
    }
  }, S = [{
    fields: [m.email]
  }, {
    fields: [m.name]
  }];
  return (0, l.jsx)(u.default, {
    form: S,
    errors: p,
    formError: n,
    values: {
      name: a.name,
      email: a.email
    },
    onFieldChange: function(e, n) {
      if (null != n) !s[n] && "" !== e && i(e => (e[n] = !0, e)), s[n] && "" === e ? E(e => ("email" === n && (e[n] = c.default.Messages.PAYMENT_SOURCE_EMAIL_ERROR_REQUIRED), "name" === n && (e[n] = c.default.Messages.PAYMENT_SOURCE_NAME_ERROR_REQUIRED), e)) : E(e => (delete e[n], e)), t({
        name: a.name,
        email: a.email,
        [n]: e
      })
    }
  })
}(s = n || (n = {})).EMAIL = "email", s.NAME = "name";
let m = [{
  label: "Alior Bank",
  value: "alior_bank"
}, {
  label: "Bank Millenium",
  value: "bank_millennium"
}, {
  label: "Bank Nowy BFG S.A.",
  value: "bank_nowy_bfg_sa"
}, {
  label: "Bank PEKAO S.A",
  value: "bank_pekao_sa"
}, {
  label: "Banki SpBdzielcze",
  value: "banki_spbdzielcze"
}, {
  label: "Blik via redirect",
  value: "blik"
}, {
  label: "BNP Paribas",
  value: "bnp_paribas"
}, {
  label: "BOZ",
  value: "boz"
}, {
  label: "CitiHandlowy",
  value: "citi_handlowy"
}, {
  label: "Credit Agricole",
  value: "credit_agricole"
}, {
  label: "EnveloBank",
  value: "envelobank"
}, {
  label: "e-Transfer Poctowy24",
  value: "etransfer_pocztowy24"
}, {
  label: "Getin Bank",
  value: "getin_bank"
}, {
  label: "IdeaBank",
  value: "ideabank"
}, {
  label: "ING",
  value: "ing"
}, {
  label: "inteligo",
  value: "inteligo"
}, {
  label: "mBank-mtransfer",
  value: "mbank_mtransfer"
}, {
  label: "Nest Przelew",
  value: "nest_przelew"
}, {
  label: "Noble Pay",
  value: "noble_pay"
}, {
  label: "PBac z iPKO (PKO+BP)",
  value: "pbac_z_ipko"
}, {
  label: "Plus Bank",
  value: "plus_bank"
}, {
  label: "Santander-przelew24",
  value: "santander_przelew24"
}, {
  label: "T-Mobile Usbugi Bankowe",
  value: "tmobile_usbugi_bankowe"
}, {
  label: "Toyota Bank",
  value: "toyota_bank"
}, {
  label: "Volkswagen Bank",
  value: "volkswagen_bank"
}];

function S(e) {
  let {
    onDetailsChange: t,
    onP24BankChange: a,
    error: n,
    billingAddressInfo: s,
    p24BankValue: o
  } = e, [S, A] = r.useState(o), f = "p24Bank", T = [{
    fields: [{
      name: f,
      title: () => c.default.Messages.PAYMENT_SOURCE_PRZELEWY24_BANK_LABEL,
      getClassNameForLayout: () => d.width100,
      renderInput: e => (0, l.jsx)(i.default, {
        maxMenuHeight: 190,
        menuPlacement: i.default.MenuPlacements.TOP,
        clearable: !1,
        options: m,
        value: e.value,
        onChange: e => {
          let {
            value: t
          } = e;
          a(t), A(t)
        }
      })
    }]
  }];
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(E, {
      error: n,
      billingAddressInfo: s,
      onChange: t
    }), (0, l.jsx)(u.default, {
      className: p.p24Form,
      form: T,
      errors: {},
      formError: n,
      values: {
        [f]: S
      }
    })]
  })
}
t.default = E