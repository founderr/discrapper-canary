n.d(t, {
  EK: function() {
    return d
  },
  G0: function() {
    return h
  },
  QC: function() {
    return m
  },
  dd: function() {
    return p
  }
}), n(47120);
var r = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  s = n(481060),
  i = n(454585),
  l = n(489813),
  c = n(689938),
  u = n(953136);

function d(e) {
  let {
    terms: t,
    channelId: n,
    className: o
  } = e;
  return (0, r.jsx)("div", {
    className: a()(u.termsFieldBody, o),
    children: t.map((e, t) => (0, r.jsxs)("div", {
      className: u.termsRow,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        className: u.termsRowContent,
        children: i.Z.parseGuildVerificationFormRule(e, !0, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function h(e) {
  let {
    onChange: t,
    checked: n,
    disabled: o
  } = e;
  return (0, r.jsx)(s.Checkbox, {
    size: 20,
    type: s.Checkbox.Types.INVERTED,
    value: n,
    onChange: t,
    disabled: o,
    style: {
      borderWidth: 2
    },
    className: u.checkbox,
    children: (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: c.Z.Messages.MEMBER_VERIFICATION_READ_RULES
    })
  })
}

function m(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(l.Ih, {
    icon: s.BookCheckIcon,
    text: c.Z.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
    meetsRequirement: !!t.response
  })
}
let p = e => {
  let {
    channelId: t,
    formField: n,
    onChange: o
  } = e;
  return (0, r.jsxs)(l.hK, {
    title: c.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
    children: [(0, r.jsx)(d, {
      className: u.fieldBackground,
      terms: n.values,
      channelId: t
    }), (0, r.jsx)(h, {
      onChange: o,
      checked: n.response
    })]
  })
}