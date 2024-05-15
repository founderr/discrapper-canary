"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("481060"),
  i = a("239091"),
  l = a("282597"),
  s = a("877715"),
  o = a("729285"),
  c = a("838221"),
  d = a("246364"),
  u = a("700833"),
  f = a("689938"),
  m = a("166562");

function h(e) {
  let {
    addFormField: t,
    onSelect: a,
    guild: o
  } = e;
  return (0, n.jsx)(r.Menu, {
    navId: "add-questions",
    className: m.menu,
    onClose: i.closeContextMenu,
    "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: a,
    children: (0, n.jsxs)(r.MenuGroup, {
      children: [(0, n.jsx)(r.MenuItem, {
        id: "text-input",
        icon: c.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
        action: () => (0, u.openEmptyFormFieldModal)(d.VerificationFormFieldTypes.TEXT_INPUT, t, o)
      }), (0, n.jsx)(r.MenuItem, {
        id: "paragraph",
        icon: s.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
        action: () => (0, u.openEmptyFormFieldModal)(d.VerificationFormFieldTypes.PARAGRAPH, t, o)
      }), (0, n.jsx)(r.MenuItem, {
        id: "multiple-choice",
        icon: l.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
        action: () => (0, u.openEmptyFormFieldModal)(d.VerificationFormFieldTypes.MULTIPLE_CHOICE, t, o)
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    guild: a
  } = e, l = e => {
    (0, i.openContextMenu)(e, e => (0, n.jsx)(h, {
      ...e,
      addFormField: t,
      guild: a
    }), {
      position: "top",
      align: "center"
    })
  };
  return (0, n.jsx)(r.Tooltip, {
    text: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
    children: e => (0, n.jsxs)(r.Clickable, {
      ...e,
      className: m.container,
      onClick: l,
      children: [(0, n.jsx)(o.default, {
        width: 24,
        height: 24,
        className: m.icon
      }), (0, n.jsx)(r.Text, {
        color: "interactive-active",
        variant: "text-md/semibold",
        children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION
      })]
    })
  })
}