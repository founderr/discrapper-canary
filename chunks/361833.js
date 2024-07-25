n.d(s, {
  Z: function() {
return N;
  }
}), n(47120);
var t = n(735250),
  o = n(470079),
  a = n(442837),
  l = n(481060),
  r = n(809206),
  i = n(25990),
  E = n(155433),
  _ = n(689938),
  d = n(660817);

function N(e) {
  var s, n;
  let {
emailToken: N,
isSlideReady: c,
onClose: u,
onBack: A,
onNext: C
  } = e, [M, S] = o.useState(''), [m, I] = o.useState(''), [x, T] = o.useState(!1), R = (0, a.e7)([i.Z], () => i.Z.getErrors()), O = o.useRef(null);
  async function h(e) {
e.preventDefault(), T(!0);
let s = await (0, r.Mn)({
  email: M,
  emailToken: N,
  password: m
});
if (T(!1), null == s ? void 0 : s.ok)
  C(M);
else {
  var n, t;
  (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.username) != null ? (0, E.P)() : (null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.email_token) != null && (null == A || A());
}
  }
  return o.useEffect(() => {
if (c) {
  var e;
  null === (e = O.current) || void 0 === e || e.focus();
}
  }, [c]), (0, t.jsxs)('form', {
onSubmit: h,
children: [
  (0, t.jsxs)(l.ModalHeader, {
    separator: !1,
    className: d.header,
    children: [
      (0, t.jsx)(l.Heading, {
        className: d.title,
        variant: 'heading-xl/extrabold',
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
      }),
      (0, t.jsx)(l.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        className: d.subtitle,
        children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
      }),
      (0, t.jsx)(l.ModalCloseButton, {
        onClick: u,
        className: d.modalCloseButton
      })
    ]
  }),
  (0, t.jsxs)(l.ModalContent, {
    className: d.content,
    children: [
      (0, t.jsx)(l.FormItem, {
        title: _.Z.Messages.EMAIL,
        error: null == R ? void 0 : null === (s = R.email) || void 0 === s ? void 0 : s[0],
        children: (0, t.jsx)(l.TextInput, {
          type: 'email',
          value: M,
          onChange: S,
          inputRef: O
        })
      }),
      (0, t.jsx)(l.FormItem, {
        className: d.password,
        title: _.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
        error: null == R ? void 0 : null === (n = R.password) || void 0 === n ? void 0 : n[0],
        children: (0, t.jsx)(l.TextInput, {
          type: 'password',
          value: m,
          onChange: I
        })
      })
    ]
  }),
  (0, t.jsxs)(l.ModalFooter, {
    children: [
      (0, t.jsx)(l.Button, {
        type: 'submit',
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.MEDIUM,
        submitting: x,
        children: _.Z.Messages.DONE
      }),
      null != A ? (0, t.jsx)(l.Button, {
        className: d.__invalid_cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: A,
        children: _.Z.Messages.BACK
      }) : (0, t.jsx)(l.Button, {
        className: d.__invalid_cancel,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: u,
        children: _.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}