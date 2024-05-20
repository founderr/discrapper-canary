"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("481060"),
  o = a("282597"),
  c = a("877715"),
  d = a("729285"),
  u = a("838221"),
  f = a("246364"),
  m = a("700833"),
  h = a("689938"),
  E = a("17359");

function T(e) {
  let {
    onClick: t,
    text: a,
    icon: r
  } = e;
  return (0, n.jsx)("div", {
    className: E.addFormFieldContainer,
    children: (0, n.jsxs)(l.Clickable, {
      className: E.addFormField,
      onClick: t,
      children: [(0, n.jsx)(r, {
        className: E.icon,
        height: 16,
        width: 16
      }), (0, n.jsx)(l.FormText, {
        className: E.addFormFieldText,
        children: a
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: s,
    guild: p,
    showHeader: C
  } = e, _ = r.useCallback(e => {
    (0, m.openEmptyFormFieldModal)(e, t, p)
  }, [t, p]), x = r.useCallback(e => {
    s ? (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("99387"), a.e("54845")]).then(a.bind(a, "199836"));
      return a => (0, n.jsx)(t, {
        ...a,
        onSubmit: () => _(e)
      })
    }) : _(e)
  }, [s, _]);
  return (0, n.jsxs)("div", {
    className: i()(E.spacingContainer, E.backgroundContainer),
    children: [C && (0, n.jsx)("div", {
      className: E.containerTopHat,
      children: (0, n.jsx)(l.Text, {
        className: E.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: h.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, n.jsxs)("div", {
      className: E.leftRailIconContainer,
      children: [(0, n.jsx)("div", {
        className: E.iconContainer,
        children: (0, n.jsx)(d.default, {
          width: 18,
          height: 20,
          className: E.icon
        })
      }), (0, n.jsxs)(l.FormSection, {
        children: [(0, n.jsx)(l.FormTitle, {
          tag: "h3",
          className: E.leftRailIconContainerTitle,
          children: h.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, n.jsx)(l.FormText, {
          className: E.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: h.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, n.jsx)(T, {
          formFieldType: f.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: u.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => x(f.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, n.jsx)(T, {
          formFieldType: f.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: c.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => x(f.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, n.jsx)(T, {
          formFieldType: f.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: o.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => x(f.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}