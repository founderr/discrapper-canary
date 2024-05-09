"use strict";
n.r(t), n.d(t, {
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
}), n("47120");
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  i = n("481060"),
  l = n("454585"),
  o = n("814550"),
  c = n("489813"),
  d = n("689938"),
  u = n("303765");

function f(e) {
  let {
    terms: t,
    channelId: n,
    className: r
  } = e;
  return (0, a.jsx)("div", {
    className: s()(u.termsFieldBody, r),
    children: t.map((e, t) => (0, a.jsxs)("div", {
      className: u.termsRow,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        className: u.termsRowContent,
        children: l.default.parseGuildVerificationFormRule(e, !0, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function m(e) {
  let {
    onChange: t,
    checked: n,
    disabled: r
  } = e;
  return (0, a.jsx)(i.Checkbox, {
    size: 20,
    type: i.Checkbox.Types.INVERTED,
    value: n,
    onChange: t,
    disabled: r,
    style: {
      borderWidth: 2
    },
    className: u.checkbox,
    children: (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: d.default.Messages.MEMBER_VERIFICATION_READ_RULES
    })
  })
}

function h(e) {
  let {
    formField: t
  } = e;
  return (0, a.jsx)(c.RequirementRenderer, {
    icon: o.default,
    text: d.default.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
    meetsRequirement: !!t.response
  })
}
let p = e => {
  let {
    channelId: t,
    formField: n,
    onChange: r
  } = e;
  return (0, a.jsxs)(c.QuestionRenderer, {
    title: d.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
    children: [(0, a.jsx)(f, {
      className: u.fieldBackground,
      terms: n.values,
      channelId: t
    }), (0, a.jsx)(m, {
      onChange: r,
      checked: n.response
    })]
  })
}