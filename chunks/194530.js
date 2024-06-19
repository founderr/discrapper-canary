t.r(s), t.d(s, {
  default: function() {
    return R
  }
}), t(47120);
var o = t(735250),
  n = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(809206),
  i = t(25990),
  u = t(154921),
  d = t(155433),
  c = t(981631),
  S = t(689938),
  E = t(900785);

function R(e) {
  var s, t, R, _;
  let {
    transitionState: M,
    onSuccess: T,
    onClose: A,
    requirementsUpdated: v,
    noSkip: N = !1
  } = e, [h, m] = n.useState(""), [p, C] = n.useState(""), [I, P] = n.useState(""), [x, Z] = n.useState(null), [D, O] = n.useState(null), f = (0, l.e7)([i.Z], () => i.Z.getErrors()), g = (0, l.e7)([i.Z], () => i.Z.getFormState()), j = n.useRef(null);
  async function w(e) {
    e.preventDefault(), (0, r.b9)();
    let s = !1;
    if ("" === p ? (Z(S.Z.Messages.PASSWORD_REQUIREMENTS_EMPTY), s = !0) : Z(null), p !== I ? (O(S.Z.Messages.FORM_LABEL_NEW_PASSWORD_MISMATCH), s = !0) : O(null), s) return;
    let t = await (0, r.Mn)({
      password: h,
      newPassword: p
    });
    if (null == t ? void 0 : t.ok) T();
    else {
      var o;
      (null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.username) != null && (0, d.P)()
    }
  }
  return n.useEffect(() => {
    if (M === a.ModalTransitionState.ENTERED) {
      var e;
      null === (e = j.current) || void 0 === e || e.focus()
    }
  }, [M]), (0, o.jsxs)(a.ModalRoot, {
    transitionState: M,
    children: [(0, o.jsxs)(a.ModalHeader, {
      separator: !1,
      className: E.header,
      children: [(0, o.jsx)(u.Z, {
        color: u.Z.Colors.HEADER_PRIMARY,
        size: u.Z.Sizes.SIZE_24,
        className: E.title,
        children: S.Z.Messages.UPDATE_PASSWORD
      }), (0, o.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: E.subtitle,
        children: v ? S.Z.Messages.FORCE_PASSWORD_UPDATE_DESCRIPTION : S.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_PASSWORD_PROMPT_DESKTOP
      }), !0 !== N && (0, o.jsx)(a.ModalCloseButton, {
        onClick: A,
        className: E.modalCloseButton
      })]
    }), (0, o.jsxs)("form", {
      onSubmit: w,
      children: [(0, o.jsxs)(a.ModalContent, {
        className: E.content,
        children: [(0, o.jsx)(a.FormItem, {
          title: S.Z.Messages.FORM_LABEL_CURRENT_PASSWORD,
          error: null == f ? void 0 : null === (s = f.password) || void 0 === s ? void 0 : s[0],
          children: (0, o.jsx)(a.TextInput, {
            type: "password",
            value: h,
            onChange: m,
            inputRef: j
          })
        }), (0, o.jsx)(a.FormItem, {
          className: E.newPassword,
          title: S.Z.Messages.FORM_LABEL_NEW_PASSWORD,
          error: null !== (_ = null !== (R = null == f ? void 0 : null === (t = f.new_password) || void 0 === t ? void 0 : t[0]) && void 0 !== R ? R : x) && void 0 !== _ ? _ : void 0,
          children: (0, o.jsx)(a.TextInput, {
            type: "password",
            value: p,
            onChange: C
          })
        }), (0, o.jsx)(a.FormItem, {
          className: E.newPassword,
          title: S.Z.Messages.FORM_LABEL_CONFIRM_NEW_PASSWORD,
          error: null != D ? D : void 0,
          children: (0, o.jsx)(a.TextInput, {
            type: "password",
            value: I,
            onChange: P
          })
        })]
      }), (0, o.jsxs)(a.ModalFooter, {
        children: [(0, o.jsx)(a.Button, {
          type: "submit",
          color: a.Button.Colors.BRAND,
          size: a.Button.Sizes.MEDIUM,
          submitting: g === c.QZA.SUBMITTING,
          children: S.Z.Messages.DONE
        }), !0 !== N && (0, o.jsx)(a.Button, {
          className: E.cancel,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.PRIMARY,
          onClick: A,
          children: S.Z.Messages.CANCEL
        })]
      })]
    })]
  })
}