"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  i = s("239091"),
  E = s("282597"),
  l = s("877715"),
  _ = s("729285"),
  r = s("838221"),
  u = s("246364"),
  o = s("700833"),
  T = s("689938"),
  d = s("956655");

function A(e) {
  let {
    addFormField: t,
    onSelect: s,
    guild: _
  } = e;
  return (0, a.jsx)(n.Menu, {
    navId: "add-questions",
    className: d.menu,
    onClose: i.closeContextMenu,
    "aria-label": T.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: (0, a.jsxs)(n.MenuGroup, {
      children: [(0, a.jsx)(n.MenuItem, {
        id: "text-input",
        icon: r.default,
        label: T.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
        action: () => (0, o.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.TEXT_INPUT, t, _)
      }), (0, a.jsx)(n.MenuItem, {
        id: "paragraph",
        icon: l.default,
        label: T.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
        action: () => (0, o.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.PARAGRAPH, t, _)
      }), (0, a.jsx)(n.MenuItem, {
        id: "multiple-choice",
        icon: E.default,
        label: T.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
        action: () => (0, o.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.MULTIPLE_CHOICE, t, _)
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    guild: s
  } = e, E = e => {
    (0, i.openContextMenu)(e, e => (0, a.jsx)(A, {
      ...e,
      addFormField: t,
      guild: s
    }), {
      position: "top",
      align: "center"
    })
  };
  return (0, a.jsx)(n.Tooltip, {
    text: T.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
    children: e => (0, a.jsxs)(n.Clickable, {
      ...e,
      className: d.container,
      onClick: E,
      children: [(0, a.jsx)(_.default, {
        width: 24,
        height: 24,
        className: d.icon
      }), (0, a.jsx)(n.Text, {
        color: "interactive-active",
        variant: "text-md/semibold",
        children: T.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION
      })]
    })
  })
}