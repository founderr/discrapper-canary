n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n(47120);
var r = n(735250),
  a = n(470079),
  i = n(481060),
  o = n(841074),
  c = n(585483),
  s = n(637538),
  p = n(981631),
  d = n(689938),
  h = n(395218),
  l = n(480781);
let u = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);

function f(e) {
  let {
    onClose: t,
    onCaptchaVerify: n,
    onReject: f,
    transitionState: v,
    headerText: m,
    bodyText: y,
    rqtoken: C,
    ...E
  } = e, R = (0, s.Z)(f);
  return (a.useEffect(() => {
    c.S.subscribe(p.CkL.LAYER_POP_ESCAPE_KEY, t)
  }, [t]), null != v && u.has(v)) ? (0, r.jsx)(i.ModalRoot, {
    transitionState: v,
    "aria-label": "CAPTCHA",
    className: h.modal,
    children: (0, r.jsxs)(i.ModalContent, {
      className: h.container,
      children: [(0, r.jsx)(i.ModalCloseButton, {
        className: h.close,
        onClick: t
      }), (0, r.jsx)("div", {
        className: h.content,
        children: v !== i.ModalTransitionState.ENTERED ? (0, r.jsx)(i.Spinner, {
          type: i.Spinner.Type.SPINNING_CIRCLE
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            children: (0, r.jsx)("img", {
              src: l,
              alt: ""
            })
          }), (0, r.jsx)("div", {
            className: h.title,
            "aria-hidden": !0,
            children: null != m ? m : d.Z.Messages.GENERIC_CAPTCHA_HEADER
          }), (0, r.jsx)("div", {
            children: null != y ? y : d.Z.Messages.GENERIC_CAPTCHA_DESCRIPTION
          }), (0, r.jsx)("div", {
            className: h.captchaContainer,
            children: (0, r.jsx)(o.Z, {
              onVerify: e => {
                R(), n(e, C), t()
              },
              ...E
            })
          })]
        })
      })]
    })
  }) : null
}