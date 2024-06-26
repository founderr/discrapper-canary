t.d(s, {
  Z: function() {
    return A
  }
}), t(47120);
var n, a, i = t(735250),
  r = t(470079),
  o = t(442837),
  l = t(481060),
  c = t(570140),
  d = t(401430),
  _ = t(155268),
  E = t(695103),
  u = t(285952),
  T = t(153124),
  S = t(689938),
  I = t(860923),
  N = t(331651);
let C = /^\d+$|^$/;
(a = n || (n = {})).LOCALHOST = "localhost", a.PROXY = "proxy";

function A(e) {
  let {
    onClose: s,
    transitionState: t
  } = e, {
    authorizedApplicationId: n,
    authorizationError: a,
    authorizing: A
  } = (0, o.cj)([E.Z], () => ({
    authorizedApplicationId: E.Z.testModeApplicationId,
    authorizationError: E.Z.error,
    authorizing: E.Z.isFetchingAuthorization
  })), [m, O] = r.useState(null != n ? n : ""), [g, h] = r.useState("8080"), [R, p] = r.useState("localhost"), x = (0, T.Dt)(), M = C.test(m);
  async function D() {
    d.q$();
    let e = function(e, s, t) {
      if (null == e) return null;
      switch (e) {
        case "localhost":
          return "https://localhost:".concat(s);
        case "proxy":
          return (0, _.Z)(t)
      }
    }(R, g, m);
    null != await d.Wt(m, e) && s()
  }
  r.useEffect(() => () => c.Z.wait(() => d.q$()), []);
  let f = null != n && n === m,
    L = f ? function() {
      d.mc(), O(""), p(null)
    } : D;
  return (0, i.jsxs)(l.ModalRoot, {
    "aria-labelledby": x,
    transitionState: t,
    children: [(0, i.jsxs)(l.ModalHeader, {
      justify: u.Z.Justify.BETWEEN,
      separator: !1,
      children: [(0, i.jsx)(l.FormTitle, {
        id: x,
        tag: "h1",
        className: N.marginReset,
        children: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
      }), (0, i.jsx)(l.ModalCloseButton, {
        onClick: s
      })]
    }), (0, i.jsxs)(l.ModalContent, {
      className: I.modalContent,
      children: [(0, i.jsx)(l.FormText, {
        className: N.marginBottom20,
        type: l.FormText.Types.DESCRIPTION,
        children: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
      }), null == a ? null : (0, i.jsx)(l.FormErrorBlock, {
        className: N.marginBottom20,
        children: a
      }), (0, i.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), L()
        },
        children: (0, i.jsxs)(u.Z, {
          direction: u.Z.Direction.VERTICAL,
          align: u.Z.Align.START,
          children: [(0, i.jsx)(l.FormItem, {
            className: I.inputWrapper,
            title: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
            required: !0,
            children: (0, i.jsx)(l.TextInput, {
              value: m,
              maxLength: 19,
              error: M ? null : S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
              onChange: function(e) {
                O(e)
              },
              disabled: A
            })
          }), (0, i.jsx)(l.FormItem, {
            className: I.inputWrapper,
            title: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
            children: (0, i.jsx)(l.SingleSelect, {
              isDisabled: !M || "" === m,
              value: R,
              options: [{
                value: "localhost",
                label: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_LOCALHOST_OPTION,
                key: "localhost"
              }, {
                value: "proxy",
                label: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PROXY_OPTION,
                key: "proxy"
              }],
              onChange: function(e) {
                p(e)
              },
              placeholder: "URL Origin Type"
            })
          }), "localhost" !== R ? null : (0, i.jsx)(l.FormItem, {
            className: I.inputWrapper,
            title: S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
            required: !0,
            children: (0, i.jsx)(l.TextInput, {
              value: g,
              maxLength: 5,
              onChange: e => h(e),
              disabled: A
            })
          }), (0, i.jsx)(l.Button, {
            submitting: A,
            type: "submit",
            disabled: !M || 0 === m.length || "localhost" === R && 0 === g.length,
            color: f ? l.Button.Colors.RED : l.Button.Colors.GREEN,
            children: f ? S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : S.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
          })]
        })
      })]
    })]
  })
}