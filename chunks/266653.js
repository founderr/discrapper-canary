t.r(s), t.d(s, {
  default: function() {
    return _
  }
}), t(47120);
var r, n, a = t(735250),
  o = t(470079),
  i = t(990547),
  l = t(442837),
  h = t(481060),
  d = t(570140),
  u = t(213609),
  c = t(594174),
  p = t(474333),
  g = t(726745),
  m = t(475062),
  C = t(760213),
  f = t(71509),
  E = t(981631),
  S = t(689938),
  T = t(868846);
(n = r || (r = {}))[n.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS", n[n.LOGIN = 1] = "LOGIN";
let N = {
  0: h.ModalSize.SMALL,
  1: h.ModalSize.DYNAMIC
};

function _(e) {
  let {
    transitionState: s,
    onClose: t
  } = e, [r, n] = o.useState(0), {
    currentUser: _,
    multiAccountUsers: A
  } = (0, l.cj)([c.default, g.Z], () => ({
    currentUser: c.default.getCurrentUser(),
    multiAccountUsers: g.Z.getUsers()
  })), [O, R] = o.useState(!1), [M, I] = o.useState(E.lds), [L, x] = o.useState(null);
  o.useEffect(() => {
    if (O) x((0, a.jsx)(p.Z, {
      messageType: p.Q.ERROR,
      className: T.infoMessage,
      children: S.Z.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
        maxNumAccounts: f.$H
      })
    })), I(E.lds);
    else if (null != M) {
      let e = c.default.getUser(M);
      null != e && x((0, a.jsx)(p.Z, {
        messageType: p.Q.POSITIVE,
        className: T.infoMessage,
        children: S.Z.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
          username: e.username
        })
      })), R(!1)
    }
  }, [M, O]), o.useEffect(() => {
    A.length < f.$H && R(!1)
  }, [A]), (0, u.Z)({
    type: i.ImpressionTypes.MODAL,
    name: 0 === r ? i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : i.ImpressionNames.USER_LOGIN
  });
  let Z = null;
  return 0 === r ? Z = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h.ModalHeader, {
      separator: !1,
      children: (0, a.jsxs)("div", {
        className: T.header,
        children: [(0, a.jsx)(h.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: S.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
        }), (0, a.jsx)(h.Text, {
          className: T.subheaderText,
          color: "header-secondary",
          variant: "text-md/normal",
          children: S.Z.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
        })]
      })
    }), (0, a.jsxs)(h.ModalContent, {
      children: [L, (0, a.jsx)(C.Z, {
        actionText: S.Z.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
        onAction: (e, s) => {
          switch (e) {
            case C.W.LOGIN_REQUIRED:
              n(1);
              break;
            case C.W.SWITCHED:
              t();
              break;
            case C.W.REMOVED:
              s === (null == _ ? void 0 : _.id) && t(), I(s)
          }
        }
      }), (0, a.jsx)("div", {
        className: T.actions,
        children: (0, a.jsx)(h.Button, {
          look: h.Button.Looks.LINK,
          color: h.Button.Colors.PRIMARY,
          onClick: () => {
            if (A.length >= f.$H) {
              R(!0);
              return
            }
            n(1)
          },
          size: h.Button.Sizes.MEDIUM,
          children: (0, a.jsx)(h.Text, {
            variant: "text-sm/semibold",
            children: S.Z.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
          })
        })
      })]
    })]
  }) : 1 === r && (Z = (0, a.jsx)(m.Z, {
    onClose: () => {
      d.Z.dispatch({
        type: "CLEAR_AUTHENTICATION_ERRORS"
      }), n(0)
    }
  })), (0, a.jsx)(h.ModalRoot, {
    className: T.modal,
    transitionState: s,
    size: N[r],
    "aria-label": S.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
    children: (0, a.jsx)(h.Sequencer, {
      step: r,
      steps: [0, 1],
      children: Z
    })
  })
}