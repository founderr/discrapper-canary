"use strict";
n.r(t), n.d(t, {
  TermsFieldBody: function() {
    return f
  },
  TermsFieldCheckbox: function() {
    return E
  },
  DisabledTermsRequirementFormField: function() {
    return _
  },
  TermsFormField: function() {
    return h
  }
}), n("222007");
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("77078"),
  o = n("367376"),
  u = n("213523"),
  a = n("272460"),
  c = n("782340"),
  d = n("847121");

function f(e) {
  let {
    terms: t,
    channelId: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    className: l(d.termsFieldBody, r),
    children: t.map((e, t) => (0, i.jsxs)("div", {
      className: d.termsRow,
      children: [(0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        className: d.termsRowContent,
        children: o.default.parseGuildVerificationFormRule(e, !0, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function E(e) {
  let {
    onChange: t,
    checked: n,
    disabled: r
  } = e;
  return (0, i.jsx)(s.Checkbox, {
    size: 20,
    type: s.Checkbox.Types.INVERTED,
    value: n,
    onChange: t,
    disabled: r,
    style: {
      borderWidth: 2
    },
    className: d.checkbox,
    children: (0, i.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: c.default.Messages.MEMBER_VERIFICATION_READ_RULES
    })
  })
}

function _(e) {
  let {
    formField: t
  } = e;
  return (0, i.jsx)(a.RequirementRenderer, {
    icon: u.default,
    text: c.default.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
    meetsRequirement: !!t.response
  })
}
let h = e => {
  let {
    channelId: t,
    formField: n,
    onChange: r
  } = e;
  return (0, i.jsxs)(a.QuestionRenderer, {
    title: c.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
    children: [(0, i.jsx)(f, {
      className: d.fieldBackground,
      terms: n.values,
      channelId: t
    }), (0, i.jsx)(E, {
      onChange: r,
      checked: n.response
    })]
  })
}