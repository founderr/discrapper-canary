"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var o = n("77078"),
  a = n("782340"),
  l = n("917908");

function r(e) {
  let {
    email: t,
    onClose: n
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.ModalHeader, {
      separator: !1,
      className: l.header,
      children: [(0, s.jsx)(o.Heading, {
        className: l.title,
        variant: "heading-xl/semibold",
        children: a.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_TITLE
      }), (0, s.jsx)(o.ModalCloseButton, {
        onClick: n,
        className: l.modalCloseButton
      })]
    }), (0, s.jsx)(o.ModalContent, {
      className: l.content,
      children: (0, s.jsx)(o.Text, {
        className: l.description,
        variant: "text-md/normal",
        children: a.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_COMPLETE_DESCRIPTION.format({
          email: t
        })
      })
    }), (0, s.jsx)(o.ModalContent, {
      className: l.content,
      children: (0, s.jsx)(o.Text, {
        className: l.tooltip,
        variant: "text-sm/normal",
        children: a.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
      })
    }), (0, s.jsx)(o.ModalFooter, {
      className: l.modalFooter,
      children: (0, s.jsx)(o.Button, {
        className: l.submit,
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.MEDIUM,
        onClick: n,
        children: a.default.Messages.OKAY
      })
    })]
  })
}