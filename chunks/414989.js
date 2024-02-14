"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  i = s("100300"),
  r = s("879478"),
  o = s("151185"),
  d = s("179016"),
  u = s("567054"),
  c = s("546470"),
  E = s("782340"),
  _ = s("935090");

function I(e) {
  let {
    onClick: t,
    text: s,
    icon: l
  } = e;
  return (0, a.jsx)("div", {
    className: _.addFormFieldContainer,
    children: (0, a.jsxs)(n.Clickable, {
      className: _.addFormField,
      onClick: t,
      children: [(0, a.jsx)(l, {
        className: _.icon,
        height: 16,
        width: 16
      }), (0, a.jsx)(n.FormText, {
        className: _.addFormFieldText,
        children: s
      })]
    })
  })
}
var T = function(e) {
  let {
    addFormField: t,
    hasManualFormFields: T
  } = e, f = l.useCallback(e => {
    (0, c.openEmptyFormFieldModal)(e, t)
  }, [t]), S = l.useCallback(e => {
    T ? f(e) : (0, n.openModalLazy)(async () => {
      let {
        default: t
      } = await s.el("331761").then(s.bind(s, "331761"));
      return s => (0, a.jsx)(t, {
        ...s,
        onSubmit: () => f(e)
      })
    })
  }, [T, f]);
  return (0, a.jsxs)("div", {
    className: _.backgroundContainer,
    children: [(0, a.jsx)("div", {
      className: _.containerTopHat,
      children: (0, a.jsx)(n.Text, {
        className: _.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, a.jsxs)("div", {
      className: _.leftRailIconContainer,
      children: [(0, a.jsx)("div", {
        className: _.iconContainer,
        children: (0, a.jsx)(o.default, {
          width: 18,
          height: 20,
          className: _.icon
        })
      }), (0, a.jsxs)(n.FormSection, {
        children: [(0, a.jsx)(n.FormTitle, {
          tag: "h3",
          className: _.leftRailIconContainerTitle,
          children: E.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, a.jsx)(n.FormText, {
          className: _.leftRailIconContainerDescription,
          type: n.FormText.Types.DESCRIPTION,
          children: E.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, a.jsx)(I, {
          formFieldType: u.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: d.default,
          text: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => S(u.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, a.jsx)(I, {
          formFieldType: u.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: r.default,
          text: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => S(u.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, a.jsx)(I, {
          formFieldType: u.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: i.default,
          text: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => S(u.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}