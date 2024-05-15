"use strict";
a.r(t), a.d(t, {
  DisabledTermsRequirementFormField: function() {
    return h
  },
  TermsFieldBody: function() {
    return f
  },
  TermsFieldCheckbox: function() {
    return m
  },
  TermsFormField: function() {
    return p
  }
}), a("47120");
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("481060"),
  l = a("454585"),
  o = a("814550"),
  c = a("489813"),
  d = a("689938"),
  u = a("303765");

function f(e) {
  let {
    terms: t,
    channelId: a,
    className: r
  } = e;
  return (0, n.jsx)("div", {
    className: s()(u.termsFieldBody, r),
    children: t.map((e, t) => (0, n.jsxs)("div", {
      className: u.termsRow,
      children: [(0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, n.jsx)(i.Text, {
        variant: "text-md/normal",
        className: u.termsRowContent,
        children: l.default.parseGuildVerificationFormRule(e, !0, {
          channelId: a
        })
      })]
    }, "term-".concat(t)))
  })
}

function m(e) {
  let {
    onChange: t,
    checked: a,
    disabled: r
  } = e;
  return (0, n.jsx)(i.Checkbox, {
    size: 20,
    type: i.Checkbox.Types.INVERTED,
    value: a,
    onChange: t,
    disabled: r,
    style: {
      borderWidth: 2
    },
    className: u.checkbox,
    children: (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: d.default.Messages.MEMBER_VERIFICATION_READ_RULES
    })
  })
}

function h(e) {
  let {
    formField: t
  } = e;
  return (0, n.jsx)(c.RequirementRenderer, {
    icon: o.default,
    text: d.default.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
    meetsRequirement: !!t.response
  })
}
let p = e => {
  let {
    channelId: t,
    formField: a,
    onChange: r
  } = e;
  return (0, n.jsxs)(c.QuestionRenderer, {
    title: d.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
    children: [(0, n.jsx)(f, {
      className: u.fieldBackground,
      terms: a.values,
      channelId: t
    }), (0, n.jsx)(m, {
      onChange: r,
      checked: a.response
    })]
  })
}