"use strict";
n.r(t), n.d(t, {
  ConfirmModal: function() {
    return c
  },
  DeclarativeConfirmModal: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(693789),
  l = n(260034),
  u = n(709692),
  _ = n(26804);

function c(e) {
  let t, n, {
      header: s,
      children: c,
      confirmText: d,
      cancelText: E,
      className: I,
      onConfirm: T,
      onCancel: h,
      onClose: f,
      onCloseCallback: S,
      bodyClassName: N,
      transitionState: A,
      loading: m = !1,
      confirmButtonColor: O = a.zx.Colors.RED,
      focusCancel: p = !1
    } = e,
    R = r.useRef(null);
  return r.useEffect(() => {
    !p && setTimeout(() => {
      var e;
      return null === (e = R.current) || void 0 === e ? void 0 : e.focus()
    }, 0)
  }, [p]), r.useLayoutEffect(() => () => null == S ? void 0 : S()), null != E && (t = (0, i.jsx)(a.zx, {
    type: "button",
    look: a.zx.Looks.LINK,
    color: a.zx.Colors.PRIMARY,
    disabled: m,
    onClick: () => {
      null == h || h(), f()
    },
    autoFocus: p,
    children: E
  })), null != d && (n = (0, i.jsx)(a.zx, {
    buttonRef: R,
    type: "submit",
    color: O,
    submitting: m,
    onClick: async () => {
      try {
        await (null == T ? void 0 : T()), f()
      } catch (e) {
        throw e
      }
    },
    autoFocus: !p,
    children: d
  })), (0, i.jsxs)(u.Y0, {
    className: I,
    transitionState: A,
    children: [null != s ? (0, i.jsx)(u.xB, {
      separator: !1,
      children: (0, i.jsx)(l.X, {
        variant: "heading-lg/semibold",
        children: s
      })
    }) : null, (0, i.jsx)(u.hz, {
      className: o()(_.content, N),
      children: c
    }), (0, i.jsxs)(u.mz, {
      children: [n, t]
    })]
  })
}

function d(e) {
  return (0, i.jsx)(u.u_, {
    onCloseRequest: e.dismissable ? e.onCancel : null,
    renderModal: t => (0, i.jsx)(c, {
      ...t,
      ...e
    })
  })
}