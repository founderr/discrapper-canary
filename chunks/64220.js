"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("481060"),
  l = n("921944"),
  r = n("689938"),
  o = n("308704");

function u(e) {
  let {
    markAsDismissed: t
  } = e;
  return s.useEffect(() => {
    let e = setTimeout(() => {
      t(l.ContentDismissActionType.AUTO_DISMISS)
    }, 8e3);
    return () => {
      clearTimeout(e)
    }
  }, [t]), (0, a.jsxs)(i.Clickable, {
    className: o.container,
    onClick: () => {
      t(l.ContentDismissActionType.USER_DISMISS)
    },
    children: [(0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "always-white",
      children: r.default.Messages.PROFILE_LOOKING_GOOD_TOOLTIP_TEXT
    }), (0, a.jsx)("div", {
      className: o.pointer
    })]
  })
}

function d(e) {
  let {
    children: t,
    markAsDismissed: n
  } = e, [l, r] = s.useState(!1);
  return s.useEffect(() => {
    let e = setTimeout(() => {
      r(!0)
    }, 1e3);
    return () => {
      clearTimeout(e)
    }
  }, [r]), (0, a.jsx)(i.Popout, {
    position: "top",
    align: "left",
    shouldShow: l,
    renderPopout: () => (0, a.jsx)(u, {
      markAsDismissed: n
    }),
    children: t
  })
}