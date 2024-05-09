"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("481060"),
  o = n("282597"),
  c = n("877715"),
  d = n("729285"),
  u = n("838221"),
  f = n("246364"),
  m = n("700833"),
  h = n("689938"),
  p = n("17359");

function E(e) {
  let {
    onClick: t,
    text: n,
    icon: r
  } = e;
  return (0, a.jsx)("div", {
    className: p.addFormFieldContainer,
    children: (0, a.jsxs)(l.Clickable, {
      className: p.addFormField,
      onClick: t,
      children: [(0, a.jsx)(r, {
        className: p.icon,
        height: 16,
        width: 16
      }), (0, a.jsx)(l.FormText, {
        className: p.addFormFieldText,
        children: n
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: s,
    guild: T,
    showHeader: C
  } = e, x = r.useCallback(e => {
    (0, m.openEmptyFormFieldModal)(e, t, T)
  }, [t, T]), _ = r.useCallback(e => {
    s ? (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("54845")]).then(n.bind(n, "199836"));
      return n => (0, a.jsx)(t, {
        ...n,
        onSubmit: () => x(e)
      })
    }) : x(e)
  }, [s, x]);
  return (0, a.jsxs)("div", {
    className: i()(p.spacingContainer, p.backgroundContainer),
    children: [C && (0, a.jsx)("div", {
      className: p.containerTopHat,
      children: (0, a.jsx)(l.Text, {
        className: p.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: h.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, a.jsxs)("div", {
      className: p.leftRailIconContainer,
      children: [(0, a.jsx)("div", {
        className: p.iconContainer,
        children: (0, a.jsx)(d.default, {
          width: 18,
          height: 20,
          className: p.icon
        })
      }), (0, a.jsxs)(l.FormSection, {
        children: [(0, a.jsx)(l.FormTitle, {
          tag: "h3",
          className: p.leftRailIconContainerTitle,
          children: h.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, a.jsx)(l.FormText, {
          className: p.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: h.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, a.jsx)(E, {
          formFieldType: f.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: u.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => _(f.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, a.jsx)(E, {
          formFieldType: f.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: c.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => _(f.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, a.jsx)(E, {
          formFieldType: f.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: o.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => _(f.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}