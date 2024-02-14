"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  a = n("446674"),
  l = n("77078"),
  r = n("599417"),
  i = n("734990"),
  u = n("697218"),
  d = n("782340"),
  E = n("917908");

function _(e) {
  let {
    onNext: t,
    onClose: n
  } = e, [_, c] = o.useState(!1), T = (0, a.useStateFromStores)([u.default], () => u.default.getCurrentUser()), S = async e => {
    e.preventDefault(), c(!0);
    try {
      await (0, i.sendConfirmationCode)(), t()
    } catch (n) {
      let e = new r.default(n),
        t = e.getAnyErrorMessage();
      null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
    } finally {
      c(!1)
    }
  };
  return (0, s.jsxs)("form", {
    onSubmit: S,
    children: [(0, s.jsxs)(l.ModalHeader, {
      separator: !1,
      className: E.header,
      children: [(0, s.jsx)(l.Heading, {
        className: E.title,
        variant: "heading-xl/extrabold",
        children: d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: n,
        className: E.modalCloseButton
      })]
    }), (0, s.jsx)(l.ModalContent, {
      className: E.content,
      children: (0, s.jsx)(l.Text, {
        className: E.description,
        variant: "text-md/normal",
        children: d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
          oldEmail: null == T ? void 0 : T.email
        })
      })
    }), (0, s.jsxs)(l.ModalFooter, {
      className: E.modalFooter,
      children: [(0, s.jsx)(l.Button, {
        type: "submit",
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: _,
        className: E.submit,
        children: d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
      }), (0, s.jsx)(l.Button, {
        className: E.cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: n,
        children: d.default.Messages.CANCEL
      })]
    })]
  })
}