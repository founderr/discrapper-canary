s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s(47120);
var a = s(735250),
  n = s(470079),
  o = s(990547),
  l = s(481060),
  r = s(479531),
  i = s(213609),
  c = s(689938),
  u = s(829643),
  d = s(800010);

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
  } = e, [S, m] = n.useState(!1), [I, x] = n.useState(""), [A, p] = n.useState(!1), [R, g] = n.useState(null), j = n.useRef(null);
  (0, i.Z)({
    type: o.ImpressionTypes.MODAL,
    name: M
  });
  let y = async e => {
    e.preventDefault(), g(null), m(!0);
    try {
      let e = await s(I);
      null != T && T(e), E()
    } catch (e) {
      g(new r.Z(e).getAnyErrorMessage())
    } finally {
      m(!1)
    }
  }, f = async () => {
    if (!A) {
      p(!0);
      try {
        await C(), (0, l.showToast)((0, l.createToast)(c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, l.ToastType.SUCCESS))
      } catch (t) {
        let e = new r.Z(t).getAnyErrorMessage();
        null != e && (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE))
      } finally {
        p(!1)
      }
    }
  };
  return (0, a.jsx)(l.ModalRoot, {
    transitionState: t,
    children: (0, a.jsxs)("form", {
      onSubmit: y,
      children: [(0, a.jsx)("img", {
        alt: "",
        className: u.headerImage,
        src: d
      }), (0, a.jsxs)(l.ModalHeader, {
        separator: !1,
        className: u.header,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          className: u.title,
          children: N
        }), (0, a.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: u.subtitle,
          children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
        }), (0, a.jsx)(l.ModalCloseButton, {
          onClick: E,
          className: u.modalCloseButton
        })]
      }), (0, a.jsxs)(l.ModalContent, {
        children: [(0, a.jsx)(l.FormItem, {
          title: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
          error: R,
          children: (0, a.jsx)(l.TextInput, {
            value: I,
            onChange: x,
            inputRef: j
          })
        }), (0, a.jsx)(l.Text, {
          className: u.help,
          variant: "text-sm/normal",
          children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
            onResend: f
          })
        })]
      }), (0, a.jsxs)(l.ModalFooter, {
        children: [(0, a.jsx)(l.Button, {
          type: "submit",
          color: null != h ? h : l.Button.Colors.BRAND,
          size: l.Button.Sizes.MEDIUM,
          submitting: S,
          children: _
        }), (0, a.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.PRIMARY,
          onClick: E,
          children: c.Z.Messages.CANCEL
        })]
      })]
    })
  })
}