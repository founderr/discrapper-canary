"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("401430"),
  c = s("155268"),
  S = s("695103"),
  E = s("285952"),
  T = s("153124"),
  m = s("689938"),
  f = s("730699"),
  _ = s("794711");
let g = /^\d+$|^$/;
(n = a || (a = {})).LOCALHOST = "localhost", n.PROXY = "proxy";

function h(e) {
  let {
    onClose: t,
    transitionState: s
  } = e, {
    authorizedApplicationId: a,
    authorizationError: n,
    authorizing: h
  } = (0, r.useStateFromStoresObject)([S.default], () => ({
    authorizedApplicationId: S.default.testModeApplicationId,
    authorizationError: S.default.error,
    authorizing: S.default.isFetchingAuthorization
  })), [I, N] = i.useState(null != a ? a : ""), [p, C] = i.useState("8080"), [A, O] = i.useState("localhost"), x = (0, T.useUID)(), R = g.test(I);
  async function M() {
    u.resetError();
    let e = function(e, t, s) {
      if (null == e) return null;
      switch (e) {
        case "localhost":
          return "https://localhost:".concat(t);
        case "proxy":
          return (0, c.default)(s)
      }
    }(A, p, I);
    null != await u.authorizeAndSetTestModeApplication(I, e) && t()
  }
  i.useEffect(() => () => d.default.wait(() => u.resetError()), []);
  let v = null != a && a === I,
    D = v ? function() {
      u.reset(), N(""), O(null)
    } : M;
  return (0, l.jsxs)(o.ModalRoot, {
    "aria-labelledby": x,
    transitionState: s,
    children: [(0, l.jsxs)(o.ModalHeader, {
      justify: E.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, l.jsx)(o.FormTitle, {
        id: x,
        tag: "h1",
        className: _.marginReset,
        children: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: t
      })]
    }), (0, l.jsxs)(o.ModalContent, {
      className: f.modalContent,
      children: [(0, l.jsx)(o.FormText, {
        className: _.marginBottom20,
        type: o.FormText.Types.DESCRIPTION,
        children: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
      }), null == n ? null : (0, l.jsx)(o.FormErrorBlock, {
        className: _.marginBottom20,
        children: n
      }), (0, l.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), D()
        },
        children: (0, l.jsxs)(E.default, {
          direction: E.default.Direction.VERTICAL,
          align: E.default.Align.START,
          children: [(0, l.jsx)(o.FormItem, {
            className: f.inputWrapper,
            title: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
            required: !0,
            children: (0, l.jsx)(o.TextInput, {
              value: I,
              maxLength: 19,
              error: R ? null : m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
              onChange: function(e) {
                N(e)
              },
              disabled: h
            })
          }), (0, l.jsx)(o.FormItem, {
            className: f.inputWrapper,
            title: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
            children: (0, l.jsx)(o.SingleSelect, {
              isDisabled: !R || "" === I,
              value: A,
              options: [{
                value: "localhost",
                label: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_LOCALHOST_OPTION,
                key: "localhost"
              }, {
                value: "proxy",
                label: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PROXY_OPTION,
                key: "proxy"
              }],
              onChange: function(e) {
                O(e)
              },
              placeholder: "URL Origin Type"
            })
          }), "localhost" !== A ? null : (0, l.jsx)(o.FormItem, {
            className: f.inputWrapper,
            title: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
            required: !0,
            children: (0, l.jsx)(o.TextInput, {
              value: p,
              maxLength: 5,
              onChange: e => C(e),
              disabled: h
            })
          }), (0, l.jsx)(o.Button, {
            submitting: h,
            type: "submit",
            disabled: !R || 0 === I.length || "localhost" === A && 0 === p.length,
            color: v ? o.Button.Colors.RED : o.Button.Colors.GREEN,
            children: v ? m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
          })]
        })
      })]
    })]
  })
}