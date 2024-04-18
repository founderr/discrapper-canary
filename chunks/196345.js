"use strict";
i.r(t), i.d(t, {
  DisabledTermsRequirementFormField: function() {
    return C
  },
  TermsFieldBody: function() {
    return f
  },
  TermsFieldCheckbox: function() {
    return p
  },
  TermsFormField: function() {
    return m
  }
}), i("47120");
var n = i("735250");
i("470079");
var r = i("120356"),
  s = i.n(r),
  a = i("481060"),
  l = i("454585"),
  o = i("814550"),
  u = i("489813"),
  c = i("689938"),
  d = i("819104");

function f(e) {
  let {
    terms: t,
    channelId: i,
    className: r
  } = e;
  return (0, n.jsx)("div", {
    className: s()(d.termsFieldBody, r),
    children: t.map((e, t) => (0, n.jsxs)("div", {
      className: d.termsRow,
      children: [(0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        className: d.termsRowContent,
        children: l.default.parseGuildVerificationFormRule(e, !0, {
          channelId: i
        })
      })]
    }, "term-".concat(t)))
  })
}

function p(e) {
  let {
    onChange: t,
    checked: i,
    disabled: r
  } = e;
  return (0, n.jsx)(a.Checkbox, {
    size: 20,
    type: a.Checkbox.Types.INVERTED,
    value: i,
    onChange: t,
    disabled: r,
    style: {
      borderWidth: 2
    },
    className: d.checkbox,
    children: (0, n.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: c.default.Messages.MEMBER_VERIFICATION_READ_RULES
    })
  })
}

function C(e) {
  let {
    formField: t
  } = e;
  return (0, n.jsx)(u.RequirementRenderer, {
    icon: o.default,
    text: c.default.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
    meetsRequirement: !!t.response
  })
}
let m = e => {
  let {
    channelId: t,
    formField: i,
    onChange: r
  } = e;
  return (0, n.jsxs)(u.QuestionRenderer, {
    title: c.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
    children: [(0, n.jsx)(f, {
      className: d.fieldBackground,
      terms: i.values,
      channelId: t
    }), (0, n.jsx)(p, {
      onChange: r,
      checked: i.response
    })]
  })
}