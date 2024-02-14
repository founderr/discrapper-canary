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
    return T
  }
}), n("222007");
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  a = n("77078"),
  l = n("367376"),
  o = n("213523"),
  u = n("272460"),
  c = n("782340"),
  d = n("28551");

function f(e) {
  let {
    terms: t,
    channelId: n,
    className: i
  } = e;
  return (0, r.jsx)("div", {
    className: s(d.termsFieldBody, i),
    children: t.map((e, t) => (0, r.jsxs)("div", {
      className: d.termsRow,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        className: d.termsRowContent,
        children: l.default.parseGuildVerificationFormRule(e, !0, {
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
    disabled: i
  } = e;
  return (0, r.jsx)(a.Checkbox, {
    size: 20,
    type: a.Checkbox.Types.INVERTED,
    value: n,
    onChange: t,
    disabled: i,
    style: {
      borderWidth: 2
    },
    className: d.checkbox,
    children: (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: c.default.Messages.MEMBER_VERIFICATION_READ_RULES
    })
  })
}

function _(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(u.RequirementRenderer, {
    icon: o.default,
    text: c.default.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
    meetsRequirement: !!t.response
  })
}
let T = e => {
  let {
    channelId: t,
    formField: n,
    onChange: i
  } = e;
  return (0, r.jsxs)(u.QuestionRenderer, {
    title: c.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
    children: [(0, r.jsx)(f, {
      className: d.fieldBackground,
      terms: n.values,
      channelId: t
    }), (0, r.jsx)(E, {
      onChange: i,
      checked: n.response
    })]
  })
}