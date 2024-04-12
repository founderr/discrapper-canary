"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("282597"),
  l = n("877715"),
  o = n("729285"),
  u = n("838221"),
  c = n("246364"),
  d = n("700833"),
  f = n("689938"),
  p = n("482249");

function m(e) {
  let {
    onClick: t,
    text: n,
    icon: r
  } = e;
  return (0, i.jsx)("div", {
    className: p.addFormFieldContainer,
    children: (0, i.jsxs)(s.Clickable, {
      className: p.addFormField,
      onClick: t,
      children: [(0, i.jsx)(r, {
        className: p.icon,
        height: 16,
        width: 16
      }), (0, i.jsx)(s.FormText, {
        className: p.addFormFieldText,
        children: n
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: E,
    guild: I,
    showHeader: _
  } = e, T = r.useCallback(e => {
    (0, d.openEmptyFormFieldModal)(e, t, I)
  }, [t, I]), h = r.useCallback(e => {
    E ? (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("54845")]).then(n.bind(n, "199836"));
      return n => (0, i.jsx)(t, {
        ...n,
        onSubmit: () => T(e)
      })
    }) : T(e)
  }, [E, T]);
  return (0, i.jsxs)("div", {
    className: p.backgroundContainer,
    children: [_ && (0, i.jsx)("div", {
      className: p.containerTopHat,
      children: (0, i.jsx)(s.Text, {
        className: p.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, i.jsxs)("div", {
      className: p.leftRailIconContainer,
      children: [(0, i.jsx)("div", {
        className: p.iconContainer,
        children: (0, i.jsx)(o.default, {
          width: 18,
          height: 20,
          className: p.icon
        })
      }), (0, i.jsxs)(s.FormSection, {
        children: [(0, i.jsx)(s.FormTitle, {
          tag: "h3",
          className: p.leftRailIconContainerTitle,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, i.jsx)(s.FormText, {
          className: p.leftRailIconContainerDescription,
          type: s.FormText.Types.DESCRIPTION,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, i.jsx)(m, {
          formFieldType: c.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: u.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => h(c.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, i.jsx)(m, {
          formFieldType: c.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: l.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => h(c.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, i.jsx)(m, {
          formFieldType: c.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: a.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => h(c.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}