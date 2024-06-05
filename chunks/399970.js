"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
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
  f = s("611273");
let m = /^\d+$|^$/;
(n = a || (a = {})).LOCALHOST = "localhost", n.PROXY = "proxy";

function N(e) {
  let {
    onClose: t,
    transitionState: s
  } = e, {
    authorizedApplicationId: a,
    authorizationError: n,
    authorizing: N
  } = (0, r.useStateFromStoresObject)([S.default], () => ({
    authorizedApplicationId: S.default.testModeApplicationId,
    authorizationError: S.default.error,
    authorizing: S.default.isFetchingAuthorization
  })), [g, h] = i.useState(null != a ? a : ""), [C, O] = i.useState("8080"), [A, p] = i.useState("localhost"), R = (0, T.useUID)(), x = m.test(g);
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
    }(A, C, g);
    null != await u.authorizeAndSetTestModeApplication(g, e) && t()
  }
  i.useEffect(() => () => d.default.wait(() => u.resetError()), []);
  let D = null != a && a === g,
    L = D ? function() {
      u.reset(), h(""), p(null)
    } : M;
  return (0, l.jsxs)(o.ModalRoot, {
    "aria-labelledby": R,
    transitionState: s,
    children: [(0, l.jsxs)(o.ModalHeader, {
      justify: E.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, l.jsx)(o.FormTitle, {
        id: R,
        tag: "h1",
        className: f.marginReset,
        children: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: t
      })]
    }), (0, l.jsxs)(o.ModalContent, {
      className: I.modalContent,
      children: [(0, l.jsx)(o.FormText, {
        className: f.marginBottom20,
        type: o.FormText.Types.DESCRIPTION,
        children: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
      }), null == n ? null : (0, l.jsx)(o.FormErrorBlock, {
        className: f.marginBottom20,
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
              value: g,
              maxLength: 19,
              error: x ? null : _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
              onChange: function(e) {
                h(e)
              },
              disabled: N
            })
          }), (0, l.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
            children: (0, l.jsx)(o.SingleSelect, {
              isDisabled: !x || "" === g,
              value: A,
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
          }), "localhost" !== A ? null : (0, l.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
            required: !0,
            children: (0, l.jsx)(o.TextInput, {
              value: C,
              maxLength: 5,
              onChange: e => O(e),
              disabled: N
            })
          }), (0, l.jsx)(o.Button, {
            submitting: N,
            type: "submit",
            disabled: !x || 0 === g.length || "localhost" === A && 0 === C.length,
            color: D ? o.Button.Colors.RED : o.Button.Colors.GREEN,
            children: D ? _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
          })]
        })
      })]
    })]
  })
}