"use strict";
n.r(t), n.d(t, {
  ConfirmModal: function() {
    return d
  },
  DeclarativeConfirmModal: function() {
    return p
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("271841"),
  l = n("605451"),
  u = n("314569"),
  c = n("662828");

function d(e) {
  let t, n, {
      header: s,
      children: d,
      confirmText: p,
      cancelText: h,
      className: f,
      onConfirm: E,
      onCancel: _,
      onClose: m,
      onCloseCallback: S,
      bodyClassName: g,
      transitionState: T,
      loading: I = !1,
      confirmButtonColor: v = o.Button.Colors.RED,
      focusCancel: C = !1
    } = e,
    A = r.useRef(null);
  return r.useEffect(() => {
    !C && setTimeout(() => {
      var e;
      return null === (e = A.current) || void 0 === e ? void 0 : e.focus()
    }, 0)
  }, [C]), r.useLayoutEffect(() => () => null == S ? void 0 : S()), null != h && (t = (0, i.jsx)(o.Button, {
    type: "button",
    look: o.Button.Looks.LINK,
    color: o.Button.Colors.PRIMARY,
    disabled: I,
    onClick: () => {
      null == _ || _(), m()
    },
    autoFocus: C,
    children: h
  })), null != p && (n = (0, i.jsx)(o.Button, {
    buttonRef: A,
    type: "submit",
    color: v,
    submitting: I,
    onClick: async () => {
      try {
        await (null == E ? void 0 : E()), m()
      } catch (e) {
        throw e
      }
    },
    autoFocus: !C,
    children: p
  })), (0, i.jsxs)(u.ModalRoot, {
    className: f,
    transitionState: T,
    children: [null != s ? (0, i.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, i.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: s
      })
    }) : null, (0, i.jsx)(u.ModalContent, {
      className: a(c.content, g),
      children: d
    }), (0, i.jsxs)(u.ModalFooter, {
      children: [n, t]
    })]
  })
}

function p(e) {
  return (0, i.jsx)(u.Modal, {
    onCloseRequest: e.dismissable ? e.onCancel : null,
    renderModal: t => (0, i.jsx)(d, {
      ...t,
      ...e
    })
  })
}