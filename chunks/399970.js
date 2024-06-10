"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
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
  _ = s("689938"),
  I = s("737646"),
  N = s("611273");
let g = /^\d+$|^$/;
(n = a || (a = {})).LOCALHOST = "localhost", n.PROXY = "proxy";

function f(e) {
  let {
    onClose: t,
    transitionState: s
  } = e, {
    authorizedApplicationId: a,
    authorizationError: n,
    authorizing: f
  } = (0, r.useStateFromStoresObject)([S.default], () => ({
    authorizedApplicationId: S.default.testModeApplicationId,
    authorizationError: S.default.error,
    authorizing: S.default.isFetchingAuthorization
  })), [m, C] = i.useState(null != a ? a : ""), [A, O] = i.useState("8080"), [h, p] = i.useState("localhost"), R = (0, T.useUID)(), M = g.test(m);
  async function x() {
    u.resetError();
    let e = function(e, t, s) {
      if (null == e) return null;
      switch (e) {
        case "localhost":
          return "https://localhost:".concat(t);
        case "proxy":
          return (0, c.default)(s)
      }
    }(h, A, m);
    null != await u.authorizeAndSetTestModeApplication(m, e) && t()
  }
  i.useEffect(() => () => d.default.wait(() => u.resetError()), []);
  let D = null != a && a === m,
    L = D ? function() {
      u.reset(), C(""), p(null)
    } : x;
  return (0, l.jsxs)(o.ModalRoot, {
    "aria-labelledby": R,
    transitionState: s,
    children: [(0, l.jsxs)(o.ModalHeader, {
      justify: E.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, l.jsx)(o.FormTitle, {
        id: R,
        tag: "h1",
        className: N.marginReset,
        children: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: t
      })]
    }), (0, l.jsxs)(o.ModalContent, {
      className: I.modalContent,
      children: [(0, l.jsx)(o.FormText, {
        className: N.marginBottom20,
        type: o.FormText.Types.DESCRIPTION,
        children: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
      }), null == n ? null : (0, l.jsx)(o.FormErrorBlock, {
        className: N.marginBottom20,
        children: n
      }), (0, l.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), L()
        },
        children: (0, l.jsxs)(E.default, {
          direction: E.default.Direction.VERTICAL,
          align: E.default.Align.START,
          children: [(0, l.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
            required: !0,
            children: (0, l.jsx)(o.TextInput, {
              value: m,
              maxLength: 19,
              error: M ? null : _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
              onChange: function(e) {
                C(e)
              },
              disabled: f
            })
          }), (0, l.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
            children: (0, l.jsx)(o.SingleSelect, {
              isDisabled: !M || "" === m,
              value: h,
              options: [{
                value: "localhost",
                label: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_LOCALHOST_OPTION,
                key: "localhost"
              }, {
                value: "proxy",
                label: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PROXY_OPTION,
                key: "proxy"
              }],
              onChange: function(e) {
                p(e)
              },
              placeholder: "URL Origin Type"
            })
          }), "localhost" !== h ? null : (0, l.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
            required: !0,
            children: (0, l.jsx)(o.TextInput, {
              value: A,
              maxLength: 5,
              onChange: e => O(e),
              disabled: f
            })
          }), (0, l.jsx)(o.Button, {
            submitting: f,
            type: "submit",
            disabled: !M || 0 === m.length || "localhost" === h && 0 === A.length,
            color: D ? o.Button.Colors.RED : o.Button.Colors.GREEN,
            children: D ? _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
          })]
        })
      })]
    })]
  })
}