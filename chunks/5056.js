"use strict";
i.r(t);
var n = i("735250"),
  r = i("470079"),
  s = i("481060"),
  a = i("282597"),
  l = i("877715"),
  o = i("729285"),
  u = i("838221"),
  c = i("246364"),
  d = i("700833"),
  f = i("689938"),
  p = i("482249");

function C(e) {
  let {
    onClick: t,
    text: i,
    icon: r
  } = e;
  return (0, n.jsx)("div", {
    className: p.addFormFieldContainer,
    children: (0, n.jsxs)(s.Clickable, {
      className: p.addFormField,
      onClick: t,
      children: [(0, n.jsx)(r, {
        className: p.icon,
        height: 16,
        width: 16
      }), (0, n.jsx)(s.FormText, {
        className: p.addFormFieldText,
        children: i
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: m,
    guild: h,
    showHeader: _
  } = e, E = r.useCallback(e => {
    (0, d.openEmptyFormFieldModal)(e, t, h)
  }, [t, h]), I = r.useCallback(e => {
    m ? (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([i.e("99387"), i.e("54845")]).then(i.bind(i, "199836"));
      return i => (0, n.jsx)(t, {
        ...i,
        onSubmit: () => E(e)
      })
    }) : E(e)
  }, [m, E]);
  return (0, n.jsxs)("div", {
    className: p.backgroundContainer,
    children: [_ && (0, n.jsx)("div", {
      className: p.containerTopHat,
      children: (0, n.jsx)(s.Text, {
        className: p.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, n.jsxs)("div", {
      className: p.leftRailIconContainer,
      children: [(0, n.jsx)("div", {
        className: p.iconContainer,
        children: (0, n.jsx)(o.default, {
          width: 18,
          height: 20,
          className: p.icon
        })
      }), (0, n.jsxs)(s.FormSection, {
        children: [(0, n.jsx)(s.FormTitle, {
          tag: "h3",
          className: p.leftRailIconContainerTitle,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, n.jsx)(s.FormText, {
          className: p.leftRailIconContainerDescription,
          type: s.FormText.Types.DESCRIPTION,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, n.jsx)(C, {
          formFieldType: c.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: u.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => I(c.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, n.jsx)(C, {
          formFieldType: c.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: l.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => I(c.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, n.jsx)(C, {
          formFieldType: c.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: a.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => I(c.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}