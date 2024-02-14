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
  u = n("790618"),
  d = n("782340"),
  E = n("917908");

function _(e) {
  var t;
  let {
    isSlideReady: n,
    error: _,
    setEmailToken: c,
    setError: T,
    onNext: S,
    onClose: N
  } = e, [C, A] = o.useState(!1), [f, I] = o.useState(""), [h, R] = o.useState(!1), m = (0, a.useStateFromStores)([u.default], () => u.default.getErrors()), p = o.useRef(null);
  o.useEffect(() => {
    if (n) {
      var e;
      null === (e = p.current) || void 0 === e || e.focus()
    }
  }, [n]);
  let U = async e => {
    e.preventDefault(), T(null), A(!0);
    try {
      let {
        token: e
      } = await (0, i.confirmEmailChange)(f);
      c(e), S()
    } catch (t) {
      let e = new r.default(t);
      T(e.getAnyErrorMessage())
    } finally {
      A(!1)
    }
  }, O = async () => {
    if (!h) {
      R(!0);
      try {
        await (0, i.sendConfirmationCode)(!0), (0, l.showToast)((0, l.createToast)(d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, l.ToastType.SUCCESS))
      } catch (n) {
        let e = new r.default(n),
          t = e.getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        R(!1)
      }
    }
  };
  return (0, s.jsxs)("form", {
    onSubmit: U,
    children: [(0, s.jsxs)(l.ModalHeader, {
      separator: !1,
      className: E.header,
      children: [(0, s.jsx)(l.Heading, {
        className: E.title,
        variant: "heading-xl/extrabold",
        children: d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: E.subtitle,
        children: d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: N,
        className: E.modalCloseButton
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: E.content,
      children: [(0, s.jsx)(l.FormItem, {
        title: d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
        error: null != _ ? _ : null == m ? void 0 : null === (t = m.email_token) || void 0 === t ? void 0 : t[0],
        children: (0, s.jsx)(l.TextInput, {
          value: f,
          onChange: I,
          inputRef: p
        })
      }), (0, s.jsx)(l.Text, {
        className: E.help,
        variant: "text-sm/normal",
        children: d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
          onResend: O
        })
      })]
    }), (0, s.jsx)(l.ModalFooter, {
      children: (0, s.jsx)(l.Button, {
        type: "submit",
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: C,
        children: d.default.Messages.NEXT
      })
    })]
  })
}