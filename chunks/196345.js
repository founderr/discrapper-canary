"use strict";
s.r(t), s.d(t, {
  DisabledTermsRequirementFormField: function() {
    return A
  },
  TermsFieldBody: function() {
    return T
  },
  TermsFieldCheckbox: function() {
    return d
  },
  TermsFormField: function() {
    return I
  }
}), s("47120");
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  E = s("481060"),
  l = s("454585"),
  _ = s("814550"),
  r = s("489813"),
  u = s("689938"),
  o = s("303765");

function T(e) {
  let {
    terms: t,
    channelId: s,
    className: n
  } = e;
  return (0, a.jsx)("div", {
    className: i()(o.termsFieldBody, n),
    children: t.map((e, t) => (0, a.jsxs)("div", {
      className: o.termsRow,
      children: [(0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        className: o.termsRowContent,
        children: l.default.parseGuildVerificationFormRule(e, !0, {
          channelId: s
        })
      })]
    }, "term-".concat(t)))
  })
}

function d(e) {
  let {
    onChange: t,
    checked: s,
    disabled: n
  } = e;
  return (0, a.jsx)(E.Checkbox, {
    size: 20,
    type: E.Checkbox.Types.INVERTED,
    value: s,
    onChange: t,
    disabled: n,
    style: {
      borderWidth: 2
    },
    className: o.checkbox,
    children: (0, a.jsx)(E.Text, {
      variant: "text-sm/normal",
      children: u.default.Messages.MEMBER_VERIFICATION_READ_RULES
    })
  })
}

function A(e) {
  let {
    formField: t
  } = e;
  return (0, a.jsx)(r.RequirementRenderer, {
    icon: _.default,
    text: u.default.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
    meetsRequirement: !!t.response
  })
}
let I = e => {
  let {
    channelId: t,
    formField: s,
    onChange: n
  } = e;
  return (0, a.jsxs)(r.QuestionRenderer, {
    title: u.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
    children: [(0, a.jsx)(T, {
      className: o.fieldBackground,
      terms: s.values,
      channelId: t
    }), (0, a.jsx)(d, {
      onChange: n,
      checked: s.response
    })]
  })
}