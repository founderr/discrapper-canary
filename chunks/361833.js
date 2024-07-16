t.d(s, {
  Z: function() {
return u;
  }
}), t(47120);
var n = t(735250),
  o = t(470079),
  a = t(442837),
  l = t(481060),
  i = t(809206),
  r = t(25990),
  E = t(155433),
  _ = t(689938),
  d = t(660817);

function u(e) {
  var s, t;
  let {
emailToken: u,
isSlideReady: c,
onClose: N,
onBack: C,
onNext: A
  } = e, [S, M] = o.useState(''), [m, I] = o.useState(''), [T, x] = o.useState(!1), O = (0, a.e7)([r.Z], () => r.Z.getErrors()), R = o.useRef(null);
  async function h(e) {
e.preventDefault(), x(!0);
let s = await (0, i.Mn)({
  email: S,
  emailToken: u,
  password: m
});
if (x(!1), null == s ? void 0 : s.ok)
  A(S);
else {
  var t, n;
  (null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.username) != null ? (0, E.P)() : (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.email_token) != null && (null == C || C());
}
  }
  return o.useEffect(() => {
if (c) {
  var e;
  null === (e = R.current) || void 0 === e || e.focus();
}
  }, [c]), (0, n.jsxs)('form', {
onSubmit: h,
children: [
  (0, n.jsxs)(l.ModalHeader, {
    separator: !1,
    className: d.header,
    children: [
      (0, n.jsx)(l.Heading, {
        className: d.title,
        variant: 'heading-xl/extrabold',
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
      }),
      (0, n.jsx)(l.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        className: d.subtitle,
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
      }),
      (0, n.jsx)(l.ModalCloseButton, {
        onClick: N,
        className: d.modalCloseButton
      })
    ]
  }),
  (0, n.jsxs)(l.ModalContent, {
    className: d.content,
    children: [
      (0, n.jsx)(l.FormItem, {
        title: _.Z.Messages.EMAIL,
        error: null == O ? void 0 : null === (s = O.email) || void 0 === s ? void 0 : s[0],
        children: (0, n.jsx)(l.TextInput, {
          type: 'email',
          value: S,
          onChange: M,
          inputRef: R
        })
      }),
      (0, n.jsx)(l.FormItem, {
        className: d.password,
        title: _.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
        error: null == O ? void 0 : null === (t = O.password) || void 0 === t ? void 0 : t[0],
        children: (0, n.jsx)(l.TextInput, {
          type: 'password',
          value: m,
          onChange: I
        })
      })
    ]
  }),
  (0, n.jsxs)(l.ModalFooter, {
    children: [
      (0, n.jsx)(l.Button, {
        type: 'submit',
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: T,
        children: _.Z.Messages.DONE
      }),
      null != C ? (0, n.jsx)(l.Button, {
        className: d.__invalid_cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: C,
        children: _.Z.Messages.BACK
      }) : (0, n.jsx)(l.Button, {
        className: d.__invalid_cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: N,
        children: _.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}