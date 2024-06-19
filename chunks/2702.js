s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s(627341), s(47120);
var n = s(735250),
  a = s(470079),
  l = s(120356),
  o = s.n(l),
  r = s(512722),
  i = s.n(r),
  u = s(954955),
  c = s.n(u),
  d = s(278074),
  m = s(442837),
  E = s(481060),
  x = s(809206),
  _ = s(219496),
  h = s(575681),
  N = s(807369),
  R = s(180529),
  S = s(25990),
  M = s(594174),
  p = s(154921),
  I = s(74538),
  v = s(981631),
  T = s(689938),
  C = s(823800),
  g = s(838009);
let A = e => {
  let {
    usernameStatus: t,
    showHint: s
  } = e;
  return (0, d.EQ)(t).with({
    type: _.K.ERROR,
    message: d.P.select()
  }, e => (0, n.jsx)(E.Text, {
    variant: "text-sm/normal",
    color: "text-danger",
    children: e
  })).with({
    type: _.K.AVAILABLE,
    message: d.P.select()
  }, e => (0, n.jsx)(E.Text, {
    variant: "text-sm/normal",
    color: "text-positive",
    children: e
  })).otherwise(() => s ? (0, n.jsx)(E.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: T.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
  }) : null)
};

function f(e) {
  var t;
  let {
    transitionState: s,
    onClose: l
  } = e, r = (0, m.e7)([M.default], () => {
    let e = M.default.getCurrentUser();
    return i()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e
  }), u = a.useMemo(() => I.ZP.canEditDiscriminator(r) && !r.isPomelo(), [r]), [d, f] = a.useState(!1), [j, L] = a.useState(r.username), [U, P] = a.useState(r.discriminator), [Z, B] = a.useState(""), [b, O] = a.useState(!1), k = (0, m.e7)([S.Z], () => S.Z.getErrors()), D = (0, h.n)(), w = r.isPomelo() && D, F = (0, N.a)(j, w, !1, r.username), G = a.useRef(null), y = a.useMemo(() => {
    var e, t, s;
    return null !== (s = null == k ? void 0 : null === (e = k.username) || void 0 === e ? void 0 : e[0]) && void 0 !== s ? s : null == k ? void 0 : null === (t = k.discriminator) || void 0 === t ? void 0 : t[0]
  }, [k]);
  a.useEffect(() => {
    if (s === E.ModalTransitionState.ENTERED) {
      var e;
      null === (e = G.current) || void 0 === e || e.focus()
    }
  }, [s]);
  let H = U !== r.discriminator;
  async function K(e) {
    e.preventDefault(), O(!0);
    let t = await (0, x.Mn)({
      username: j,
      discriminator: u ? U : void 0,
      password: Z
    });
    O(!1), (null == t ? void 0 : t.ok) && l()
  }
  let z = a.useMemo(() => c()(f, 50), []);
  return (0, n.jsxs)(E.ModalRoot, {
    transitionState: s,
    children: [(0, n.jsxs)(E.ModalHeader, {
      separator: !1,
      className: C.header,
      children: [(0, n.jsx)(p.Z, {
        color: p.Z.Colors.HEADER_PRIMARY,
        size: p.Z.Sizes.SIZE_24,
        className: C.title,
        children: T.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE_DESKTOP
      }), (0, n.jsx)(E.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: C.subtitle,
        children: T.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_PROMPT_DESKTOP
      }), (0, n.jsx)(E.ModalCloseButton, {
        onClick: l,
        className: C.modalCloseButton
      })]
    }), (0, n.jsxs)("form", {
      onSubmit: K,
      children: [(0, n.jsxs)(E.ModalContent, {
        className: C.content,
        children: [(0, n.jsx)(E.FormItem, {
          title: T.Z.Messages.FORM_LABEL_USERNAME,
          error: y,
          children: (0, n.jsxs)("div", {
            className: o()(g.input, C.multiInput, {
              [g.error]: null != y,
              [g.focused]: d
            }),
            children: [(0, n.jsx)(E.TextInput, {
              name: "username",
              "aria-label": T.Z.Messages.USER_SETTINGS_LABEL_USERNAME,
              value: j,
              maxLength: v.l$U,
              onChange: L,
              onFocus: () => z(!0),
              onBlur: () => z(!1),
              inputRef: G,
              className: C.multiInputFirst,
              inputClassName: o()(C.multiInputField, {
                [C.lowercase]: r.isPomelo()
              })
            }), !r.isPomelo() && (0, n.jsx)(E.TextInput, {
              name: "discriminator",
              "aria-label": T.Z.Messages.USER_SETTINGS_LABEL_DISCRIMINATOR,
              maxLength: 4,
              value: U,
              onChange: P,
              onFocus: () => z(!0),
              onBlur: () => z(!1),
              inputPrefix: "#",
              disabled: !u,
              className: C.multiInputLast,
              inputClassName: C.multiInputField
            })]
          })
        }), H ? (0, n.jsx)(E.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: C.discriminatorChangeWarning,
          children: T.Z.Messages.PREMIUM_CHANGE_DISCRIMINATOR_WARNING
        }) : null, w ? (0, n.jsx)(R.Z, {
          show: (null == F ? void 0 : F.type) === _.K.ERROR || d,
          top: 8,
          bottom: 4,
          children: (0, n.jsx)(A, {
            usernameStatus: F,
            showHint: r.isPomelo()
          })
        }) : null, (0, n.jsx)(E.FormItem, {
          className: C.password,
          title: T.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
          error: null == k ? void 0 : null === (t = k.password) || void 0 === t ? void 0 : t[0],
          children: (0, n.jsx)(E.TextInput, {
            type: "password",
            value: Z,
            onChange: B
          })
        })]
      }), (0, n.jsxs)(E.ModalFooter, {
        children: [(0, n.jsx)(E.Button, {
          type: "submit",
          color: E.Button.Colors.BRAND,
          size: E.Button.Sizes.MEDIUM,
          submitting: b,
          children: T.Z.Messages.DONE
        }), (0, n.jsx)(E.Button, {
          className: C.cancel,
          look: E.Button.Looks.LINK,
          color: E.Button.Colors.PRIMARY,
          onClick: l,
          children: T.Z.Messages.CANCEL
        })]
      })]
    })]
  })
}