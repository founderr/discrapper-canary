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
  r = n("152584"),
  i = n("790618"),
  u = n("648661"),
  d = n("782340"),
  E = n("917908");

function _(e) {
  var t, n;
  let {
    emailToken: _,
    isSlideReady: c,
    onClose: T,
    onBack: S,
    onNext: N
  } = e, [C, A] = o.useState(""), [f, I] = o.useState(""), [h, R] = o.useState(!1), m = (0, a.useStateFromStores)([i.default], () => i.default.getErrors()), p = o.useRef(null);
  async function U(e) {
    e.preventDefault(), R(!0);
    let t = await (0, r.saveAccountChanges)({
      email: C,
      emailToken: _,
      password: f
    });
    if (R(!1), null == t ? void 0 : t.ok) N(C);
    else {
      var n, s;
      (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.username) != null ? (0, u.showInvalidUsernameToast)() : (null == t ? void 0 : null === (s = t.body) || void 0 === s ? void 0 : s.email_token) != null && (null == S || S())
    }
  }
  return o.useEffect(() => {
    if (c) {
      var e;
      null === (e = p.current) || void 0 === e || e.focus()
    }
  }, [c]), (0, s.jsxs)("form", {
    onSubmit: U,
    children: [(0, s.jsxs)(l.ModalHeader, {
      separator: !1,
      className: E.header,
      children: [(0, s.jsx)(l.Heading, {
        className: E.title,
        variant: "heading-xl/extrabold",
        children: d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: E.subtitle,
        children: d.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
      }), (0, s.jsx)(l.ModalCloseButton, {
        onClick: T,
        className: E.modalCloseButton
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      className: E.content,
      children: [(0, s.jsx)(l.FormItem, {
        title: d.default.Messages.EMAIL,
        error: null == m ? void 0 : null === (t = m.email) || void 0 === t ? void 0 : t[0],
        children: (0, s.jsx)(l.TextInput, {
          type: "email",
          value: C,
          onChange: A,
          inputRef: p
        })
      }), (0, s.jsx)(l.FormItem, {
        className: E.password,
        title: d.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
        error: null == m ? void 0 : null === (n = m.password) || void 0 === n ? void 0 : n[0],
        children: (0, s.jsx)(l.TextInput, {
          type: "password",
          value: f,
          onChange: I
        })
      })]
    }), (0, s.jsxs)(l.ModalFooter, {
      children: [(0, s.jsx)(l.Button, {
        type: "submit",
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: h,
        children: d.default.Messages.DONE
      }), null != S ? (0, s.jsx)(l.Button, {
        className: E.cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: S,
        children: d.default.Messages.BACK
      }) : (0, s.jsx)(l.Button, {
        className: E.cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: T,
        children: d.default.Messages.CANCEL
      })]
    })]
  })
}