"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a, r, n = s("37983"),
  o = s("884691"),
  l = s("759843"),
  i = s("446674"),
  d = s("77078"),
  u = s("913144"),
  h = s("428958"),
  c = s("697218"),
  f = s("555158"),
  p = s("770032"),
  g = s("350218"),
  m = s("851460"),
  S = s("583374"),
  C = s("782340"),
  T = s("699764");
(r = a || (a = {}))[r.MANAGE_ACCOUNTS = 0] = "MANAGE_ACCOUNTS", r[r.LOGIN = 1] = "LOGIN";
let A = {
  0: d.ModalSize.SMALL,
  1: d.ModalSize.DYNAMIC
};

function E(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, [a, r] = o.useState(0), {
    currentUser: E,
    multiAccountUsers: N
  } = (0, i.useStateFromStoresObject)([c.default, p.default], () => ({
    currentUser: c.default.getCurrentUser(),
    multiAccountUsers: p.default.getUsers()
  })), [_, M] = o.useState(!1), [R, O] = o.useState(""), [I, L] = o.useState(null);
  o.useEffect(() => {
    if (_) L((0, n.jsx)(f.default, {
      messageType: f.HelpMessageTypes.ERROR,
      className: T.infoMessage,
      children: C.default.Messages.MULTI_ACCOUNT_MAX_ACCOUNTS_ERROR.format({
        maxNumAccounts: S.MAX_ACCOUNTS
      })
    })), O("");
    else if (null != R) {
      let e = c.default.getUser(R);
      null != e && L((0, n.jsx)(f.default, {
        messageType: f.HelpMessageTypes.POSITIVE,
        className: T.infoMessage,
        children: C.default.Messages.MULTI_ACCOUNT_LOGGED_OUT.format({
          username: e.username
        })
      })), M(!1)
    }
  }, [R, _]), o.useEffect(() => {
    N.length < S.MAX_ACCOUNTS && M(!1)
  }, [N]), (0, h.default)({
    type: l.ImpressionTypes.MODAL,
    name: 0 === a ? l.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : l.ImpressionNames.USER_LOGIN
  });
  let x = null;
  return 0 === a ? x = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.ModalHeader, {
      separator: !1,
      children: (0, n.jsxs)("div", {
        className: T.header,
        children: [(0, n.jsx)(d.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: C.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS
        }), (0, n.jsx)(d.Text, {
          className: T.subheaderText,
          color: "header-secondary",
          variant: "text-md/normal",
          children: C.default.Messages.SWITCH_ACCOUNTS_MODAL_SUBHEADER
        })]
      })
    }), (0, n.jsxs)(d.ModalContent, {
      children: [I, (0, n.jsx)(m.default, {
        actionText: C.default.Messages.SWITCH_ACCOUNTS_ACTION_SWITCH,
        onAction: (e, t) => {
          switch (e) {
            case m.MultiAccountActionType.LOGIN_REQUIRED:
              r(1);
              break;
            case m.MultiAccountActionType.SWITCHED:
              s();
              break;
            case m.MultiAccountActionType.REMOVED:
              t === (null == E ? void 0 : E.id) && s(), O(t)
          }
        }
      }), (0, n.jsx)("div", {
        className: T.actions,
        children: (0, n.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.PRIMARY,
          onClick: () => {
            if (N.length >= S.MAX_ACCOUNTS) {
              M(!0);
              return
            }
            r(1)
          },
          size: d.Button.Sizes.MEDIUM,
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/semibold",
            children: C.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
          })
        })
      })]
    })]
  }) : 1 === a && (x = (0, n.jsx)(g.default, {
    onClose: () => {
      u.default.dispatch({
        type: "CLEAR_AUTHENTICATION_ERRORS"
      }), r(0)
    }
  })), (0, n.jsx)(d.ModalRoot, {
    className: T.modal,
    transitionState: t,
    size: A[a],
    "aria-label": C.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
    children: (0, n.jsx)(d.Sequencer, {
      step: a,
      steps: [0, 1],
      children: x
    })
  })
}