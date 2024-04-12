"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("239091"),
  a = n("282597"),
  l = n("877715"),
  o = n("729285"),
  u = n("838221"),
  c = n("246364"),
  d = n("700833"),
  f = n("689938"),
  p = n("757607");

function m(e) {
  let {
    addFormField: t,
    onSelect: n,
    guild: o
  } = e;
  return (0, i.jsx)(r.Menu, {
    navId: "add-questions",
    className: p.menu,
    onClose: s.closeContextMenu,
    "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: (0, i.jsxs)(r.MenuGroup, {
      children: [(0, i.jsx)(r.MenuItem, {
        id: "text-input",
        icon: u.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
        action: () => (0, d.openEmptyFormFieldModal)(c.VerificationFormFieldTypes.TEXT_INPUT, t, o)
      }), (0, i.jsx)(r.MenuItem, {
        id: "paragraph",
        icon: l.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
        action: () => (0, d.openEmptyFormFieldModal)(c.VerificationFormFieldTypes.PARAGRAPH, t, o)
      }), (0, i.jsx)(r.MenuItem, {
        id: "multiple-choice",
        icon: a.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
        action: () => (0, d.openEmptyFormFieldModal)(c.VerificationFormFieldTypes.MULTIPLE_CHOICE, t, o)
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    guild: n
  } = e, a = e => {
    (0, s.openContextMenu)(e, e => (0, i.jsx)(m, {
      ...e,
      addFormField: t,
      guild: n
    }), {
      position: "top",
      align: "center"
    })
  };
  return (0, i.jsx)("div", {
    className: p.container,
    children: (0, i.jsx)(r.Tooltip, {
      text: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
      children: e => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.Clickable, {
          ...e,
          className: p.iconContainer,
          onClick: a,
          children: (0, i.jsx)(o.default, {
            width: 18,
            height: 20,
            className: p.icon
          })
        }), (0, i.jsx)(r.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION
        })]
      })
    })
  })
}