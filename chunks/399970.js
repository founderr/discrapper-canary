t.d(s, {
  Z: function() {
    return C
  }
}), t(47120);
var n, i, a = t(735250),
  l = t(470079),
  r = t(442837),
  o = t(481060),
  c = t(570140),
  E = t(401430),
  d = t(155268),
  _ = t(695103),
  T = t(285952),
  S = t(153124),
  u = t(689938),
  I = t(860923),
  N = t(331651);
let A = /^\d+$|^$/;
(i = n || (n = {})).LOCALHOST = "localhost", i.PROXY = "proxy";

function C(e) {
  let {
    onClose: s,
    transitionState: t
  } = e, {
    authorizedApplicationId: n,
    authorizationError: i,
    authorizing: C
  } = (0, r.cj)([_.Z], () => ({
    authorizedApplicationId: _.Z.testModeApplicationId,
    authorizationError: _.Z.error,
    authorizing: _.Z.isFetchingAuthorization
  })), [O, m] = l.useState(null != n ? n : ""), [h, g] = l.useState("8080"), [R, M] = l.useState("localhost"), x = (0, S.Dt)(), D = A.test(O);
  async function p() {
    E.q$();
    let e = function(e, s, t) {
      if (null == e) return null;
      switch (e) {
        case "localhost":
          return "https://localhost:".concat(s);
        case "proxy":
          return (0, d.Z)(t)
      }
    }(R, h, O);
    null != await E.Wt(O, e) && s()
  }
  l.useEffect(() => () => c.Z.wait(() => E.q$()), []);
  let L = null != n && n === O,
    P = L ? function() {
      E.mc(), m(""), M(null)
    } : p;
  return (0, a.jsxs)(o.ModalRoot, {
    "aria-labelledby": x,
    transitionState: t,
    children: [(0, a.jsxs)(o.ModalHeader, {
      justify: T.Z.Justify.BETWEEN,
      separator: !1,
      children: [(0, a.jsx)(o.FormTitle, {
        id: x,
        tag: "h1",
        className: N.marginReset,
        children: u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_HEADER
      }), (0, a.jsx)(o.ModalCloseButton, {
        onClick: s
      })]
    }), (0, a.jsxs)(o.ModalContent, {
      className: I.modalContent,
      children: [(0, a.jsx)(o.FormText, {
        className: N.marginBottom20,
        type: o.FormText.Types.DESCRIPTION,
        children: u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_MODAL_BODY
      }), null == i ? null : (0, a.jsx)(o.FormErrorBlock, {
        className: N.marginBottom20,
        children: i
      }), (0, a.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), P()
        },
        children: (0, a.jsxs)(T.Z, {
          direction: T.Z.Direction.VERTICAL,
          align: T.Z.Align.START,
          children: [(0, a.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PLACEHOLDER,
            required: !0,
            children: (0, a.jsx)(o.TextInput, {
              value: O,
              maxLength: 19,
              error: D ? null : u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_INVALID,
              onChange: function(e) {
                m(e)
              },
              disabled: C
            })
          }), (0, a.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ORIGIN_LABEL,
            children: (0, a.jsx)(o.SingleSelect, {
              isDisabled: !D || "" === O,
              value: R,
              options: [{
                value: "localhost",
                label: u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_LOCALHOST_OPTION,
                key: "localhost"
              }, {
                value: "proxy",
                label: u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PROXY_OPTION,
                key: "proxy"
              }],
              onChange: function(e) {
                M(e)
              },
              placeholder: "URL Origin Type"
            })
          }), "localhost" !== R ? null : (0, a.jsx)(o.FormItem, {
            className: I.inputWrapper,
            title: u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_PORT_NUMBER_LABEL,
            required: !0,
            children: (0, a.jsx)(o.TextInput, {
              value: h,
              maxLength: 5,
              onChange: e => g(e),
              disabled: C
            })
          }), (0, a.jsx)(o.Button, {
            submitting: C,
            type: "submit",
            disabled: !D || 0 === O.length || "localhost" === R && 0 === h.length,
            color: L ? o.Button.Colors.RED : o.Button.Colors.GREEN,
            children: L ? u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_CLEAR : u.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_ACTIVATE
          })]
        })
      })]
    })]
  })
}