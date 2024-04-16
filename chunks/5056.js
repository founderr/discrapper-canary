"use strict";
i.r(t);
var n = i("735250"),
  r = i("470079"),
  s = i("120356"),
  a = i.n(s),
  l = i("481060"),
  o = i("282597"),
  c = i("877715"),
  u = i("729285"),
  d = i("838221"),
  f = i("246364"),
  p = i("700833"),
  C = i("689938"),
  m = i("482249");

function h(e) {
  let {
    onClick: t,
    text: i,
    icon: r
  } = e;
  return (0, n.jsx)("div", {
    className: m.addFormFieldContainer,
    children: (0, n.jsxs)(l.Clickable, {
      className: m.addFormField,
      onClick: t,
      children: [(0, n.jsx)(r, {
        className: m.icon,
        height: 16,
        width: 16
      }), (0, n.jsx)(l.FormText, {
        className: m.addFormFieldText,
        children: i
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: s,
    guild: _,
    showHeader: E
  } = e, I = r.useCallback(e => {
    (0, p.openEmptyFormFieldModal)(e, t, _)
  }, [t, _]), T = r.useCallback(e => {
    s ? (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([i.e("99387"), i.e("54845")]).then(i.bind(i, "199836"));
      return i => (0, n.jsx)(t, {
        ...i,
        onSubmit: () => I(e)
      })
    }) : I(e)
  }, [s, I]);
  return (0, n.jsxs)("div", {
    className: a()(m.spacingContainer, m.backgroundContainer),
    children: [E && (0, n.jsx)("div", {
      className: m.containerTopHat,
      children: (0, n.jsx)(l.Text, {
        className: m.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: C.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, n.jsxs)("div", {
      className: m.leftRailIconContainer,
      children: [(0, n.jsx)("div", {
        className: m.iconContainer,
        children: (0, n.jsx)(u.default, {
          width: 18,
          height: 20,
          className: m.icon
        })
      }), (0, n.jsxs)(l.FormSection, {
        children: [(0, n.jsx)(l.FormTitle, {
          tag: "h3",
          className: m.leftRailIconContainerTitle,
          children: C.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, n.jsx)(l.FormText, {
          className: m.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: C.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, n.jsx)(h, {
          formFieldType: f.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: d.default,
          text: C.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => T(f.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, n.jsx)(h, {
          formFieldType: f.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: c.default,
          text: C.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => T(f.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, n.jsx)(h, {
          formFieldType: f.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: o.default,
          text: C.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => T(f.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}