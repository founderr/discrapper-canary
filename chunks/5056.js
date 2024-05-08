"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("481060"),
  _ = s("282597"),
  r = s("877715"),
  u = s("729285"),
  o = s("838221"),
  T = s("246364"),
  d = s("700833"),
  A = s("689938"),
  I = s("17359");

function L(e) {
  let {
    onClick: t,
    text: s,
    icon: n
  } = e;
  return (0, a.jsx)("div", {
    className: I.addFormFieldContainer,
    children: (0, a.jsxs)(l.Clickable, {
      className: I.addFormField,
      onClick: t,
      children: [(0, a.jsx)(n, {
        className: I.icon,
        height: 16,
        width: 16
      }), (0, a.jsx)(l.FormText, {
        className: I.addFormFieldText,
        children: s
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: i,
    guild: c,
    showHeader: N
  } = e, S = n.useCallback(e => {
    (0, d.openEmptyFormFieldModal)(e, t, c)
  }, [t, c]), g = n.useCallback(e => {
    i ? (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([s.e("99387"), s.e("54845")]).then(s.bind(s, "199836"));
      return s => (0, a.jsx)(t, {
        ...s,
        onSubmit: () => S(e)
      })
    }) : S(e)
  }, [i, S]);
  return (0, a.jsxs)("div", {
    className: E()(I.spacingContainer, I.backgroundContainer),
    children: [N && (0, a.jsx)("div", {
      className: I.containerTopHat,
      children: (0, a.jsx)(l.Text, {
        className: I.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, a.jsxs)("div", {
      className: I.leftRailIconContainer,
      children: [(0, a.jsx)("div", {
        className: I.iconContainer,
        children: (0, a.jsx)(u.default, {
          width: 18,
          height: 20,
          className: I.icon
        })
      }), (0, a.jsxs)(l.FormSection, {
        children: [(0, a.jsx)(l.FormTitle, {
          tag: "h3",
          className: I.leftRailIconContainerTitle,
          children: A.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, a.jsx)(l.FormText, {
          className: I.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: A.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, a.jsx)(L, {
          formFieldType: T.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: o.default,
          text: A.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => g(T.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, a.jsx)(L, {
          formFieldType: T.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: r.default,
          text: A.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => g(T.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, a.jsx)(L, {
          formFieldType: T.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: _.default,
          text: A.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => g(T.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}