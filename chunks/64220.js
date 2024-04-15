"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("921944"),
  r = a("689938"),
  o = a("90113");

function u(e) {
  let {
    markAsDismissed: t
  } = e;
  return s.useEffect(() => {
    let e = setTimeout(() => {
      t(i.ContentDismissActionType.AUTO_DISMISS)
    }, 8e3);
    return () => {
      clearTimeout(e)
    }
  }, [t]), (0, n.jsxs)(l.Clickable, {
    className: o.container,
    onClick: () => {
      t(i.ContentDismissActionType.USER_DISMISS)
    },
    children: [(0, n.jsx)(l.Text, {
      variant: "text-sm/medium",
      children: r.default.Messages.PROFILE_LOOKING_GOOD_TOOLTIP_TEXT
    }), (0, n.jsx)("div", {
      className: o.pointer
    })]
  })
}

function d(e) {
  let {
    children: t,
    markAsDismissed: a
  } = e, [i, r] = s.useState(!1);
  return s.useEffect(() => {
    let e = setTimeout(() => {
      r(!0)
    }, 1e3);
    return () => {
      clearTimeout(e)
    }
  }, [r]), (0, n.jsx)(l.Popout, {
    position: "top",
    align: "left",
    shouldShow: i,
    renderPopout: () => (0, n.jsx)(u, {
      markAsDismissed: a
    }),
    children: t
  })
}