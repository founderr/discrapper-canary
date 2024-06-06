"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("481060"),
  o = a("282597"),
  d = a("877715"),
  c = a("729285"),
  u = a("838221"),
  f = a("246364"),
  m = a("700833"),
  E = a("689938"),
  h = a("17359");

function T(e) {
  let {
    onClick: t,
    text: a,
    icon: r
  } = e;
  return (0, n.jsx)("div", {
    className: h.addFormFieldContainer,
    children: (0, n.jsxs)(l.Clickable, {
      className: h.addFormField,
      onClick: t,
      children: [(0, n.jsx)(r, {
        className: h.icon,
        height: 16,
        width: 16
      }), (0, n.jsx)(l.FormText, {
        className: h.addFormFieldText,
        children: a
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: i,
    guild: _,
    showHeader: C
  } = e, x = r.useCallback(e => {
    (0, m.openEmptyFormFieldModal)(e, t, _)
  }, [t, _]), p = r.useCallback(e => {
    i ? (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("99387"), a.e("54845")]).then(a.bind(a, "199836"));
      return a => (0, n.jsx)(t, {
        ...a,
        onSubmit: () => x(e)
      })
    }) : x(e)
  }, [i, x]);
  return (0, n.jsxs)("div", {
    className: s()(h.spacingContainer, h.backgroundContainer),
    children: [C && (0, n.jsx)("div", {
      className: h.containerTopHat,
      children: (0, n.jsx)(l.Text, {
        className: h.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, n.jsxs)("div", {
      className: h.leftRailIconContainer,
      children: [(0, n.jsx)("div", {
        className: h.iconContainer,
        children: (0, n.jsx)(c.default, {
          width: 18,
          height: 20,
          className: h.icon
        })
      }), (0, n.jsxs)(l.FormSection, {
        children: [(0, n.jsx)(l.FormTitle, {
          tag: "h3",
          className: h.leftRailIconContainerTitle,
          children: E.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, n.jsx)(l.FormText, {
          className: h.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: E.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, n.jsx)(T, {
          formFieldType: f.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: u.default,
          text: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => p(f.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, n.jsx)(T, {
          formFieldType: f.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: d.default,
          text: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => p(f.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, n.jsx)(T, {
          formFieldType: f.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: o.default,
          text: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => p(f.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}