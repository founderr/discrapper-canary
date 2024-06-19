a.d(s, {
  O: function() {
    return i
  },
  Z: function() {
    return I
  }
});
var t, i, l = a(735250);
a(470079);
var n = a(120356),
  r = a.n(n),
  c = a(481060),
  o = a(689938),
  d = a(442922);

function I(e) {
  let {
    selectedTab: s,
    onClick: a,
    submitted: t
  } = e;
  return (0, l.jsxs)("div", {
    className: d.tabs,
    children: [(0, l.jsx)(N, {
      tab: 0,
      selectedTab: s,
      label: o.Z.Messages.NOTIF_MIGRATION_INTRO_TAB,
      disabled: t,
      onClick: a
    }), (0, l.jsx)(N, {
      tab: 1,
      selectedTab: s,
      label: o.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB,
      disabled: t,
      onClick: a
    }), (0, l.jsx)(N, {
      tab: 2,
      selectedTab: s,
      label: o.Z.Messages.NOTIF_MIGRATION_TIPS_TAB,
      disabled: !t,
      onClick: a
    })]
  })
}

function N(e) {
  let {
    tab: s,
    selectedTab: a,
    label: t,
    disabled: i,
    onClick: n
  } = e;
  return i ? (0, l.jsxs)("div", {
    className: r()(d.tab, {
      [d.current]: a === s
    }),
    children: [(0, l.jsx)("div", {
      className: d.progressBar
    }), (0, l.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: a === s ? "text-brand" : "text-muted",
      children: t
    })]
  }) : (0, l.jsxs)(c.Clickable, {
    onClick: () => n(s),
    className: r()(d.tab, {
      [d.current]: a === s
    }),
    children: [(0, l.jsx)("div", {
      className: d.progressBar
    }), (0, l.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: a === s ? "text-brand" : "text-muted",
      children: t
    })]
  })
}(t = i || (i = {}))[t.Intro = 0] = "Intro", t[t.Customize = 1] = "Customize", t[t.Tips = 2] = "Tips"