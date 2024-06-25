n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(921944),
  r = n(689938),
  o = n(17571);

function c(e) {
  let {
    markAsDismissed: t
  } = e;
  return i.useEffect(() => {
    let e = setTimeout(() => {
      t(a.L.AUTO_DISMISS)
    }, 8e3);
    return () => {
      clearTimeout(e)
    }
  }, [t]), (0, s.jsxs)(l.Clickable, {
    className: o.container,
    onClick: () => {
      t(a.L.USER_DISMISS)
    },
    children: [(0, s.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "always-white",
      children: r.Z.Messages.PROFILE_LOOKING_GOOD_TOOLTIP_TEXT
    }), (0, s.jsx)("div", {
      className: o.pointer
    })]
  })
}

function u(e) {
  let {
    children: t,
    markAsDismissed: n
  } = e, [a, r] = i.useState(!1);
  return i.useEffect(() => {
    let e = setTimeout(() => {
      r(!0)
    }, 1e3);
    return () => {
      clearTimeout(e)
    }
  }, [r]), (0, s.jsx)(l.Popout, {
    position: "top",
    align: "left",
    shouldShow: a,
    renderPopout: () => (0, s.jsx)(c, {
      markAsDismissed: n
    }),
    children: t
  })
}