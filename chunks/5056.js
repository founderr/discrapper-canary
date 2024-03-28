"use strict";
i.r(t);
var a = i("735250"),
  l = i("470079"),
  n = i("481060"),
  s = i("282597"),
  r = i("877715"),
  o = i("729285"),
  d = i("838221"),
  c = i("246364"),
  u = i("700833"),
  f = i("689938"),
  E = i("482249");

function I(e) {
  let {
    onClick: t,
    text: i,
    icon: l
  } = e;
  return (0, a.jsx)("div", {
    className: E.addFormFieldContainer,
    children: (0, a.jsxs)(n.Clickable, {
      className: E.addFormField,
      onClick: t,
      children: [(0, a.jsx)(l, {
        className: E.icon,
        height: 16,
        width: 16
      }), (0, a.jsx)(n.FormText, {
        className: E.addFormFieldText,
        children: i
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: T,
    guild: m
  } = e, _ = l.useCallback(e => {
    (0, u.openEmptyFormFieldModal)(e, t, m)
  }, [t, m]), x = l.useCallback(e => {
    T ? (0, n.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([i.e("99387"), i.e("54845")]).then(i.bind(i, "199836"));
      return i => (0, a.jsx)(t, {
        ...i,
        onSubmit: () => _(e)
      })
    }) : _(e)
  }, [T, _]);
  return (0, a.jsxs)("div", {
    className: E.backgroundContainer,
    children: [(0, a.jsx)("div", {
      className: E.containerTopHat,
      children: (0, a.jsx)(n.Text, {
        className: E.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, a.jsxs)("div", {
      className: E.leftRailIconContainer,
      children: [(0, a.jsx)("div", {
        className: E.iconContainer,
        children: (0, a.jsx)(o.default, {
          width: 18,
          height: 20,
          className: E.icon
        })
      }), (0, a.jsxs)(n.FormSection, {
        children: [(0, a.jsx)(n.FormTitle, {
          tag: "h3",
          className: E.leftRailIconContainerTitle,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, a.jsx)(n.FormText, {
          className: E.leftRailIconContainerDescription,
          type: n.FormText.Types.DESCRIPTION,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, a.jsx)(I, {
          formFieldType: c.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: d.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => x(c.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, a.jsx)(I, {
          formFieldType: c.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: r.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => x(c.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, a.jsx)(I, {
          formFieldType: c.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: s.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => x(c.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}