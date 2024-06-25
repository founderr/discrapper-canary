s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s(47120);
var r, n, o = s(735250),
  a = s(470079),
  i = s(990547),
  l = s(442837),
  d = s(481060),
  c = s(570140),
  u = s(213609),
  h = s(594174),
  p = s(474333),
  f = s(726745),
  _ = s(475062),
  m = s(760213),
  g = s(71509),
  C = s(981631),
  T = s(689938),
  E = s(868846);
(n = r || (r = {}))[n.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS", n[n.LOGIN = 1] = "LOGIN";
let S = {
  0: d.ModalSize.SMALL,
  1: d.ModalSize.DYNAMIC
};

function A(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, [r, n] = a.useState(0), {
    currentUser: A,
    multiAccountUsers: N
  } = (0, l.cj)([h.default, f.Z], () => ({
    currentUser: h.default.getCurrentUser(),
    multiAccountUsers: f.Z.getUsers()
  })), [I, M] = a.useState(!1), [O, R] = a.useState(C.lds), [x, L] = a.useState(null);
  a.useEffect(() => {
    if (I) L((0, o.jsx)(p.Z, {
      messageType: p.Q.ERROR,
      className: E.infoMessage,
      children: T.Z.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
        maxNumAccounts: g.$H
      })
    })), R(C.lds);
    else if (null != O) {
      let e = h.default.getUser(O);
      null != e && L((0, o.jsx)(p.Z, {
        messageType: p.Q.POSITIVE,
        className: E.infoMessage,
        children: T.Z.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
          username: e.username
        })
      })), M(!1)
    }
  }, [O, I]), a.useEffect(() => {
    N.length < g.$H && M(!1)
  }, [N]), (0, u.Z)({
    type: i.ImpressionTypes.MODAL,
    name: 0 === r ? i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : i.ImpressionNames.USER_LOGIN
  });
  let b = null;
  return 0 === r ? b = (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(d.ModalHeader, {
      separator: !1,
      children: (0, o.jsxs)("div", {
        className: E.header,
        children: [(0, o.jsx)(d.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: T.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
        }), (0, o.jsx)(d.Text, {
          className: E.subheaderText,
          color: "header-secondary",
          variant: "text-md/normal",
          children: T.Z.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
        })]
      })
    }), (0, o.jsxs)(d.ModalContent, {
      children: [x, (0, o.jsx)(m.Z, {
        actionText: T.Z.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
        onAction: (e, t) => {
          switch (e) {
            case m.W.LOGIN_REQUIRED:
              n(1);
              break;
            case m.W.SWITCHED:
              s();
              break;
            case m.W.REMOVED:
              t === (null == A ? void 0 : A.id) && s(), R(t)
          }
        }
      }), (0, o.jsx)("div", {
        className: E.actions,
        children: (0, o.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.PRIMARY,
          onClick: () => {
            if (N.length >= g.$H) {
              M(!0);
              return
            }
            n(1)
          },
          size: d.Button.Sizes.MEDIUM,
          children: (0, o.jsx)(d.Text, {
            variant: "text-sm/semibold",
            children: T.Z.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
          })
        })
      })]
    })]
  }) : 1 === r && (b = (0, o.jsx)(_.Z, {
    onClose: () => {
      c.Z.dispatch({
        type: "CLEAR_AUTHENTICATION_ERRORS"
      }), n(0)
    }
  })), (0, o.jsx)(d.ModalRoot, {
    className: E.modal,
    transitionState: t,
    size: S[r],
    "aria-label": T.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
    children: (0, o.jsx)(d.Sequencer, {
      step: r,
      steps: [0, 1],
      children: b
    })
  })
}