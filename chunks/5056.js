"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  l = n("481060"),
  o = n("282597"),
  u = n("877715"),
  c = n("729285"),
  d = n("838221"),
  f = n("246364"),
  p = n("700833"),
  m = n("689938"),
  E = n("17359");

function I(e) {
  let {
    onClick: t,
    text: n,
    icon: r
  } = e;
  return (0, i.jsx)("div", {
    className: E.addFormFieldContainer,
    children: (0, i.jsxs)(l.Clickable, {
      className: E.addFormField,
      onClick: t,
      children: [(0, i.jsx)(r, {
        className: E.icon,
        height: 16,
        width: 16
      }), (0, i.jsx)(l.FormText, {
        className: E.addFormFieldText,
        children: n
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: s,
    guild: _,
    showHeader: h
  } = e, T = r.useCallback(e => {
    (0, p.openEmptyFormFieldModal)(e, t, _)
  }, [t, _]), g = r.useCallback(e => {
    s ? (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("54845")]).then(n.bind(n, "199836"));
      return n => (0, i.jsx)(t, {
        ...n,
        onSubmit: () => T(e)
      })
    }) : T(e)
  }, [s, T]);
  return (0, i.jsxs)("div", {
    className: a()(E.spacingContainer, E.backgroundContainer),
    children: [h && (0, i.jsx)("div", {
      className: E.containerTopHat,
      children: (0, i.jsx)(l.Text, {
        className: E.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, i.jsxs)("div", {
      className: E.leftRailIconContainer,
      children: [(0, i.jsx)("div", {
        className: E.iconContainer,
        children: (0, i.jsx)(c.default, {
          width: 18,
          height: 20,
          className: E.icon
        })
      }), (0, i.jsxs)(l.FormSection, {
        children: [(0, i.jsx)(l.FormTitle, {
          tag: "h3",
          className: E.leftRailIconContainerTitle,
          children: m.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, i.jsx)(l.FormText, {
          className: E.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: m.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, i.jsx)(I, {
          formFieldType: f.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: d.default,
          text: m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => g(f.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, i.jsx)(I, {
          formFieldType: f.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: u.default,
          text: m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => g(f.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, i.jsx)(I, {
          formFieldType: f.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: o.default,
          text: m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => g(f.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}