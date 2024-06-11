"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a, n, i = s("735250"),
  l = s("470079"),
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
  })), [m, A] = l.useState(null != a ? a : ""), [C, O] = l.useState("8080"), [h, R] = l.useState("localhost"), p = (0, T.useUID)(), M = g.test(m);
  async function D() {
    u.resetError();
    let e = function(e, t, s) {
      if (null == e) return null;
      switch (e) {
        case "localhost":
          return "https://localhost:".concat(t);
        case "proxy":
          return (0, c.default)(s)
      }
    }(h, C, m);
    null != await u.authorizeAndSetTestModeApplication(m, e) && t()
  }
  l.useEffect(() => () => d.default.wait(() => u.resetError()), []);
  let x = null != a && a === m,
    L = x ? function() {
      u.reset(), A(""), R(null)
    } : D;
  return (0, i.jsxs)(o.ModalRoot, {
    "aria-labelledby": p,
    transitionState: s,
    children: [(0, i.jsxs)(o.ModalHeader, {
      justify: E.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, i.jsx)(o.FormTitle, {
        id: p,
        tag: "h1",
        className: N.marginReset,
        children: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
      }), (0, i.jsx)(o.ModalCloseButton, {
        onClick: t
      })]
    }), (0, i.jsxs)(o.ModalContent, {
      className: I.modalContent,
      children: [(0, i.jsx)(o.FormText, {
        className: N.marginBottom20,
        type: o.FormText.Types.DESCRIPTION,
        children: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
      }), null == n ? null : (0, i.jsx)(o.FormErrorBlock, {
        className: N.marginBottom20,
        children: n
      }), (0, i.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), L()
        },
        children: (0, i.jsxs)(E.default, {
          direction: E.default.Direction.VERTICAL,
          align: E.default.Align.START,
          children: [(0, i.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
            required: !0,
            children: (0, i.jsx)(o.TextInput, {
              value: m,
              maxLength: 19,
              error: M ? null : _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
              onChange: function(e) {
                A(e)
              },
              disabled: f
            })
          }), (0, i.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
            children: (0, i.jsx)(o.SingleSelect, {
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
                R(e)
              },
              placeholder: "URL Origin Type"
            })
          }), "localhost" !== h ? null : (0, i.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
            required: !0,
            children: (0, i.jsx)(o.TextInput, {
              value: C,
              maxLength: 5,
              onChange: e => O(e),
              disabled: f
            })
          }), (0, i.jsx)(o.Button, {
            submitting: f,
            type: "submit",
            disabled: !M || 0 === m.length || "localhost" === h && 0 === C.length,
            color: x ? o.Button.Colors.RED : o.Button.Colors.GREEN,
            children: x ? _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : _.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
          })]
        })
      })]
    })]
  })
}