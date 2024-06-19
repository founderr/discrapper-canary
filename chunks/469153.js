var l = n(735250);
n(470079);
var i = n(920906),
  s = n(442837),
  a = n(481060),
  r = n(607070),
  o = n(689938),
  c = n(575317),
  u = n(354603);
let d = () => (0, l.jsxs)("div", {
  className: u.toast,
  children: [(0, l.jsx)(a.Spinner, {
    type: a.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
    className: c.loadingSpinner
  }), (0, l.jsx)(a.Text, {
    color: "header-primary",
    variant: "text-md/normal",
    children: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENDING
  })]
});
t.Z = e => {
  let {
    shown: t,
    sent: n,
    className: c
  } = e, u = (0, s.e7)([r.Z], () => r.Z.useReducedMotion), h = (0, i.useTransition)(t, {
    from: {
      transform: u ? "translateY(0)" : "translateY(16px)",
      opacity: 0
    },
    enter: {
      transform: "translateY(0)",
      opacity: 1
    },
    leave: {
      transform: u ? "translateY(0)" : "translateY(16px)",
      opacity: 0
    },
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    },
    delay: 200
  });
  return (0, l.jsx)(l.Fragment, {
    children: h((e, t) => t && (0, l.jsx)(i.animated.div, {
      className: c,
      style: e,
      children: n ? (0, l.jsx)(a.Toast, {
        message: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENT,
        type: a.ToastType.SUCCESS,
        id: "success_message_toast"
      }) : (0, l.jsx)(a.Toast, {
        message: "",
        type: a.ToastType.CUSTOM,
        id: "custom_loading_message_toast",
        options: {
          component: (0, l.jsx)(d, {})
        }
      })
    }))
  })
}