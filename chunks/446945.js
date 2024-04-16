"use strict";
i.r(t);
var n = i("735250");
i("470079");
var r = i("481060"),
  s = i("239091"),
  a = i("282597"),
  l = i("877715"),
  o = i("729285"),
  c = i("838221"),
  u = i("246364"),
  d = i("700833"),
  f = i("689938"),
  p = i("757607");

function C(e) {
  let {
    addFormField: t,
    onSelect: i,
    guild: o
  } = e;
  return (0, n.jsx)(r.Menu, {
    navId: "add-questions",
    className: p.menu,
    onClose: s.closeContextMenu,
    "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: i,
    children: (0, n.jsxs)(r.MenuGroup, {
      children: [(0, n.jsx)(r.MenuItem, {
        id: "text-input",
        icon: c.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
        action: () => (0, d.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.TEXT_INPUT, t, o)
      }), (0, n.jsx)(r.MenuItem, {
        id: "paragraph",
        icon: l.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
        action: () => (0, d.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.PARAGRAPH, t, o)
      }), (0, n.jsx)(r.MenuItem, {
        id: "multiple-choice",
        icon: a.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
        action: () => (0, d.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.MULTIPLE_CHOICE, t, o)
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    guild: i
  } = e, a = e => {
    (0, s.openContextMenu)(e, e => (0, n.jsx)(C, {
      ...e,
      addFormField: t,
      guild: i
    }), {
      position: "top",
      align: "center"
    })
  };
  return (0, n.jsx)(r.Tooltip, {
    text: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
    children: e => (0, n.jsxs)(r.Clickable, {
      ...e,
      className: p.container,
      onClick: a,
      children: [(0, n.jsx)(o.default, {
        width: 24,
        height: 24,
        className: p.icon
      }), (0, n.jsx)(r.Text, {
        color: "interactive-active",
        variant: "text-md/semibold",
        children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION
      })]
    })
  })
}