"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("990547"),
  o = s("481060"),
  r = s("479531"),
  i = s("213609"),
  u = s("689938"),
  d = s("482010"),
  c = s("800010");

function C(e) {
  let {
    transitionState: t,
    onFormSubmit: s,
    onResend: C,
    onSuccess: T,
    onClose: E,
    headerText: N,
    confirmButtonText: _,
    confirmButtonColor: h,
    impressionName: M
  } = e, [S, m] = l.useState(!1), [I, f] = l.useState(""), [x, A] = l.useState(!1), [p, R] = l.useState(null), g = l.useRef(null);
  (0, i.default)({
    type: n.ImpressionTypes.MODAL,
    name: M
  });
  let j = async e => {
    e.preventDefault(), R(null), m(!0);
    try {
      let e = await s(I);
      null != T && T(e), E()
    } catch (e) {
      R(new r.default(e).getAnyErrorMessage())
    } finally {
      m(!1)
    }
  }, y = async () => {
    if (!x) {
      A(!0);
      try {
        await C(), (0, o.showToast)((0, o.createToast)(u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, o.ToastType.SUCCESS))
      } catch (t) {
        let e = new r.default(t).getAnyErrorMessage();
        null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE))
      } finally {
        A(!1)
      }
    }
  };
  return (0, a.jsx)(o.ModalRoot, {
    transitionState: t,
    children: (0, a.jsxs)("form", {
      onSubmit: j,
      children: [(0, a.jsx)("img", {
        alt: "",
        className: d.headerImage,
        src: c
      }), (0, a.jsxs)(o.ModalHeader, {
        separator: !1,
        className: d.header,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          className: d.title,
          children: N
        }), (0, a.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: d.subtitle,
          children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
        }), (0, a.jsx)(o.ModalCloseButton, {
          onClick: E,
          className: d.modalCloseButton
        })]
      }), (0, a.jsxs)(o.ModalContent, {
        children: [(0, a.jsx)(o.FormItem, {
          title: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
          error: p,
          children: (0, a.jsx)(o.TextInput, {
            value: I,
            onChange: f,
            inputRef: g
          })
        }), (0, a.jsx)(o.Text, {
          className: d.help,
          variant: "text-sm/normal",
          children: u.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
            onResend: y
          })
        })]
      }), (0, a.jsxs)(o.ModalFooter, {
        children: [(0, a.jsx)(o.Button, {
          type: "submit",
          color: null != h ? h : o.Button.Colors.BRAND,
          size: o.Button.Sizes.MEDIUM,
          submitting: S,
          children: _
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: E,
          children: u.default.Messages.CANCEL
        })]
      })]
    })
  })
}