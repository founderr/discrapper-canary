"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var l = s("77078"),
  n = s("272030"),
  i = s("100300"),
  r = s("879478"),
  o = s("151185"),
  d = s("179016"),
  u = s("567054"),
  c = s("546470"),
  E = s("782340"),
  _ = s("70933");

function I(e) {
  let {
    addFormField: t,
    onSelect: s
  } = e;
  return (0, a.jsx)(l.Menu, {
    navId: "add-questions",
    className: _.menu,
    onClose: n.closeContextMenu,
    "aria-label": E.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: (0, a.jsxs)(l.MenuGroup, {
      children: [(0, a.jsx)(l.MenuItem, {
        id: "text-input",
        icon: d.default,
        label: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
        action: () => (0, c.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.TEXT_INPUT, t)
      }), (0, a.jsx)(l.MenuItem, {
        id: "paragraph",
        icon: r.default,
        label: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
        action: () => (0, c.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.PARAGRAPH, t)
      }), (0, a.jsx)(l.MenuItem, {
        id: "multiple-choice",
        icon: i.default,
        label: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
        action: () => (0, c.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.MULTIPLE_CHOICE, t)
      })]
    })
  })
}
var T = function(e) {
  let {
    addFormField: t
  } = e, s = e => {
    (0, n.openContextMenu)(e, e => (0, a.jsx)(I, {
      ...e,
      addFormField: t
    }), {
      position: "top",
      align: "center"
    })
  };
  return (0, a.jsx)("div", {
    className: _.container,
    children: (0, a.jsx)(l.Tooltip, {
      text: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
      children: e => (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(l.Clickable, {
          ...e,
          className: _.iconContainer,
          onClick: s,
          children: (0, a.jsx)(o.default, {
            width: 18,
            height: 20,
            className: _.icon
          })
        }), (0, a.jsx)(l.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: E.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION
        })]
      })
    })
  })
}