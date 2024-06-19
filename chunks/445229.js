a.d(t, {
  Z: function() {
    return h
  }
});
var n = a(735250),
  l = a(470079),
  r = a(120356),
  i = a.n(r),
  s = a(442837),
  o = a(481060),
  u = a(99690),
  d = a(594174),
  c = a(823379),
  m = a(5192),
  v = a(689938),
  f = a(396458);

function p(e) {
  let {
    user: t
  } = e, a = m.ZP.useName(null, null, t);
  return (0, n.jsxs)("div", {
    className: f.userItem,
    children: [(0, n.jsx)(u.Z, {
      user: t
    }), (0, n.jsx)(o.Text, {
      color: "header-primary",
      variant: "text-sm/medium",
      children: a
    })]
  })
}

function h(e) {
  let {
    clip: t,
    className: a
  } = e, r = (0, s.Wu)([d.default], () => t.users.map(d.default.getUser).filter(c.lm)), u = l.useCallback(e => {
    let {
      row: t
    } = e, a = r[t];
    return null == a ? null : (0, n.jsx)(p, {
      user: a
    }, t)
  }, [r]);
  return (0, n.jsxs)("div", {
    className: i()(a, f.root),
    children: [(0, n.jsx)("div", {
      className: f.__invalid_header,
      children: (0, n.jsxs)(o.FormTitle, {
        className: f.title,
        children: [v.Z.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, n.jsxs)("div", {
          className: f.userCountPill,
          children: [(0, n.jsx)(o.Text, {
            color: "text-normal",
            variant: "text-xs/medium",
            children: r.length
          }), (0, n.jsx)(o.FriendsIcon, {
            size: "xs",
            color: "currentColor",
            className: f.userCountIcon
          })]
        })]
      })
    }), (0, n.jsx)(o.List, {
      className: f.__invalid_userList,
      sectionHeight: 0,
      rowHeight: 40,
      sections: [r.length],
      renderRow: u
    })]
  })
}